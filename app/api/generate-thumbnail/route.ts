import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { MODEL_IMAGE_DEFAULT } from "../../lib/gemini-models";
import { loadTemplates } from "../../lib/templates";
import fs from "fs";
import path from "path";

const MOCKUP_PROFILES = [
  {
    product: "um frasco de vidro fosco de sérum facial premium da marca 'Lumivé' em um cenário minimalista iluminado com ingredientes botânicos",
    brand: "Lumivé Skincare",
    headline: "O SEGREDO PARA UMA PELE RADIANTE",
    subhead: "Aprovado por dermatologistas. Ingredientes 100% naturais.",
    benefit: "Hidratação Profunda e Anti-idade",
    callout: "Pele firme em 14 dias",
    review: '"Minha pele nunca esteve tão iluminada, amei!"',
    name: "Ana Costa",
    colorAccent: "bege dourado",
    colorDark: "marrom suave"
  },
  {
    product: "um tênis de corrida moderno esportivo em tons neon e preto, com sola texturizada, flutuando dinamicamente em fundo urbano escuro",
    brand: "AeroStep",
    headline: "MÁXIMA PERFORMANCE",
    subhead: "O tênis mais leve e responsivo do mercado.",
    benefit: "Absorção Extrema de Impacto",
    callout: "Design Ultra Leve",
    review: '"Correr 10km nunca foi tão fácil e confortável."',
    name: "Marcos T.",
    colorAccent: "verde neon",
    colorDark: "preto profundo"
  },
  {
    product: "um smartwatch premium de alumínio, tela acesa vibrante mostrando anéis de atividade física",
    brand: "TechFit Pro",
    headline: "SAÚDE NO SEU PULSO",
    subhead: "Monitore seu coração e treinos com precisão.",
    benefit: "Bateria de Longa Duração",
    callout: "À Prova D'Água 50m",
    review: '"O melhor smartwatch que já tive. Não vivo sem!"',
    name: "Juliana R.",
    colorAccent: "azul elétrico",
    colorDark: "cinza asfalto"
  },
  {
    product: "um pacote de café gourmet em grãos ao lado de uma xícara fumegante de espresso perfeito",
    brand: "Café Essência",
    headline: "SABOR INESQUECÍVEL",
    subhead: "Grãos 100% arábica da melhor safra.",
    benefit: "Energia Pura e Sabor Intenso",
    callout: "Torra Artesanal",
    review: '"Finalmente um café que me acorda de verdade!"',
    name: "Roberto F.",
    colorAccent: "marrom terra",
    colorDark: "preto carvão"
  },
  {
    product: "um fone de ouvido headphone over-ear minimalista e luxuoso em tons off-white sobre uma mesa",
    brand: "SoundAura",
    headline: "MÚSICA SEM INTERRUPÇÕES",
    subhead: "Cancelamento de ruído e som de estúdio.",
    benefit: "Foco Total no que Importa",
    callout: "Isolamento Acústico",
    review: '"O cancelamento de ruído é absurdo de bom!"',
    name: "Beatriz L.",
    colorAccent: "prata suave",
    colorDark: "cinza claro"
  },
  // --- New Categories ---
  {
    product: "um batom líquido matte de luxo vermelho intenso em uma embalagem elegante dourada e preta",
    brand: "Glow Cosmetics",
    headline: "CORES QUE DURAM O DIA TODO",
    subhead: "Cobertura impecável sem ressecar os lábios.",
    benefit: "Efeito Matte Aveludado",
    callout: "Duração de 24 horas",
    review: '"O único batom que sobrevive ao jantar sem borrar!"',
    name: "Luiza M.",
    colorAccent: "vermelho rubi",
    colorDark: "preto ônix"
  },
  {
    product: "um pote de Suplemento Whey Protein isolado sabor chocolate com design de embalagem moderno esportivo",
    brand: "IronNutrition",
    headline: "CONSTRUA SEU SHAPE",
    subhead: "A proteína mais pura para seus músculos.",
    benefit: "Recuperação Muscular Rápida",
    callout: "Zero Açúcar e Lactose",
    review: '"Sabor incrível e não me deixa estufado. Recomendo!"',
    name: "Felipe G.",
    colorAccent: "vermelho fogo",
    colorDark: "preto metálico"
  },
  {
    product: "uma caminha de cachorro de pelúcia super macia e felpuda em tom cinza claro com um cachorrinho dormindo tranquilamente",
    brand: "PetSleep Co.",
    headline: "O CONFORTO QUE SEU PET MERECE",
    subhead: "Alivia a ansiedade e melhora o sono do seu melhor amigo.",
    benefit: "Ortopédica e Aconchegante",
    callout: "Tecido Anti-stress",
    review: '"Meu golden não sai mais de cima dessa cama!"',
    name: "Carolina S.",
    colorAccent: "azul bebê",
    colorDark: "cinza chumbo"
  },
  {
    product: "uma Air Fryer moderna preta brilhante com painel digital touch e batatas fritas crocantes dentro",
    brand: "ChefFrite",
    headline: "FRITURA SEM CULPA",
    subhead: "Praticidade e saúde para sua cozinha. Sem usar óleo.",
    benefit: "Cozimenta Ultra Rápido e Saudável",
    callout: "Painel Touch Inteligente",
    review: '"Mudou minha vida, faço até bolo nela agora!"',
    name: "Thiago V.",
    colorAccent: "laranja quente",
    colorDark: "preto brilhante"
  },
  {
    product: "um colar feminino minimalista de ouro 18k com um pequeno pingente de diamante brilhante, luz dramática",
    brand: "Aura Joias",
    headline: "ELEGÂNCIA EM CADA DETALHE",
    subhead: "Peças exclusivas feitas à mão para você brilhar.",
    benefit: "Brilho Intenso que Nunca Desbota",
    callout: "Garantia Vitalícia",
    review: '"Delicado, perfeito, exatamente como na foto."',
    name: "Amanda J.",
    colorAccent: "dourado ouro",
    colorDark: "veludo azul marinho"
  },
  {
    product: "uma luminária de mesa moderna esférica de vidro fosco e base de madeira clara emitindo luz quente e suave",
    brand: "LumenHome",
    headline: "TRANSFORME SEU AMBIENTE",
    subhead: "Design nordico que traz paz e conforto visual para sua casa.",
    benefit: "Iluminação Aconchegante e Relaxante",
    callout: "Luz Quente Dimerizável",
    review: '"Deixou meu quarto de leitura perfeito e chique!"',
    name: "Pedro K.",
    colorAccent: "amarelo quente",
    colorDark: "marrom amadeirado"
  },
  {
    product: "um kit de elásticos de resistência fitness tubulares coloridos com pegadores profissionais, fundo estúdio clean",
    brand: "FitBands Pro",
    headline: "A ACADEMIA NA SUA CASA",
    subhead: "Treine o corpo todo em qualquer lugar com resistência profissional.",
    benefit: "Resultados Reais sem Sair de Casa",
    callout: "5 Níveis de Resistência",
    review: '"Material super resistente, treino em casa todos os dias!"',
    name: "Fernanda D.",
    colorAccent: "laranja neon",
    colorDark: "cinza asfalto"
  }
];

function injectMockupVariables(prompt: string, brandColor: string = "#000000"): string {
  let injected = prompt;
  
  // Pick a single cohesive profile randomly
  const p = MOCKUP_PROFILES[Math.floor(Math.random() * MOCKUP_PROFILES.length)];
  
  // Products & Brand
  injected = injected.replace(/\[SEU PRODUTO.*?\]/gi, p.product);
  injected = injected.replace(/\[MARCA.*?\]/gi, p.brand);
  injected = injected.replace(/\[MARCA LOGO.*?\]/gi, p.brand);
  injected = injected.replace(/\[DESCRICAO DO PRODUTO.*?\]/gi, p.product);
  injected = injected.replace(/\[DESCRICAO COMPLETA DO PRODUTO.*?\]/gi, p.product);
  
  // Colors
  injected = injected.replace(/\[COR DA MARCA.*?\]/gi, brandColor);
  injected = injected.replace(/\[COR PRIMARIA.*?\]/gi, brandColor);
  injected = injected.replace(/\[COR ACCENT.*?\]/gi, p.colorAccent);
  injected = injected.replace(/\[COR CONTRASTE.*?\]/gi, "branco");
  injected = injected.replace(/\[COR ESCURA.*?\]/gi, p.colorDark);
  injected = injected.replace(/\[COR SUAVE.*?\]/gi, "cinza claro");
  
  // Texts & Headlines
  injected = injected.replace(/\[HEADLINE.*?\]/gi, p.headline);
  injected = injected.replace(/\[DECLARACAO.*?\]/gi, p.headline);
  injected = injected.replace(/\[TITULO.*?\]/gi, p.headline);
  injected = injected.replace(/\[SUBHEAD.*?\]/gi, p.subhead);
  injected = injected.replace(/\[BENEFICIO.*?\]/gi, p.benefit);
  injected = injected.replace(/\[CALLOUT.*?\]/gi, p.callout);
  injected = injected.replace(/\[CTA.*?\]/gi, "COMPRE AGORA");
  
  // Reviews & Citations
  injected = injected.replace(/\[REVIEW.*?\]/gi, p.review);
  injected = injected.replace(/\[CITA[CÇ][AÃ]O.*?\]/gi, p.review);
  injected = injected.replace(/\[OPINI[AÃ]O.*?\]/gi, p.review);
  injected = injected.replace(/\[RESPOSTA.*?\]/gi, p.review);
  injected = injected.replace(/\[MENSAGEM.*?\]/gi, p.review);
  injected = injected.replace(/\[LEGENDA.*?\]/gi, p.review);
  
  // Names & People
  injected = injected.replace(/\[NOME.*?\]/gi, p.name);
  injected = injected.replace(/\[PESSOA.*?\]/gi, p.name);
  injected = injected.replace(/\[PRIMEIRO NOME.*?\]/gi, p.name);
  
  // Pricing & Offers
  injected = injected.replace(/\[PRE[CÇ]O.*?\]/gi, "R$ 99,90");
  injected = injected.replace(/\[OFERTA.*?\]/gi, "50% OFF Só Hoje");
  injected = injected.replace(/\[PARCELA.*?\]/gi, "12x R$ 9,90");
  
  // Labels, Stats & Logos
  injected = injected.replace(/\[STAT.*?\]/gi, "99%");
  injected = injected.replace(/\[PERCENTUAL.*?\]/gi, "99%");
  injected = injected.replace(/\[NUMERO.*?\]/gi, "3");
  injected = injected.replace(/\[NUMBER.*?\]/gi, "3");
  injected = injected.replace(/\[TAG.*?\]/gi, "MAIS VENDIDO");
  injected = injected.replace(/\[LABEL.*?\]/gi, "AVALIAÇÃO 5 ESTRELAS");
  injected = injected.replace(/\[SELO.*?\]/gi, "GARANTIA 30 DIAS");
  injected = injected.replace(/\[PROMO.*?\]/gi, "FRETE GRÁTIS");
  injected = injected.replace(/\[LOGOS.*?\]/gi, "Forbes, Vogue, Exame");
  injected = injected.replace(/\[VEICULO.*?\]/gi, "Revista Saúde");
  
  // UI & Time
  injected = injected.replace(/\[TEMPO.*?\]/gi, "Há 2h");
  injected = injected.replace(/\[PERIODO.*?\]/gi, "Há 2h");
  injected = injected.replace(/\[ICONE.*?\]/gi, "ícone minimalista");
  
  // Others
  injected = injected.replace(/\[CENA.*?\]/gi, "cenário lifestyle natural e moderno com excelente iluminação de estúdio");
  injected = injected.replace(/\[MOOD.*?\]/gi, "premium, de alta conversão, design arrojado");
  
  // Append strict negative prompt / instruction to force quality copy
  injected += `\n\nCRITICAL INSTRUCTION FOR IMAGE MODALITY: 
  1. ALL TEXT generated in the image MUST be in strict Brazilian Portuguese (PT-BR). 
  2. DO NOT use generic English placeholders like 'YOUR HEADLINE HERE', 'LOREM IPSUM', etc. 
  3. The text copy must EXACTLY match the provided Brazilian Portuguese phrases.
  4. Ensure typography is clean and highly legible, avoiding typical AI text gibberish. Make it look like a stunning, real Brazilian ad.
  5. Exclude ALL square brackets from the generated image text.`;
  
  // Strip out any remaining literal square brackets from the prompt text,
  // as the image model tends to literally draw them if they are wrapped around copy in the template.
  injected = injected.replace(/\[|\]/g, "");
  
  return injected;
}

export async function POST(req: NextRequest) {
  try {
    const { apiKey, templateId, format, language } = await req.json();

    if (!apiKey) {
      return NextResponse.json({ error: "API key required" }, { status: 400 });
    }
    if (!templateId) {
      return NextResponse.json({ error: "templateId required" }, { status: 400 });
    }

    const lang = language === "pt" ? "pt" : "en";
    
    // 1. Fetch Template from memory
    const templates = loadTemplates(lang);
    const template = templates.get(Number(templateId));

    if (!template) {
      return NextResponse.json({ error: "Template not found" }, { status: 404 });
    }

    // Default to the template's recommended or first format if none provided
    const targetFormat = format || template.recommendedFormat || template.formats[0] || "4:5";

    // 2. Inject Mockup Variables safely in memory
    const rawPrompt = template.prompt;
    const mockupPrompt = injectMockupVariables(rawPrompt);

    // 3. Generate Image
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: MODEL_IMAGE_DEFAULT });

    const formatToAspect: Record<string, string> = {
      "4:5": "4:5", "9:16": "9:16", "1:1": "1:1", "16:9": "16:9",
    };
    const aspectRatio = formatToAspect[targetFormat] || "4:5";

    const promptWithRatio = `${mockupPrompt}\n\nCRITICAL SYSTEM REQUIREMENT: Generate exactly in ${aspectRatio} aspect ratio. DO NOT ignore this format.`;

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: promptWithRatio }] }],
      generationConfig: {
        responseModalities: ["IMAGE"],
        imageConfig: {
          imageSize: "512",
          aspectRatio,
        },
      } as any,
    });

    const candidates = result.response.candidates?.[0]?.content?.parts || [];
    let imageBase64 = "";

    for (const part of candidates) {
      if ("inlineData" in part && (part as any).inlineData) {
        imageBase64 = (part as any).inlineData.data || "";
      }
    }

    if (!imageBase64) {
      throw new Error("Failed to generate image data");
    }

    // 4. Save to Disk physically with fs
    const thumbnailsDir = path.join(process.cwd(), "public", "thumbnails", lang);
    if (!fs.existsSync(thumbnailsDir)) {
      fs.mkdirSync(thumbnailsDir, { recursive: true });
    }

    const filename = `${template.id}_${targetFormat.replace(":", "x")}.jpg`;
    const filepath = path.join(thumbnailsDir, filename);
    const buffer = Buffer.from(imageBase64, "base64");
    
    fs.writeFileSync(filepath, buffer);
    console.log(`[Thumbnail] Saved physically to ${filepath}`);

    return NextResponse.json({ success: true, path: `/thumbnails/${lang}/${filename}` });
  } catch (err: any) {
    console.error("[/api/generate-thumbnail] Error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
