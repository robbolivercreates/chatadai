# AdForge — Template Library (Brasil)

> **Source of truth para os 80 templates focados no comportamento brasileiro.**
> Carregado em `src/lib/templates.ts` de acordo com o idioma da interface.

---

### Template 01 — Headline

```yaml
id: 1
category: A
name: Headline
strategy_note: Testa renderizacao de texto em portugues. Headlines BR ate 14 palavras.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: SUA HEADLINE EM PORTUGUES, ate 14 palavras
    fill: ai_copy
  - key: SEU SUBTITULO, uma frase em portugues
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: SUPERFICIE
    fill: ai_copy
  - key: DETALHES
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product colors, typography style, and brand tone precisely. Create: a static ad with a [BACKGROUND like off-white / soft cream] background. Top third: large bold sans-serif headline reading "[SUA HEADLINE EM PORTUGUES, ate 14 palavras]". Below in smaller text: "[SEU SUBTITULO, uma frase em portugues]". Bottom half: [SEU PRODUTO] on [SUPERFICIE like bancada de marmore / mesa de madeira clara] with [DETALHES like unidades espalhadas na base / embalagem levemente aberta]. Shot at 50mm f/2.8 from slightly above. [MARCA] logo bottom right. Clean, warm, trustworthy. 4:5 aspect ratio.
```

---

### Template 02 — Oferta com Parcelamento + Pix

```yaml
id: 2
category: A
name: Oferta com Parcelamento + Pix
strategy_note: Parcela como headline. Preco Pix como oferta secundaria. Frete gratis como value add.
formats: ['9:16', '4:5']
recommended_format: 9:16
variables:
  - key: COR PRIMARIA DA MARCA
    fill: brand_dna
  - key: COR DE CONTRASTE
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: COR CONTRASTE
    fill: brand_dna
  - key: OFERTA DE PARCELAMENTO
    fill: ai_copy
  - key: OFERTA PIX
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: VALUE ADDS
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography style. Create: a promotional ad with a split background. Top 60% is [COR PRIMARIA DA MARCA] and bottom 40% is [COR DE CONTRASTE like creme quente]. [SEU PRODUTO] sits centered where colors meet, soft studio lighting. Upper area: large [COR CONTRASTE] bold sans-serif reading "[OFERTA DE PARCELAMENTO like 12x de R$9,90 sem juros]" — the installment number should be the largest text in the frame. Below: "[OFERTA PIX like ou R$99 no Pix com 15% off]" with a small simplified Pix diamond icon in turquoise. Lower section: small [COR DA MARCA] text with [VALUE ADDS like Frete Gratis · Entrega em 3 dias · Brinde exclusivo]. [MARCA] logo bottom right. 9:16 aspect ratio.
```

---

### Template 03 — Depoimento com Cenario Brasileiro

```yaml
id: 3
category: A
name: Depoimento com Cenario Brasileiro
strategy_note: Cenarios BR reais + texto em portugues. Deve cheirar a Brasil — azulejo, granito, luz tropical.
formats: ['9:16', '4:5']
recommended_format: 9:16
variables:
  - key: CENARIO BRASILEIRO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: SUPERFICIE
    fill: ai_copy
  - key: HEADLINE CURTA EM PORTUGUES
    fill: ai_copy
  - key: DEPOIMENTO 2-3 frases em portugues coloquial
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: CIDADE/ESTADO
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a testimonial ad set in [CENARIO BRASILEIRO like banheiro claro com azulejo branco e bancada de granito / cozinha com pastilhas de vidro] with warm tropical natural light. [SEU PRODUTO] on [SUPERFICIE], slightly out of focus. Overlaid: large bold white sans-serif "[HEADLINE CURTA EM PORTUGUES]". Below: "[DEPOIMENTO 2-3 frases em portugues coloquial]. [NOME], [CIDADE/ESTADO like Sao Paulo/SP]." Five filled [COR DA MARCA] stars. [MARCA] logo bottom right in white. Shot on 35mm f/2.0. 9:16 aspect ratio.
```

---

### Template 04 — Diagrama de Beneficios

```yaml
id: 4
category: A
name: Diagrama de Beneficios
strategy_note: Layout educacional diagrama. Adaptar idioma e tom.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: TITULO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: BENEFICIO 1-4 em portugues
    fill: ai_copy
  - key: SITE
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: an educational diagram-style ad on white background. Top: bold [COR DA MARCA] text "[TITULO like O Que Faz [PRODUTO] Ser Diferente]". Below: [SEU PRODUTO] centered, even studio lighting. Four callout boxes with connecting lines: "[BENEFICIO 1-4 em portugues]". Each has a small [COR DA MARCA] circle. "[SITE]" bottom center. [MARCA] logo bottom right. Scientific diagram redesigned by a luxury agency. 4:5 aspect ratio.
```

---

### Template 05 — Lista de Beneficios

```yaml
id: 5
category: A
name: Lista de Beneficios
strategy_note: Split composition. Produto esquerda, beneficios direita.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: SUPERFICIE
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: BENEFICIO 1-5 em portugues
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a benefit-list ad, split composition on [BACKGROUND] background. Left 40%: [SEU PRODUTO] on [SUPERFICIE], shot at 85mm f/2.8. Right 60%: vertical stack of five lines with filled [COR DA MARCA] circles: "[BENEFICIO 1-5 em portugues]". Clean sans-serif, generous spacing. [MARCA] logo bottom right. 4:5 aspect ratio.
```

---

### Template 06 — Prova Social — Membros + Reclame Aqui + Imprensa BR

```yaml
id: 6
category: A
name: Prova Social — Membros + Reclame Aqui + Imprensa BR
strategy_note: Trust stack brasileiro: clientes + nota RA + logos de imprensa BR.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: X
    fill: ai_copy
  - key: STATUS
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: TITULO DO REVIEW
    fill: ai_copy
  - key: REVIEW 2-3 FRASES EM PORTUGUES
    fill: ai_copy
  - key: NOME, CIDADE/ESTADO
    fill: ai_copy
  - key: LOGOS
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a social proof ad on [BACKGROUND like creme quente]. Top: "[HEADLINE like Mais de 500.000 clientes satisfeitos]" in bold [COR DA MARCA]. Five filled stars with "Nota [X] no Reclame Aqui" and a small green badge reading "[STATUS like OTIMO]". Center: [SEU PRODUTO] at 50mm f/4. Below: frosted white card with five-star rating, "[TITULO DO REVIEW]", "[REVIEW 2-3 FRASES EM PORTUGUES]", "[NOME, CIDADE/ESTADO]" in italic. Below card: "Visto Em" with five grayscale logos [LOGOS like Globo, Veja, Exame, Forbes Brasil, UOL]. [MARCA] logo bottom right. 4:5 aspect ratio.
```

---

### Template 07 — Nos vs. Eles

```yaml
id: 7
category: A
name: Nos vs. Eles
strategy_note: Comparacao lado a lado. Adaptar idioma.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR PRIMARIA DA MARCA
    fill: brand_dna
  - key: CATEGORIA DO CONCORRENTE
    fill: ai_copy
  - key: FRAQUEZA 1-5 em portugues
    fill: ai_copy
  - key: SUA MARCA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: FORCA 1-5 em portugues
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a side-by-side divided vertically. Left: muted gray-blue background. Right: [COR PRIMARIA DA MARCA]. Center top: white circle with "VS". Left header: "[CATEGORIA DO CONCORRENTE]" + generic competitor product + list with X marks: "[FRAQUEZA 1-5 em portugues]". Right header: "[SUA MARCA]" + [SEU PRODUTO] + list with checkmarks: "[FORCA 1-5 em portugues]". [MARCA] logo bottom right. 4:5 aspect ratio.
```

---

### Template 08 — Antes & Depois UGC

```yaml
id: 8
category: A
name: Antes & Depois UGC
strategy_note: Selfie de espelho. Deve parecer post real de brasileira no Instagram, nao TikTok americano.
formats: ['9:16']
recommended_format: 9:16
variables:
  - key: PESSOA
    fill: ai_copy
  - key: ESTADO ANTES
    fill: ai_copy
  - key: DATA ANTES
    fill: ai_copy
  - key: ESTADO DEPOIS
    fill: ai_copy
  - key: PRODUTO
    fill: ai_copy
  - key: DATA DEPOIS
    fill: ai_copy
  - key: PERIODO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for product color ONLY. This should look like a real Brazilian person's Instagram post. Create: before-and-after split. LEFT: grainy phone mirror selfie, [PESSOA] in dimly lit bathroom with white tiles, [ESTADO ANTES], harsh lighting. White handwritten text: "[DATA ANTES]". RIGHT: same person, same bathroom, bright natural light, [ESTADO DEPOIS], [PRODUTO] visible on counter. White text: "[DATA DEPOIS]". Top center: "[PERIODO] usando [MARCA]" with emoji. Should look stitched in InShot. Warm tropical lighting on the after side. 9:16 aspect ratio.
```

---

### Template 09 — Marketing Negativo / Isca

```yaml
id: 9
category: A
name: Marketing Negativo / Isca
strategy_note: Review falso-negativo que e rave. Card estilo Google Reviews / Mercado Livre (nao Amazon).
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: PRODUTO
    fill: ai_copy
  - key: NOME BRASILEIRO
    fill: ai_copy
  - key: ISCA que parece negativa mas e positiva — e.g. Nao consigo parar de usar. Viciei completamente.
    fill: ai_copy
  - key: PUNCHLINE
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: Background is close-up of [PRODUTO], slightly blurred. Center: white rounded-rectangle review card (estilo Google Reviews). Gray user icon, "[NOME BRASILEIRO]", one gold star + four gray, green "Compra Verificada" badge, bold text: "[ISCA que parece negativa mas e positiva — e.g. Nao consigo parar de usar. Viciei completamente.]". Bottom: bold white sans-serif "[PUNCHLINE like OS REVIEWS FALAM POR SI.]". [MARCA] logo bottom right. 4:5 aspect ratio.
```

---

### Template 10 — Imprensa / Editorial

```yaml
id: 10
category: A
name: Imprensa / Editorial
strategy_note: Autoridade. Energia Vogue Brasil. Logos de publicacoes brasileiras.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: LOGOS
    fill: ai_copy
  - key: CITACAO DA IMPRENSA EM PORTUGUES
    fill: ai_copy
  - key: PRODUTO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a press ad on off-white linen background. Top: "Visto Na Midia" in small [COR DA MARCA] uppercase wide-tracked text. Below: five grayscale publication logos [LOGOS like Vogue Brasil, Glamour, GQ Brasil, Exame, Folha de S.Paulo]. Center: italic serif pull-quote in [COR DA MARCA]: "[CITACAO DA IMPRENSA EM PORTUGUES]" with attribution. Lower third: [PRODUTO] at 85mm f/2.8, soft side light. [MARCA] logo bottom left. Generous white space. Full-page Vogue Brasil energy. 4:5 aspect ratio.
```

---

### Template 11 — Card de Review com Citacao Emocional

```yaml
id: 11
category: A
name: Card de Review com Citacao Emocional
strategy_note: Citacao emocional + card de review truncado + "...Leia mais" cria open loop. Bandeira BR + "Comprador Verificado".
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR DA MARCA com hex — tom suave funciona melhor
    fill: ai_copy
  - key: CITACAO EMOCIONAL — frase mais impactante de 4-8 palavras do review em portugues, e.g. "Finalmente achei algo que funciona!"
    fill: ai_copy
  - key: PRIMEIRO NOME + INICIAL
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: CONTAGEM
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product colors and brand tone precisely. Create: a review-driven ad with a solid [COR DA MARCA com hex — tom suave funciona melhor] color block background filling the entire image. Top half: large bold italic serif text in white with curly quotation marks reading "[CITACAO EMOCIONAL — frase mais impactante de 4-8 palavras do review em portugues, e.g. "Finalmente achei algo que funciona!"]". Directly below the quote: five large filled gold/yellow star icons in a horizontal row. Bottom left, overlapping the color background: a white rounded-corner review card with subtle shadow, containing: a small gray circular default avatar icon, beside it "[PRIMEIRO NOME + INICIAL]" in bold dark sans-serif with a small Brazilian flag emoji, below the name a blue checkmark icon with "Comprador Verificado" in small blue text. Below the reviewer info: the review body text in medium-weight dark sans-serif, 4-6 lines of authentic-sounding Brazilian Portuguese customer voice that trails off mid-sentence, ending with "...Leia mais" in bold [COR DA MARCA] text — the truncation is intentional to create curiosity. Below the review text: "Esse review foi util? (joinha) [CONTAGEM like 247]" in small gray text. Bottom right, overlapping both the card and the color background: [SEU PRODUTO] angled slightly toward the viewer, sitting on the color block surface with a subtle shadow beneath. No brand logo needed if packaging shows it — the review card IS the social proof. 1:1 or 4:5 aspect ratio.
```

---

### Template 12 — Lifestyle + Lineup de Cores

```yaml
id: 12
category: B
name: Lifestyle + Lineup de Cores
strategy_note: Foto de acao lifestyle brasileira + produtos em leque. Cenarios: praia, futevolei, academia.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: DESCRICAO LIFESTYLE
    fill: ai_copy
  - key: CENARIO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: HEADLINE EM PORTUGUES
    fill: ai_copy
  - key: COR DO TEXTO
    fill: brand_dna
  - key: VARIANTES
    fill: ai_copy
  - key: COR 1
    fill: ai_copy
  - key: COR 2
    fill: ai_copy
  - key: COR 3
    fill: ai_copy
  - key: MOOD
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and visual tone precisely. Create: a static ad with a [DESCRICAO LIFESTYLE like homem jogando futevolei na praia com camiseta da marca] occupying the left two-thirds of the frame, shot outdoors in [CENARIO like praia com coqueiros / quadra de beach tennis], bright tropical daylight. [MARCA] logo top center in bold. Below logo: large bold sans-serif quote text reading "[HEADLINE EM PORTUGUES like O SHORTS MAIS CONFORTAVEL DO BRASIL]" in [COR DO TEXTO]. Bottom right foreground: three [VARIANTES like bermudas dobradas] fanned in an overlapping arrangement showing [COR 1], [COR 2], and [COR 3]. Products are crisp and studio-lit against the lifestyle background. Shot on 50mm f/2.0, lifestyle background slightly softer than foreground product. [MOOD like confiante, tropical, acessivel]. 1:1 aspect ratio.
```

---

### Template 13 — Stats Radiais / Callout com Setas

```yaml
id: 13
category: B
name: Stats Radiais / Callout com Setas
strategy_note: Produto no centro, stats orbitando. Setas tornam escaneavel em 2 segundos. Precos em reais.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR GRADIENTE LEVE
    fill: brand_dna
  - key: COR DO TEXTO
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PRECO
    fill: ai_copy
  - key: COR DO BADGE
    fill: ai_copy
  - key: STAT 1
    fill: ai_copy
  - key: LABEL
    fill: ai_copy
  - key: STAT 2
    fill: ai_copy
  - key: STAT 3
    fill: ai_copy
  - key: STAT 4
    fill: ai_copy
  - key: COR DAS SETAS
    fill: ai_copy
  - key: PROPS DE SABOR
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a white-to-[COR GRADIENTE LEVE] gradient background, gradient fading from top to bottom. Top: large bold [COR DO TEXTO] sans-serif headline reading "[HEADLINE like Tao gostoso que voce esquece que e saudavel.]". Center: [SEU PRODUTO] on white background, soft studio lighting. Floating near the product: a small circular badge reading "[PRECO like A PARTIR DE R$4,90 POR REFEICAO!]" in [COR DO BADGE]. Flanking the product on both sides: four stat callouts with curved arrows pointing toward the product. Left side top: "[STAT 1 like 20g]" in oversized bold text with "[LABEL like PROTEINA]" below. Left side bottom: "[STAT 2 like 280]" with "[LABEL like CALORIAS]". Right side top: "[STAT 3 like 500mil+]" with "[LABEL like CLIENTES SATISFEITOS]". Right side bottom: "[STAT 4 like 15mil+]" with "[LABEL like AVALIACOES 5 ESTRELAS]" and five filled gold stars beneath. Arrows are simple hand-drawn-style curved lines in [COR DAS SETAS]. Bottom foreground: [PROPS DE SABOR like pedacos de fruta e chocolate] adding appetite appeal. No brand logo. Clean, informational, appetizing. 1:1 aspect ratio.
```

---

### Template 14 — Showcase de Kit + Barra de Beneficios

```yaml
id: 14
category: B
name: Showcase de Kit + Barra de Beneficios
strategy_note: Vende o sistema, nao o SKU. Caixa aberta como hero.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: NUMERO
    fill: ai_copy
  - key: BENEFICIO 1-5 em portugues
    fill: ai_copy
  - key: EMBALAGEM
    fill: ai_copy
  - key: PRODUTOS
    fill: ai_copy
  - key: VARIANTE DE COR
    fill: ai_copy
  - key: PROP LIFESTYLE
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a [BACKGROUND like gradiente rosa-suave para pink vibrante] background. Top: oversized bold white all-caps sans-serif headline reading "[HEADLINE like PERFORMANCE FEMININA 24 HORAS]". Below headline: a horizontal [COR ACCENT] banner bar divided into [NUMERO like cinco] equal segments separated by thin vertical lines, each containing a two-word benefit label in white text: "[BENEFICIO 1-5 em portugues]". Center-to-bottom: an open [EMBALAGEM like caixa presente da marca] photographed at a slight overhead angle showing [NUMERO like tres] [PRODUTOS] nestled inside, each a different [VARIANTE DE COR]. In the lower foreground: a [PROP LIFESTYLE like mao feminina segurando haltere pastel] entering the frame from bottom. [MARCA] logo bottom left corner. Bright studio lighting, saturated color, energetic and empowering. 1:1 aspect ratio.
```

---

### Template 15 — Print de Comentario do Instagram + Produto

```yaml
id: 15
category: B
name: Print de Comentario do Instagram + Produto
strategy_note: Screenshot de comentario do Instagram = credibilidade instantanea no Brasil. Deve parecer screenshot REAL.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: HOOK EM PORTUGUES
    fill: ai_copy
  - key: EMOJI
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: COMENTARIO, 3-4 frases, conversacional e emocional
    fill: ai_copy
  - key: CURTIDAS
    fill: ai_copy
  - key: TEMPO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and colors precisely. Create: a static ad on a clean white background. Top: oversized bold black sans-serif headline reading "[HOOK EM PORTUGUES like SE VOCE ESTA PASSANDO POR ISSO...]" with [EMOJI like face_with_tears_of_joy] at the end. Center: an Instagram comment card with light gray rounded-rectangle background containing: a small circular profile avatar (top left), bold name "[NOME like mariana.costa]", and a multi-sentence comment in regular-weight sans-serif in Brazilian Portuguese: "[COMENTARIO, 3-4 frases, conversacional e emocional]". Small red heart icon with "[CURTIDAS like 847 curtidas]" and gray timestamp "[TEMPO like 2d]" below the comment. Bottom center: [SEU PRODUTO] photographed at a slight angle on white, soft studio lighting. No brand logo. No stars. The rawness is the point — this should look like someone screenshotted a real Instagram comment and dropped the product photo below it. 1:1 aspect ratio.
```

---

### Template 16 — Curiosidade / Hook Quote Depoimento

```yaml
id: 16
category: B
name: Curiosidade / Hook Quote Depoimento
strategy_note: Headline provocativa forca double-take. Reveal recontextualiza. Scroll-stop machine.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR ACCENT
    fill: brand_dna
  - key: SETUP
    fill: ai_copy
  - key: FRASE ISCA
    fill: ai_copy
  - key: REVEAL
    fill: ai_copy
  - key: ATRIBUICAO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: DETALHES
    fill: ai_copy
  - key: SELO
    fill: ai_copy
  - key: NUMERO
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
  - key: ICONE DA MARCA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a clean white background. Top center: large [COR ACCENT] opening quotation marks. Below: mixed-weight headline in black — the first line in italic serif reading "[SETUP like Eu estava]", the next two lines in enormous heavy-weight bold all-caps sans-serif reading "[FRASE ISCA like ESCONDENDO TUDO / DO MEU MARIDO]", followed by a smaller sentence-case line reading "[REVEAL like desde que comecou a menopausa — com [MARCA] nao preciso mais]". Closing quotation marks and "[ATRIBUICAO like - Fernanda M.]" in regular weight. Left side bottom third: [SEU PRODUTO] at a slight angle with [DETALHES like capsulas espalhadas]. To the left of the product: a [SELO like circular seal reading "Satisfacao Garantida 60 Dias"]. Right side bottom third: [NUMERO like cinco] filled [COR ACCENT] stars and bold text reading "[CONTAGEM like 3.600+] Avaliacoes 5 Estrelas" with a [ICONE DA MARCA]. Bottom edge: small disclaimer text in Portuguese. 1:1 aspect ratio.
```

---

### Template 17 — Card de Review Verificado

```yaml
id: 17
category: B
name: Card de Review Verificado
strategy_note: Simula UI de plataforma de review. Badge verificado + "Leia mais" = trust brasileiro.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: CITACAO EM PORTUGUES
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a solid [COR DA MARCA like lavanda / azul petroleo] background. Top: large bold white serif pull-quote reading "[CITACAO EM PORTUGUES like "Finalmente achei algo que funciona!"]" in quotation marks. Below the quote: five filled gold stars, large. Center-left: a white rounded-rectangle review card with subtle shadow containing: gray circular avatar icon, bold name "[NOME]" with Brazilian flag emoji, blue checkmark and "Comprador Verificado" in [COR DA MARCA] text, then 3-4 sentences of review body text in Brazilian Portuguese. At the bottom of the card: a blue "...Leia mais" link and "Esse review foi util? (joinha) [CONTAGEM]". Right side, overlapping the card edge: [SEU PRODUTO] photographed at a slight angle, soft studio lighting, casting a gentle shadow on the background. No brand logo. The review UI is the trust mechanic. 1:1 aspect ratio.
```

---

### Template 18 — Stats Radiais com Flatlay Lifestyle

```yaml
id: 18
category: B
name: Stats Radiais com Flatlay Lifestyle
strategy_note: Stats radiais + flatlay lifestyle e produto na mao. Labels em portugues.
formats: ['1:1']
recommended_format: 1:1
variables:
  - key: COR ACCENT
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: DETALHE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PROPS DE FLATLAY
    fill: ai_copy
  - key: STAT 1
    fill: ai_copy
  - key: LABEL
    fill: ai_copy
  - key: STAT 2
    fill: ai_copy
  - key: STAT 3
    fill: ai_copy
  - key: STAT 4
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a white background with a lifestyle flatlay arrangement. Top: bold [COR ACCENT] filled banner bar spanning full width, white all-caps sans-serif reading "[HEADLINE like CAFE DA MANHA INCRIVEL EM 30 SEGUNDOS]". Center: a [DETALHE like mao feminina] holding [SEU PRODUTO like coqueteleira da marca] in mid-frame. Scattered around the edges: [PROPS DE FLATLAY like saches do produto, panquecas em pratos, mirtilos, muffins, frutas] arranged organically to fill corners, slightly out of focus. Four stat callouts with curved [COR ACCENT] arrows pointing toward the held product: "[STAT 1 like 20g] / [LABEL like PROTEINA]", "[STAT 2 like 500mil] / [LABEL like CLIENTES SATISFEITOS]", "[STAT 3 like 20+] / [LABEL like SABORES]", "[STAT 4 like 15mil+] / [LABEL like AVALIACOES 5 ESTRELAS]" with five small gold stars. Stats in bold black, labels in all-caps regular weight. Bright, flat studio lighting. Energetic, appetizing, information-dense but scannable. 1:1 aspect ratio.
```

---

### Template 19 — Depoimento Destacado / Anotado

```yaml
id: 19
category: B
name: Depoimento Destacado / Anotado
strategy_note: Marca-texto faz o trabalho. Frases-chave em destaque visual. Nome + verificado.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: DESCRICAO DA PESSOA
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: CITACAO COMPLETA, 3-5 frases
    fill: ai_copy
  - key: COR DE DESTAQUE
    fill: ai_copy
  - key: FRASE DESTACADA 1
    fill: ai_copy
  - key: FRASE DESTACADA 2
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: SELO
    fill: ai_copy
  - key: COR DO SELO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and typography style precisely. Create: a static ad on a clean white background. Top left: circular customer headshot photo of [DESCRICAO DA PESSOA]. To the right of the photo: bold name "[NOME]" with a blue checkmark. Below: a long-form customer quote in large regular-weight black sans-serif type spanning most of the frame in Brazilian Portuguese: "[CITACAO COMPLETA, 3-5 frases]". Key phrases within the quote are highlighted with [COR DE DESTAQUE like verde limao / amarelo neon] rectangular background fills behind the text: "[FRASE DESTACADA 1]" and "[FRASE DESTACADA 2]". Bottom right: [SEU PRODUTO] at a slight angle, partially cropped at the bottom edge. To the left of the product: a circular [SELO like "100% DINHEIRO DE VOLTA / 90 DIAS / GARANTIA"] seal in [COR DO SELO]. [MARCA] logo bottom left corner, small. 1:1 aspect ratio.
```

---

### Template 20 — Advertorial / Conteudo Editorial

```yaml
id: 20
category: B
name: Advertorial / Conteudo Editorial
strategy_note: Parece post de portal, nao anuncio. Usar estilo UOL / Buzzfeed Brasil.
formats: ['4:5', '9:16']
recommended_format: 4:5
variables:
  - key: DESCRICAO DA PESSOA
    fill: ai_copy
  - key: TAG
    fill: ai_copy
  - key: COR DE DESTAQUE
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: @HANDLE
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Do NOT use polished ad layouts. This should look like organic editorial content. Create: a full-bleed moody portrait photo of [DESCRICAO DA PESSOA like jovem de moletom escuro], warm amber-toned lighting, shot on 50mm f/1.8, shallow depth of field, cinematic color grade with warm highlights and cool shadows. Lower 45% of the frame is a text overlay zone: a prominent white rounded-rectangle pill label reading "[TAG like EM ALTA]" in centered uppercase sans-serif, sized to span roughly one-third of the frame width. Below: very large, dominant, bold all-caps condensed sans-serif headline filling the width in white text with key words in [COR DE DESTAQUE]: "[HEADLINE like [MARCA] ESTA VIRALIZANDO NO BRASIL — ENTENDA POR QUE TODO MUNDO ESTA USANDO]". The headline should be oversized — at least 35% of the total frame height. Bottom center: "[@HANDLE]" in small white text. No product shot, no CTA button, no stars. This should read like a Buzzfeed Brasil or UOL post, not a paid ad. 4:5 aspect ratio.
```

---

### Template 21 — Declaracao Bold / Headline de Impacto

```yaml
id: 21
category: B
name: Declaracao Bold / Headline de Impacto
strategy_note: Energia de marca pura. Sem stats, sem reviews. Copy E o anuncio.
formats: ['1:1']
recommended_format: 1:1
variables:
  - key: GRADIENTE
    fill: ai_copy
  - key: ESTILO
    fill: ai_copy
  - key: DECLARACAO OUSADA EM PORTUGUES
    fill: ai_copy
  - key: DETALHE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: MARCA
    fill: brand_dna
  - key: COR DO LOGO
    fill: ai_copy
  - key: DESCRITOR
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and visual tone precisely. Create: a static ad on a vibrant [GRADIENTE like coral-pink para amarelo-dourado] gradient background, flowing diagonally from upper left to lower right. Upper left: oversized playful [ESTILO like rounded retro serif / Cooper Black style] white headline reading "[DECLARACAO OUSADA EM PORTUGUES like Essa pipoca e boa demais. Serio.]" — text should feel loose, fun, and expressive, not rigid or corporate. Right side: [DETALHE like mao pegando de cima] from [SEU PRODUTO like bowl transbordando de pipoca]. Product sits center-right, slightly below midline. Bottom left: [MARCA] logo in [COR DO LOGO] with "[DESCRITOR like Pipoca Gourmet]" in smaller text below. No stats, no reviews, no badges. The gradient and the headline do all the work. 1:1 aspect ratio.
```

---

### Template 22 — Historia do Sabor / "Gosto De"

```yaml
id: 22
category: B
name: Historia do Sabor / "Gosto De"
strategy_note: Fundo de comida brasileira E a headline. Brigadeiro, acai, pao de queijo — nao raspberry donuts.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COMIDA BRASILEIRA INDULGENTE
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: STAT 1
    fill: ai_copy
  - key: STAT 2
    fill: ai_copy
  - key: STAT 3
    fill: ai_copy
  - key: CLAIM
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and packaging precisely. Create: a flavor-visualization ad. Full background is a photorealistic close-up food scene of [COMIDA BRASILEIRA INDULGENTE like brigadeiros caseiros no granulado sobre mesa de marmore / acai grosso na tigela com granola e banana / pao de queijo partido ao meio com queijo derretendo]. Shot at 50mm f/2.8, shallow depth of field, warm bakery lighting. Top third: large bold white sans-serif headline reading "[HEADLINE like Uma barra de proteina com gosto de brigadeiro de verdade]" with one key word in bold italic for emphasis. [SEU PRODUTO] placed bottom-right, angled 15 degrees as if casually laid into the scene. Bottom: semi-transparent white bar spanning full width with three stat columns separated by thin vertical lines: "[STAT 1 like 20g PROTEINA]" | "[STAT 2 like 2g ACUCAR]" | "[STAT 3 like 180 CALORIAS]". Very bottom edge: smaller bold sans-serif "[CLAIM like SEM ADOCANTES ARTIFICIAIS]". Food is the hero — product is the payoff. 1:1 aspect ratio.
```

---

### Template 23 — Manifesto / Carta

```yaml
id: 23
category: B
name: Manifesto / Carta
strategy_note: Copy-dominant. Texto E o criativo. Para marcas com voz forte.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: HEADLINE PROVOCATIVA EM PORTUGUES
    fill: ai_copy
  - key: TENSAO DA MARCA
    fill: ai_copy
  - key: 12-18 LINHAS
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand typography style and tone. Create: a copy-dominant manifesto ad on a clean white background. No background imagery — text is the entire creative. Top: oversized bold black serif or sans-serif headline reading "[HEADLINE PROVOCATIVA EM PORTUGUES like Nao e barato. E justo.]" spanning the top 15%. Below: left-aligned body copy in smaller regular-weight black text, structured as short punchy sentences and line breaks (NOT paragraphs), building a persuasive argument about [TENSAO DA MARCA like por que o preco se justifica]. The copy should flow through: acknowledging the objection, listing what you'd lose if they cut corners, reframing as a positive, closing with a confident brand statement. Approximately [12-18 LINHAS] of copy in Portuguese. Bottom 20%: [SEU PRODUTO] centered or slightly right, product-only on white, clean studio shot angle. No icons, no badges, no CTA button. The writing IS the ad. 1:1 aspect ratio.
```

---

### Template 24 — Produto + Comentario do Facebook

```yaml
id: 24
category: B
name: Produto + Comentario do Facebook
strategy_note: Screenshot organico. Facebook ainda e forte no Brasil, especialmente 30+.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: SEU PRODUTO
    fill: brand_dna
  - key: DETALHE mostrando uso
    fill: ai_copy
  - key: UNIDADES
    fill: ai_copy
  - key: DESCRICAO DE PESSOA brasileira
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: DEPOIMENTO 2-3 frases sobre problema especifico e como o produto mudou tudo
    fill: ai_copy
  - key: TEMPO
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and packaging precisely. Create: a social proof ad. Top 55%: [SEU PRODUTO] centered on a clean white background, studio-lit, shot at 85mm f/2.8 with soft shadow. Product cap/lid slightly open or [DETALHE mostrando uso]. A few [UNIDADES like gomas / capsulas] spilling casually at the base. Bottom 45%: a realistic Facebook-style comment card. Left: small circular profile photo of [DESCRICAO DE PESSOA brasileira]. Bold name "[NOME]" above the comment. Comment text in regular weight Brazilian Portuguese: "[DEPOIMENTO 2-3 frases sobre problema especifico e como o produto mudou tudo]". Below comment: "[TEMPO like 4 sem]" · Curtir · Responder in gray. Bottom right of comment: Facebook-style reaction emojis (joinha + coracao) with "[CONTAGEM like 33]". Should look like an organic screenshot, not designed. 1:1 aspect ratio.
```

---

### Template 25 — Nos vs. Eles — Split Colorido

```yaml
id: 25
category: B
name: Nos vs. Eles — Split Colorido
strategy_note: Mais visual que o classico. Cor da marca domina o lado vencedor.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR PRIMARIA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: ACAO
    fill: ai_copy
  - key: FORCA 1-4 em portugues
    fill: ai_copy
  - key: COR CONTRASTE
    fill: brand_dna
  - key: DESCRICAO
    fill: ai_copy
  - key: CATEGORIA CONCORRENTE
    fill: ai_copy
  - key: FRAQUEZA 1-4 em portugues
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and colors precisely. Create: a side-by-side comparison ad divided vertically into two equal halves. Left half: [COR PRIMARIA like verde vibrante] background. [SEU PRODUTO] photographed with dynamic energy — [ACAO like chocolate derretendo / liquido sendo despejado] to convey indulgence. Brand logo in bold white upper-left. Below product: vertical stack of 4 benefits, each with a green circle checkmark emoji: "[FORCA 1-4 em portugues]" in bold white uppercase. Right half: [COR CONTRASTE like bege claro] background. Generic unbranded competitor product [DESCRICAO]. Header: "[CATEGORIA CONCORRENTE]" in dark text. Below: vertical stack of 4 weaknesses, each with a red circle X emoji: "[FRAQUEZA 1-4 em portugues]" in bold dark uppercase. Center divider: a comic-style "VS" burst graphic in [COR ACCENT]. 1:1 aspect ratio.
```

---

### Template 26 — Stat Callout Lifestyle

```yaml
id: 26
category: B
name: Stat Callout Lifestyle
strategy_note: Estatistica como headline. Dados brasileiros.
formats: ['4:5']
recommended_format: 4:5
variables:
  - key: CENA
    fill: ai_copy
  - key: MOOD
    fill: ai_copy
  - key: COR ESCURA
    fill: ai_copy
  - key: HEADLINE COM ESTATISTICAS EM PORTUGUES
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a statistic-led ad. Top 50%: lifestyle product photography — [CENA like maos femininas segurando o produto] on a [MOOD like quente, tons de pele, soft-focus] background. Product packaging visible in frame. Middle: brand logo centered with thin horizontal rules on either side as a visual divider. Bottom 50%: dark gradient overlay (fading from transparent to [COR ESCURA]). Large bold uppercase sans-serif text: "[HEADLINE COM ESTATISTICAS EM PORTUGUES like APOS TROCAR PARA [MARCA], 89% DAS CLIENTES NOTARAM DIFERENCA EM 30 DIAS]." Key result phrases highlighted in [COR ACCENT]. The statistic IS the headline — no separate subhead needed. 4:5 aspect ratio.
```

---

### Template 27 — Checklist de Beneficios

```yaml
id: 27
category: B
name: Checklist de Beneficios
strategy_note: Informacao densa. Produto overhead + beneficios + CTA brasileiro.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: DESCRICAO DO PRODUTO
    fill: ai_copy
  - key: ESTRELAS
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: BENEFICIO 1-3 em portugues
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and brand colors precisely. Create: an information-dense benefit ad, split composition. Left 45%: overhead product shot — [DESCRICAO DO PRODUTO like bowl branco com racao fresca dividido em secoes rotuladas em texto branco curvo: "[VARIEDADE 1-4]"]. Shot on 50mm f/4, clean white surface. Right 55%: white background. Top: [ESTRELAS like cinco estrelas douradas] with "[CONTAGEM like 10.000+ Avaliacoes]" in [COR DA MARCA]. Brand logo. Below: [COR DA MARCA] serif or sans-serif headline: "[HEADLINE like Feito para os mais exigentes]". Then 3 checkmark benefit rows, each with a filled [COR DA MARCA] circle checkmark + bold text: "[BENEFICIO 1-3 em portugues]". Bottom right: large rounded [COR ACCENT] CTA button reading "[CTA like COMPRAR AGORA]". 1:1 aspect ratio.
```

---

### Template 28 — Anotacao com Setas no Produto

```yaml
id: 28
category: B
name: Anotacao com Setas no Produto
strategy_note: Mao segura produto. Setas curvas apontam para 4 callouts. Visual editorial.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: BENEFICIO
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: PROPOSTA DE VALOR
    fill: ai_copy
  - key: MAO DE PESSOA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: CALLOUT 1-4 em portugues
    fill: ai_copy
  - key: COR CONTRASTE
    fill: brand_dna
  - key: PROMO
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography style. Create: a product annotation ad on a [BACKGROUND like creme quente / amarelo claro texturizado] background. Top: italic serif headline "[BENEFICIO like Cafe de barista. Instantaneo. Acessivel.]" in [COR DA MARCA]. Below in massive bold sans-serif: "[PROPOSTA DE VALOR like TUDO EM UM]". Center: [MAO DE PESSOA] holding [SEU PRODUTO] at a natural angle. Four curved arrows in [COR DA MARCA] pointing from the product outward to four benefit callout labels arranged around it in bold [COR DA MARCA] text: "[CALLOUT 1-4 em portugues]". Arrows should feel hand-drawn or editorial, not rigid. Bottom: full-width [COR CONTRASTE] banner with [PROMO like MEGA OFERTA + FRETE GRATIS] in bold [COR ACCENT] with optional emoji accents. 1:1 aspect ratio.
```

---

### Template 29 — UGC + Post Viral do X Brasil

```yaml
id: 29
category: C
name: UGC + Post Viral do X Brasil
strategy_note: Selfie + screenshot de tweet/post do X. A opiniao e o hook.
formats: ['9:16']
recommended_format: 9:16
variables:
  - key: PESSOA brasileira
    fill: ai_copy
  - key: ACAO
    fill: ai_copy
  - key: PLATAFORMA
    fill: ai_copy
  - key: DETALHES
    fill: ai_copy
  - key: OPINIAO PROVOCATIVA EM PORTUGUES relacionada ao beneficio do produto
    fill: ai_copy
  - key: 2-3 frases em portugues expandindo a opiniao
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for product color ONLY. Do NOT use ad layouts or polish. This should look completely native and organic. Create: a casual selfie of [PESSOA brasileira like mulher de 20 e poucos, camiseta basica] doing something mundane [ACAO like escovando os dentes, fazendo cafe]. iPhone front camera, slightly grainy, bathroom/kitchen lighting, no professional setup. Overlaid in the center of the frame: a realistic screenshot of a [PLATAFORMA like X / Twitter Brasil] post. [DETALHES like @usuario, timestamp, contagem de curtidas]. Post title in bold: "[OPINIAO PROVOCATIVA EM PORTUGUES relacionada ao beneficio do produto]". Post body in regular text: "[2-3 frases em portugues expandindo a opiniao]". The post should feel like the person is reacting to it — NOT selling a product. No product visible. No brand logo. No CTA. The hook is the opinion. 9:16 aspect ratio.
```

---

### Template 30 — Declaracao Hero + Barra de Icones

```yaml
id: 30
category: C
name: Declaracao Hero + Barra de Icones
strategy_note: Declaracao de 2-3 palavras. Foto lifestyle. Barra de beneficios + ticker social.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: DECLARACAO DE 2-3 PALAVRAS
    fill: ai_copy
  - key: CENA
    fill: ai_copy
  - key: COR SUAVE DA MARCA
    fill: ai_copy
  - key: ICONE 1 + LABEL
    fill: ai_copy
  - key: ICONE 2 + LABEL
    fill: ai_copy
  - key: ICONE 3 + LABEL
    fill: ai_copy
  - key: COR ESCURA DA MARCA
    fill: ai_copy
  - key: PROVA SOCIAL
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors, packaging, and typography. Create: a bold statement ad. Top 15%: white banner overlay with massive bold [COR DA MARCA] uppercase sans-serif headline: "[DECLARACAO DE 2-3 PALAVRAS like SECA BARRIGA.]" with a period for punch. Middle 55%: lifestyle product photo — [CENA like mao feminina segurando capsula acima de pote aberto, luz natural suave]. Product label and branding clearly visible. Bottom 25%: [COR SUAVE DA MARCA] background. Three evenly spaced icon-and-text benefit columns: [ICONE 1 + LABEL like (hamburguer cortado) CORTA APETITE] | [ICONE 2 + LABEL like (raio) QUEIMA CALORIAS] | [ICONE 3 + LABEL like (coracao + corpo) PERDE PESO]. Icons are simple line-drawn in [COR DA MARCA] circles. Very bottom edge: scrolling ticker bar in [COR ESCURA DA MARCA] with repeating text: "[PROVA SOCIAL like MAIS DE 300 MIL VIDAS TRANSFORMADAS]". 1:1 aspect ratio.
```

---

### Template 31 — Grid Comparativo / Tabela

```yaml
id: 31
category: C
name: Grid Comparativo / Tabela
strategy_note: Linhas de atributos, sem icones. Contraste de copy faz o trabalho. Viral no X Brasil.
formats: ['1:1']
recommended_format: 1:1
variables:
  - key: SEU PRODUTO
    fill: brand_dna
  - key: DETALHE
    fill: ai_copy
  - key: PRODUTO CONCORRENTE
    fill: ai_copy
  - key: SUA VANTAGEM
    fill: ai_copy
  - key: FRAQUEZA DO CONCORRENTE
    fill: ai_copy
  - key: FRAQUEZA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product packaging precisely. Create: a structured comparison grid ad on white background. Top row divided 50/50: Left: [SEU PRODUTO] packaging photographed clean on white with [DETALHE like pedacos saindo da embalagem]. Right: [PRODUTO CONCORRENTE] packaging on white. Below: three horizontal rows spanning full width, each divided 50/50 by a thin black vertical line and separated by thin black horizontal lines. Each row compares one attribute: Row 1: "[SUA VANTAGEM]" vs "[FRAQUEZA DO CONCORRENTE]". Row 2: "[SUA VANTAGEM]" vs "[FRAQUEZA]". Row 3: "[SUA VANTAGEM]" vs "[FRAQUEZA]". All text in bold black serif or heavy sans-serif, centered in each cell. No icons, no colors, no checkmarks — the copy contrast does the work. Should feel like a meme-format comparison that would go viral on X Brasil. 1:1 aspect ratio.
```

---

### Template 32 — UGC Story com Baloes de Texto

```yaml
id: 32
category: C
name: UGC Story com Baloes de Texto
strategy_note: Foto iPhone + baloes de texto do Instagram Stories brasileiro. Educacional mas organico.
formats: ['9:16']
recommended_format: 9:16
variables:
  - key: DESCRICAO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: CENARIO
    fill: ai_copy
  - key: TOPICO + EMOJI
    fill: ai_copy
  - key: HOOK EDUCACIONAL em portugues — stat surpreendente
    fill: ai_copy
  - key: POR QUE ESTE PRODUTO — feature especifica, tom informal animado
    fill: ai_copy
  - key: RESULTADO PESSOAL — primeira pessoa, com emoji
    fill: ai_copy
  - key: ENDOSSO DA MARCA — uma frase curta
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for product color and packaging ONLY. Do NOT use ad layouts or polish. This must look like a real Brazilian person's Instagram Story. Create: a casual iPhone photo of [DESCRICAO like mao feminina com unhas naturais] holding [SEU PRODUTO] at a slight angle over [CENARIO like mesa branca com plantinhas]. Natural overhead daylight, slightly warm, iPhone 15 quality. Scattered across the frame: 5 text bubbles using Instagram Story's built-in highlighted text tool. Each bubble must have a highlighted background for readability, with varied highlight colors between bubbles. Bubble 1: "[TOPICO + EMOJI like saude intestinal planta]" large and bold. Bubble 2: "[HOOK EDUCACIONAL em portugues — stat surpreendente]". Bubble 3: "[POR QUE ESTE PRODUTO — feature especifica, tom informal animado]". Bubble 4: "[RESULTADO PESSOAL — primeira pessoa, com emoji]". Bubble 5: "[ENDOSSO DA MARCA — uma frase curta]". Should feel casual and hand-placed, not designed. 9:16 aspect ratio.
```

---

### Template 33 — Faux Materia de Portal Brasileiro

```yaml
id: 33
category: C
name: Faux Materia de Portal Brasileiro
strategy_note: Parece screenshot real de materia do G1/UOL/R7. Nao Daily Mail.
formats: ['4:5']
recommended_format: 4:5
variables:
  - key: ESTILO
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: PRECO
    fill: ai_copy
  - key: NUMERO
    fill: ai_copy
  - key: PESSOAS brasileiras
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad designed to look like a real online news article screenshot from a Brazilian portal. Top 25%: white background with a realistic major Brazilian publication masthead/logo in large bold black serif text [ESTILO like "G1" em vermelho / "UOL" em laranja / "Terra" em verde / "R7"]. Below: thin gray horizontal rule. Small gray text "Ultimas Noticias" left-aligned. Then: bold black serif headline spanning full width: "[HEADLINE like 'E meu produto santo graal': O [CATEGORIA] de R$[PRECO] com mais de [NUMERO] avaliacoes cinco estrelas]". Bottom 60%: two side-by-side casual UGC-style photos of [PESSOAS brasileiras] each holding [SEU PRODUTO] in a casual selfie pose — one taken in natural daylight, one in warm indoor evening light. Photos should look like real customer submissions, not studio shots. No brand logo. No CTA. Should look like an organic article screenshot someone would share to their Instagram Story. 4:5 aspect ratio.
```

---

### Template 34 — Faux Notas de Celular (BR — generico, nao iPhone)

```yaml
id: 34
category: C
name: Faux Notas de Celular (BR — generico, nao iPhone)
strategy_note: Samsung tem 50%+ do mercado BR. UI de notas generica, nao especificamente iOS.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: HORA
    fill: ai_copy
  - key: DATA
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: 3 LINHAS DE BENEFICIO
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: EMOJI
    fill: ai_copy
  - key: BENEFICIO 1
    fill: ai_copy
  - key: BENEFICIO 2
    fill: ai_copy
  - key: BENEFICIO 3
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: DETALHES
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and packaging precisely. Create: a static ad disguised as a phone notes app screenshot — use a generic white notes interface (not specifically iPhone). Top: simple status bar (time "[HORA]", signal bars, wifi icon, battery icon). Below: simple notes navigation with back arrow and share icon. Below nav: small gray timestamp text "[DATA like 13 Marco 2026 10:44]". Main content area on white background: bold black serif headline "[HEADLINE like Em Apenas [DOSE] Por Dia]". Below: [3 LINHAS DE BENEFICIO], each with a [COR DA MARCA] filled circle checkmark + [EMOJI] + bold black text using food-equivalency format in Portuguese: "[BENEFICIO 1 like Mais Vitamina D que 800 cogumelos]" / "[BENEFICIO 2 like Mais Folato que 4 xicaras de espinafre]" / "[BENEFICIO 3 like Mais Vitamina B1 que 7 xicaras de brocolis]". Right side, overlapping the benefit text slightly: [SEU PRODUTO] at a slight angle with [DETALHES like gomas caindo na base]. Product should feel casually placed into the note layout, breaking the frame slightly. Clean white background throughout. 1:1 aspect ratio.
```

---

### Template 35 — Produto Hero + Barra de Stats

```yaml
id: 35
category: C
name: Produto Hero + Barra de Stats
strategy_note: Produto como hero. Elementos explodidos. Stats em portugues com precos em reais.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: COR DE FUNDO
    fill: brand_dna
  - key: COR DA MARCA
    fill: brand_dna
  - key: CLAIM
    fill: ai_copy
  - key: CTA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: ELEMENTOS
    fill: ai_copy
  - key: STAT 1
    fill: ai_copy
  - key: STAT 2
    fill: ai_copy
  - key: STAT 3
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, wrapper, and brand colors precisely. Create: a product showcase ad on a [COR DE FUNDO like areia quente / bege / creme] background. Top: large bold [COR DA MARCA] uppercase sans-serif headline: "[CLAIM like O CHOCOLATE MAIS SAUDAVEL DO BRASIL]". Below headline: white rounded-rectangle CTA button with [COR DA MARCA] uppercase text "[CTA like EXPERIMENTAR AGORA]". Center: [SEU PRODUTO] in full packaging, angled slightly, hero-lit with soft studio lighting. Surrounding the product: [ELEMENTOS like pedacos de chocolate, cacau em po, ingredientes] arranged in an exploded/radial pattern creating visual energy and texture on the background surface. Bottom: a white or light rounded-pill stat bar spanning the width with three metrics separated by thin vertical lines: "[STAT 1 like 12G PROTEINA]" | "[STAT 2 like 2G ACUCAR]" | "[STAT 3 like 3G CARBOIDRATOS]" in bold [COR DA MARCA] text. Numbers should be large and dominant, labels smaller below. 1:1 aspect ratio.
```

---

### Template 36 — Quadro Branco Antes/Depois + Produto

```yaml
id: 36
category: C
name: Quadro Branco Antes/Depois + Produto
strategy_note: Quadro branco com desenho antes/depois. Produto em primeiro plano. Cenario brasileiro.
formats: ['4:5', '9:16']
recommended_format: 4:5
variables:
  - key: CENARIO
    fill: ai_copy
  - key: SUPERFICIE
    fill: ai_copy
  - key: ANTES
    fill: ai_copy
  - key: ESTADO ANTES
    fill: ai_copy
  - key: DEPOIS
    fill: ai_copy
  - key: ESTADO DEPOIS
    fill: ai_copy
  - key: CTA MANUSCRITO
    fill: ai_copy
  - key: MAO DE PESSOA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for product packaging ONLY. Do NOT use ad layouts or polish. This should look like a real person's photo. Create: a lifestyle photo set in [CENARIO like cozinha moderna brasileira com bancada de granito]. In the background: a small tabletop dry-erase whiteboard propped up on [SUPERFICIE]. On the whiteboard: two simple hand-drawn black marker line illustrations side by side — left drawing labeled "[ANTES]" showing [ESTADO ANTES like contorno de barriga inchada com pontilhado], an arrow pointing right to a second drawing labeled "[DEPOIS]" showing [ESTADO DEPOIS like contorno de barriga lisinha]. Below the drawings on the whiteboard: handwritten text in black marker "[CTA MANUSCRITO like Se voce quer resultado, precisa disso!]". In the foreground: [MAO DE PESSOA] holding [SEU PRODUTO] up next to the whiteboard, positioned in the lower-right of the frame. Product label clearly visible. Shot on iPhone, natural kitchen lighting, casual and educational. 4:5 aspect ratio.
```

---

### Template 37 — Declaracao Hero + Icones + Oferta (Promo BR)

```yaml
id: 37
category: C
name: Declaracao Hero + Icones + Oferta (Promo BR)
strategy_note: Variante promo. Background escuro. Badge starburst com datas BR (Black Friday, Dia do Consumidor).
formats: ['1:1', '9:16']
recommended_format: 1:1
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: COR ESCURA
    fill: ai_copy
  - key: DECLARACAO PROVOCATIVA
    fill: ai_copy
  - key: COR ACCENT VIBRANTE
    fill: ai_copy
  - key: DESCONTO
    fill: ai_copy
  - key: MAO DE PESSOA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: EMBALAGEM
    fill: ai_copy
  - key: ICONE 1 + LABEL
    fill: ai_copy
  - key: ICONE 2 + LABEL
    fill: ai_copy
  - key: ICONE 3 + LABEL
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: PROMO
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and brand colors precisely. Create: a promotional variant of a hero statement ad on a [BACKGROUND like carvao escuro] background. Top 12%: white or light banner with massive bold [COR ESCURA] uppercase sans-serif headline: "[DECLARACAO PROVOCATIVA like DERRETE GORDURA.]" with a period for punch. Upper-left of product area: a [COR ACCENT VIBRANTE like verde neon / lima] comic-style starburst badge rotated slightly, reading "ATE [DESCONTO like 40%] OFF" in bold black text. Center: [MAO DE PESSOA] gripping [SEU PRODUTO] from above, lifting it off its [EMBALAGEM like caixa] below. Product label and branding clearly visible. Moody, slightly dramatic lighting. Bottom 20%: three evenly spaced icon-and-text benefit columns on a semi-transparent dark strip: [ICONE 1 + LABEL] | [ICONE 2 + LABEL] | [ICONE 3 + LABEL]. Icons in simple line-art circles with [COR ACCENT] highlights. Very bottom: full-width [COR ACCENT] banner with bold [COR ESCURA] text: "[PROMO like BLACK FRIDAY ANTECIPADA / DIA DO CONSUMIDOR]". 1:1 aspect ratio.
```

---

### Template 38 — UGC Lifestyle + Produto + Review (Split BR)

```yaml
id: 38
category: C
name: UGC Lifestyle + Produto + Review (Split BR)
strategy_note: Split vertical. UGC lifestyle esquerda, review card direita.
formats: ['4:5']
recommended_format: 4:5
variables:
  - key: PESSOA brasileira
    fill: ai_copy
  - key: ACAO
    fill: ai_copy
  - key: COR PRIMARIA DA MARCA
    fill: brand_dna
  - key: COR ACCENT
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: REVIEW CURTO EM PORTUGUES
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: MARCA LOGO
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design and brand colors precisely. Create: a vertical split social proof ad. Left 55%: a casual UGC-style photo of [PESSOA brasileira like morena de 30 anos, moletom casual] enjoying the product in context — [ACAO like tomando drink gelado com canudo em cafe claro]. Natural lighting, warm and inviting, iPhone-quality casual feel. The person should look genuinely happy, not posed. Right 45%: solid [COR PRIMARIA DA MARCA] background. Top-right: small decorative sparkle/star accents in [COR ACCENT]. Floating center-right: [SEU PRODUTO] at a slight angle, studio-lit on the colored background. Below product: a white rounded-rectangle review card with: five filled [COR ACCENT] stars at top, then italic or casual serif text: "[REVIEW CURTO EM PORTUGUES like "Nunca mais compro de outra marca"]" in [COR DA MARCA]. Bottom center: [MARCA LOGO] in white on the colored background, with small decorative sparkle accents. 4:5 aspect ratio.
```

---

### Template 39 — Curiosidade + Scroll-Stopper Hook

```yaml
id: 39
category: C
name: Curiosidade + Scroll-Stopper Hook
strategy_note: Sem produto, sem logo. Pura curiosidade para ganhar o clique.
formats: ['1:1']
recommended_format: 1:1
variables:
  - key: HOOK EM PORTUGUES
    fill: ai_copy
  - key: VISUAL DO PROBLEMA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for visual tone ONLY. Do NOT include any product, logo, or branding. Create: a scroll-stopping curiosity ad designed to look like a truncated social media post. Top 35%: clean white background with large bold black sans-serif text (heavy weight, tight leading): "[HOOK EM PORTUGUES like A maioria das mulheres nao percebe que ISSO e o motivo de [PROBLEMA] mas voce sabia que...]". The last few words should be followed by "...mais" in lighter gray text, mimicking a truncated Instagram caption that requires clicking "mais" to expand. Bottom 65%: a close-up, slightly uncomfortable or attention-grabbing photo of [VISUAL DO PROBLEMA like o sintoma fisico especifico que o produto resolve]. Photo should feel real and editorial, not stock. Slightly shallow depth of field. No text on the photo. No product. No logo. No CTA. The entire purpose is to provoke curiosity and earn the click. 1:1 aspect ratio.
```

---

### Template 40 — Post-It Nativo Brasileiro

```yaml
id: 40
category: C
name: Post-It Nativo Brasileiro
strategy_note: Foto lifestyle real em cenario brasileiro. Post-it colado na embalagem. Manuscrito imperfeito. Zero polimento.
formats: ['4:5', '9:16']
recommended_format: 4:5
variables:
  - key: DESCRICAO DO PRODUTO — formato, cor, detalhes do rotulo, tipografia principal
    fill: ai_copy
  - key: CENARIO BRASILEIRO — e.g. chao de cozinha com porcelanato claro / bancada de granito com pastilhas / prateleira de banheiro com azulejo branco
    fill: ai_copy
  - key: LUZ — e.g. luz natural suave de janela lateral, quente como manha de domingo
    fill: ai_copy
  - key: DETALHES DO FUNDO — e.g. armarios da cozinha e pote de cafe / borda do espelho e suculenta
    fill: ai_copy
  - key: ESQUERDA / BAIXO / DIREITA
    fill: ai_copy
  - key: DESCRICAO COMPLETA DO PRODUTO — cores da embalagem, texto do rotulo, features visuais
    fill: ai_copy
  - key: SUPERFICIE — e.g. porcelanato bege / granito escuro / madeira rustica
    fill: ai_copy
  - key: DETALHE ESPALHADO — e.g. graos de cafe / cristais de sal / pedacos do produto
    fill: ai_copy
  - key: COR DO POST-IT — amarelo padrao
    fill: ai_copy
  - key: COR DA FITA — transparente / amarelada
    fill: ai_copy
  - key: LINHA 1 — e.g. esse aqui
    fill: ai_copy
  - key: LINHA 2 — e.g. mudou minha rotina
    fill: ai_copy
  - key: LINHA 3 — e.g. ja comprei o terceiro
    fill: ai_copy
  - key: LINHA 4 — opcional, e.g. coracao desenhado a mao
    fill: ai_copy
  - key: url da marca
    fill: ai_copy
  - key: legenda casual de 3-5 palavras em portugues
    fill: ai_copy
  - key: MOOD — 3 adjetivos
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact [DESCRICAO DO PRODUTO — formato, cor, detalhes do rotulo, tipografia principal] precisely. Create: a lifestyle product photo set in [CENARIO BRASILEIRO — e.g. chao de cozinha com porcelanato claro / bancada de granito com pastilhas / prateleira de banheiro com azulejo branco] with [LUZ — e.g. luz natural suave de janela lateral, quente como manha de domingo] and a naturally blurred background showing [DETALHES DO FUNDO — e.g. armarios da cozinha e pote de cafe / borda do espelho e suculenta]. Frame is very slightly off-center — product not perfectly centered, [ESQUERDA / BAIXO / DIREITA] edge of product very slightly cropped — feels found rather than composed. Slight natural sensor grain consistent with a phone camera in indoor daylight. Subtle natural vignette at frame corners. Center of frame, large and dominant: [DESCRICAO COMPLETA DO PRODUTO — cores da embalagem, texto do rotulo, features visuais] sitting on [SUPERFICIE — e.g. porcelanato bege / granito escuro / madeira rustica], slightly angled toward the viewer. [DETALHE ESPALHADO — e.g. graos de cafe / cristais de sal / pedacos do produto] on the surface around the base for casual realism. Stuck directly onto the front face of the product: a [COR DO POST-IT — amarelo padrao] square post-it note, slightly crooked and not perfectly straight — slightly trapezoid from the angle it was pressed on. Realistic paper texture with a horizontal crease across the middle as if it was folded once. Subtle curl at bottom-right corner only. Held at the top by a small piece of [COR DA FITA — transparente / amarelada] tape, slightly wrinkled — not a self-adhesive strip. One word in the handwriting is slightly heavier-inked or underlined from natural pen pressure. Handwritten in thick black marker-style lettering, imperfect and uneven, lowercase natural writing — not formatted, not centered, not evenly spaced: "[LINHA 1 — e.g. esse aqui]" line break "[LINHA 2 — e.g. mudou minha rotina]" line break "[LINHA 3 — e.g. ja comprei o terceiro]" line break "[LINHA 4 — opcional, e.g. coracao desenhado a mao]" No attribution line. No signature. Bottom center of frame, outside the photo on a plain white or off-white strip: small plain lowercase sans-serif caption text, looks like someone typed it under an organic post: "[url da marca] — [legenda casual de 3-5 palavras em portugues like achado do mes]" No logo overlay anywhere in the frame. Brand identity carried entirely by the product packaging visible in the photo. No border. [MOOD — 3 adjetivos like casual, autentico, acolhedor]. 4:5 aspect ratio.
```

---

### Template 41 — Localização de Linguagem Múltipla

```yaml
id: 41
category: E
name: Localização de Linguagem Múltipla
strategy_note: Um único material expandindo a cópia por países simultâneos com estética tipográfica e tipagem refinada na borda.
formats: [1:1, 4:5]
recommended_format: 4:5
variables:
- key: BACKGROUND COLOR
    fill: brand_dna
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: BRAND COLOR
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: TARGET LANGUAGE
    fill: user_input
    note: e.g. "Korean", "Arabic", "Portuguese"
  - key: OFFER LINE
    fill: ai_copy
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product colors, typography style, and brand tone precisely. Create: a split-panel static ad on a clean [BACKGROUND COLOR] background. Left panel (50%): [YOUR PRODUCT] centered, soft studio lighting, three-point softbox setup, shot at 85mm f/2.8. Right panel (50%): divided into two equal vertical halves. Upper right: bold [BRAND COLOR] sans-serif headline in English: "[HEADLINE like GLOW FROM WITHIN]". Render the same headline directly below in [TARGET LANGUAGE like Korean / Arabic / Portuguese] using the model's native multilingual text rendering — match the same visual weight and font style. Below both headlines: "[OFFER LINE]". [BRAND] logo bottom right. Ensure both language versions are legible, correctly rendered, and visually balanced. Shot on Fujifilm color science for warm skin tones. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 42 — Tipografia de Máscara (Janela)

```yaml
id: 42
category: E
name: Tipografia de Máscara (Janela)
strategy_note: Letras espessas usadas como recorte de estampa criando uma janela com fundos visíveis, retendo as esferas curiosamente.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
- key: BACKGROUND COLOR
    fill: brand_dna
  - key: POWER WORD
    fill: ai_copy
    note: Single powerful word. e.g. "GLOW", "LIFT", "BURN", "CLEAN"
  - key: PRODUCT DETAIL OR INGREDIENT
    fill: ai_copy
    note: Close-up scene visible inside the letterforms
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: SURFACE
    fill: ai_copy
  - key: CONTRAST COLOR
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a typographic poster-style ad on a solid [BACKGROUND COLOR like deep black or brand primary color] background. Center of frame: a single oversized bold word — "[POWER WORD like GLOW / LIFT / BURN / CLEAN]" — spelled out in massive all-caps letters, filling 70% of the frame width. The letters act as cut-out windows: through the letterforms, render a photorealistic close-up of [PRODUCT DETAIL OR INGREDIENT like golden honey dripping / fresh citrus slices / glowing skin texture]. The background behind the letters remains the solid [BACKGROUND COLOR]. Below the large typographic word: [YOUR PRODUCT] in small format, clean on [SURFACE], soft studio light. [BRAND] logo bottom right in [CONTRAST COLOR]. Clean, bold, editorial. Shot on medium-format film aesthetic. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 43 — Fusão de Ambiente Global

```yaml
id: 43
category: E
name: Fusão de Ambiente Global
strategy_note: Integra o produto no mood sem sessões criativas na gringa em locação presencial. Perfeito para internacionalização de moodboards.
formats: [4:5, 9:16, 1:1]
recommended_format: 4:5
variables:
- key: NEW ENVIRONMENT
    fill: user_input
    note: e.g. "sun-drenched Mediterranean kitchen counter", "minimalist Tokyo bathroom shelf"
  - key: PERSON ELEMENT
    fill: ai_copy
    note: e.g. "a woman's hand reaching for the product"
  - key: DETAIL
    fill: ai_copy
    note: e.g. "a cashmere sleeve, natural nails"
  - key: YOUR PRODUCT
    fill: brand_dna
```

**Prompt:**
```
Using the attached reference images: [IMAGE 1 = product front], [IMAGE 2 = product back or label detail], [IMAGE 3 = brand color / logo reference], [IMAGE 4 = lifestyle mood reference — optional]. Maintain the exact product appearance, label typography, and packaging colors from the reference images. Create: a lifestyle composite ad where [YOUR PRODUCT] appears naturally placed in [NEW ENVIRONMENT like a sun-drenched Mediterranean kitchen counter / a minimalist Tokyo bathroom shelf]. The product should look as if it was photographed in that environment — matching the ambient light, surface texture, and perspective. [PERSON ELEMENT like a woman's hand reaching for the product] in [DETAIL like a cashmere sleeve, natural nails]. Shot on 50mm f/1.8, golden hour warm light, cinematic color grade with warm highlights and cool shadows. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 44 — Nostalgia Geração Y2K

```yaml
id: 44
category: E
name: Nostalgia Geração Y2K
strategy_note: Estética de flash barato, imperfeito que alavanca virais instantâneos e atrai o jovem em seus desejos íntimos via saudosidade crua.
formats: [1:1, 9:16]
recommended_format: 9:16
variables:
- key: PERSON DESCRIPTION
    fill: ai_copy
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: ENVIRONMENT
    fill: user_input
    note: e.g. "a house party", "a beach", "a parking lot at night"
```

**Prompt:**
```
Use the attached images as brand reference for product colors and packaging ONLY. This must NOT look like a professional ad. Create: a photo that appears taken on a cheap 35mm disposable camera from the early 2000s. [PERSON DESCRIPTION like two young women in casual outfits, laughing] holding [YOUR PRODUCT] in a casual social setting [ENVIRONMENT like a house party, a beach, a parking lot at night]. Aesthetic hallmarks: harsh direct flash causing slight face overexposure, heavy film grain and noise, slight color shift toward warm yellow-red, low dynamic range with crushed blacks, slight chromatic aberration at frame edges, thin white film border around the entire image. [YOUR PRODUCT] is clearly visible but casually held — not posed. No text overlay. No logo. The product presence IS the brand moment. Slightly off-kilter framing as if taken quickly. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 45 — Editorial Dramático (Modo Escuro)

```yaml
id: 45
category: E
name: Editorial Dramático (Modo Escuro)
strategy_note: Alto contraste escurecendo todo o palco em foco pro premium. Joias e Skincare e alta perfumaria se beneficiam pela excelência absoluta.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
- key: BACKGROUND
    fill: brand_dna
    note: Near-black — deep charcoal or true black
  - key: DIRECTION
    fill: ai_copy
    note: e.g. "upper-left", "45-degree side angle"
  - key: SURFACE ELEMENT
    fill: ai_copy
    note: e.g. "a hand", "a marble ledge", "a swatch of fabric"
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: PREMIUM CLAIM
    fill: ai_copy
    note: Quiet luxury tone. e.g. "Crafted for those who know the difference."
```

**Prompt:**
```
Use the attached images as brand reference. Match exact product design and brand colors precisely. Create: a high-fashion editorial ad on a near-black background [BACKGROUND like deep charcoal or true black]. Lighting: chiaroscuro — a single hard light source from [DIRECTION like upper-left or 45-degree side angle] creating deep shadows on 60% of the frame and illuminating only the product and [SURFACE ELEMENT like a hand, a marble ledge, a swatch of fabric]. [YOUR PRODUCT] positioned center-right, angled to catch the light dramatically. Product label should be partially in light, partially in shadow, creating depth. Top left: [BRAND] logo in white, small. Bottom third: bold serif or condensed sans-serif headline in white: "[PREMIUM CLAIM like Crafted for those who know the difference.]". No icons. No stats. No reviews. Mood: powerful, quiet luxury, self-assured. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 46 — Close Up em Texturas Intensas

```yaml
id: 46
category: E
name: Close Up em Texturas Intensas
strategy_note: O foco macro amplia o desejo sensorial das comidas antes da palavra ser lida atraindo instintos básicos de sobrevivência primais.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
- key: KEY INGREDIENT OR TEXTURE
    fill: user_input
    note: e.g. "raw cacao powder", "sea salt crystals", "fresh citrus zest"
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: INGREDIENT CLAIM
    fill: user_input
    note: e.g. "100% cold-pressed", "sourced from Pacific Northwest waters"
  - key: BRAND TAGLINE OR PRODUCT NAME
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact product brand colors and tone. Create: a macro photography ad. Primary frame: extreme close-up (macro lens, f/2.8) of [KEY INGREDIENT OR TEXTURE like raw cacao powder / sea salt crystals / fresh citrus zest] filling 80% of the frame. Lighting: soft raking side light revealing every micro-texture. Color grade: rich and saturated, true-to-life. In the lower-right corner, [YOUR PRODUCT] sits at the edge of frame, in soft focus but clearly identifiable. Overlaid on the macro texture: bold white sans-serif text "[INGREDIENT CLAIM like 100% cold-pressed / sourced from [ORIGIN]]". Below: a second smaller line in white: "[BRAND TAGLINE OR PRODUCT NAME]". [BRAND] logo top right in white. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 47 — Lifestyle sem Textos (Golden Hour)

```yaml
id: 47
category: E
name: Lifestyle sem Textos (Golden Hour)
strategy_note: Contra-lux nas sombras prolongadas mostrando a vivência sem interrupções letradas. Seus clientes vão clicar de tanta vontade real.
formats: [9:16, 4:5]
recommended_format: 4:5
variables:
- key: PERSON DESCRIPTION
    fill: ai_copy
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: OUTDOOR SETTING
    fill: user_input
    note: e.g. "a rooftop terrace", "a coastal cliff path", "an open-air market"
  - key: BRAND
    fill: brand_dna
  - key: MOOD
    fill: brand_dna
    note: 3 adjectives from tone_adjectives
```

**Prompt:**
```
Use the attached images as brand reference. Match exact product design and packaging precisely. Create: a lifestyle ad shot in golden hour natural light — sun position at approximately 10–15 degrees above the horizon, creating warm orange-amber backlighting and long foreground shadows. [PERSON DESCRIPTION like a woman in her 30s in a linen shirt and jeans] using or holding [YOUR PRODUCT] in [OUTDOOR SETTING like a rooftop terrace / a coastal cliff path / an open-air market]. Shot on 85mm f/1.4 — subject sharp, background and foreground in soft warm bokeh. Color grade: warm highlights (amber-gold), cool-neutral shadows, no desaturation. [BRAND] logo in white, top left, small. No headline text — the lifestyle moment IS the message. Mood: [MOOD like effortless, aspirational, grounded]. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 48 — Transferência Artística (Editoriais)

```yaml
id: 48
category: E
name: Transferência Artística (Editoriais)
strategy_note: Transferência referencial e arte conceitual aplicadas via prompts com peso brutal estético na campanha anual perene sem prazo limítrofe.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
- key: EDITORIAL STYLE
    fill: user_input
    note: e.g. "Vogue Beauty editorial", "Kinfolk magazine", "Hypebeast product drop", "Taschen art book"
  - key: STYLE DETAILS
    fill: ai_copy
    note: Production aesthetic details that match the editorial style
  - key: BRAND
    fill: brand_dna
  - key: FONT STYLE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Using the product images as the subject reference, recreate them in the visual style of [EDITORIAL STYLE like Vogue Beauty editorial / Kinfolk magazine / Hypebeast product drop / Taschen art book]. The product must remain visually accurate and clearly identifiable. What changes is the production aesthetic: [STYLE DETAILS like extreme minimalism with 80% negative space and a single product on raw concrete / lush maximalist florals with the product half-buried in botanicals]. Typography: headline in [FONT STYLE like condensed serif] reading "[BRAND + PRODUCT NAME]", small, bottom left. No stats. No reviews. Pure brand positioning. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 49 — Emulação Filme (Fuji Analógica)

```yaml
id: 49
category: E
name: Emulação Filme (Fuji Analógica)
strategy_note: Estudos de filme Fujifilm X100VI trazem texturas táteis pro cotidiano eliminando publicidade comum.
formats: [1:1, 9:16]
recommended_format: 1:1
variables:
- key: PERSON OR HANDS
    fill: ai_copy
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: EVERYDAY SETTING
    fill: user_input
    note: e.g. "a Sunday morning kitchen", "a bathroom vanity", "an afternoon in the garden"
  - key: FILM SIMULATION
    fill: user_input
    note: "Provia/Standard" (true color), "Classic Chrome" (faded analog), "Velvia" (rich saturation)
```

**Prompt:**
```
Use the attached images as brand reference for product color and packaging ONLY. This should feel like a real photo from someone's life, not an ad. Create: a candid lifestyle moment of [PERSON OR HANDS — real, imperfect, warm] interacting with [YOUR PRODUCT] in [EVERYDAY SETTING like a Sunday morning kitchen, a bathroom vanity, an afternoon in the garden]. Shot on Fujifilm X100VI (or equivalent film simulation: [FILM SIMULATION like Provia/Standard for true color, Classic Chrome for faded analog warmth, Velvia for rich saturation]). Key aesthetic markers: natural window light as primary source, no flash, gentle film grain at ISO 800–1600, gentle halation on highlights, correct skin tone rendering without artificial warmth boost, slight vignette. The product sits naturally in the scene — used, not displayed. No text. No logo. No borders. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 50 — Troca Semântica no Feed do Usuário

```yaml
id: 50
category: E
name: Troca Semântica no Feed do Usuário
strategy_note: Uso com cenários base para substituição natural ao lifestyle local eliminando custos astronômicos.
formats: [1:1, 4:5, 9:16]
recommended_format: 4:5
variables:
- key: USER LIFESTYLE PHOTO
    fill: user_input
    note: User uploads their own photo — this template requires an extra reference image
  - key: EXISTING PRODUCT
    fill: user_input
    note: Description of the object to replace. e.g. "a competitor coffee cup", "a generic supplement bottle"
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: EXACT LABEL TEXT
    fill: brand_dna
    note: Key label text that must be readable in the output
```

**Prompt:**
```
Reference image provided: [USER'S LIFESTYLE PHOTO — attached]. Using this photo as the base scene, maintain everything in the image exactly as it appears: the person, their pose, the environment, the lighting, the color grade, the background. Using semantic masking and inpainting: replace [EXISTING PRODUCT in the photo, e.g. a competitor's coffee cup / a generic supplement bottle] with [YOUR PRODUCT — described exactly: packaging shape, label color, key label text, product dimensions relative to the hand holding it]. The replacement product must match the perspective, lighting angle, and surface contact of the original object. The product label text should read: "[EXACT LABEL TEXT]". The result should look like [YOUR PRODUCT] was always in the original photo — not composited in. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 51 — A Citação do Fundador

```yaml
id: 51
category: F
name: A Citação do Fundador
strategy_note: O rosto é igual a total transparência. Use no tráfego morno contando por que o produto nasceu das suas dores pessoais internas.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
- key: FOUNDER DESCRIPTION
    fill: user_input
    note: e.g. "a man in his 40s, confident but approachable, business casual"
  - key: BRAND COLOR
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: FOUNDER QUOTE
    fill: user_input
    note: Direct, specific, personal — 10–20 words
  - key: FOUNDER NAME
    fill: user_input
  - key: TITLE
    fill: user_input
    note: e.g. "Founder & CEO"
  - key: YOUR PRODUCT
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a founder-forward ad. Left 45%: a candid-style portrait photo of [FOUNDER DESCRIPTION like a man in his 40s, confident but approachable, business casual, slight smile] — shot on 50mm f/1.8, soft studio light, warm neutral background. This should feel like a LinkedIn profile photo, not a stock photo. Right 55%: clean [BRAND COLOR] background. Top: small "[BRAND] Founder" label in light sans-serif. Center: large italic serif pull-quote in white: "[FOUNDER QUOTE — direct, specific, personal — 10-20 words]". Below the quote: [FOUNDER NAME] in bold, [TITLE] below in light weight. Bottom: [YOUR PRODUCT] small, at the very base of the right panel. [BRAND] logo top-right corner. Mood: direct, human, trustworthy. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 52 — Urgência Visual Absoluta

```yaml
id: 52
category: F
name: Urgência Visual Absoluta
strategy_note: A escassez real cria viscerabilidade através das métricas claras como ponteiros ou avisos decrescentes contundindo com força.
formats: [9:16, 4:5]
recommended_format: 9:16
variables:
- key: DEEP BRAND COLOR
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: TIME
    fill: user_input
    note: e.g. "23:47:12"
  - key: BRIGHT ACCENT COLOR
    fill: brand_dna
  - key: OFFER HEADLINE
    fill: ai_copy
    note: e.g. "FLASH SALE ENDS IN:"
  - key: OFFER DETAILS
    fill: user_input
    note: e.g. "40% off — today only"
  - key: CTA
    fill: ai_copy
    note: e.g. "GRAB YOURS NOW →"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and packaging. Create: an urgency-driven ad. Background: [DEEP BRAND COLOR like rich navy or forest green]. Top: [BRAND] logo centered in white. Center: [YOUR PRODUCT] studio-lit, clean on dark background, slight warm spotlight from above. Overlaid prominently on the product area: a large digital countdown display reading "[TIME LIKE 23:47:12]" in bold monospace numerals in [BRIGHT ACCENT COLOR like electric yellow or coral red], styled like a real digital timer. Below the timer: bold white uppercase sans-serif: "[OFFER HEADLINE like FLASH SALE ENDS IN:]". Below product: white text "[OFFER DETAILS like 40% off — today only]". Bottom: full-width [ACCENT COLOR] bar with bold dark text: "[CTA like GRAB YOURS NOW →]". [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 53 — Mapa Radical de Ingredientes

```yaml
id: 53
category: F
name: Mapa Radical de Ingredientes
strategy_note: Rótulos limpos detalhando por de onde o lote procede para conquistar lealdade na alimentação natural ou no universo fitness contemporâneo.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
- key: YOUR PRODUCT
    fill: brand_dna
  - key: INGREDIENT 1-6
    fill: user_input
    note: Real ingredient names with source/benefit
  - key: SOURCE/BENEFIT 1-6
    fill: user_input
  - key: BRAND
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
    note: e.g. "Every ingredient. Explained."
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact product design and brand colors. Create: an ingredient transparency ad on a clean white or off-white background. Center: [YOUR PRODUCT] open or with lid off, studio-lit, overhead or slight 3/4 angle at 85mm f/4. Surrounding the product in a radial arrangement: 5–6 ingredient callouts. Each callout consists of: a small circular illustration or icon representing the ingredient, bold [BRAND COLOR] text for the ingredient name "[INGREDIENT like Wild Alaskan Salmon]", and one line of small regular text showing source/benefit "[SOURCE/BENEFIT like caught in Pacific Northwest waters / 2,400mg Omega-3]". Callouts connected to the product with thin [BRAND COLOR] leader lines (0.5pt). Top: [BRAND] logo + headline "[HEADLINE like Every ingredient. Explained.]". Bottom: "[WEBSITE]" in small caps. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 54 — Espelho do Problema e A Solução

```yaml
id: 54
category: F
name: Espelho do Problema e A Solução
strategy_note: Esquerda antes e direita os ganhos depois. Contraste puro sem marcações corporativas pra elevar ao extremo a dissonância pessoal diária.
formats: [1:1, 4:5]
recommended_format: 4:5
variables:
- key: PERSON
    fill: ai_copy
  - key: PROBLEM STATE
    fill: ai_copy
    note: Tired, dull, overwhelmed — specific to the brand's category
  - key: PROBLEM LABEL
    fill: ai_copy
    note: e.g. "Before"
  - key: AFTER STATE
    fill: ai_copy
    note: Energized, glowing, confident
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: RESULT LABEL
    fill: ai_copy
    note: e.g. "After 8 weeks"
  - key: BRAND
    fill: brand_dna
  - key: BRAND TAGLINE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a split-panel transformation ad. Hard vertical divide at center. LEFT PANEL: dark, desaturated, slightly underexposed. [PERSON like a woman in her 40s] showing [PROBLEM STATE like tired expression, dull skin, overwhelmed posture]. Text overlay at top in white: "[PROBLEM LABEL like Before]". Lighting: flat, harsh, unflattering. RIGHT PANEL: same person, same frame composition — but bright, saturated, warm. [AFTER STATE like energized expression, glowing skin, confident posture]. [YOUR PRODUCT] visible in the right panel on a nearby surface. Text overlay at top: "[RESULT LABEL like After 8 weeks]". Bottom center, spanning both panels: [BRAND] logo + "[BRAND TAGLINE]". No arrows. The visual contrast is the argument. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 55 — Kits Completos Visualmente Amplos

```yaml
id: 55
category: F
name: Kits Completos Visualmente Amplos
strategy_note: Arranjos espalhados no chão entregam percepções vastas de entrega superior infundidas numa lógica super acessível comparada.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
- key: CLEAN SURFACE
    fill: ai_copy
    note: e.g. "white marble", "light oak wood", "warm cream linen"
  - key: PRODUCT 1-5
    fill: user_input
    note: Describe each product in the bundle
  - key: LIFESTYLE PROPS
    fill: ai_copy
  - key: BRAND COLOR
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
    note: e.g. "Everything you need. Nothing you don't."
  - key: BRAND
    fill: brand_dna
  - key: BUNDLE OFFER
    fill: user_input
    note: e.g. "The Starter Kit — save 20%"
  - key: ACCENT COLOR
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match the exact product design, colors, and brand tone. Create: a bundle showcase ad. Background: [CLEAN SURFACE like white marble / light oak wood / warm cream linen]. Center: a curated flat lay arrangement of [NUMBER like 3–5] products from [BRAND]'s range, artfully arranged — not a grid, but an organic editorial layout as if styled by a prop stylist. Products shown: [PRODUCT 1], [PRODUCT 2], [PRODUCT 3]. Scattered between products: [LIFESTYLE PROPS like fresh botanicals / ingredients / brand-colored ribbon / tissue paper from a gift box]. Shot overhead at 50mm, soft even diffused light, no harsh shadows. Top: bold [BRAND COLOR] headline "[HEADLINE like Everything you need. Nothing you don't.]". Bottom: [BRAND] logo + "[BUNDLE OFFER like The [NAME] Kit — save [X]%]". CTA button: rounded pill in [ACCENT COLOR] reading "[CTA like Shop the Bundle]". [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 56 — Mimetismo Dueto Social

```yaml
id: 56
category: F
name: Mimetismo Dueto Social
strategy_note: As interfaces divididas por um receptor das redes no gancho mantem os expectadores para desvendarem a métrica proposta curiosa do post.
formats: [9:16, 4:5]
recommended_format: 9:16
variables:
- key: PRODUCT USE
    fill: brand_dna
    note: Product being used/unboxed/reviewed on the screen
  - key: PERSON
    fill: ai_copy
    note: Gen Z-coded, casual outfit, relatable
  - key: GENUINE REACTION EXPRESSION
    fill: ai_copy
    note: e.g. "wide eyes and slight open mouth of surprise", "laughing", "nodding slowly"
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. This must NOT look like a paid ad. Create: a TikTok Duet-style static frame. LEFT half (60%): a phone or tablet screen showing a close-up video frame of [PRODUCT USE like product being used / unboxed / reviewed] — the screen should have TikTok UI elements faintly visible (username, hearts, share icon) along the right edge. RIGHT half (40%): [PERSON like a young man or woman, Gen Z-coded, casual outfit] reacting to the screen they're watching. Reaction: [GENUINE REACTION EXPRESSION like wide eyes and slight open mouth of surprise / laughing / nodding slowly in recognition]. Shot on iPhone front camera quality. The person's face is lit by the screen light (slightly cool, flickering-screen quality). No headline text. No brand logo in frame. The product is only visible on the phone screen. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 57 — Pura Conscientização Ambiental

```yaml
id: 57
category: F
name: Pura Conscientização Ambiental
strategy_note: A emoção é a própria campanha em alto padrão brand. Sentimento e essência transmutam lógicas mercenárias pra conexões vitalícias orgânicas e densas.
formats: [4:5, 16:9]
recommended_format: 4:5
variables:
- key: SCENE DESCRIPTION
    fill: user_input
    note: A mood-setting scene that embodies the brand's core value
  - key: BRAND VALUE
    fill: brand_dna
    note: e.g. "simplicity", "vitality", "belonging", "clarity"
  - key: CAMERA AESTHETIC
    fill: ai_copy
  - key: COLOR MOOD
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: BRAND PHILOSOPHY LINE
    fill: ai_copy
    note: Optional. One line of light-weight serif italic copy.
```

**Prompt:**
```
Use the attached images as brand reference for color palette and tone ONLY. Do NOT include the product in this ad. Create: a pure brand moment — a [SCENE DESCRIPTION like slow morning light through linen curtains over a kitchen table] that embodies the feeling of [BRAND VALUE like simplicity / vitality / belonging / clarity]. Shot on [CAMERA AESTHETIC like Fujifilm Provia film simulation / 1970s Kodachrome / Leica M11 natural rendering]. Color grade: [COLOR MOOD like warm amber and cream with deep brown shadows / cool blue-grey with silver highlights]. No people. No product. The only text: [BRAND] logo in [LOGO COLOR], bottom center, small and unhurried. Optional: one line of brand copy in light-weight serif italic: "[BRAND PHILOSOPHY LINE like Made for moments that matter.]". [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 58 — Ancoragem Diária Extrema

```yaml
id: 58
category: F
name: Ancoragem Diária Extrema
strategy_note: Distorcer os aportes mensais no escopo trivial faz com que custos diários pareçam irrisórios ao comparativo da perca ao se abdicar do clique principal em vigor ali agora.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
- key: BACKGROUND
    fill: brand_dna
  - key: PRICE COMPARISON HOOK
    fill: ai_copy
    note: e.g. "Less than your daily coffee."
  - key: COMPETITOR OR EVERYDAY ITEM
    fill: ai_copy
    note: e.g. "a latte cup"
  - key: COMPETITOR PRICE
    fill: user_input
  - key: BRAND COLOR
    fill: brand_dna
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: YOUR PRICE
    fill: user_input
  - key: VALUE STATEMENT
    fill: ai_copy
  - key: CTA
    fill: ai_copy
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact product design and brand colors. Create: a price-anchoring ad on a clean [BACKGROUND like white or light brand color] background. Top: large bold black sans-serif headline: "[PRICE COMPARISON HOOK like Less than your daily coffee.]". Below: a visual comparison showing two items side by side. Left item: [COMPETITOR OR EVERYDAY ITEM like a latte cup] labeled "$[COMPETITOR PRICE] / day" in bold black. Between them: a bold "vs" in [BRAND COLOR]. Right item: [YOUR PRODUCT] labeled "$[YOUR PRICE] / day" in bold [BRAND COLOR]. Below: regular weight sans-serif text: "[VALUE STATEMENT]". Bottom: a rounded [BRAND COLOR] CTA button: "[CTA like Start for $[PRICE] →]". [BRAND] logo top right, small. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 59 — Cultura Nativa & Humor Leve

```yaml
id: 59
category: F
name: Cultura Nativa & Humor Leve
strategy_note: Usa o sarcasmo atualizado dos formatos na web pra conquistar organicamente audiências esgotadas evitando super-exposição forçosa na plataforma toda vez ali imposta em feed infinito da vida digital moderna das pessoas.
formats: [1:1]
recommended_format: 1:1
variables:
- key: MEME FORMAT
    fill: user_input
    note: e.g. "Distracted Boyfriend", "Drake Pointing", "Expanding Brain", "Gru's Plan"
  - key: ELEMENT A
    fill: ai_copy
    note: What the boyfriend/Drake/character represents — your product
  - key: ELEMENT B
    fill: ai_copy
    note: What the girlfriend represents — competitor or problem behavior
  - key: ELEMENT C
    fill: ai_copy
    note: What the other woman represents — your product benefit
  - key: TOP TEXT
    fill: ai_copy
  - key: BOTTOM TEXT
    fill: ai_copy
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. The visual format must feel completely native to current internet culture. Create: a meme-style static image using the [MEME FORMAT like 'Distracted Boyfriend' / 'Drake Pointing' / 'Expanding Brain' / 'Gru's Plan']. In this meme: [ELEMENT A] represents your product. [ELEMENT B] represents [competitor or problem behavior]. [ELEMENT C] represents [product benefit]. Keep the classic meme visual structure intact — don't overproduce it. Add the meme-format bold white text with black outline (Impact font style) in the traditional positions: top text reads "[TOP TEXT]", bottom text reads "[BOTTOM TEXT]". Very bottom: tiny [BRAND] logo or watermark, barely visible. Authentic meme quality — do not make it look polished. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 60 — Ato Único Cinematográfico

```yaml
id: 60
category: F
name: Ato Único Cinematográfico
strategy_note: Uma paralisação frame a frame de cena de filmes propostos, com alto contraste e direção fotográfica na excelência suprema das objetivas no luxo global da propaganda impressa para TV em mídias online fixas temporais ali postadas no scroll contínuo e letárgico dos usuários.
formats: [4:5, 16:9]
recommended_format: 4:5
variables:
- key: CINEMATIC SCENE DESCRIPTION
    fill: user_input
    note: Rich scene description with person, setting, mood, and lighting
  - key: YOUR PRODUCT
    fill: brand_dna
  - key: HOW PRODUCT APPEARS
    fill: ai_copy
    note: e.g. "on the windowsill in the foreground", "in the open backpack", "held at the edge of frame"
  - key: BRAND
    fill: brand_dna
  - key: SHORT BRAND LINE
    fill: ai_copy
    note: Quiet, lowercase, poetic. e.g. "for those who go further"
```

**Prompt:**
```
Use the attached images as brand reference for color and product. Create: a cinematic single-frame static that feels like a still from a short film. Scene: [CINEMATIC SCENE DESCRIPTION like a woman standing alone at a rain-soaked window at night, city lights blurred behind her, holding a small glass bottle that catches the light]. Cinematography: anamorphic wide-angle lens (2.39:1 crop ratio), depth of field with razor-sharp subject and fully blurred background, cinematic teal-and-orange color grade (shadows lean teal, highlights lean warm amber). Your product appears in the frame: [HOW PRODUCT APPEARS like on the windowsill in the foreground / in the open backpack / being held at the edge of frame]. The product must be recognizable but secondary to the mood. Bottom third: in a clean thin sans-serif, all lowercase: "[BRAND] — [SHORT BRAND LINE like for those who go further]". No stats. No reviews. This is pure cinematic brand positioning. [FORMAT] aspect ratio.

[ADAPTACAO BRASIL APLICADA: Textos em portugues, cenarios brasileiros, precos em reais.]
```

---

### Template 61 — Print de Conversa de WhatsApp

```yaml
id: 61
category: G
name: Print de Conversa de WhatsApp
strategy_note: O formato de prova social MAIS PODEROSO do Brasil. Print de Zap = verdade absoluta.
formats: ['9:16', '4:5']
recommended_format: 9:16
variables:
  - key: DESCRICAO
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: MENSAGEM 1
    fill: ai_copy
  - key: RESPOSTA 1
    fill: ai_copy
  - key: MENSAGEM 2
    fill: ai_copy
  - key: RESPOSTA 2
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: MARCA
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. This must look like a real WhatsApp conversation screenshot. Create: the standard WhatsApp mobile chat interface on light beige (#ECE5DD) chat background with the subtle default doodle pattern. Top: WhatsApp header bar in dark green (#075E54) with back arrow, circular contact photo of [DESCRICAO like mulher sorridente, 30 anos, morena], contact name "[NOME like Ana Paula]" in white, "online" in small green text. Chat bubbles in natural conversation flow: INCOMING (white bubble, left-aligned): "[MENSAGEM 1 like Meninaaa o que vc ta usando na pele?? Ta MUITO diferente]". OUTGOING (green #DCF8C6 bubble, right-aligned): "[RESPOSTA 1 like Gente e o [PRODUTO]!! To usando faz 1 mes e to apaixonada]" with blue double checkmarks. INCOMING: "[MENSAGEM 2 like Serio?? Manda o link!]". OUTGOING: "[RESPOSTA 2 like Te mandei! Compra pelo site que tem desconto no Pix]" with blue checkmarks. OUTGOING: a photo message bubble showing [SEU PRODUTO] casually photographed on a surface, slightly tilted, WhatsApp-compressed quality. Below the chat: thin white strip with small sans-serif: "[MARCA] — [CTA like quer o mesmo resultado? link na bio]". No brand logo. No design elements. Must look like a real forwarded screenshot. 9:16 aspect ratio.
```

---

### Template 62 — Oferta Pix com Badge de Desconto

```yaml
id: 62
category: G
name: Oferta Pix com Badge de Desconto
strategy_note: Gatilho de conversao exclusivo do Brasil. Icone Pix tem reconhecimento instantaneo.
formats: ['4:5', '1:1', '9:16']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO DA MARCA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: COR CONTRASTE
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: COR PIX
    fill: ai_copy
  - key: DESCONTO
    fill: ai_copy
  - key: PRECO ORIGINAL
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: PRECO PIX
    fill: ai_copy
  - key: PARCELAS
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
  - key: VALUE ADDS
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a promotional ad on [COR DE FUNDO DA MARCA] background. Center: [SEU PRODUTO] hero-lit, soft studio lighting, shot at 50mm f/2.8. Upper area: large bold [COR CONTRASTE] sans-serif "[HEADLINE like OFERTA ESPECIAL PIX]". Upper-right of product: a circular badge in [COR PIX like turquesa #32BCAD] with a simplified Pix diamond icon and bold text "[DESCONTO like 15% OFF NO PIX]", rotated 5-8 degrees for dynamism. Below product: "De R$[PRECO ORIGINAL]" in strikethrough, then massive bold [COR DA MARCA] "R$[PRECO PIX]", then "ou [PARCELAS like 12x de R$15,82] sem juros no cartao" in smaller text. Bottom: rounded [COR ACCENT] CTA button "[CTA like COMPRAR COM PIX]". Below CTA: small gray text "[VALUE ADDS like Frete Gratis · Entrega em 3 dias · Troca garantida]". [MARCA] logo bottom right. 4:5 aspect ratio.
```

---

### Template 63 — Carrossel Antes & Depois (Frame Unico)

```yaml
id: 63
category: G
name: Carrossel Antes & Depois (Frame Unico)
strategy_note: Simula primeiro frame de carrossel do Instagram. Seta de "arraste" cria interacao mental.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: ESTADO ANTES
    fill: ai_copy
  - key: ESTADO DEPOIS
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad that looks like the first slide of an Instagram carousel. Left 45%: [ESTADO ANTES] with slightly desaturated, cool-toned color grade. Right 45%: [ESTADO DEPOIS] with warm, vibrant color grade. Between the two: a thin white vertical line with a circular white button containing a right-pointing arrow icon, as if inviting the viewer to swipe. Top: bold white sans-serif "[HEADLINE like 30 Dias de [MARCA]]". Bottom left on the ANTES side: white text "ANTES". Bottom right on the DEPOIS side: white text "DEPOIS". Very bottom: small text "Arraste para ver mais resultados >>>" in white with arrow. [SEU PRODUTO] small in the bottom-right corner of the DEPOIS side. Shot with warm natural lighting on the DEPOIS side, flat harsh lighting on the ANTES side. 4:5 aspect ratio.
```

---

### Template 64 — Nota do Reclame Aqui como Prova Social

```yaml
id: 64
category: G
name: Nota do Reclame Aqui como Prova Social
strategy_note: Reclame Aqui e o Trustpilot do Brasil — mas com MUITO mais peso. Nota RA + selo "Otimo" = trust #1.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: NOTA
    fill: ai_copy
  - key: STATUS
    fill: ai_copy
  - key: METRICAS
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: SITE
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a trust-driven ad on clean white background. Top: bold [COR DA MARCA] sans-serif "[HEADLINE like Por Que Mais de 500 Mil Brasileiros Confiam Na [MARCA]]". Center-left: [SEU PRODUTO] at slight angle, studio-lit, 85mm f/2.8. Center-right: a realistic Reclame Aqui review card — white rectangle with subtle shadow containing: green RA logo icon at top, large bold green text "[NOTA like 8.7]" with a green badge reading "[STATUS like OTIMO]" in bold white, below in smaller text: "[METRICAS like Reclamacoes respondidas: 98% | Voltariam a fazer negocio: 95% | Nota do consumidor: 8.9/10]" each with a small green bar. Below the card: three small one-line customer review snippets with star ratings in Portuguese. Bottom: [MARCA] logo + "[SITE]". No CTA button — the trust metrics ARE the conversion. 4:5 aspect ratio.
```

---

### Template 65 — Tela de Produto E-commerce Moderna

```yaml
id: 65
category: G
name: Tela de Produto E-commerce Moderna
strategy_note: Simula uma página de produto clean e de alta conversão. A familiaridade com a UI de compra digital traz confiança imediata.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DA MARCA
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PRECO
    fill: ai_copy
  - key: PARCELAS
    fill: ai_copy
  - key: NUMERO
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: STATUS
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad that mimics a modern, generic e-commerce product page. Top: simplified storefront header bar with a small search field and a shopping cart icon. Below: [SEU PRODUTO] large product photo centered on a clean white studio background. To the right or below (depending on aspect ratio): large bold solid text "R$[PRECO]" with an accent badge "[PARCELAS like 12x R$9,90 sem juros]". Below price: small green text "Frete grátis" with a delivery truck icon. Star rating: [NUMERO] filled gold stars with "([CONTAGEM] avaliações)". Text "Vendido por [MARCA]" with a verified checkmark and "[STATUS like Loja Oficial]" in green. Below: prominent CTA button "Comprar agora" in [COR DA MARCA] or a high-contrast accent color. The entire layout should feel like a perfectly designed, high-converting checkout/product page interface. Do NOT use specific marketplace colors (like yellow or orange) unless they are the actual [COR DA MARCA]. 4:5 aspect ratio.
```

---

### Template 66 — Stories Poll / Enquete do Instagram

```yaml
id: 66
category: G
name: Stories Poll / Enquete do Instagram
strategy_note: Simula enquete do Instagram Stories. Engajamento mental mesmo em static.
formats: ['9:16']
recommended_format: 9:16
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: PERGUNTA
    fill: ai_copy
  - key: OPCAO A
    fill: ai_copy
  - key: PERCENTUAL
    fill: ai_copy
  - key: OPCAO B
    fill: ai_copy
  - key: TEXTO
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. Must look like a real Instagram Story. Create: a full-screen Story with [BACKGROUND like foto casual do produto em cenario lifestyle, levemente desfocada]. Overlaid in center: Instagram Stories Poll sticker — white rounded rectangle containing: bold text "[PERGUNTA like Qual sabor voce quer que volte?]" at top, below two large poll option buttons: left "[OPCAO A like Morango]" with [PERCENTUAL like 67%] showing as a colored fill bar, right "[OPCAO B like Chocolate]" with [PERCENTUAL like 33%]. Poll should look already answered. Above the poll: casual white Stories text "[TEXTO like Votacao oficial! Ultimo dia]". Below: small "Ver resultados" text. Product casually visible in background. 9:16 aspect ratio.
```

---

### Template 67 — Parcelamento Visual — Preco Desmembrado

```yaml
id: 67
category: G
name: Parcelamento Visual — Preco Desmembrado
strategy_note: O brasileiro compra pela parcela. O numero da parcela e o MAIOR elemento na tela.
formats: ['4:5', '1:1', '9:16']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PRECO TOTAL
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: PARCELA
    fill: ai_copy
  - key: PRECO PIX
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a price-breakdown ad on [COR DE FUNDO]. Center: [SEU PRODUTO] hero-lit at 50mm f/2.8. Above the product: original price "R$[PRECO TOTAL like 299,90]" in medium-weight dark text with a subtle strikethrough line. Below the product, prominently: "12x de" in smaller [COR DA MARCA] text above "R$[PARCELA like 24,99]" in MASSIVE bold [COR DA MARCA] — the installment price should be the LARGEST text element in the entire frame, at minimum 3x the size of any other text. Below the installment: "sem juros" in green text with checkmark. Below that: a green Pix-colored rounded pill badge "ou R$[PRECO PIX like 254,90] no Pix" with Pix diamond icon. Very bottom: [MARCA] logo + "[CTA like Frete Gratis Para Todo Brasil]". The installment price dominates — everything else is secondary. 4:5 aspect ratio.
```

---

### Template 68 — Print de Tweet / Post do X Brasil

```yaml
id: 68
category: G
name: Print de Tweet / Post do X Brasil
strategy_note: Tweet viralizado como prova social. X Brasil tem tom proprio — capslock emocional, exagero genuino.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: DESCRICAO
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: HANDLE
    fill: ai_copy
  - key: TWEET
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: RETWEETS
    fill: ai_copy
  - key: CURTIDAS
    fill: ai_copy
  - key: VIEWS
    fill: ai_copy
  - key: HORA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. Create: a static ad on white background. Center: a realistic X (Twitter) post screenshot. Circular profile photo of [DESCRICAO like mulher jovem brasileira, casual], display name "[NOME]", handle "@[HANDLE]", blue verified checkmark. Post text in regular-weight sans-serif, Brazilian Portuguese: "[TWEET like nao e possivel que eu passei ANOS usando [CATEGORIA] ruim sendo que existia [MARCA] o tempo todo?? gente eu to CHOCADA com a diferenca]". Below: interaction bar showing "[RETWEETS like 2.4K]" retweets, "[CURTIDAS like 18.7K]" likes, "[VIEWS like 892K]" views. Timestamp: "[HORA like 14:23 · 12 mar 2026]". Below the tweet: [SEU PRODUTO] small, on white, studio-lit. No additional text. No brand logo. The tweet virality IS the ad. 1:1 aspect ratio.
```

---

### Template 69 — Combo / Leve Mais Pague Menos

```yaml
id: 69
category: G
name: Combo / Leve Mais Pague Menos
strategy_note: "Leve 3 Pague 2" e DNA do varejo brasileiro. Visual de combo com economia clara.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO VIBRANTE
    fill: ai_copy
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: COR VIBRANTE
    fill: ai_copy
  - key: BADGE
    fill: ai_copy
  - key: PRECO NORMAL
    fill: ai_copy
  - key: PRECO COMBO
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: PARCELA
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a combo deal ad on [COR DE FUNDO VIBRANTE] background. Top: large bold white all-caps sans-serif "[HEADLINE like LEVE 3 PAGUE 2]". Center: three units of [SEU PRODUTO] in a triangular formation — two at the base slightly angled outward, one elevated behind. Clean studio lighting. A large circular [COR VIBRANTE like vermelho / laranja] sale badge overlapping the top product, rotated 12 degrees, reading "[BADGE like 1 GRATIS]" in bold white. Below products: "[PRECO NORMAL like 3x R$89,90 = R$269,70]" in strikethrough, then massive bold "R$[PRECO COMBO like 179,80]" in [COR DA MARCA]. Below: "[PARCELA like ou 12x de R$14,98 sem juros]". Bottom: [COR ACCENT] CTA button "[CTA like MONTAR MEU COMBO]". [MARCA] logo bottom right. Festive, abundant, clear value. 4:5 aspect ratio.
```

---

### Template 70 — Frete Gratis como Hero Headline

```yaml
id: 70
category: G
name: Frete Gratis como Hero Headline
strategy_note: Frete e barreira #1 do e-commerce BR. "FRETE GRATIS" como headline principal, nao como rodape.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO
    fill: brand_dna
  - key: COR DA MARCA
    fill: brand_dna
  - key: CONDICAO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PRECO
    fill: ai_copy
  - key: PARCELA
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a frete-gratis-driven ad on [COR DE FUNDO] background. Top, filling the entire top 25%: massive bold [COR DA MARCA] sans-serif "FRETE GRATIS" — the LARGEST text element in the entire ad. Below in smaller text: "[CONDICAO like para todo o Brasil / acima de R$99 / por tempo limitado]". Center: [SEU PRODUTO] hero-lit, soft studio lighting. Near the product: a small illustrated delivery truck icon or package icon in [COR DA MARCA], floating with subtle motion feel. Bottom: "[PRECO like A partir de R$79,90]" with "[PARCELA like ou 6x de R$13,31 sem juros]" below. [MARCA] logo bottom right. The frete gratis announcement should feel like the MAIN news — product is secondary. Clean, bold, celebratory. 4:5 aspect ratio.
```

---

### Template 71 — Comentario do Instagram + Resposta da Marca

```yaml
id: 71
category: G
name: Comentario do Instagram + Resposta da Marca
strategy_note: Comentario real + resposta oficial = dupla camada de prova social + humanizacao.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: HOOK
    fill: ai_copy
  - key: NOME
    fill: ai_copy
  - key: COMENTARIO POSITIVO, 2-3 frases, emocional e especifico
    fill: ai_copy
  - key: CURTIDAS
    fill: ai_copy
  - key: TEMPO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: RESPOSTA CALOROSA
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad showing an Instagram comment thread on white background. Top: oversized bold black sans-serif hook "[HOOK like O QUE NOSSOS CLIENTES ESTAO DIZENDO]". Center: two Instagram comments stacked. COMMENT 1 (customer): circular avatar, bold "[NOME]", comment in Portuguese "[COMENTARIO POSITIVO, 2-3 frases, emocional e especifico]", with "[CURTIDAS like 1.247 curtidas]" and "[TEMPO like 3d]". COMMENT 2 (brand reply, indented): circular avatar with [MARCA] logo, bold "[MARCA]" with blue verified badge, reply text "[RESPOSTA CALOROSA like Que lindo, Ana! Ficamos muito felizes! Obrigada por compartilhar]", "[CURTIDAS like 89 curtidas]". Bottom: [SEU PRODUTO] centered, small, studio-lit. The brand engagement IS the trust mechanism. 1:1 aspect ratio.
```

---

### Template 72 — Sazonal Brasil (Template Adaptavel)

```yaml
id: 72
category: G
name: Sazonal Brasil (Template Adaptavel)
strategy_note: Template adaptavel para as maiores datas do varejo BR: Dia das Maes, Namorados (12/jun), Black Friday, Consumidor.
formats: ['4:5', '9:16', '1:1']
recommended_format: 4:5
variables:
  - key: DATA SAZONAL
    fill: ai_copy
  - key: COR SAZONAL
    fill: brand_dna
  - key: ELEMENTOS SAZONAIS
    fill: ai_copy
  - key: COR
    fill: ai_copy
  - key: HEADLINE SAZONAL EM PORTUGUES
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: PROPS SAZONAIS
    fill: ai_copy
  - key: OFERTA
    fill: ai_copy
  - key: PARCELA
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a seasonal promotional ad for [DATA SAZONAL like Dia das Maes / Dia dos Namorados (12 de Junho) / Dia do Consumidor / Black Friday Brasil / Natal]. Background: [COR SAZONAL like rosa suave para Maes / vermelho para Namorados / preto para Black Friday]. Top: [ELEMENTOS SAZONAIS like flores / coracoes / icone de desconto] as decorative elements. Center: large bold [COR] sans-serif "[HEADLINE SAZONAL EM PORTUGUES like PRESENTE PERFEITO PARA ELA / ATE 50% OFF NA BLACK FRIDAY]". Below: [SEU PRODUTO] hero-lit with [PROPS SAZONAIS like embalagem de presente / laco / flores ao redor]. Price: "[OFERTA like A partir de R$[PRECO] ou 12x de R$[PARCELA]]". Bottom: [COR ACCENT] CTA button "[CTA like PRESENTEAR AGORA]". [MARCA] logo bottom right. Warm, emotional, gifting-oriented. Soft studio lighting. 4:5 aspect ratio.
```

---

### Template 73 — Selo de Garantia / Satisfacao Garantida

```yaml
id: 73
category: G
name: Selo de Garantia / Satisfacao Garantida
strategy_note: Brasileiros tem medo de comprar online e nao gostar. Selo de garantia visual remove risco.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: GARANTIA
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: ICONE 1
    fill: ai_copy
  - key: ICONE 2
    fill: ai_copy
  - key: ICONE 3
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a guarantee-driven ad on clean [COR DE FUNDO like branco ou creme]. Center: [SEU PRODUTO] at 85mm f/2.8, clean studio lighting. To the left: a large circular gold/green guarantee seal with bold text "[GARANTIA like SATISFACAO GARANTIDA / 30 DIAS / DINHEIRO DE VOLTA]" with checkmark icon center. Below product: bold [COR DA MARCA] text "[HEADLINE like Experimente Sem Risco. Nao Gostou, Devolvemos Seu Dinheiro.]". Below: three small trust icons in a row: [ICONE 1 like cadeado "Compra Segura"] [ICONE 2 like relogio "Entrega Rapida"] [ICONE 3 like escudo "Garantia [DIAS] Dias"]. Bottom: [COR ACCENT] CTA "[CTA like EXPERIMENTAR AGORA]". [MARCA] logo bottom right. Clean, reassuring, risk-free. 4:5 aspect ratio.
```

---

### Template 74 — Unboxing Flatlay Brasileiro

```yaml
id: 74
category: G
name: Unboxing Flatlay Brasileiro
strategy_note: Foto overhead de unboxing. Embalagem aberta + cartao escrito a mao + brindes. A experiencia de "receber a caixinha".
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: SUPERFICIE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: ELEMENTOS
    fill: ai_copy
  - key: PROPS
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: TAGLINE
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: an overhead flatlay unboxing photo on [SUPERFICIE like lencol branco / mesa de madeira clara]. Center: open branded shipping box viewed from directly above, showing [SEU PRODUTO] nestled inside with [ELEMENTOS like papel de seda da marca / cartao escrito a mao "Obrigada, [NOME]!" / adesivos / brinde surpresa / saquinho de lavanda]. Scattered around the box: tissue paper, a phone showing an Instagram story (as if about to post the unboxing), and [PROPS like xicara de cafe / suculenta]. Natural overhead daylight, slightly warm, iPhone 15 quality. No text overlay — the unboxing experience IS the ad. Optional small text at very bottom: "[MARCA] — [TAGLINE like Cada detalhe pensado pra voce]". Shot at 50mm f/4, flat even lighting. 1:1 aspect ratio.
```

---

### Template 75 — Comparativo de Preco Diario (Cafezinho / Acai / Uber)

```yaml
id: 75
category: G
name: Comparativo de Preco Diario (Cafezinho / Acai / Uber)
strategy_note: Ancora preco em gastos diarios brasileiros reais. "Custa menos que um cafezinho" mata a barreira.
formats: ['1:1', '4:5']
recommended_format: 1:1
variables:
  - key: HEADLINE
    fill: ai_copy
  - key: GASTO 1
    fill: ai_copy
  - key: PRECO
    fill: ai_copy
  - key: GASTO 2
    fill: ai_copy
  - key: GASTO 3
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: COR DA MARCA
    fill: brand_dna
  - key: PRECO DIARIO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: FRASE
    fill: ai_copy
  - key: COR ACCENT
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a price comparison ad on white background. Top: bold black sans-serif "[HEADLINE like Voce Gasta Isso Todo Dia...]". Below: three items in a horizontal row. Item 1: small circular photo of [GASTO 1 like cafezinho da padaria] — "R$[PRECO like 7,00]/dia". Item 2: [GASTO 2 like acai no copo] — "R$[PRECO like 18,00]". Item 3: [GASTO 3 like corrida de Uber] — "R$[PRECO like 22,00]/dia". Below, separated by thin line: "[MARCA] custa:" followed by massive bold [COR DA MARCA] "R$[PRECO DIARIO like 2,90]/dia" — at least 3x larger than the comparison prices. Below: [SEU PRODUTO] small, centered. Bottom: "[FRASE like Menos que um cafezinho. E muda sua [BENEFICIO].]". [COR ACCENT] CTA "[CTA like Comece Hoje]". Clean, direct. 1:1 aspect ratio.
```

---

### Template 76 — Sticker Dump / Colagem Instagram Stories

```yaml
id: 76
category: G
name: Sticker Dump / Colagem Instagram Stories
strategy_note: Colagem de stickers do Instagram Stories. Gen Z brasileiro. Zero cara de anuncio.
formats: ['9:16']
recommended_format: 9:16
variables:
  - key: BACKGROUND
    fill: brand_dna
  - key: 5-7 STICKERS including
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: SEU PRODUTO
    fill: brand_dna
  - key: FRASE
    fill: ai_copy
  - key: CIDADE
    fill: ai_copy
  - key: MUSICA
    fill: ai_copy
  - key: EMOJIS
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. Must look like an Instagram Story sticker dump. Create: a colorful, chaotic but intentional sticker collage over a [BACKGROUND like foto casual borrada / cor solida vibrante]. Scattered at various angles: [5-7 STICKERS including]: a "[MARCA] APROVADO" custom sticker in brand colors, a photo sticker of [SEU PRODUTO] with white border slightly rotated, a text sticker "[FRASE like nao vivo sem isso]" in handwritten font, a star rating sticker showing 5 stars, a location sticker "[CIDADE like Sao Paulo, SP]", a music sticker showing "[MUSICA like hit brasileiro popular]", emoji stickers scattered [EMOJIS like fire, sparkles, 100]. Everything overlapping, some slightly cropped at edges. iPhone Stories quality. No brand logo outside of stickers. 9:16 aspect ratio.
```

---

### Template 77 — Notificacao de Celular / Push Alert

```yaml
id: 77
category: G
name: Notificacao de Celular / Push Alert
strategy_note: Simula push notification. Interrupcao visual = scroll-stop imediato.
formats: ['9:16', '4:5']
recommended_format: 9:16
variables:
  - key: DESCRICAO
    fill: ai_copy
  - key: HORA
    fill: ai_copy
  - key: DIA
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
  - key: NOTIFICACAO
    fill: ai_copy
  - key: DESCONTO
    fill: ai_copy
  - key: TEMPO
    fill: ai_copy
  - key: SEGUNDA NOTIFICACAO
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad showing a phone lock screen with push notifications. Background: blurred lifestyle photo [DESCRICAO like mesa de home office borrada]. Top: realistic phone status bar with time, signal, battery. Below: large white clock "[HORA]" and date "[DIA like segunda-feira, 15 de marco]". Center: a frosted glass push notification banner containing: [MARCA] app icon (small rounded square in brand colors), "[MARCA]" in bold small text, "agora" timestamp, and notification body: "[NOTIFICACAO like [NOME], sua oferta de [DESCONTO]% expira em 2 horas! Corre que ta acabando]". Below: a second older notification from same app with "[TEMPO like 2h atras]": "[SEGUNDA NOTIFICACAO like Seu pedido de [PRODUTO] foi enviado! Rastreie aqui]". Bottom: subtle home indicator. No additional text, no CTA, no logo outside notification icons. The notification format IS the hook. 9:16 aspect ratio.
```

---

### Template 78 — Frame de Video-Review Pausado com Legenda

```yaml
id: 78
category: G
name: Frame de Video-Review Pausado com Legenda
strategy_note: Simula frame de video-review pausado. Botao de play + legenda = curiosidade.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: PESSOA brasileira, natural
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: CENARIO
    fill: ai_copy
  - key: LEGENDA EM PORTUGUES
    fill: ai_copy
  - key: CONTAGEM
    fill: ai_copy
  - key: TITULO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for product ONLY. Create: a static frame that looks like a paused video review. [PESSOA brasileira, natural] holding [SEU PRODUTO] up to camera in [CENARIO like quarto com cama ao fundo / banheiro simples]. Selfie-camera angle, slightly grainy. Red play button icon overlaid in center (YouTube/Reels style). Progress bar at bottom showing partially played. Below the video frame: large bold white subtitle bar reading "[LEGENDA EM PORTUGUES like "gente, eu PRECISO falar sobre esse produto"]". Top: small text "[CONTAGEM like 1.2M visualizacoes]". Video title style: "[TITULO like TESTEI O [PRODUTO] DA [MARCA] POR 30 DIAS — RESULTADO REAL]". Should look like a popular review video thumbnail. 4:5 aspect ratio.
```

---

### Template 79 — Lista de "Achadinhos" / Viral Finds

```yaml
id: 79
category: G
name: Lista de "Achadinhos" / Viral Finds
strategy_note: Lista de produtos virais estilo "coisas que comprei e amei". Seu produto e o highlight #3.
formats: ['4:5', '1:1']
recommended_format: 4:5
variables:
  - key: TITULO
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: COR DA MARCA
    fill: brand_dna
  - key: DESCRICAO
    fill: ai_copy
  - key: PRODUTO
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Create: a static ad styled as a "viral finds" list post. Clean white background. Top: bold black sans-serif "[TITULO like ACHADINHOS QUE MUDARAM MINHA ROTINA / TESTADOS E APROVADOS 2026]". Below: a numbered vertical list of 4-5 items, each with a small circular product photo and one-line description in casual Portuguese. Items 1-2 and 4-5 are generic/blurred placeholder products (clearly not the focus). Item 3 (center, highlighted): [SEU PRODUTO] with photo slightly larger, a [COR DA MARCA] highlight rectangle behind it, and text "[DESCRICAO like [MARCA] [PRODUTO] — esse e o MELHOR, nao troco por nada]" in bold. Optional: small fire emoji next to the highlighted item. Bottom: small text "Salva esse post!" with bookmark icon. Should feel like organic content creator post. 4:5 aspect ratio.
```

---

### Template 80 — CTA WhatsApp / Chama no Zap

```yaml
id: 80
category: G
name: CTA WhatsApp / Chama no Zap
strategy_note: Para marcas que convertem via WhatsApp. O botao verde do Zap e o CTA mais reconhecido do Brasil.
formats: ['4:5', '1:1', '9:16']
recommended_format: 4:5
variables:
  - key: COR DE FUNDO DA MARCA
    fill: ai_copy
  - key: COR CONTRASTE
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
  - key: SEU PRODUTO
    fill: brand_dna
  - key: CTA
    fill: ai_copy
  - key: COR DA MARCA
    fill: brand_dna
  - key: BENEFICIO 1
    fill: ai_copy
  - key: BENEFICIO 2
    fill: ai_copy
  - key: BENEFICIO 3
    fill: ai_copy
  - key: NUMERO
    fill: ai_copy
  - key: MARCA
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a WhatsApp-CTA ad on [COR DE FUNDO DA MARCA] background. Top: bold [COR CONTRASTE] sans-serif "[HEADLINE like QUER [BENEFICIO]? A GENTE TE AJUDA.]". Center: [SEU PRODUTO] at slight angle, studio-lit, soft shadow. To the right: a large realistic WhatsApp green (#25D366) circular icon button with white phone-in-speech-bubble icon — should look tappable and prominent, approximately 15-20% of frame width. Below WhatsApp icon: bold green text "[CTA like CHAMA NO ZAP]". Below product area: three small benefit lines with [COR DA MARCA] checkmarks: "[BENEFICIO 1 like Atendimento personalizado]", "[BENEFICIO 2 like Resposta em minutos]", "[BENEFICIO 3 like Consultoria gratuita]". Bottom: "[NUMERO like (11) 99999-9999]" in bold. [MARCA] logo bottom right. Warm, approachable, human. Soft studio lighting. 4:5 aspect ratio.
```

---



## Category G — Infoprodutos & Mercado Digital (PT-BR Exclusivo)

## Category G — Infoprodutos & Mercado Digital

> Templates criados especificamente para o mercado digital brasileiro: infoprodutores, coaches, mentores, gestores de tráfego, criadores de cursos e prestadores de serviços digitais. Fluxo adaptado — em vez de foto de produto físico, o agente solicita foto do expert, prints de resultado ou mockup de curso.

---

### Template 81 — Resultado de Aluno

```yaml
id: 81
category: G
name: Resultado de Aluno
strategy_note: O depoimento com rosto é o criativo mais poderoso do mercado digital brasileiro. Resultado real + foto humaniza e prova. Use quando tiver um aluno com resultado específico e mensurável.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: STUDENT DESCRIPTION
    fill: user_input
    note: Descreva o aluno — gênero, faixa etária, contexto, e.g. "mulher sorrindo, em home office, luz natural"
  - key: RESULT ACHIEVED
    fill: user_input
    note: Resultado exato e mensurável, e.g. "Faturei R$12.000 no primeiro mês"
  - key: STUDENT NAME
    fill: user_input
    note: Primeiro nome + inicial do sobrenome + cidade, e.g. "Ana R., São Paulo"
  - key: TRANSFORMATION HOOK
    fill: ai_copy
    note: Headline de transformação, e.g. "Ela não sabia nada de tráfego pago. Hoje vive disso."
  - key: BRAND
    fill: brand_dna
  - key: COURSE NAME
    fill: brand_dna
    note: Nome do curso ou produto digital
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and tone precisely. Create: a static ad on a clean white or [BRAND COLOR light] background. Top 60%: a casual, warm photo of [STUDENT DESCRIPTION]. Overlaid on the photo: a white rounded-rectangle result card with subtle shadow showing "[RESULT ACHIEVED]" in large bold [BRAND COLOR] sans-serif, with "[STUDENT NAME]" in smaller regular weight below. Bottom 40%: bold black sans-serif copy reading "[TRANSFORMATION HOOK]". Below: [BRAND] logo + "[COURSE NAME]" in small caps. [FORMAT] aspect ratio.
```

---

### Template 82 — Autoridade do Expert

```yaml
id: 82
category: G
name: Autoridade do Expert
strategy_note: No mercado digital, quem compra está comprando o expert, não o produto. A foto com credenciais faz todo o trabalho. Use para topo de funil em audiência fria que não conhece o produtor.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: EXPERT DESCRIPTION
    fill: user_input
    note: Descreva o expert — gênero, faixa etária, estilo, e.g. "homem, 40 anos, camisa social, olhar direto"
  - key: EXPERT NAME
    fill: brand_dna
  - key: CREDENTIAL 1
    fill: user_input
    note: e.g. "+7 anos de experiência"
  - key: CREDENTIAL 2
    fill: user_input
    note: e.g. "+2.000 alunos formados"
  - key: CREDENTIAL 3
    fill: user_input
    note: e.g. "Ex-Google · Hoje fatura 7 dígitos"
  - key: AUTHORITY STATEMENT
    fill: ai_copy
    note: Frase de autoridade pessoal, e.g. "Eu aprendi do jeito difícil. Você não precisa."
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: COURSE NAME
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: an authority-building ad. Left 55%: a confident, professional portrait photo of [EXPERT DESCRIPTION] — shot on 50mm f/1.8, warm studio lighting. NOT a stock photo feel — personal and real. Right 45%: clean [BRAND COLOR] background. Top: [EXPERT NAME] in bold white sans-serif. Below: 3 credential lines in smaller white regular weight: "[CREDENTIAL 1]", "[CREDENTIAL 2]", "[CREDENTIAL 3]". Center: bold italic white pull-quote: "[AUTHORITY STATEMENT]". Bottom: [COURSE NAME] pill badge in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 83 — Antes/Depois de Vida

```yaml
id: 83
category: G
name: Antes/Depois de Vida
strategy_note: O antes/depois do mercado digital não é físico — é situação de vida, renda, liberdade. Divide o frame em dois estados emocionais opostos. Muito eficaz para audiências que já tentaram e falharam.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: PERSON
    fill: user_input
    note: Descrição da pessoa no cenário, e.g. "profissional cansado em escritório com iluminação fria"
  - key: BEFORE STATE
    fill: ai_copy
    note: Data ou label do estado anterior, e.g. "Janeiro de 2023"
  - key: PAIN POINT
    fill: user_input
    note: Situação específica de dor, e.g. "CLT, 40h/semana, R$3.200/mês"
  - key: AFTER STATE
    fill: ai_copy
    note: Data ou label do estado posterior, e.g. "Janeiro de 2024"
  - key: RESULT
    fill: user_input
    note: Resultado específico, e.g. "Home office, 4h/dia, R$18.000/mês"
  - key: BRAND
    fill: brand_dna
  - key: TRANSFORMATION LINE
    fill: ai_copy
    note: Linha de rodapé que conecta os dois estados, e.g. "O que mudou? Um método."
```

**Prompt:**
```
Use the attached images as brand reference. Create: a split-panel life transformation ad. Hard vertical divide at center. LEFT PANEL: dark, desaturated. [PERSON]. White text overlay top: "[BEFORE STATE]". Small caption: "[PAIN POINT]". RIGHT PANEL: same person, bright, saturated, warm — relaxed expression, laptop on a café table or home setup, natural light. White text overlay top: "[AFTER STATE]". Small caption: "[RESULT]". Bottom center spanning both panels: [BRAND] logo + bold text: "[TRANSFORMATION LINE]". [FORMAT] aspect ratio.
```

---

### Template 84 — Mockup de Curso

```yaml
id: 84
category: G
name: Mockup de Curso
strategy_note: Mostra o produto digital de forma tangível. Área de membros em dispositivos reais aumenta percepção de valor. Use para apresentar um curso ou produto digital pela primeira vez.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: COURSE NAME
    fill: brand_dna
  - key: BENEFIT 1
    fill: ai_copy
    note: e.g. "+80 aulas"
  - key: BENEFIT 2
    fill: ai_copy
    note: e.g. "Suporte vitalício"
  - key: BENEFIT 3
    fill: ai_copy
    note: e.g. "Certificado incluído"
  - key: EXPERT NAME
    fill: brand_dna
  - key: STUDENT COUNT
    fill: user_input
    note: Número de alunos, e.g. "+3.200 alunos"
  - key: CTA
    fill: ai_copy
    note: e.g. "Quero me inscrever"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a product showcase ad for a digital course. Background: [BRAND COLOR] gradient or solid, clean. Center: a realistic mockup of 2-3 devices — laptop, tablet and phone — each showing a clean screenshot of a professional course platform with video player, lesson list and progress bar visible. Devices arranged in a natural overlapping composition, slightly angled. Top: bold white sans-serif headline: "[COURSE NAME]" in large text. Below headline: 3 benefit pills in [ACCENT COLOR]: "[BENEFIT 1]" · "[BENEFIT 2]" · "[BENEFIT 3]". Bottom: "[EXPERT NAME]" + star rating + "[STUDENT COUNT]". CTA button: "[CTA]" in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 85 — Print de WhatsApp

```yaml
id: 85
category: G
name: Print de WhatsApp
strategy_note: Print de conversa de WhatsApp é o formato mais nativo e de maior credibilidade do mercado digital brasileiro. Parece orgânico. Use depoimentos reais de alunos com resultados específicos e mensuráveis.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: STUDENT NAME
    fill: user_input
    note: Nome real do aluno, e.g. "Ana Lima"
  - key: GENUINE TESTIMONIAL
    fill: user_input
    note: 2-3 mensagens reais de WhatsApp com resultado, tom conversacional, emojis. Cada mensagem separada por " / "
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. This must look completely organic. Create: a static ad mimicking a real WhatsApp screenshot. Light gray background (#ECE5DD WhatsApp default). Top: realistic WhatsApp chat header with contact name "[STUDENT NAME]", green online indicator, back arrow, video and call icons. Chat bubbles showing incoming messages (white, left aligned): "[GENUINE TESTIMONIAL]" — each message as a separate bubble with time stamps visible (e.g. "14:32 ✓✓"). Bottom of screen: WhatsApp input bar with microphone and attachment icons. Very bottom outside the screenshot: small plain text "[BRAND] · [WEBSITE]". No brand logo inside the screenshot. [FORMAT] aspect ratio.
```

---

### Template 86 — Oferta de Lançamento

```yaml
id: 86
category: G
name: Oferta de Lançamento
strategy_note: Formato clássico de lançamento brasileiro. Urgência + bônus empilhados + garantia. Altíssima conversão em período de carrinho aberto. Use somente durante períodos de lançamento ou promoção ativa.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: LAUNCH HEADLINE
    fill: ai_copy
    note: e.g. "ÚLTIMA CHANCE" ou "CARRINHO ABERTO"
  - key: TIME
    fill: user_input
    note: Tempo restante, e.g. "02:47:33"
  - key: COURSE NAME
    fill: brand_dna
  - key: PRICE
    fill: user_input
    note: e.g. "De R$997 por apenas R$297"
  - key: BONUS 1
    fill: user_input
    note: Nome e valor do bônus 1
  - key: BONUS 2
    fill: user_input
    note: Nome e valor do bônus 2
  - key: BONUS 3
    fill: user_input
    note: Nome e valor do bônus 3
  - key: GUARANTEE
    fill: user_input
    note: e.g. "7 dias de garantia incondicional"
  - key: CTA
    fill: ai_copy
    note: e.g. "QUERO GARANTIR MINHA VAGA"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a launch offer ad on a deep [BRAND COLOR] background. Top: bold white all-caps headline: "[LAUNCH HEADLINE]". Below: large [ACCENT COLOR] countdown timer graphic reading "[TIME]" with labels "HORAS · MINUTOS · SEGUNDOS". Center: [COURSE NAME] in large white bold text + "[PRICE]" with original price in strikethrough. Below price: stacked bonus list with checkmark emojis: "✅ Bônus 1: [BONUS 1]", "✅ Bônus 2: [BONUS 2]", "✅ Bônus 3: [BONUS 3]". Bottom: guarantee badge "[GUARANTEE]" + CTA button "[CTA]" in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 87 — Prova Social em Números

```yaml
id: 87
category: G
name: Prova Social em Números
strategy_note: Números grandes criam credibilidade instantânea. Melhor para topo de funil em audiências frias que ainda não conhecem o expert. Use quando tiver estatísticas reais e verificáveis.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: STAT 1
    fill: user_input
    note: e.g. "+12.400"
  - key: LABEL 1
    fill: user_input
    note: e.g. "alunos formados"
  - key: STAT 2
    fill: user_input
    note: e.g. "R$47M"
  - key: LABEL 2
    fill: user_input
    note: e.g. "gerados pelos alunos"
  - key: STAT 3
    fill: user_input
    note: e.g. "4,9/5"
  - key: LABEL 3
    fill: user_input
    note: e.g. "avaliação média"
  - key: STAT 4
    fill: user_input
    note: e.g. "38"
  - key: LABEL 4
    fill: user_input
    note: e.g. "países atendidos"
  - key: HEADLINE
    fill: ai_copy
    note: e.g. "Os números falam por si"
  - key: CTA
    fill: ai_copy
    note: e.g. "Quero fazer parte disso →"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a social proof numbers ad on a [BRAND COLOR] background. Center: expert photo or logo. Surrounding in a clean grid layout, 4 large stat blocks: "[STAT 1]" in oversized bold white with "[LABEL 1]" below in smaller regular weight. "[STAT 2]" with "[LABEL 2]". "[STAT 3]" with "[LABEL 3]" and 5 gold stars. "[STAT 4]" with "[LABEL 4]". Each stat block in a thin [ACCENT COLOR] border radius card. Top: bold white headline "[HEADLINE]". Bottom: "[CTA]" button in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 88 — Método/Framework Visual

```yaml
id: 88
category: G
name: Método/Framework Visual
strategy_note: Visualizar o método do expert em etapas reduz objeções e aumenta percepção de valor. Funciona muito bem para tráfego frio educacional. Use quando o diferencial do produto é o método em si.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: METHOD NAME
    fill: brand_dna
    note: Nome do método ou framework
  - key: RESULT
    fill: ai_copy
    note: Resultado final do método, e.g. "Faturar R$10k/mês"
  - key: STEP 1
    fill: user_input
    note: Nome da etapa 1, e.g. "Diagnóstico"
  - key: STEP 2
    fill: user_input
    note: Nome da etapa 2
  - key: STEP 3
    fill: user_input
    note: Nome da etapa 3
  - key: STEP 4
    fill: user_input
    note: Nome da etapa 4
  - key: EXPERT NAME
    fill: brand_dna
  - key: TITLE
    fill: user_input
    note: Título do expert, e.g. "Especialista em Tráfego Pago"
  - key: CTA
    fill: ai_copy
    note: e.g. "Aprenda o método completo"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a method visualization ad on a clean white or off-white background. Top: bold [BRAND COLOR] headline: "O Método [METHOD NAME]: As 4 Etapas Para [RESULT]". Center: a clean horizontal flow diagram with 4 steps, each in a [BRAND COLOR] numbered circle connected by arrows: Step 1: "[STEP 1]", Step 2: "[STEP 2]", Step 3: "[STEP 3]", Step 4: "[STEP 4]". Each step in its own clean card with [BRAND COLOR] icon. Bottom: expert photo small circular + "[EXPERT NAME] · [TITLE]" + "[CTA]". [FORMAT] aspect ratio.
```

---

### Template 89 — Curiosity Gap Mercado Digital

```yaml
id: 89
category: G
name: Curiosity Gap Mercado Digital
strategy_note: A pergunta que provoca — específica para as dores do mercado digital brasileiro. Sem produto visível. 100% curiosidade. Use para topo de funil frio com o objetivo de gerar clique e engajamento.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: PROVOCATIVE QUESTION
    fill: ai_copy
    note: Pergunta que toca na maior dor do avatar, específica e desconfortável
  - key: PROBLEM VISUAL
    fill: ai_copy
    note: Descrição da cena que representa o problema, e.g. "pessoa cansada na frente do computador tarde da noite"
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Do NOT include any product or logo. Create: a curiosity-gap scroll-stopping ad. Clean white background. Top 40%: very large bold black condensed sans-serif text (heavy, tight leading): "[PROVOCATIVE QUESTION]". Last words followed by "...ver mais" in lighter gray — truncated caption style. Bottom 60%: a close-up, real, slightly uncomfortable photo of [PROBLEM VISUAL]. Shallow depth of field. No text on photo. No product. No logo. [FORMAT] aspect ratio.
```

---

### Template 90 — Print de Dashboard de Vendas

```yaml
id: 90
category: G
name: Print de Dashboard de Vendas
strategy_note: Print de plataforma de vendas desfocado com número em destaque. Aspira o avatar sem prometer nada explicitamente. Use para audiências de empreendedores digitais em fase de consideração.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: RESULT
    fill: user_input
    note: Valor em destaque, e.g. "R$ 47.832,00"
  - key: TIMEFRAME
    fill: user_input
    note: Período do resultado, e.g. "em 30 dias"
  - key: METHOD NAME
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: an aspirational results ad. Background: slightly blurred screenshot of a sales dashboard (Hotmart or similar platform UI style — green numbers, transaction list, graphs visible). The blur is intentional — enough to read the layout, not the details. Center foreground: a large bold white number with currency: "[RESULT]" in oversized display font with subtle drop shadow for legibility. Below the number: small white text "[TIMEFRAME] · Método [METHOD NAME]". Bottom: clean white strip with [BRAND] logo and "Resultados variam. Este é um exemplo real de aluno." in tiny gray text. [FORMAT] aspect ratio.
```

---

### Template 91 — Objeção Destruída

```yaml
id: 91
category: G
name: Objeção Destruída
strategy_note: A objeção mais comum do avatar respondida diretamente. Copy pesado, sem imagem de produto. Muito eficaz para retargeting de quem viu a página mas não comprou. Use objeções reais coletadas em pesquisas com o público.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: TOP OBJECTION
    fill: user_input
    note: Objeção exata do avatar em primeira pessoa, e.g. "Mas eu não tenho tempo para fazer um curso online."
  - key: REFRAME COPY
    fill: ai_copy
    note: 8-12 linhas curtas que derrubam a objeção, reformulam e fecham com confiança
  - key: EXPERT NAME
    fill: brand_dna
  - key: COURSE NAME
    fill: brand_dna
  - key: CTA
    fill: ai_copy
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand typography and tone. Create: a copy-dominant objection-crushing ad on clean white background. No product image — text IS the entire creative. Top: oversized bold black serif headline: "[TOP OBJECTION]" in quotation marks, large, taking up top 25%. Below: left-aligned body copy in short punchy lines NOT paragraphs: "[REFRAME COPY]". Bottom: expert photo small circular + [EXPERT NAME] + "[COURSE NAME]" + CTA button "[CTA]". [FORMAT] aspect ratio.
```

---

### Template 92 — DM Instagram (Depoimento Nativo)

```yaml
id: 92
category: G
name: DM Instagram
strategy_note: Mesmo princípio do WhatsApp mas no formato DM do Instagram. Alta credibilidade por parecer 100% orgânico. Use com resultados específicos e mensuráveis de alunos reais.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: STUDENT NAME
    fill: user_input
    note: Nome do aluno para o header do DM
  - key: QUESTION SENT
    fill: ai_copy
    note: Mensagem enviada pelo expert, e.g. "Como foi o resultado do mês?"
  - key: GENUINE RESULT MESSAGE
    fill: user_input
    note: 2-4 mensagens reais do aluno com resultado específico, conversacional, com emojis
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. This must look exactly like an Instagram Direct Message screenshot. Create: realistic Instagram DM screenshot. White background. Top: Instagram DM header with student profile picture small circle, "[STUDENT NAME]", back arrow, video call icon. Message thread: sent bubble right in blue: "[QUESTION SENT]". Received bubble left in light gray: "[GENUINE RESULT MESSAGE]" — each message as a separate bubble. Instagram input bar at bottom with emoji, photo and audio icons. Very bottom outside screenshot: "[BRAND] · [WEBSITE]" in tiny plain text. [FORMAT] aspect ratio.
```

---

### Template 93 — Promessa Direta

```yaml
id: 93
category: G
name: Promessa Direta
strategy_note: Copy direto ao ponto. Uma promessa específica, um produto, um CTA. Para testar copy rapidamente em campanhas de performance. Funciona melhor com promessa mensurável e com prazo.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: DIRECT PROMISE
    fill: ai_copy
    note: Promessa específica e mensurável com prazo, e.g. "Aprenda a Fechar R$10.000/mês em 90 Dias Ou Seu Dinheiro de Volta"
  - key: EXPERT NAME
    fill: brand_dna
  - key: STAT 1
    fill: user_input
    note: e.g. "⭐ 4.9/5"
  - key: STAT 2
    fill: user_input
    note: e.g. "3.400+ alunos"
  - key: STAT 3
    fill: user_input
    note: e.g. "93% recomendam"
  - key: CTA
    fill: ai_copy
    note: e.g. "QUERO APRENDER →"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a direct response ad on a [BRAND COLOR] background. Full bleed color. Top third: large bold white condensed sans-serif headline: "[DIRECT PROMISE]". Key number or result in [ACCENT COLOR] for emphasis. Center: expert photo at 85mm f/2.8, soft light. Bottom third: three social proof micro-stats in white: "[STAT 1]" · "[STAT 2]" · "[STAT 3]". CTA button: "[CTA]" in [ACCENT COLOR], rounded, prominent. [FORMAT] aspect ratio.
```

---

### Template 94 — Faux Story com Enquete

```yaml
id: 94
category: G
name: Faux Story com Enquete
strategy_note: Replica o formato de Story do Instagram com enquete — altíssimo reconhecimento de padrão, para no scroll imediatamente. Use para audiência que segue o expert ou está em retargeting.
formats: [9:16]
recommended_format: 9:16
variables:
  - key: EXPERT NAME
    fill: brand_dna
  - key: BRAND COLOR
    fill: brand_dna
  - key: ENGAGING QUESTION
    fill: ai_copy
    note: Pergunta que divide o avatar em dois grupos com base em experiência ou dor
  - key: OPTION A
    fill: ai_copy
    note: Opção A da enquete com emoji
  - key: OPTION B
    fill: ai_copy
    note: Opção B da enquete com emoji
  - key: FOLLOW-UP LINE
    fill: ai_copy
    note: Linha de CTA para o próximo Story, cria curiosidade
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. This must look exactly like an Instagram Story. Create: a realistic Instagram Story frame. Top: Instagram Story header — circular avatar of expert, "[EXPERT NAME]", "Sua história · 3h" in gray, X close button top right, story progress bars at top. Background: solid [BRAND COLOR] or lifestyle photo of expert in natural setting. Center: a question sticker white pill black text: "[ENGAGING QUESTION]". Below: two answer option stickers side by side: "[OPTION A]" and "[OPTION B]". Below the poll: white text "[FOLLOW-UP LINE]". Thin white progress bar at top half-filled. [FORMAT] aspect ratio.
```

---

### Template 95 — Comparativo Mercado Digital

```yaml
id: 95
category: G
name: Comparativo Mercado Digital
strategy_note: Us vs Them adaptado para o mercado digital — método do expert vs tentativa aleatória. Muito eficaz para quem já tentou e falhou. Use em audiências de remarketing ou lookalike de compradores.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: METHOD NAME
    fill: brand_dna
  - key: PAIN 1
    fill: ai_copy
    note: Dor 1 de quem tenta sem método
  - key: PAIN 2
    fill: ai_copy
    note: Dor 2
  - key: PAIN 3
    fill: ai_copy
    note: Dor 3
  - key: PAIN 4
    fill: ai_copy
    note: Dor 4
  - key: PAIN 5
    fill: ai_copy
    note: Dor 5
  - key: RESULT 1
    fill: ai_copy
    note: Resultado 1 com o método
  - key: RESULT 2
    fill: ai_copy
    note: Resultado 2
  - key: RESULT 3
    fill: ai_copy
    note: Resultado 3
  - key: RESULT 4
    fill: ai_copy
    note: Resultado 4
  - key: RESULT 5
    fill: ai_copy
    note: Resultado 5
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: a side-by-side comparison ad for digital market. Hard vertical divide. LEFT side: dark muted background. Header: "Sem método". Below: vertical list with red X emojis: "❌ [PAIN 1]", "❌ [PAIN 2]", "❌ [PAIN 3]", "❌ [PAIN 4]", "❌ [PAIN 5]". RIGHT side: [BRAND COLOR] background. Header: "Com o [METHOD NAME]". Below: vertical list with green checkmark emojis: "✅ [RESULT 1]", "✅ [RESULT 2]", "✅ [RESULT 3]", "✅ [RESULT 4]", "✅ [RESULT 5]". Center VS badge in white. [BRAND] logo bottom right. [FORMAT] aspect ratio.
```

---

### Template 96 — Faux E-mail Marketing

```yaml
id: 96
category: G
name: Faux E-mail Marketing
strategy_note: Screenshot de e-mail com resultado ou convite parece orgânico e diferente de todo o feed. Alto stopping power por ser formato inesperado. Use para anunciar abertura de vagas, resultados ou lançamentos.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: EXPERT NAME
    fill: brand_dna
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
  - key: SUBJECT
    fill: ai_copy
    note: Assunto do e-mail, curto e intrigante, e.g. "Re: Sua inscrição foi confirmada 🎉"
  - key: EMAIL BODY
    fill: ai_copy
    note: Corpo do e-mail — 4-6 linhas curtas, tom pessoal, anunciando resultado ou convite
  - key: TITLE
    fill: user_input
    note: Cargo do expert, e.g. "Fundador do [COURSE NAME]"
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: a static ad designed to look exactly like an email screenshot on a phone. iPhone email app UI: top bar with back arrow and action icons. Email header: from "[EXPERT NAME] <contato@[BRAND].com.br>", to "Você", subject line in bold: "[SUBJECT]". Email body on white background, clean sans-serif: "Oi," — "[EMAIL BODY]" — "Com carinho," — "[EXPERT NAME]" — "[TITLE]". Bottom: small plain text "[BRAND] · [WEBSITE]". [FORMAT] aspect ratio.
```

---

### Template 97 — Headline + Subhead + Expert

```yaml
id: 97
category: G
name: Headline + Subhead + Expert
strategy_note: O formato mais limpo e testável do mercado digital. Uma foto, um headline, um subhead, um CTA. Use para testar variações de copy rapidamente antes de escalar.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: MAIN HEADLINE
    fill: ai_copy
    note: Headline principal — provocativa ou de promessa forte
  - key: SUBHEAD
    fill: ai_copy
    note: Subhead expandindo o headline com prova social ou especificidade
  - key: EXPERT NAME
    fill: brand_dna
  - key: REVIEW COUNT
    fill: user_input
    note: e.g. "2.847 avaliações"
  - key: CTA
    fill: ai_copy
    note: e.g. "Ver como funciona"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a clean direct-response ad. Background: solid [BRAND COLOR] or clean gradient. Center: professional photo of expert — warm, direct, confident, looking at camera — at 85mm f/2.0, slightly off-center. Large bold white headline overlaid: "[MAIN HEADLINE]". Below in smaller regular weight white: "[SUBHEAD]". Bottom: [EXPERT NAME] + title + 5 stars + "[REVIEW COUNT]". CTA button: "[CTA]" in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 98 — Comentário YouTube ou Facebook

```yaml
id: 98
category: G
name: Comentário YouTube ou Facebook
strategy_note: Screenshot de comentário de aula gratuita ou post viral. Prova social nativa ultra convincente. Use com comentários reais de alunos que mencionam resultado específico.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: COMMENTER NAME
    fill: user_input
    note: Nome real do comentarista, e.g. "Marcos Oliveira"
  - key: AUTHENTIC COMMENT
    fill: user_input
    note: Comentário real — 2-4 linhas, resultado específico, tom grato e genuíno
  - key: LIKE COUNT
    fill: user_input
    note: Número de curtidas no comentário, e.g. "847"
  - key: EXPERT REPLY
    fill: ai_copy
    note: Resposta curta e calorosa do expert ao comentário
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: a social proof ad mimicking a YouTube comment screenshot. White background. Top: YouTube UI with dark header, video thumbnail showing expert teaching, view count and title. Comment section below: profile photo small circle, bold name "[COMMENTER NAME]", comment text in regular weight: "[AUTHENTIC COMMENT]". Thumbs up icon + "[LIKE COUNT]" · Reply · 2 dias atrás. Expert reply bubble below: "[EXPERT REPLY]". Bottom: "[BRAND] · [WEBSITE]" tiny plain text. [FORMAT] aspect ratio.
```

---

### Template 99 — Urgência de Vaga

```yaml
id: 99
category: G
name: Urgência de Vaga
strategy_note: Vagas limitadas ou turma fechando. Funciona especialmente bem para mentorias, grupos e produtos de alta interação. Use somente quando a limitação for real — não fabricada.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: EXPERT NAME
    fill: brand_dna
  - key: VAGAS RESTANTES
    fill: user_input
    note: Número real de vagas, e.g. "Restam apenas 7 vagas"
  - key: PRODUCT NAME
    fill: brand_dna
  - key: PRICE
    fill: user_input
    note: e.g. "R$1.997 ou 12x R$197"
  - key: REASON 1
    fill: ai_copy
    note: Razão de urgência 1
  - key: REASON 2
    fill: ai_copy
    note: Razão de urgência 2
  - key: REASON 3
    fill: ai_copy
    note: Razão de urgência 3
  - key: CTA
    fill: ai_copy
    note: e.g. "GARANTIR MINHA VAGA AGORA"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a scarcity-driven enrollment ad. Background: deep [BRAND COLOR]. Top: expert circular photo + [EXPERT NAME] + title. Large center visual showing "[VAGAS RESTANTES]" with a progress bar 90% filled in [ACCENT COLOR]. Below: "[PRODUCT NAME]" bold white + key benefit line + "[PRICE]". Stacked urgency reasons: "🔒 [REASON 1]", "📍 [REASON 2]", "🎁 [REASON 3]". Bottom: large full-width [ACCENT COLOR] CTA button: "[CTA]". [FORMAT] aspect ratio.
```

---

### Template 100 — Notificação de Venda

```yaml
id: 100
category: G
name: Notificação de Venda
strategy_note: Notificação de app de vendas no celular. Ultra nativo, formato novo no feed, altíssimo stopping power. Use para audiências de empreendedores e aspirantes a renda digital.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: PRODUCT NAME
    fill: brand_dna
  - key: STUDENT NAME 1
    fill: user_input
    note: Nome fictício ou real do comprador 1, e.g. "João S."
  - key: STUDENT NAME 2
    fill: user_input
    note: Nome fictício ou real do comprador 2, e.g. "Maria L."
  - key: PRICE
    fill: user_input
    note: Valor da venda, e.g. "R$997,00"
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: an ad that looks like a real smartphone notification screenshot. Top 30%: realistic iPhone lock screen or notification shade with dark background. A prominent push notification card: Hotmart-style green app icon · "Hotmart" · "agora". Notification text: "💰 Nova venda realizada!" — "[PRICE] · [PRODUCT NAME] · [STUDENT NAME 1]". Below: second identical notification appearing: "+1 nova venda · [PRICE] · [STUDENT NAME 2]". And a third: "+1 nova venda · [PRICE]". Stack of 3 notifications total. Outside notification area: plain white background with small text: "[BRAND] · Isso é possível para você também. · [WEBSITE]". [FORMAT] aspect ratio.
```

---

### Template 101 — Nicho Específico

```yaml
id: 101
category: G
name: Nicho Específico
strategy_note: Fala diretamente com um nicho específico — médico, advogado, professor, CLT, mãe, MEI. Segmentação na imagem aumenta CTR drasticamente. Use quando souber o segmento exato da campanha.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: NICHE LABEL
    fill: user_input
    note: Label do nicho em caixa alta, e.g. "PARA MÉDICOS" ou "PARA QUEM TEM CLT"
  - key: NICHE SPECIFIC HEADLINE
    fill: ai_copy
    note: Headline que fala diretamente com a dor e o desejo desse nicho específico
  - key: SUBHEAD
    fill: ai_copy
    note: Subhead com o expert e o resultado específico para esse nicho
  - key: EXPERT NAME
    fill: brand_dna
  - key: SOCIAL PROOF
    fill: user_input
    note: Prova social específica do nicho, e.g. "+340 médicos já transformaram suas carreiras"
  - key: CTA
    fill: ai_copy
    note: e.g. "Quero saber como →"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a niche-targeted ad on [BRAND COLOR] background. Top: small uppercase label in [ACCENT COLOR] pill badge: "[NICHE LABEL]". Below: large bold white headline: "[NICHE SPECIFIC HEADLINE]". Subhead in smaller white regular: "[SUBHEAD]". Center: expert photo or niche-relevant lifestyle image at 85mm f/2.0. Bottom: "[SOCIAL PROOF]" + CTA button: "[CTA]" in [ACCENT COLOR]. [FORMAT] aspect ratio.
```

---

### Template 102 — Grupo VIP de Alunos

```yaml
id: 102
category: G
name: Grupo VIP de Alunos
strategy_note: Print de grupo de alunos comemorando resultado. Comunidade + prova social coletiva. Poderoso para mentorias e programas de acompanhamento onde a comunidade é um diferencial.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: GROUP NAME
    fill: user_input
    note: Nome do grupo, e.g. "🚀 Alunos [COURSE NAME] — VIP"
  - key: MEMBER COUNT
    fill: user_input
    note: Número de membros, e.g. "847 membros"
  - key: NAME1
    fill: user_input
    note: Nome do primeiro aluno
  - key: MESSAGE 1
    fill: user_input
    note: Mensagem de resultado do primeiro aluno com emojis
  - key: NAME2
    fill: user_input
    note: Nome do segundo aluno
  - key: MESSAGE 2
    fill: user_input
    note: Mensagem de resultado do segundo aluno
  - key: NAME3
    fill: user_input
    note: Nome do terceiro aluno
  - key: MESSAGE 3
    fill: user_input
    note: Mensagem de resultado do terceiro aluno
  - key: EXPERT REPLY
    fill: ai_copy
    note: Resposta calorosa do expert ao grupo
  - key: BRAND
    fill: brand_dna
  - key: WEBSITE
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: an ad mimicking a WhatsApp group screenshot. Chat interface: group header "[GROUP NAME]", "[MEMBER COUNT]". Chat thread showing multiple members celebrating: "[MESSAGE 1]" from "[NAME1]". "[MESSAGE 2]" from "[NAME2]". "[MESSAGE 3]" from "[NAME3]". Expert reply bubble: "[EXPERT REPLY]". Celebration emojis and reaction badges on messages. Bottom outside screenshot: "[BRAND] · Esse é o resultado de quem segue o método. · [WEBSITE]". [FORMAT] aspect ratio.
```

---

### Template 103 — Infográfico de Transformação

```yaml
id: 103
category: G
name: Infográfico de Transformação
strategy_note: Linha do tempo visual mostrando a jornada de transformação do aluno. Educacional + aspiracional. Funciona muito bem em topo de funil frio para mostrar o caminho completo.
formats: [4:5, 16:9]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: HEADLINE
    fill: ai_copy
    note: Headline da transformação com prazo, e.g. "De Zero a R$10k/mês em 6 meses: O Caminho Real"
  - key: MILESTONE 1 TITLE
    fill: user_input
    note: e.g. "Mês 1: Fundação"
  - key: MILESTONE 1 DESC
    fill: user_input
    note: e.g. "Primeiros R$500 online"
  - key: MILESTONE 2 TITLE
    fill: user_input
  - key: MILESTONE 2 DESC
    fill: user_input
  - key: MILESTONE 3 TITLE
    fill: user_input
  - key: MILESTONE 3 DESC
    fill: user_input
  - key: MILESTONE 4 TITLE
    fill: user_input
  - key: MILESTONE 4 DESC
    fill: user_input
  - key: BRAND
    fill: brand_dna
  - key: CTA
    fill: ai_copy
    note: e.g. "Ver o programa completo"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors and typography. Create: a transformation timeline infographic ad on clean white background. Top: bold [BRAND COLOR] headline: "[HEADLINE]". Center: a horizontal timeline with 4 milestone markers connected by a progress line in [BRAND COLOR]. Each milestone: numbered circle in [BRAND COLOR] + "[MILESTONE 1 TITLE]" bold + "[MILESTONE 1 DESC]" small, then "[MILESTONE 2 TITLE]" + "[MILESTONE 2 DESC]", "[MILESTONE 3 TITLE]" + "[MILESTONE 3 DESC]", "[MILESTONE 4 TITLE]" + "[MILESTONE 4 DESC]". Final milestone has [BRAND COLOR] trophy icon. Bottom: [BRAND] logo + "[CTA]" button. [FORMAT] aspect ratio.
```

---

### Template 104 — Faux Post de Feed

```yaml
id: 104
category: G
name: Faux Post de Feed
strategy_note: Replica um post de feed do Instagram com alto engajamento visível. A prova social de curtidas e comentários é o gancho. Use quando o expert tiver posts virais ou alto engajamento orgânico.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: EXPERT HANDLE
    fill: brand_dna
    note: Handle do Instagram, e.g. "@expertname"
  - key: LIKE COUNT
    fill: user_input
    note: e.g. "4.847"
  - key: POST CAPTION HOOK
    fill: ai_copy
    note: Primeiras linhas da legenda — hook forte que termina em "..."
  - key: COMMENT COUNT
    fill: user_input
    note: e.g. "847"
  - key: COMMENT 1
    fill: ai_copy
    note: Comentário positivo de fã
  - key: COMMENT 2
    fill: ai_copy
    note: Comentário positivo de fã
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: an ad designed to look like an Instagram feed post with high engagement. Top: Instagram post header — expert circular profile photo + "[EXPERT HANDLE]" + "Seguindo" button grayed out. Post image area: lifestyle photo of expert at a keynote, in a studio or at a whiteboard teaching — warm, authentic. Below post: heart + comment + share icons. "🤍 [LIKE COUNT] curtidas". Caption: "[EXPERT HANDLE]" bold + "[POST CAPTION HOOK]" followed by "...ver mais". "Ver todos os [COMMENT COUNT] comentários". Two featured comments: "[COMMENT 1]", "[COMMENT 2]". "3 HORAS ATRÁS". [FORMAT] aspect ratio.
```

---

### Template 105 — Garantia em Destaque

```yaml
id: 105
category: G
name: Garantia em Destaque
strategy_note: A garantia como protagonista reduz a objeção de risco. Muito eficaz para retargeting de quem visitou a página de vendas mas não comprou. Use quando a garantia for um diferencial real.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: GUARANTEE DAYS
    fill: user_input
    note: Número de dias da garantia, e.g. "30"
  - key: GUARANTEE HEADLINE
    fill: ai_copy
    note: e.g. "Não gostou? Devolvemos 100% do seu dinheiro."
  - key: GUARANTEE EXPLANATION
    fill: ai_copy
    note: 2-3 linhas específicas e tranquilizadoras sobre como funciona a garantia
  - key: EXPERT NAME
    fill: brand_dna
  - key: TITLE
    fill: user_input
    note: Cargo ou título do expert
  - key: CTA
    fill: ai_copy
    note: e.g. "Começar com garantia"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a guarantee-focused trust ad. Background: clean light [BRAND COLOR] or white. Center: large bold illustrated guarantee badge — circular seal design in [BRAND COLOR] with "[GUARANTEE DAYS]" in oversized numbers and "Dias de Garantia Incondicional" around it. Below badge: bold black headline: "[GUARANTEE HEADLINE]". Body copy in regular weight: "[GUARANTEE EXPLANATION]". Expert photo small + [EXPERT NAME] + [TITLE] bottom left. CTA button: "[CTA]" in [BRAND COLOR] rounded. [FORMAT] aspect ratio.
```

---

### Template 106 — Faux Artigo Jornal Digital BR

```yaml
id: 106
category: G
name: Faux Artigo Jornal Digital BR
strategy_note: Versão brasileira do faux press — masthead de portal de notícias BR. Alta autoridade percebida. Use para produtos com histórias de transformação fortes ou experts com trajetória interessante.
formats: [4:5]
recommended_format: 4:5
variables:
  - key: PUBLICATION STYLE
    fill: user_input
    note: Estilo de publicação, e.g. "EXAME" ou "ÉPOCA NEGÓCIOS" ou "VALOR ECONÔMICO"
  - key: SECTION
    fill: ai_copy
    note: e.g. "EMPREENDEDORISMO · DESTAQUE"
  - key: HEADLINE
    fill: ai_copy
    note: Headline estilo jornalístico sobre o expert ou o método — credível e intrigante
  - key: EXPERT NAME
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Create: an ad designed to look like a Brazilian news portal article screenshot. Top 30%: white background with realistic Brazilian publication masthead "[PUBLICATION STYLE]" in large bold serif. Below: thin gray rule. Small gray text "[SECTION]" left-aligned. Bold serif headline: "[HEADLINE]". Author line: "Por Redação [PUBLICATION STYLE]" · date. Bottom 60%: lifestyle photo of [EXPERT NAME] in a professional but casual interview-style setting. No logo overlay. No CTA visible. Should look like an organic article share. [FORMAT] aspect ratio.
```

---

### Template 107 — Carrossel Estático Teaser

```yaml
id: 107
category: G
name: Carrossel Estático Teaser
strategy_note: Frame de carrossel que parece incompleto — a seta de arrastar cria curiosidade e simula formato nativo do Instagram. Use para educação de audiência ou listas de dicas que geram alto engajamento.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: CAROUSEL HOOK
    fill: ai_copy
    note: Título do carrossel em formato de lista, e.g. "5 erros que fazem 90% das pessoas desistirem do digital (e como evitar)"
  - key: EXPERT HANDLE
    fill: brand_dna
  - key: PARTIAL TEXT
    fill: ai_copy
    note: Início do slide 2, e.g. "Erro 1: Começar sem..."
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a single-frame ad that mimics the first slide of an Instagram carousel deliberately cut off on the right edge. Background: clean [BRAND COLOR]. Left 85% of frame: bold white headline "[CAROUSEL HOOK]". Below: "1 / 5" in small white text. Right edge: deliberately cut off with a peek of slide 2 visible — another panel with partial text "[PARTIAL TEXT]". Instagram carousel navigation dot indicators at bottom center. Bottom left: [EXPERT HANDLE]. The cut-off creates a strong visual pull to swipe. [FORMAT] aspect ratio.
```

---

### Template 108 — Depoimento em Vídeo Pausado

```yaml
id: 108
category: G
name: Depoimento em Vídeo Pausado
strategy_note: Replica um frame pausado de vídeo depoimento com barra de progresso e controles. Provoca curiosidade para dar play. Use com foto real de aluno em momento natural, não produzido.
formats: [4:5, 9:16]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: STUDENT NAME
    fill: user_input
    note: Nome + idade + cidade do aluno, e.g. "Ana Paula, 34 anos · São Paulo"
  - key: SUBTITLE TEXT
    fill: ai_copy
    note: Trecho da fala do aluno no meio de uma frase importante, e.g. "...e em 45 dias eu já tinha recuperado o investimento..."
  - key: BRAND
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference for tone ONLY. Create: a static ad that looks like a paused video testimonial. Full-bleed candid photo of student mid-sentence, natural expression, home or simple background — feels like a phone selfie video, not produced. Overlaid video player UI: bottom progress bar partially filled at 30% in [BRAND COLOR]. Play button triangle icon centered white semi-transparent circle. Video title overlay bottom left: "[STUDENT NAME]". Time code: "0:34 / 2:17". Subtitles bar at bottom: "[SUBTITLE TEXT]" in white text on dark semi-transparent strip. Top left: small [BRAND] watermark. [FORMAT] aspect ratio.
```

---

### Template 109 — Oferta de Entrada (Low Ticket)

```yaml
id: 109
category: G
name: Oferta de Entrada
strategy_note: Produto de entrada de baixo valor — ebook, mini-curso, workshop. Foco total na oferta irresistível e no preço de impulso. Use para aquisição de clientes em topo de funil com custo baixo.
formats: [4:5, 1:1]
recommended_format: 4:5
variables:
  - key: BRAND COLOR
    fill: brand_dna
  - key: ACCENT COLOR
    fill: brand_dna
  - key: PRICE
    fill: user_input
    note: Preço de entrada, e.g. "R$27"
  - key: PRODUCT NAME
    fill: brand_dna
  - key: ITEM 1
    fill: user_input
    note: Item 1 do value stack com valor, e.g. "[PRODUCT NAME] — R$197"
  - key: ITEM 2
    fill: user_input
    note: Bônus 1 com valor, e.g. "Bônus: Planilha de Controle — R$97"
  - key: ITEM 3
    fill: user_input
    note: Bônus 2 com valor, e.g. "Bônus 2: Templates Prontos — R$47"
  - key: TOTAL VALUE
    fill: ai_copy
    note: Soma do value stack, e.g. "R$341"
  - key: CTA
    fill: ai_copy
    note: e.g. "QUERO POR R$27 →"
  - key: URGENCY LINE
    fill: ai_copy
    note: e.g. "⏱ Oferta por tempo limitado"
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand colors. Create: a low-ticket impulse offer ad on [BRAND COLOR] or gradient background. Top: bold white all-caps: "HOJE POR APENAS [PRICE]". Center: clean product mockup — ebook cover or mini-course device mockup with [PRODUCT NAME] prominently. Below: "O que você leva:" then list: "📘 [ITEM 1]", "🎁 [ITEM 2]", "🎁 [ITEM 3]", "TOTAL: [TOTAL VALUE] — Hoje: [PRICE]". "✅ 7 dias de garantia". CTA: large pill button in [ACCENT COLOR]: "[CTA]". Bottom: small "[URGENCY LINE]". [FORMAT] aspect ratio.
```

---

### Template 110 — Manifesto de Marca Digital

```yaml
id: 110
category: G
name: Manifesto de Marca Digital
strategy_note: Copy manifesto adaptado para o mercado digital brasileiro. Fala com a dor de quem tenta e não consegue. Alta identificação e alto compartilhamento orgânico. Use para brand building e audiências que já interagiram com o conteúdo do expert.
formats: [1:1, 4:5]
recommended_format: 1:1
variables:
  - key: MANIFESTO OPENING
    fill: ai_copy
    note: Frase de abertura poderosa que valida a dor do avatar
  - key: MANIFESTO BODY
    fill: ai_copy
    note: 12-16 linhas curtas estruturadas como — validação da dor, identificação do vilão, reframing, possibilidade, posicionamento da marca
  - key: EXPERT NAME
    fill: brand_dna
  - key: TITLE
    fill: user_input
    note: Cargo ou missão do expert
  - key: BRAND
    fill: brand_dna
  - key: COURSE NAME
    fill: brand_dna
```

**Prompt:**
```
Use the attached images as brand reference. Match exact brand typography and tone. Create: a copy-dominant manifesto ad on clean white background. No imagery — text IS the ad. Top: oversized bold black serif headline: "[MANIFESTO OPENING]" spanning top 20%. Below: left-aligned body copy in short punchy lines — NOT paragraphs: "[MANIFESTO BODY]". Bottom 15%: expert photo small circular + [EXPERT NAME] + [TITLE] + [COURSE NAME] name. [FORMAT] aspect ratio.
```

---
