export type MessageRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  parts?: MessagePart[];
  uploadedImages?: UploadedImage[];
  timestamp: number;
}

export interface UploadedImage {
  data: string;      // base64
  mimeType: string;
  preview: string;   // data URL for display
}

// ─── Message Part Types ───────────────────────────────────────────

export type MessagePart =
  | TextPart
  | BrandDNAPart
  | AdPreviewPart
  | FormatSelectorPart
  | TemplateSelectorPart
  | ImageUploadPromptPart;

export interface TextPart {
  type: "text";
  content: string;
}

export interface BrandDNAPart {
  type: "brand_dna";
  brandName: string;
  productName: string;
  primaryColor: string;
  secondaryColor: string;
  toneAdjectives: string[];
  targetAudience: string;
  positioning: string;
  keyBenefits: string[];
}

export interface AdPreviewPart {
  type: "ad_preview";
  imageBase64: string;
  imageMimeType: string;
  templateName: string;
  templateId: number;
  format: AdFormat;
}

export interface FormatSelectorPart {
  type: "format_selector";
  question: string;
}

export interface TemplateSelectorPart {
  type: "template_selector";
  categories: TemplateCategory[];
}

export interface ImageUploadPromptPart {
  type: "image_upload_prompt";
  message: string;
}

// ─── Domain Types ─────────────────────────────────────────────────

export type AdFormat = "1:1" | "4:5" | "9:16" | "16:9";

export interface TemplateCategory {
  letter: string;
  name: string;
  description: string;
  count: number;
}

export interface BrandDNA {
  brand_name: string;
  product_name: string;
  primary_color: string;
  secondary_color: string;
  accent_color: string;
  typography_style: string;
  tone_adjectives: string[];
  target_audience: string;
  positioning: string;
  key_benefits: string[];
  product_image_uris?: string[];
  image_generation_modifier: string;
  source: "manual" | "url_scrape";
  created_at: string;
}

export interface ChatSession {
  id: string;
  name: string;
  messages: ChatMessage[];
  brandDNA?: BrandDNA;
  createdAt: number;
  updatedAt: number;
}
