"use client";

import ReactMarkdown from "react-markdown";
import type { ChatMessage, MessagePart } from "../types";
import { AdPreviewBubble } from "./AdPreviewBubble";
import { BrandDNACard } from "./BrandDNACard";
import { TemplateGallery } from "./TemplateGallery";

interface Props {
  message: ChatMessage;
  onRegenerate?: (msgId: string) => void;
  sendMessage?: (text: string) => void;
}

function renderPart(part: MessagePart, msgId: string, onRegenerate?: (msgId: string) => void, sendMessage?: (text: string) => void) {
  switch (part.type) {
    case "text":
      return (
        <div key="text" className="prose prose-invert prose-sm max-w-none text-[14px] leading-relaxed">
          <ReactMarkdown>{part.content}</ReactMarkdown>
        </div>
      );

    case "brand_dna":
      return <BrandDNACard key="brand-dna" part={part} />;

    case "ad_preview":
      return (
        <AdPreviewBubble
          key={`ad-${part.templateId}`}
          part={part}
          onRegenerate={onRegenerate ? () => onRegenerate(msgId) : undefined}
        />
      );

    case "format_selector":
      // Rendered by parent page (needs state)
      return null;

    case "template_gallery":
      // Make sure we have the fallback if undefined
      return <TemplateGallery key="template-gallery" sendMessage={sendMessage || (() => {})} />;

    default:
      return null;
  }
}

export function MessageBubble({ message, onRegenerate, sendMessage }: Props) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex justify-end gap-3 px-4 py-1">
        <div
          className="max-w-[75%] px-4 py-2.5 rounded-2xl rounded-br-sm text-sm leading-relaxed"
          style={{
            background: "rgba(99,102,241,0.18)",
            color: "var(--text-primary)",
            border: "1px solid rgba(99,102,241,0.24)",
          }}
        >
          {/* Show uploaded images */}
          {message.uploadedImages && message.uploadedImages.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {message.uploadedImages.map((img, i) => (
                <img
                  key={i}
                  src={img.preview}
                  alt="Upload"
                  className="w-20 h-20 rounded-lg object-cover ring-1 ring-white/10"
                />
              ))}
            </div>
          )}
          {message.content && (
            <p className="whitespace-pre-wrap">{message.content}</p>
          )}
        </div>
      </div>
    );
  }

  // Assistant message
  return (
    <div className="flex gap-3 px-4 py-1 max-w-[82%]">
      {/* Avatar */}
      <div
        className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5"
        style={{ background: "rgba(99,102,241,0.22)", color: "#a5b4fc" }}
      >
        ✦
      </div>

      <div className="flex flex-col gap-3 min-w-0 flex-1">
        {message.parts && message.parts.length > 0 ? (
          message.parts.map((part, i) => (
            <div key={i}>{renderPart(part, message.id, onRegenerate, sendMessage)}</div>
          ))
        ) : (
          <div className="prose prose-invert prose-sm max-w-none text-[14px] leading-relaxed">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
