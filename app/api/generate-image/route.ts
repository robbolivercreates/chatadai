import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MODEL_IMAGE_DEFAULT } from "../../lib/gemini-models";

// ─── Ad image generation ─────────────────────────────────────────
// Calls Nano Banana 2 (gemini-3.1-flash-image-preview) for image generation.
// with the assembled template prompt + product image references.
// Returns the generated image as base64.
// ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { apiKey, prompt, images, format, templateId, templateName } = body as {
      apiKey: string;
      prompt: string;
      images?: { data: string; mimeType: string }[];
      format: string;
      templateId: number;
      templateName: string;
    };

    if (!apiKey) {
      return NextResponse.json({ error: "API key required" }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    // Nano Banana 2 — image generation model
    const model = genAI.getGenerativeModel({ model: MODEL_IMAGE_DEFAULT });

    const parts: any[] = [];

    // Product reference images
    if (images && images.length > 0) {
      images.forEach((img) => {
        parts.push({ inlineData: { data: img.data, mimeType: img.mimeType } });
      });
    }

    parts.push({ text: prompt });

    // Map format to aspect ratio
    const formatToAspect: Record<string, string> = {
      "4:5": "4:5", "9:16": "9:16", "1:1": "1:1", "16:9": "16:9",
    };
    const aspectRatio = formatToAspect[format] || "4:5";

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"],
        imageConfig: {
          imageSize: "1K",
          aspectRatio,
        },
      },
    } as any);

    const response = result.response;
    const candidates = response.candidates?.[0]?.content?.parts || [];

    let imageBase64 = "";
    let imageMimeType = "image/png";
    let textResponse = "";

    for (const part of candidates) {
      if ("inlineData" in part && part.inlineData) {
        imageBase64 = part.inlineData.data || "";
        imageMimeType = part.inlineData.mimeType || "image/png";
      } else if ("text" in part && part.text) {
        textResponse += part.text;
      }
    }

    if (!imageBase64) {
      return NextResponse.json(
        { error: "No image was generated. Try adjusting the prompt or product images." },
        { status: 422 }
      );
    }

    return NextResponse.json({
      imageBase64,
      imageMimeType,
      textResponse,
      templateId,
      templateName,
      format,
    });
  } catch (err: unknown) {
    console.error("[/api/generate-image]", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
