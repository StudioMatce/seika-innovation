@AGENTS.md

# Seika Innovation — Project Memory

## Cosa è questo progetto

Sito web per Seika Innovation, boutique di consulenza in efficienza operativa e AI per aziende (manifattura, logistica, healthcare, ecc.). Landing page single-page con 14 sezioni. Tono: editoriale, sobrio, premium — niente effetti appariscenti.

## Stack tecnico

- **Next.js 16.2.4** (App Router, Turbopack)
- **React 19.2.4**
- **TypeScript 5** (strict: true)
- **Tailwind CSS 4** (@theme inline, NO tailwind.config)
- **Font**: Aptos locale via `next/font/local` (pesi 300, 400, 600)
- **CMS**: Sanity (configurato MCP, non ancora collegato)
- **No altre librerie UI** — tutto Tailwind utility + React

## Struttura del progetto

```
seika_innovation/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← font Aptos (--font-aptos) + metadata
│   │   ├── page.tsx          ← homepage (compone le sezioni)
│   │   └── globals.css       ← @theme inline con colori sk-*, spacing vars
│   ├── components/
│   │   ├── Container.tsx     ← wrapper max-w-[1128px], px responsive
│   │   ├── Header.tsx        ← desktop (server component, hidden sotto lg)
│   │   ├── HeaderMobile.tsx  ← mobile ("use client", overlay menu)
│   │   ├── Hero.tsx          ← sezione hero (server component)
│   │   └── Logo.tsx          ← SVG inline (legacy, non più usato)
│   └── fonts/                ← Aptos .ttf (28 varianti, 3 usate)
├── public/
│   ├── logo.svg              ← header + mobile (160×30)
│   ├── logo-large.svg        ← footer (256×48)
│   ├── icon-menu.svg         ← cerchio + (hamburger stilizzato)
│   ├── icon-close.svg        ← cerchio X
│   ├── icon-instagram.svg    ← social (currentColor)
│   └── icon-linkedin.svg     ← social (currentColor)
├── DESIGN_SYSTEM.md          ← FONTE DI VERITÀ del design
├── CLAUDE.md                 ← questo file
└── AGENTS.md                 ← regole Next.js agent
```

## Regole non negoziabili

1. **DESIGN_SYSTEM.md è la fonte di verità.** Ogni decisione di colore/font/spacing deve venire da lì. Niente colori inventati. Niente spacing arbitrari.
2. **Niente librerie nuove senza chiedere.** Solo Tailwind + React + Next. Se serve qualcosa di nuovo, prima chiedi.
3. **TypeScript strict, no `any`.** Se non sai un tipo, usa `unknown` o chiedi.
4. **Componenti server di default.** `"use client"` solo quando serve (state, effects, event handlers).
5. **Mobile-first.** Classi Tailwind partono dal mobile, `lg:` per desktop (>= 1024px).
6. **Accessibility obbligatoria.** Alt su immagini, aria-label su icon button, focus-visible visibile, `role="img"` sugli SVG decorativi.
7. **Niente `@apply`** in globals.css. Tailwind v4 con `@theme inline`, utility in JSX.
8. **Path import:** usa `@/` (es. `@/components/Header`).

## Convenzioni di naming

- File componenti: `PascalCase.tsx`
- File asset SVG: `kebab-case.svg`
- Cartelle: `kebab-case`
- Variabili CSS: `--kebab-case`

## Token disponibili (SOLO questi)

**Colori Tailwind** (prefisso `sk-` per evitare conflitti con palette built-in):
- `sk-dark` (#1C2D28) → `bg-sk-dark`, `text-sk-dark`, `border-sk-dark`
- `sk-green` (#00A77D) → `bg-sk-green`, `text-sk-green`, `border-sk-green`
- `sk-light` (#ECEFE5) → `bg-sk-light`, `text-sk-light`, `border-sk-light`
- `sk-white` (#FFFFFF) → `bg-sk-white`, `text-sk-white`, `border-sk-white`
- `sk-super-dark` (#131F1B) → `bg-sk-super-dark`

**Font**: `font-sans` (Aptos via `--font-aptos`), pesi `font-light` (300), `font-normal` (400), `font-semibold` (600)

**Container**: `max-w-[1128px]` desktop, `max-w-[515px]` mobile header, `px-[30px]` mobile, `px-[61px]` sm, `px-0` lg

**Gap tipici**: 12, 24, 32, 42, 48, 74, 82, 96 px — usare sempre valori arbitrari `gap-[48px]`, non classi Tailwind predefinite

Per dettagli completi: `DESIGN_SYSTEM.md`

## Workflow per costruire una nuova sezione

1. Identifica il node ID Figma della sezione (in DESIGN_SYSTEM.md → "Struttura Homepage")
2. Leggi il frame Figma con MCP — desktop **E** mobile
3. Consulta DESIGN_SYSTEM.md per token specifici (sfondo, colori testo, eccezioni tipografiche)
4. Crea il componente in `src/components/` (PascalCase, server component di default)
5. Usa `<Container>` come wrapper
6. Importa in `src/app/page.tsx`
7. Verifica nel browser su localhost
8. Mostra all'utente cosa hai cambiato e cosa controllare

## Cosa NON fare mai

- Non inventare colori/font/spacing non presenti in DESIGN_SYSTEM.md
- Non riscrivere componenti funzionanti senza chiedere
- Non installare dipendenze senza chiedere
- Non aggiungere animazioni esagerate — il tono è sobrio. Animazioni: `200ms ease-in-out`
- Non committare .env, credenziali, secret Sanity
- Non dare per scontato che i testi siano definitivi — molti sono hardcoded temporanei, Sanity arriverà dopo
- Non toccare CLAUDE.md, AGENTS.md, DESIGN_SYSTEM.md senza che l'utente lo chieda

## Stato attuale del progetto

**Ultimo aggiornamento**: 2026-05-05

- ✅ Setup Next.js 16 + Tailwind 4 + TypeScript strict
- ✅ DESIGN_SYSTEM.md completo (desktop + mobile, 596 righe)
- ✅ Font Aptos configurato in `next/font/local` (3 pesi)
- ✅ Asset SVG ottimizzati in `public/` (loghi, icone)
- ✅ `globals.css` con `@theme inline` e colori `sk-*`
- ✅ Componenti: Container, Header (desktop), HeaderMobile (overlay), Hero, ShowCase, ProgressBar, Servizi
- ⏳ Da fare: ShowCase loghi, Seika Innovation (chi siamo), Metodo, Prioritizzazione, Risultati, CaseStudy, Manifesto, FAQ, CTA finale, Footer
- ⏳ Sanity CMS: non configurato (dopo le sezioni)
- ⏳ Dots decorativi: componente `<Dots />` da creare (spec in DESIGN_SYSTEM.md)

## Note legali

- **Font Aptos**: licenza Microsoft, uso web da chiarire con il cliente. Sostituibile cambiando `--font-aptos` in `layout.tsx` + i file in `src/fonts/`.

## Connettori MCP disponibili

- **Figma MCP**: lettura frame dal file `HCEJye5BKroKPT9LBoVUeU` (Figma Desktop deve essere aperto)
- **Sanity MCP**: configurato, non ancora collegato a schema/dataset
