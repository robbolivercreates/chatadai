import { NextResponse } from "next/server";
import { loadTemplates } from "@/app/lib/templates";

export async function GET() {
  try {
    const templatesMap = loadTemplates();
    const templatesList = Array.from(templatesMap.values());
    
    // Group templates by their category letter
    return NextResponse.json(templatesList);
  } catch (error) {
    console.error("[Templates API] Failed to load templates:", error);
    return NextResponse.json({ error: "Failed to load templates" }, { status: 500 });
  }
}
