# Seika Innovation — Design System

> Estratto dal file Figma `HCEJye5BKroKPT9LBoVUeU`, pagina **Prod 3.0**, frame **Home 5** (1440×12452px).
> Letto direttamente da Figma MCP il 2026-05-05.

---

## Colori

Figma dichiara questi nomi di stile: **Green**, **Dark**, **Grey**, **White**, **Super Dark**.

| Token | Hex | Variabile Figma | Uso |
|-------|-----|-----------------|-----|
| `dark` | `#1C2D28` | Dark | Background scuro (Header, Hero), testo su sfondi chiari |
| `green` | `#00A77D` | Green | Accento primario: label, titoli servizi/metodo/FAQ, CTA, link, heading green |
| `light` | `#ECEFE5` | Grey | Background sezioni chiare, testo CTA su sfondi scuri |
| `white` | `#FFFFFF` | White | Testo su bg scuri, background sezioni "Chi siamo" e "CTA finale" |
| `super-dark` | `#131F1B` | Super Dark | Footer (indicato nella metadata, bg leggermente più scuro del dark) |

### Mappa sfondi sezioni

| Sezione | Background | Colore testo heading | Colore testo body |
|---------|-----------|---------------------|-------------------|
| Header | `#1C2D28` dark | — | `#FFFFFF` white |
| Hero | `#1C2D28` dark | `#FFFFFF` white | `#FFFFFF` white |
| ShowCase (cards) | no bg esplicito | — | — |
| ShowCase (loghi) | no bg esplicito | — | — |
| Servizi | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| Chi siamo | `#FFFFFF` white | `#00A77D` green | `#1C2D28` dark |
| Metodo Seika | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| Prioritizzazione | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| Risultati | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| Case Study | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| Manifesto | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| FAQ | `#ECEFE5` light | `#1C2D28` dark | `#1C2D28` dark |
| CTA finale | `#FFFFFF` white | `#00A77D` green | `#1C2D28` dark |
| Footer | `#1C2D28` dark | — | `#FFFFFF` white |

---

## Tipografia

**Font family**: `Aptos` — font locale, file in `src/fonts/`.
Pesi usati: **Light (300)**, **Regular (400)**, **SemiBold (600)**.

### File font disponibili

| File | Weight | Formato | Note |
|------|--------|---------|------|
| `Aptos-Light.ttf` | 300 | TTF | Footer |
| `Aptos.ttf` | 400 | TTF | Principale (heading, body, subheading, nav, tag) |
| `Aptos-SemiBold.ttf` | 600 | TTF | Label, step number, footer title |
| `Aptos-Bold.ttf` | 700 | TTF | Non usato nel design, disponibile come riserva |

> **Nota**: i file sono in formato `.ttf`, non `.woff2`. Per una migliore performance web si consiglia di convertirli in `.woff2`. Funzionano comunque con `@font-face`.

### Licenza

> **ATTENZIONE**: La EULA Microsoft Aptos Fonts vieta la distribuzione a terzi ("No Distribution Rights") e l'uso per "commercial software hosting services". L'embedding via `@font-face` su un sito web invia il file font a ogni visitatore, il che conta come distribuzione. La licenza Microsoft 365 Business del cliente copre solo l'uso dentro le app Microsoft, non il web.
>
> **Azione richiesta**: il cliente deve verificare con Microsoft se ha diritto all'uso web, oppure valutare un font alternativo open source (es. Inter, Geologica). Lo sviluppo procede con Aptos, il cambio font è un'operazione semplice grazie alla variabile CSS `--font-aptos`.

### Dichiarazione @font-face suggerita (in `app/layout.tsx`)

```tsx
import localFont from "next/font/local";

const aptos = localFont({
  src: [
    {
      path: "../fonts/Aptos-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Aptos.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Aptos-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-aptos",
  display: "swap",
});
```

Poi nel `<body>`: `className={aptos.variable}` e in Tailwind config: `fontFamily: { aptos: ["var(--font-aptos)"] }`.

| Token | Weight | Size | Line-height | Letter-spacing | Transform | Dove usato |
|-------|--------|------|-------------|----------------|-----------|------------|
| `label` | SemiBold 600 | 14px | normal | 1.4px | uppercase | Label sopra ogni heading (es. "SERVIZI", "METODO SEIKA", "FAQ") |
| `heading` | Regular 400 | 48px | 48px | 0 | none | Titoli principali di sezione |
| `subheading` | Regular 400 | 24px | normal | 0 | none | Titoli servizi, titoli step metodo, domande FAQ |
| `faq-number` | Regular 400 | 24px | normal | 0.48px | none | Numeri FAQ ("01", "02"...) |
| `body` | Regular 400 | 16px | normal | 0.32px | none | Paragrafi, descrizioni, testo CTA |
| `small` | Regular 400 | 14px | normal | 0.28px | none | Descrizioni card servizi, risposte FAQ, link "Scopri di più" |
| `nav` | Regular 400 | 14px | normal | 1.4px | uppercase | Voci menu header desktop |
| `nav-mobile` | Regular 400 | 32px | normal | 3.2px | uppercase | Voci menu overlay mobile |
| `tag` | Regular 400 | 18px | normal | 0.36px | none | Tag pill nel Manifesto ("human", "data", "intelligence", "Ai", "innovation") |
| `footer` | Light 300 | 14px | normal | 0 | none | Testi footer, copyright |
| `footer-title` | SemiBold 600 | 14px | normal | 0 | none | "Seika Innovation Srl" nel footer |
| `step-number` | SemiBold 600 | 14px | normal | 1.4px | uppercase | Numeri step nel Metodo ("01"–"05") |

### Colori testo per contesto

- **Label su sfondo chiaro**: `#00A77D` green (la maggior parte dei casi)
- **Label su sfondo white** (Chi siamo, CTA finale): `#1C2D28` dark
- **Label su sfondo scuro** (Hero): `#00A77D` green
- **Heading standard**: `#1C2D28` dark
- **Heading accent** (Chi siamo, CTA finale): `#00A77D` green
- **Heading su sfondo scuro** (Hero): `#FFFFFF` white
- **Subheading** (servizi, metodo, FAQ domande): `#00A77D` green
- **Body/Small**: `#1C2D28` dark (su chiaro), `#FFFFFF` white (su scuro)
- **Link**: `#00A77D` green, underline

---

## Spaziature

| Token | Valore | Dove confermato |
|-------|--------|-----------------|
| `page-width` | 1440px | Frame root |
| `content-max-width` | 1128px | Tutti i Content wrapper |
| `padding-x` | 156px | (1440 − 1128) / 2 |
| `section-padding-y` | 120px | py-[120px] in Metodo, FAQ, Manifesto |
| `section-gap` | 96px | Gap tra blocchi interni (intro → contenuto) |
| `element-gap` | 48px | Gap tra gruppi (testo → CTA in Hero, nav items, footer colonne, FAQ items) |
| `label-heading-gap` | 42px | Spazio label → heading (Metodo, Manifesto, FAQ intro) |
| `text-gap` | 24px | Gap tra heading → body, gap tra label → heading (Hero, Servizi) |
| `step-title-body-gap` | 12px | Gap titolo → descrizione dentro step Metodo |
| `step-gap` | 32px | Gap verticale tra step nel Metodo |
| `column-gap` | 48px | Gap tra colonne griglia 3-col (Servizi) |
| `two-col-gap` | 24px | Gap tra le 2 colonne testo (Chi siamo) |
| `metodo-content-gap` | 87px | Gap tra lista metodo e illustrazione |

---

## Componenti

### CTA Button

| Variante | Background | Border | Testo | Border-radius | Padding |
|----------|-----------|--------|-------|---------------|---------|
| `outline` | trasparente | 1.5px solid `#00A77D` | `#ECEFE5` | 33px (pill) | 32px / 12px |
| `filled` | `#00A77D` | 1.5px solid `#00A77D` | `#ECEFE5` | 33px (pill) | 32px / 12px |
| `nav-outline` | trasparente | 1px solid `#00A77D` | `#FFFFFF` | 30px | 32px / 12px |

- Testo CTA: `Aptos Regular 400`, 16px, center
- Testo nav button: `Aptos Regular 400`, 14px, tracking 1.4px, uppercase

### Tag Pill (Manifesto)

| Variante | Background | Border | Testo | Border-radius | Padding |
|----------|-----------|--------|-------|---------------|---------|
| `tag-outline` | `#ECEFE5` | 1px solid `#1C2D28` | `#1C2D28` | 30px | 20px / 6px |
| `tag-outline-dashed` | `#ECEFE5` | 1px dashed `#1C2D28` | `#1C2D28` | 30px | 20px / 6px |
| `tag-filled-green` | `#00A77D` | 1px solid `#00A77D` | `#ECEFE5` | 30px | 20px / 6px |
| `tag-filled-dark` | `#1C2D28` | 1px solid `#1C2D28` | `#ECEFE5` | 30px | 20px / 6px |
| `tag-ghost` | `#ECEFE5` | 1px solid `#ECEFE5` | `#1C2D28` | 30px | 20px / 6px |

- Testo tag: `Aptos Regular 400`, 18px, tracking 0.36px

### Link

- Colore: `#00A77D` green
- Font: `Aptos Regular 400`, 14px, tracking 0.28px
- Decorazione: underline, text-decoration-skip-ink none

### ProgressBar (linea decorativa)

Implementazione: **componente React `<ProgressBar />`** in `src/components/ProgressBar.tsx`. Client component (`"use client"`).

**Struttura visiva**: `├────────────┤╌╌╌╌╌╌╌`
- Tacca verticale a sinistra (1.5px × height, green)
- Linea continua (1.5px, green, da 0 a fill%)
- Tacca verticale al punto di giunzione (1.5px × height, green)
- Linea tratteggiata (1.5px, colore variabile, da fill% a 100%)
- Nessuna tacca a destra

**Props**:
```tsx
fill?: number       // Percentuale parte piena (0–100). Default: 80
height?: number     // Altezza tacche verticali in px. Default: 10
dashColor?: "green" | "light"  // Colore linea tratteggiata. Default: "green"
className?: string
```

**Trattini SVG**: `strokeDasharray="6 4"` (trattino 8px, gap 6px), strokeWidth 1.5

**Animazione** (IntersectionObserver, threshold 0.5):
1. Linea continua: da 0% a fill% — `1s ease-out`
2. Linea tratteggiata: da 0% a (100−fill)% — `1.5s ease-out`, delay `900ms`
3. Tacca giunzione: opacity 0→1 — `500ms ease-out`, delay `800ms`
4. Rispetta `prefers-reduced-motion` (da implementare)

**Uso per sezione**:
- ShowCase: `dashColor="light"`, fill varia (35, 50, 100)
- Servizi: `dashColor="green"` (da verificare su sfondo light)
- Prioritizzazione, Risultati: da definire

**Questo pattern grafico è il DNA visivo del sito** — le linee continua+tratteggiata ricorrono in tutte le sezioni.

### Spessore linee — regola globale

> **Tutte le linee del sito hanno spessore 1.5px.** Nessuna eccezione.
> Questo vale per: stroke SVG, separatori CSS, ProgressBar, illustrazioni decorative, bordi cerchi.
> Non usare mai 1px o 2px per linee decorative/strutturali.

### Separatori

- Linea continua: `h-[1.5px] bg-sk-dark` (sezioni chiare) o `bg-sk-light` (sezioni scure)
- Linea tratteggiata: SVG `<line>` con `strokeWidth="1.5"` e `strokeDasharray="6 4"`
- I separatori nelle card Servizi usano: continua sopra il titolo, tratteggiata sotto la descrizione

### Illustrazioni decorative Servizi

3 varianti SVG (viewBox 210×86), coordinate esatte da Figma. Tutti gli stroke a 1.5px.

**Elementi ricorrenti**:
- Cerchio grande: 62×62px (r=31), stroke green `#00A77D`, strokeWidth 1.5
- Cerchio medio: 44×44px (r=22), stroke dark `#1C2D28`, strokeWidth 1.5
- Dot pieno: 18×18px (r=9), fill dark `#1C2D28`
- Linee connessione: tratteggiata `strokeDasharray="4 3"`, stroke dark, strokeWidth 1.5

**Variante 1** (Frame 10): cerchio medio → linea → dot animato → linea → cerchio grande green
**Variante 2** (Frame 9): cerchio grande green → linea → dot animato → linea → cerchio medio
**Variante 3** (Frame 8): dot → linea → cerchio grande green animato → linea → dot

**Tecnica di rendering**:
- Linea tratteggiata unica tra i due elementi esterni
- Elemento centrale sovrapposto con "alone" fill=colore sfondo sezione (#ECEFE5) per mascherare la linea sotto
- Raggio alone: r+4px rispetto all'elemento (dot r=9 → alone r=13, cerchio r=31 → alone r=35)
- **Stacco linea-elemento**: 6px tra la fine della linea e il bordo degli elementi alle estremità

**Animazione elemento centrale**:
- Oscillazione orizzontale ±6px
- Durata: 2.5s, loop infinito
- SVG `<animateTransform type="translate" values="-6,0;6,0;-6,0">`
- L'alone si muove insieme all'elemento → la linea resta sempre mascherata

**Layout**:
- Desktop: le 3 illustrazioni in riga sopra le card, gap 182px
- Mobile: ogni illustrazione sopra la propria card

### Illustrazione Seika Innovation (Chi siamo)

Illustrazione complessa di cerchi sovrapposti — rappresenta il processo di analisi. Implementata come SVG inline in `SeikaInnovation.tsx`, fuori dal Container (full viewport width). viewBox: `-71 0 1310 310`, i cerchi alle estremità vengono tagliati a metà dal viewport.

**Composizione** (da sinistra a destra):
1. Cerchio grande dark (r=143) — tagliato a metà dal bordo sinistro
2. Cluster di 6 cerchi sovrapposti (r=143 ciascuno, offset 46px tra loro):
   - I primi 4: stroke dark `#1C2D28`
   - Gli ultimi 2: stroke light `#ECEFE5` (effetto dissolvenza, quasi invisibili su bg bianco)
3. Linee tratteggiate dark con frecce (strokeDasharray="6 4")
4. Cerchio grande green (r=143, stroke `#00A77D`)
5. Linea tratteggiata verde con freccia
6. Cerchio grande dark (r=143) — tagliato a metà dal bordo destro
7. Glow verde radiale dietro il cerchio destro (r=80, gradiente `#00A77D` opacity 0.6→0)

**Animazioni**:
- **Cluster (6 cerchi)**: oscillazione orizzontale +30px, durata 5s, delay sfalsato 0.3s tra cerchi (effetto onda consequenziale)
- **Cerchio green**: viaggio orizzontale da posizione iniziale fino alla punta della freccia verde (+420px), durata 10s, andata e ritorno
- **Linee tratteggiate**: flusso dei trattini via `stroke-dashoffset` (8s dark, 6s verde)
- Tutto rispetta `prefers-reduced-motion`

**Tecnica cerchi tagliati**: il viewBox è più stretto della composizione, i cerchi alle estremità escono naturalmente — non servono clip-path.

### Linguaggio visivo — Principi ricorrenti

> Queste regole si applicano a tutte le illustrazioni decorative del sito.

1. **Cerchi e linee**: il vocabolario visivo Seika si basa su cerchi (outline, mai pieni tranne i dot) e linee tratteggiate che li connettono
2. **Colori illustrazioni**: dark `#1C2D28` per la struttura, green `#00A77D` per gli accenti/focus, light `#ECEFE5` per elementi che svaniscono
3. **Dissolvenza**: gli elementi alle estremità sfumano verso il colore dello sfondo (stroke light su bg white, stroke dark su bg dark)
4. **Alone bg**: gli elementi sovrapposti a linee/tracciati usano una "maschera" del colore sfondo per non interrompere visivamente il path sottostante. Tre varianti:
   - **Cerchi outline-only sovrapposti a una linea**: cerchio "alone" separato con `fill = colore sfondo` e raggio `r+4px`, posizionato sotto l'elemento
   - **Cerchi outline + fill** (es. Interaction in CtaIllustration): `fill = colore sfondo` (oltre allo `stroke` outline tratteggiato) — l'intero cerchio maschera ciò che ci passa sotto
   - **Dots pieni sui tracciati** (es. dots in CtaIllustration, dot del blocco 02 Servizi): `stroke = colore sfondo` con `strokeWidth = 4–5` (dipende dal raggio del dot — più grande il dot, più spesso l'alone perché copra bene la linea sotto) — alone integrato nel cerchio stesso
5. **Stacco 6px**: le linee non toccano mai gli elementi — sempre 6px di spazio
6. **Animazioni**: oscillazioni ±8–30px orizzontali, durate 2.5–10s, ease-in-out, mai aggressive. Flusso trattini via stroke-dashoffset. Delay sfalsati per effetti onda
7. **Frecce**: triangoli pieni 7×8px alla fine delle linee tratteggiate, stesso colore della linea

### Dots decorativi

Implementazione: **componente React `<Dots />`** riutilizzabile.

**Aspetto**:
- Cerchi 10px diametro, `border-radius: 50%`
- Colore su sfondo chiaro/white: `#1C2D28` dark
- Colore su sfondo scuro: `#ECEFE5` light (o `#00A77D` green per accenti)
- `position: absolute`, coordinate estratte dal Figma per ogni sezione

**Animazione floating**:
- Ogni dot ha un'animazione `float` sottile e continua
- Movimento: traslazione verticale di **±8px** (appena percettibile)
- Durata: **6s–10s** (randomizzata per dot, evita sincronismo)
- Easing: `ease-in-out`
- `animation-direction: alternate` (su e giù)
- Ogni dot ha un `animation-delay` diverso (randomizzato o basato sull'indice) per creare un effetto organico
- `will-change: transform` per performance GPU
- Rispetta `prefers-reduced-motion`: se attivo, animazione disabilitata

**Props componente**:
```tsx
type Dot = { x: number; y: number; color?: "dark" | "light" | "green" };

interface DotsProps {
  dots: Dot[];
  className?: string;
}
```

**Responsive**: su mobile i dots vengono nascosti (`hidden md:block`) per evitare overflow e ridurre il carico visivo

### Griglia 3 colonne (Servizi, ShowCase cards)

- **Content width**: 1128px
- **Colonne**: 3
- **Gap**: 48px
- **Larghezza card**: 344px → (1128 − 48×2) / 3

### Griglia 4 colonne (Case Study)

- **Colonne**: 4
- **Gap**: 48px
- **Larghezza card**: 246px → (1128 − 48×3) / 4

### FAQ Item

- Layout: 3 colonne flex
  - Numero: 24px, tracking 0.48px, `#1C2D28`, larghezza auto
  - Domanda: 24px, tracking 0.48px, `#00A77D`, larghezza 263px
  - Risposta: 14px, tracking 0.28px, `#1C2D28`, flex-1
- Gap colonne: 48px
- Gap verticale tra item: 48px
- Separatore: linea 1px sotto ogni item

### Metodo Step

- Layout: flex row
  - Numero: SemiBold 14px, tracking 1.4px, `#1C2D28`, uppercase, pt-9px
  - Contenuto: flex-col, gap 12px
    - Titolo: Regular 24px, `#00A77D`
    - Descrizione: Regular 16px, tracking 0.32px, `#1C2D28`
- Gap numero → contenuto: 24px
- Gap tra step: 32px

---

## Stati interattivi

Transizione globale: `transition: all 200ms ease-in-out` su tutti i componenti interattivi.

### CTA Button — Outline

| Stato | Background | Border | Testo |
|-------|-----------|--------|-------|
| default | trasparente | 1.5px solid `green` | `light` |
| hover | `green` | 1.5px solid `green` | `dark` |
| active | `dark` | 1.5px solid `dark` | `light` |
| focus-visible | trasparente | 1.5px solid `green` + outline 2px solid `white` offset 2px | `light` |
| disabled | trasparente | 1.5px solid `green` @ 40% opacity | `light` @ 40% opacity |

### CTA Button — Filled

| Stato | Background | Border | Testo |
|-------|-----------|--------|-------|
| default | `green` | 1.5px solid `green` | `light` |
| hover | `dark` | 1.5px solid `dark` | `light` |
| active | `super-dark` | 1.5px solid `super-dark` | `light` |
| focus-visible | `green` | 1.5px solid `green` + outline 2px solid `white` offset 2px | `light` |
| disabled | `green` @ 40% opacity | 1.5px solid `green` @ 40% opacity | `light` @ 40% opacity |

### Nav Button — Outline

| Stato | Background | Border | Testo |
|-------|-----------|--------|-------|
| default | trasparente | 1px solid `green` | `white` |
| hover | `green` | 1px solid `green` | `dark` |
| active | `dark` | 1px solid `dark` | `white` |
| focus-visible | trasparente | 1px solid `green` + outline 2px solid `white` offset 2px | `white` |

### Nav Item (testo header)

| Stato | Testo | Decorazione |
|-------|-------|-------------|
| default | `white` | none |
| hover | `green` | none |
| active | `green` | none |
| focus-visible | `white` + outline 2px solid `white` offset 2px | none |

### Link ("Scopri di più")

| Stato | Testo | Decorazione |
|-------|-------|-------------|
| default | `green` | underline |
| hover | `dark` | underline |
| active | `dark` | underline |
| focus-visible | `green` + outline 2px solid `green` offset 2px | underline |

### Tag Pill (Manifesto)

> I tag nel Manifesto sono decorativi e **non interattivi**. Nessuno stato hover/active necessario.

---

## Header

- Altezza: 100px
- Background: `#1C2D28`
- Logo: 160×30px (header), 256×48px (footer)
- Nav items: gap 48px tra le voci
- Voci: "SERVIZI", "SEIKA INNOVATION", "METODO", "RISULTATI", "DOVE OPERIAMO"
- CTA: "CONTATTI" (outline, border-radius 30px)

---

## Footer

- Background: `#1C2D28` dark
- Padding: 48px verticale
- Content width: 1134px (leggermente diverso da 1128px)
- Logo grande: 256×48px
- Layout info: flex row, gap 48px, font Aptos Light 14px, white
- Colonne: ragione sociale | P.IVA | contatti | indirizzo | policy
- Copyright: lowercase, Aptos Light 14px
- Social icons: 12×12px (Instagram, LinkedIn)
- Gap logo → info: 110px

---

## Responsive — Mobile

> Frame Figma: `329:8048` "Hero 5 - Mobile", 637×16453px.
> Letto da Figma MCP il 2026-05-05. Il design è pensato per viewport **375px** (il frame Figma è 637px con content 515px).

### Layout mobile globale

| Token | Desktop | Mobile |
|-------|---------|--------|
| Frame width | 1440px | 637px |
| Content width | 1128px | 515px |
| Padding-x | 156px | 61px |
| Section padding-y | 120px | 120px (uguale) |
| Section gap interno | 96px | 96px (uguale) |
| Heading | 48px | 48px (invariato, va a capo naturalmente) |
| Label | 14px SemiBold | 14px SemiBold (uguale) |
| Body | 16px | 16px (uguale) |

### Sezioni assenti su mobile

- **Header/Nav**: non presente nel frame mobile (nessun header separato)
- **ShowCase loghi partner**: rimossa

### Navigation mobile (node `332:8825`)

> Estratta da Figma il 2026-05-05. Due stati: header chiuso (barra con hamburger) e menu aperto (overlay full-screen).

#### Header bar (chiuso e aperto)

- **Altezza**: 100px (uguale al desktop)
- **Background**: `#1C2D28` dark
- **Logo**: 160×30px a sinistra (uguale al desktop)
- **Icona menu**: 44×44px a destra, cerchio outline `#ECEFE5`
  - **Stato chiuso**: hamburger (3 linee)
  - **Stato aperto**: X (2 linee incrociate a 45°)
- **Layout**: logo e icona justify-between, centrati in 515px
- **Componente Figma**: `Component16` (node `331:8179`), proprietà `property1`: `"Menu Icon 1"` (hamburger) / `"Menu Icon 2"` (X)

#### Menu aperto (overlay)

- **Background**: `#1C2D28` dark, full screen
- **Header**: barra 100px con logo + X (stessa del chiuso)
- **Content**: padding pt-48, pb-120

**Voci di navigazione**:
- Font: `Aptos Regular 400`, **32px**, tracking **3.2px**, uppercase
- Colore: `#FFFFFF` white
- Allineamento: left
- Gap tra voci: **48px**
- Voci: SERVIZI, SEIKA INNOVATION, METODO, RISULTATI, DOVE OPERIAMO

**CTA "CONTATTI"**:
- Stile: outline — border 1.5px solid `#00A77D`, bg trasparente, border-radius 33px
- Testo: 32px, tracking 3.2px, uppercase, `#FFFFFF` white
- Padding: 32px / 12px

**Footer nel menu** (sotto le voci):
- Gap voci → footer: **96px**
- Layout: uguale al footer mobile standalone (ragione sociale, contatti, policy, copyright + social)
- Gap info → copyright: **82px**

**Animazione proposta** (non nel Figma):
- Apertura: fade-in `200ms ease-out` o slide-down
- Chiusura: fade-out `200ms ease-in`
- Icona: transizione hamburger → X con rotazione `200ms`

### Differenze per sezione

#### Hero (`329:8049`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | Testo a sinistra, illustrazione a destra | **Immagine sopra, testo sotto** |
| Immagine | Illustrazione decorativa (cerchi) | **Foto** rounded-rectangle 512×336px |
| Ordine | Label → Heading → Body → CTA | Immagine → Label → Heading → Body → CTA |
| Heading height | 96px (2 righe) | 96px (va a capo naturalmente) |
| CTA | Sotto il testo | Sotto il testo (uguale) |
| Gap immagine → testo | — | 96px (y: immagine 120→456, testo 552) |

#### ShowCase cards (`322:6621`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | 3 colonne, gap 48px | **1 colonna** stacked |
| Card width | 344px | 515px (full width) |
| Card height | 175px | 146–175px |
| Gap tra card | 48px | **82px** |
| Padding top prima card | 40px | 100px |

#### Servizi (`322:6752`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout cards | 3 colonne, gap 48px | **1 colonna** stacked |
| Card width | 344px | 515px |
| Gap tra card | 48px | **82px** |
| Icona illustrazione | Riga unica sopra tutte le card | **Sopra ogni singola card** (210×86px) |
| Separatori | Linea sopra + sotto ogni card | Linea sopra + sotto ogni card (uguale) |
| "Scopri di più" | Sotto separatore inferiore | Sotto separatore inferiore (uguale) |
| Intro label-heading gap | 24px | 60px (label y=0, heading y=60) |

#### Seika Innovation (`322:6881`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Body text | 2 colonne (552px + 552px, gap 24px) | **1 colonna** (515px) |
| Cerchi decorativi | 286px diametro | **168px** diametro |
| Illustrazione Union | A destra, 721×378px | **Sotto**, 515×272px (full width) |
| Gap testo → illustrazione | 96px | 96px (uguale) |

#### Metodo (`321:6562`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | 2 colonne (lista 535px + illustrazione 352px) | **1 colonna** |
| Illustrazione ellissi concentriche | Presente (352px a destra) | **Rimossa** |
| Numeri laterali decorativi | Colonna 01–05 a destra | **Rimossi** |
| Immagini step | Non presenti | **Cerchio 97px** con foto sopra ogni step, px-42 |
| Step height | 81px | **202px** (include immagine) |
| Gap tra step | 32px | **74px** |
| Gap numero → contenuto | 24px | 24px (uguale) |
| Gap titolo → descrizione | 12px | 12px (uguale) |

#### Prioritizzazione (`322:6968`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | Card dettagli a sinistra (305px) + grafico a destra (717px) | **Grafico sopra, card sotto** |
| Grafico scatter | 717×276px | **515×199px** (scalato) |
| Dots nel grafico | ~10px | **~7px** (scalati proporzionalmente) |
| Cerchi grandi nel grafico | ~35px | **~25px** (scalati) |
| Gap grafico → card | affiancati, gap 106px | **82px** verticale |
| Heading | 96px (2 righe) | **144px** (3 righe su 515px) |

#### Risultati (`322:7072`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout per riga | Union + Instance affiancati | **Union sopra, Instance sotto** (stacked) |
| Righe | 3 righe (2+2+2 elementi) | 3 gruppi stacked |
| Union width | variabile (454–518px) | **257px** (scalato) |
| Instance width | variabile (460px) | **515px** (full width) |
| Gap tra gruppi | — | **96px** |
| Heading | 96px (2 righe) | **144px** (3 righe) |

#### CaseStudy (`322:7202`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | 4 colonne, gap 48px | **1 colonna** stacked |
| Card width | 246px | **515px** |
| Card height | ~786px | **339–356px** (più corte, immagine più compatta) |
| Gap tra card | 48px | **82px** |
| Body intro | 60px (2 righe) | **100px** (più righe su 515px) |

#### Manifesto (`322:7482`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Illustrazione | 1128×731px, 3 blocchi affiancati | **515×255px**, scalata proporzionalmente |
| Tag pill testo | 18px, tracking 0.36px | **~10px** (scalati con l'illustrazione) |
| Tag pill dimensione | ~97×34px (es. "human") | **~44×15px** |
| Heading | 96px (2 righe) | **144px** (3 righe) |
| Gap testo → illustrazione | 96px | 96px (uguale) |

#### FAQ (`323:7658`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout item | 3 colonne (numero + domanda 263px + risposta flex) | **3 colonne** (numero + domanda **147px** + risposta flex) |
| Font numero/domanda | 24px, tracking 0.48px | **14px, tracking 0.28px** |
| Font risposta | 14px, tracking 0.28px | 14px, tracking 0.28px (uguale) |
| Domanda width | 263px | **147px** |
| Gap tra item | 48px | 48px (uguale) |
| Heading | 96px (2 righe) | **144px** (3 righe) |

> **Nota tipografia**: le FAQ sono l'**unica sezione** dove la tipografia cambia su mobile (numeri e domande passano da 24px a 14px).

#### CTA (`328:7798`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Layout | 2 colonne (testo 564px + immagine 466px) | **Immagine sopra, testo sotto** |
| Immagine | 466×423px a destra | **515×468px** (full width, sopra) |
| Ordine | Testo a sinistra → Immagine a destra | Immagine → Testo |
| Gap immagine → testo | affiancati | 96px verticale |
| Heading | 144px (3 righe) | **192px** (4 righe su 515px) |

#### Footer (`329:7994`)

| Proprietà | Desktop | Mobile |
|-----------|---------|--------|
| Content width | 1134px | **515px** |
| Layout info | Flex row (tutto su 1 riga) | **Flex column** (stacked) |
| Info contatti | 1 riga con 5 colonne gap 48px | Ragione sociale → riga P.IVA/contatti/indirizzo → riga Policy |
| Gap logo → info | 110px | **80px** |
| Policy layout | In colonna con le altre info | **Riga separata**, justify-end, gap 12px |
| Separatore | Non presente | **Linea 1px** tra info e copyright |
| Padding | py-48 | **pt-120 pb-40** |
| Copyright + social | Su 1 riga justify-between | Su 1 riga justify-between (uguale) |

---

## Breakpoint

> Il Figma ha frame desktop (1440px) e mobile (637px). Non c'è un frame tablet.
> Proposta standard Tailwind:

| Nome | Min-width | Note |
|------|-----------|------|
| `sm` | 640px | Match frame Figma mobile |
| `md` | 768px | Tablet (non c'è design, interpolare) |
| `lg` | 1024px | Desktop piccolo |
| `xl` | 1280px | Desktop |
| `2xl` | 1440px | Match frame Figma desktop |

---

## Struttura Homepage

### Desktop — "Home 5" (node `315:4661`, 1440×12452px)

| # | Nome Figma | Node ID | Background |
|---|------------|---------|------------|
| 1 | Header | `315:4662` | dark |
| 2 | Hero | `315:4663` | dark |
| 3 | ShowCase | `315:4673` | — |
| 4 | ShowCase | `315:4681` | — |
| 5 | Servizi | `315:4692` | light |
| 6 | Seika Innovation | `315:4727` | white |
| 7 | Metodo | `315:4767` | light |
| 8 | Prioritizzazione | `315:4807` | light |
| 9 | Risultati | `315:4843` | light |
| 10 | CaseStudy | `315:4878` | light |
| 11 | Manifesto | `315:4898` | light |
| 12 | FAQ | `315:4950` | light |
| 13 | CTA | `315:4969` | white |
| 14 | Footer (Cta) | `315:4986` | dark |

### Mobile — "Hero 5 - Mobile" (node `329:8048`, 637×16453px)

| # | Nome Figma | Node ID | Background |
|---|------------|---------|------------|
| — | Header + Menu Open | `332:8255` / `332:8825` | dark |
| 1 | Hero (inline) | `329:8049` | dark |
| 2 | ShowCase | `322:6621` | — |
| 3 | Servizi | `322:6752` | light |
| 4 | Seika Innovation | `322:6881` | white |
| 5 | Metodo | `321:6562` | light |
| 6 | Prioritizzazione | `322:6968` | light |
| 7 | Risultati | `322:7072` | light |
| 8 | CaseStudy | `322:7202` | light |
| 9 | Manifesto | `322:7482` | light |
| 10 | FAQ | `323:7658` | light |
| 11 | CTA | `328:7798` | white |
| 12 | Footer (Cta) | `329:7994` | dark |

> **Sezioni assenti su mobile**: ShowCase loghi partner.

---

## Note

- Il file Figma **non ha un design system strutturato** con variabili/stili — i token sono applicati direttamente sui frame.
- Il font **Aptos è locale** (non Google Fonts), i file sono in `src/fonts/`.
- I **nomi sezioni desktop sono stati corretti** il 2026-05-05 (eliminati duplicati "ShowCase", "Servizi", "Metodo", "Seika innovation").
- Il footer usa un content width di **1134px** desktop (6px più largo del resto), potrebbe essere un'imprecisione Figma.
- Le sezioni "Seika Innovation" e "CTA" usano **bg white**, non dark — gli heading in queste sezioni sono **green** invece di dark.
- Il frame mobile Figma è **637px** — il design target è **375px viewport**. Il content width 515px andrà adattato.
- Le **FAQ sono l'unica sezione** con cambio tipografico su mobile (numeri/domande: 24px→14px).
