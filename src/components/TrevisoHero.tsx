// SEZIONE: TrevisoHero — pagina /dove-operiamo/treviso
// bg dark, illustrazione SVG inline (4 ellissi ruotate + 3 frecce curve tratteggiate +
// cerchio satellite tratteggiato) in alto, testo + CTA in basso.
//
// Coordinate prese dal nodo Figma 368:1450 (Group 19, canvas 1140×354).
// Tutto in SVG inline, niente immagini esterne. Tutti gli stroke hanno
// vectorEffect="non-scaling-stroke" per spessore uniforme in tutto il viewport.
//
// Animazioni (step successivo):
// - dots che viaggiano su ellisse 1 e 3
// - cerchio satellite ruotante + in motion lungo ellisse 2

import Container from "./Container";
import Dots from "./Dots";

// Helper: una freccia "Seika" è un arco curvo a "L" (1/4 di cerchio) inclinato,
// con triangolino verde all'estremità. Costruita come <path> Bezier in coordinate locali
// dell'inner (0..innerW, 0..innerH), poi traslata e ruotata tramite transform SVG.
// I parametri (left, top, boxW, boxH, innerW, innerH, rotate) corrispondono direttamente
// al layout Figma.
function CurvedArrow({
  left,
  top,
  boxWidth,
  boxHeight,
  innerWidth,
  innerHeight,
  rotate,
  mirror = false,
}: {
  left: number;
  top: number;
  boxWidth: number;
  boxHeight: number;
  innerWidth: number;
  innerHeight: number;
  rotate: number;
  /** Se true, specchia orizzontalmente la freccia (scale -1 1).
   *  Utile per le frecce che girano in verso opposto. */
  mirror?: boolean;
}) {
  // Centro del bounding box (punto attorno a cui ruota la freccia)
  const cx = left + boxWidth / 2;
  const cy = top + boxHeight / 2;

  // Path Bezier nell'inner: arco a "L" da bottom-left (0, h) a top-right (w, 0).
  // Control point in (0, 0) → curva concava verso il basso/sinistra.
  const path = `M 0 ${innerHeight} Q 0 0 ${innerWidth} 0`;
  // Triangolino arrowhead a (innerWidth, 0) — punta verso destra
  const arrow = `M ${innerWidth} 0 L ${innerWidth - 8} -5 L ${innerWidth - 8} 5 Z`;

  // scale(-1, 1) per specchiare orizzontalmente — applicato dopo la rotation
  const scaleTransform = mirror ? "scale(-1 1)" : "";

  return (
    <g
      transform={`translate(${cx} ${cy}) rotate(${rotate}) ${scaleTransform} translate(${-innerWidth / 2} ${-innerHeight / 2})`}
    >
      <path
        d={path}
        stroke="#00A77D"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        fill="none"
        vectorEffect="non-scaling-stroke"
        className="treviso-arrow-flow"
      />
      <path d={arrow} fill="#00A77D" />
    </g>
  );
}

// Versione MOBILE dell'illustrazione — viewBox 600×310 (dal nodo Figma 374:5744).
// Più compatta: solo 2 ellissi + 1 freccia + satellite + dot animato.
function TrevisoHeroIllustrationMobile() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 600 310"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full max-h-[200px]"
      >
        {/* Path nascosti per animateMotion — 2 ellissi mobile */}
        <defs>
          <path
            id="treviso-mob-ellipse-1-path"
            d="M 65.04 162.57 A 107.29 49.07 26.23 1 1 257.58 257.31 A 107.29 49.07 26.23 1 1 65.04 162.57"
            fill="none"
          />
          <path
            id="treviso-mob-ellipse-2-path"
            d="M 442.17 22.56 A 107.29 49.07 62.63 1 1 540.83 213.12 A 107.29 49.07 62.63 1 1 442.17 22.56"
            fill="none"
          />
        </defs>

        <style>{`
          @keyframes treviso-mob-spin { to { stroke-dashoffset: -100; } }
          .treviso-mob-satellite-spin { animation: treviso-mob-spin 8s linear infinite; }
          /* Pattern dei trattini che scorre lungo le frecce — effetto "self-completing in loop" */
          .treviso-arrow-flow { animation: treviso-mob-spin 7s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .treviso-mob-satellite-spin,
            .treviso-arrow-flow { animation: none; }
          }
        `}</style>

        {/* Ellisse 1 — outline light, rotate 26.23° attorno al centro (161.31, 209.94) */}
        <g transform="rotate(26.23 161.31 209.94)">
          <ellipse
            cx="161.31"
            cy="209.94"
            rx="107.29"
            ry="49.07"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Ellisse 2 — outline light, rotate 62.63° attorno al centro (491.50, 117.84) */}
        <g transform="rotate(62.63 491.50 117.84)">
          <ellipse
            cx="491.50"
            cy="117.84"
            rx="107.29"
            ry="49.07"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Freccia curva — da ellisse 1 a ellisse 2. Stessi parametri della Freccia 1 desktop. */}
        <CurvedArrow
          left={143.48}
          top={54.90}
          boxWidth={195.44}
          boxHeight={180.57}
          innerWidth={163.956}
          innerHeight={143.731}
          rotate={15.05}
        />

        {/* Cerchio satellite tratteggiato sull'ellisse 2: ruota + si muove */}
        <circle
          r="17.5"
          fill="#1C2D28"
          stroke="#00A77D"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
          className="treviso-mob-satellite-spin"
        >
          <animateMotion dur="14s" repeatCount="indefinite">
            <mpath href="#treviso-mob-ellipse-2-path" />
          </animateMotion>
        </circle>

        {/* Dot sull'ellisse 1 — viaggia lungo il bordo */}
        <circle
          r="5"
          fill="#00A77D"
          stroke="#1C2D28"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        >
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#treviso-mob-ellipse-1-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

// Illustrazione Treviso Hero — viewBox 1140×354 (dal nodo Figma 368:1450).
function TrevisoHeroIllustrationDesktop() {
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1140 354"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="block w-full"
      >
        {/* Path nascosti — riferimenti per <animateMotion>. Descrivono le ellissi
            1, 2, 3 come 2 archi consecutivi che coprono 360°. I parametri arc
            (rx, ry, rotation) sono gli stessi delle ellissi visibili sotto. */}
        <defs>
          <path
            id="treviso-ellipse-1-path"
            d="M 21.66 195.37 A 107.29 49.07 26.23 1 1 214.20 290.11 A 107.29 49.07 26.23 1 1 21.66 195.37"
            fill="none"
          />
          <path
            id="treviso-ellipse-2-path"
            d="M 355.01 55.35 A 107.29 49.07 62.63 1 1 453.67 245.91 A 107.29 49.07 62.63 1 1 355.01 55.35"
            fill="none"
          />
          <path
            id="treviso-ellipse-3-path"
            d="M 620.59 277.61 A 154.83 71.37 -47.9 1 1 828.15 47.85 A 154.83 71.37 -47.9 1 1 620.59 277.61"
            fill="none"
          />
        </defs>

        {/* Animazione CSS per la rotazione del cerchio satellite + flow trattini frecce */}
        <style>{`
          @keyframes treviso-spin { to { stroke-dashoffset: -100; } }
          .treviso-satellite-spin { animation: treviso-spin 8s linear infinite; }
          /* Pattern dei trattini che scorre lungo le frecce — effetto "self-completing in loop" */
          .treviso-arrow-flow { animation: treviso-spin 7s linear infinite; }
          @media (prefers-reduced-motion: reduce) {
            .treviso-satellite-spin,
            .treviso-arrow-flow { animation: none; }
          }
        `}</style>

        {/* 4 ELLISSI — outline light, ognuna ruotata attorno al suo centro.
            cx, cy = position + size/2  •  rx, ry = inner/2  •  rotate dal Figma */}

        {/* Ellisse 1 — inner 214.58×98.14, rotate 26.23° */}
        <g transform="rotate(26.23 117.93 242.74)">
          <ellipse
            cx="117.93"
            cy="242.74"
            rx="107.29"
            ry="49.07"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Ellisse 2 — inner 214.58×98.14, rotate 62.63° */}
        <g transform="rotate(62.63 404.34 150.63)">
          <ellipse
            cx="404.34"
            cy="150.63"
            rx="107.29"
            ry="49.07"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Ellisse 4 — inner 213.98×98.64, rotate -154.1° */}
        <g transform="rotate(-154.1 1022.94 216.79)">
          <ellipse
            cx="1022.94"
            cy="216.79"
            rx="106.99"
            ry="49.32"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Freccia 3 — da ellisse 3 verso ellisse 4. Renderizzata PRIMA dell'ellisse 3
            (cosi quando l'ellisse 3 ha fill bg la copre, effetto "esce da sotto").
            mirror=true + rotate 210° (= 30° base + 180°) per orientare la curva come da Figma. */}
        <CurvedArrow
          left={763.15}
          top={147.69}
          boxWidth={196.051}
          boxHeight={206.607}
          innerWidth={163.956}
          innerHeight={144.58}
          rotate={165}
          mirror
        />

        {/* Ellisse 3 — inner 309.66×142.74 (la grande), rotate -47.9°.
            FILL bg (sk-dark) così "maschera" la freccia 3 che ci passa sotto. */}
        <g transform="rotate(-47.9 724.37 162.73)">
          <ellipse
            cx="724.37"
            cy="162.73"
            rx="154.83"
            ry="71.37"
            fill="#1C2D28"
            stroke="#ECEFE5"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        </g>

        {/* Freccia 1 — da ellisse 1 verso ellisse 2 */}
        <CurvedArrow
          left={106.15}
          top={87.69}
          boxWidth={195.66}
          boxHeight={181.38}
          innerWidth={163.956}
          innerHeight={143.731}
          rotate={15.05}
        />

        {/* Freccia 2 — da ellisse 2 verso ellisse 3 */}
        <CurvedArrow
          left={507.15}
          top={22.86}
          boxWidth={206.417}
          boxHeight={213.821}
          innerWidth={163.956}
          innerHeight={142.147}
          rotate={58.89}
        />

        {/* CERCHIO SATELLITE tratteggiato verde — sull'ellisse 2.
            Animazioni: ruota su se stesso (stroke-dashoffset via CSS class) + viaggia
            lungo il bordo dell'ellisse 2 (animateMotion + mpath). */}
        <circle
          r="17.5"
          fill="#1C2D28"
          stroke="#00A77D"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          vectorEffect="non-scaling-stroke"
          className="treviso-satellite-spin"
        >
          <animateMotion dur="14s" repeatCount="indefinite">
            <mpath href="#treviso-ellipse-2-path" />
          </animateMotion>
        </circle>

        {/* DOT 1 — viaggia lungo il bordo dell'ellisse 1.
            Fill verde + stroke bg (alone che maschera la linea sotto). */}
        <circle
          r="5"
          fill="#00A77D"
          stroke="#1C2D28"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        >
          <animateMotion dur="12s" repeatCount="indefinite">
            <mpath href="#treviso-ellipse-1-path" />
          </animateMotion>
        </circle>

        {/* DOT 3 — viaggia lungo il bordo dell'ellisse 3 (più grande, dur maggiore). */}
        <circle
          r="5"
          fill="#00A77D"
          stroke="#1C2D28"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        >
          <animateMotion dur="16s" repeatCount="indefinite">
            <mpath href="#treviso-ellipse-3-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export default function TrevisoHero() {
  return (
    <section className="relative bg-sk-dark overflow-hidden flex flex-col min-h-[calc(100dvh-100px)]">
      <Dots pattern="hero" bg="dark" />

      {/* Illustrazione dentro al Container per rispettare la stessa larghezza
          interna (max 1128px) del testo sotto.
          Mobile e desktop hanno composizioni diverse (vedi Figma 374:5744 vs 368:1450):
          mobile = 2 ellissi + 1 freccia + satellite + 1 dot
          desktop = 4 ellissi + 3 frecce + satellite + 2 dot */}
      <Container className="pt-[40px] sm:pt-[60px] lg:pt-[80px]">
        <div className="lg:hidden">
          <TrevisoHeroIllustrationMobile />
        </div>
        <div className="hidden lg:block">
          <TrevisoHeroIllustrationDesktop />
        </div>
      </Container>

      <Container className="relative flex-1 flex flex-col justify-end">
        <div className="flex flex-col gap-[32px] sm:gap-[48px] pb-[60px] sm:pb-[80px] lg:pb-[100px]">
          <div className="flex flex-col gap-[24px]">
            <p className="text-[14px] font-semibold uppercase leading-normal tracking-[1.4px] text-sk-green">
              Seika Innovation
            </p>
            <h1 className="text-[48px] font-normal leading-[48px] text-sk-light lg:max-w-[700px]">
              Consulenza per l&apos;efficienza operativa a Treviso
            </h1>
          </div>

          <div className="flex flex-col items-start gap-[24px]">
            <p className="text-[16px] font-normal leading-normal tracking-[0.32px] text-sk-white lg:max-w-[564px]">
              Analisi dati, ottimizzazione processi e AI per aziende trevigiane. Sede a Conegliano,
              interventi in presenza e da remoto.
            </p>

            <a
              href="#contatti"
              className="inline-flex w-fit items-center justify-center whitespace-nowrap rounded-[33px] border-[1.5px] border-sk-green px-[32px] py-[12px] text-[16px] font-normal text-sk-light transition-all duration-200 ease-in-out hover:bg-sk-green hover:text-sk-dark active:bg-sk-dark active:border-sk-dark active:text-sk-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Richiedi un assessment operativo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
