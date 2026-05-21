// SVG-fragment: il disco verde "Operation" (e in hero "Intelligenza artificiale").
// Composizione: glow radiale verde + cerchio verde pieno r 58 + bordo light tratteggiato r 58.
// Va renderizzato DENTRO un <svg> esistente (non è un SVG completo).

interface OperationOrbProps {
  /** Centro X dell'orb */
  cx: number;
  /** Centro Y dell'orb */
  cy: number;
  /** Id univoco per il <radialGradient> del glow — deve essere unico nel documento
   *  perché viene referenziato via url(#id). Diversi consumatori passano id diversi. */
  glowId: string;
  /** Raggio del glow esterno. Default 180. */
  glowRadius?: number;
  /** Stop di opacità del gradient, formato [offset%, opacity].
   *  Default = preset CTA, ottimo su sfondo chiaro. Su sfondo dark conviene passare
   *  stop più intensi (es. [[0,1],[32,1],[55,0.85],[80,0.4],[100,0]]) perché il verde
   *  ha meno contrasto contro un bg sk-dark. */
  glowStops?: ReadonlyArray<readonly [number, number]>;
  /** Classe CSS opzionale applicata al bordo dashato — es. per animazione di rotazione. */
  dashedClassName?: string;
}

// Preset gradient stops usato in CTA (sfondo chiaro)
const DEFAULT_GLOW_STOPS = [
  [0, 1],
  [32, 0.9],
  [55, 0.4],
  [80, 0.08],
  [100, 0],
] as const;

export default function OperationOrb({
  cx,
  cy,
  glowId,
  glowRadius = 180,
  glowStops = DEFAULT_GLOW_STOPS,
  dashedClassName,
}: OperationOrbProps) {
  return (
    <>
      {/* Gradient radiale verde — gli stop sono parametrici per supportare sia sfondo
          chiaro (preset CTA) che sfondo dark (preset più intenso). */}
      <defs>
        <radialGradient id={glowId}>
          {glowStops.map(([offset, opacity]) => (
            <stop
              key={offset}
              offset={`${offset}%`}
              stopColor="#00A77D"
              stopOpacity={opacity}
            />
          ))}
        </radialGradient>
      </defs>

      {/* Glow */}
      <circle cx={cx} cy={cy} r={glowRadius} fill={`url(#${glowId})`} />
      {/* Disco verde */}
      <circle cx={cx} cy={cy} r="58" fill="#00A77D" />
      {/* Bordo light tratteggiato */}
      <circle
        cx={cx}
        cy={cy}
        r="58"
        fill="none"
        stroke="#ECEFE5"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className={dashedClassName}
      />
    </>
  );
}
