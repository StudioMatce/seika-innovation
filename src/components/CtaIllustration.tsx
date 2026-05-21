// ILLUSTRAZIONE: Cta orbita Interaction ↔ Operation
// Composizione: anello diagonale + cerchio "Interaction" tratteggiato + cerchio "Operation"
// verde con glow + bordo light tratteggiato + 3 dots decorativi.
// Riusabile in tutte le sezioni CTA del sito (homepage Cta + future).
// Coordinate dal nodo Figma 369:1491 (viewBox 562×565).

interface CtaIllustrationProps {
  className?: string;
  /** Colore di sfondo della sezione contenitore — usato per gli "aloni" sui cerchi
   *  Interaction e sui dots, in modo da mascherare l'anello diagonale che ci passa sotto.
   *  Default "#FFFFFF" perché la sezione Cta della home ha bg-sk-white. */
  bgColor?: string;
}

export default function CtaIllustration({ className, bgColor = "#FFFFFF" }: CtaIllustrationProps) {
  return (
    <svg
      viewBox="0 0 562 565"
      fill="none"
      role="img"
      aria-label="Orbita tra Interaction e Operation"
      overflow="visible"
      className={className}
    >
      <defs>
        {/* Gradient radiale del "glow" verde — vedi commento sopra ogni stop */}
        <radialGradient id="cta-green-glow">
          {/* I primi 32% del gradient (raggio 0→58) sono coperti dal cerchio Operation,
              quindi mantengo opacity 1 fino a quel punto. La sfumatura visibile parte
              dal 32% in poi, partendo intensa e scendendo rapidamente verso il bordo. */}
          <stop offset="0%" stopColor="#00A77D" stopOpacity="1" />
          <stop offset="32%" stopColor="#00A77D" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#00A77D" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#00A77D" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00A77D" stopOpacity="0" />
        </radialGradient>

        {/* Path nascosti — riferimenti per <animateMotion> dei dots che viaggiano sui tracciati.
            Non vengono renderizzati (fill=none + non sono "usati" da <use>). */}
        {/* Ellisse diagonale — 2 versioni del path, con punto di partenza diverso:
            la prima parte dal vertice sx-basso, la seconda dal vertice opposto.
            Così ogni dot può avere il proprio path con begin=0 (più affidabile
            di begin negativo che ha bug su alcuni browser). */}
        <path
          id="cta-ellipse-path-a"
          d="M 95.94 470.50 A 263.77 134.51 -45.51 0 1 465.66 94.30 A 263.77 134.51 -45.51 0 1 95.94 470.50"
          fill="none"
        />
        <path
          id="cta-ellipse-path-b"
          d="M 465.66 94.30 A 263.77 134.51 -45.51 0 1 95.94 470.50 A 263.77 134.51 -45.51 0 1 465.66 94.30"
          fill="none"
        />
        {/* Cerchio Interaction: arc che descrive l'intero cerchio outline */}
        <path
          id="cta-interaction-path"
          d="M 57 219.5 A 97.5 97.5 0 1 1 252 219.5 A 97.5 97.5 0 1 1 57 219.5"
          fill="none"
        />
      </defs>

      {/* Animazioni inline — keyframes per rotazione cerchi tratteggiati.
          Tecnica: stroke-dashoffset animato fa "scorrere" i trattini attorno alla
          circonferenza simulando una rotazione del cerchio. */}
      <style>{`
        @keyframes cta-spin-cw  { to { stroke-dashoffset: -100; } }
        @keyframes cta-spin-ccw { to { stroke-dashoffset:  100; } }
        .cta-spin-interaction { animation: cta-spin-cw  10s linear infinite; }
        .cta-spin-satellite   { animation: cta-spin-ccw 18s linear infinite; }
        .cta-spin-operation   { animation: cta-spin-cw   8s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .cta-spin-interaction, .cta-spin-satellite, .cta-spin-operation { animation: none; }
        }
      `}</style>

      {/* Ellisse outline dark (continua) — "anello" diagonale che attraversa la scena.
          Centro canvas (280.8, 282.4), rx=263.77, ry=134.51, rotate -45.51° */}
      <ellipse
        cx="280.8"
        cy="282.4"
        rx="263.77"
        ry="134.51"
        stroke="#1C2D28"
        strokeWidth="1.5"
        transform="rotate(-45.51 280.8 282.4)"
      />

      {/* 2 dots che viaggiano sull'ellisse — posizionati QUI così sono SOTTO sia il glow
          (renderizzato subito dopo) sia i cerchi Interaction/Operation: quando un dot
          attraversa quelle aree viene coperto dal verde sfumato e dai cerchi.
          NO cx/cy = niente offset additive (la posizione è dettata dall'mpath).
          I 2 dots usano path con punti di partenza opposti — partono insieme ma
          sull'ellisse sono in posizioni diametralmente opposte. */}
      <circle r="6.5" fill="#1C2D28" stroke={bgColor} strokeWidth="5">
        <animateMotion dur="15s" repeatCount="indefinite">
          <mpath href="#cta-ellipse-path-a" />
        </animateMotion>
      </circle>
      <circle r="6.5" fill="#1C2D28" stroke={bgColor} strokeWidth="5">
        <animateMotion dur="15s" repeatCount="indefinite">
          <mpath href="#cta-ellipse-path-b" />
        </animateMotion>
      </circle>

      {/* Glow radiale verde — raggio 180 per concentrare la sfumatura attorno al cerchio
          Operation. Renderizzato DOPO i 2 dots dell'ellisse, così li copre quando
          ci passano sotto. */}
      <circle cx="380" cy="368" r="180" fill="url(#cta-green-glow)" />

      {/* Cerchio Interaction — outline dark tratteggiato, r 97.5.
          fill=bgColor maschera l'anello diagonale che passa sotto.
          Animazione: rotazione lenta in senso orario via stroke-dashoffset. */}
      <circle
        cx="154.5"
        cy="219.5"
        r="97.5"
        fill={bgColor}
        stroke="#1C2D28"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className="cta-spin-interaction"
      />

      {/* Cerchio piccolo "satellite" dentro Interaction — outline dark tratteggiato, r 17.5.
          fill=bgColor per coerenza visiva con il cerchio padre.
          Animazione: rotazione più rapida in senso opposto al padre. */}
      <circle
        cx="64.5"
        cy="242.5"
        r="17.5"
        fill={bgColor}
        stroke="#1C2D28"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        className="cta-spin-satellite"
      />

      {/* Cerchio Operation — fill verde pieno, r 58 */}
      <circle cx="380" cy="368" r="58" fill="#00A77D" />

      {/* Bordo light tratteggiato sopra il cerchio Operation — stesso centro/raggio.
          Animazione: rotazione in senso orario (8s) via stroke-dashoffset. */}
      <circle
        cx="380"
        cy="368"
        r="58"
        stroke="#ECEFE5"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        fill="none"
        className="cta-spin-operation"
      />

      {/* Dot che viaggia sul cerchio Interaction — sopra al cerchio (deve restare visibile
          sul bordo tratteggiato, è renderizzato dopo). NO cx/cy = niente offset additive.
          Parte dal punto sinistro del cerchio (57, 219.5) e gira in senso orario. */}
      <circle r="6.5" fill="#1C2D28" stroke={bgColor} strokeWidth="5">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath href="#cta-interaction-path" />
        </animateMotion>
      </circle>

      {/* Testi al centro dei 2 cerchi principali — Aptos Regular 12px tracking 0.24 */}
      <text
        x="154.5"
        y="219.5"
        fontFamily="var(--font-aptos, sans-serif)"
        fontSize="12"
        fill="#1C2D28"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.24"
      >
        Interaction
      </text>
      <text
        x="380"
        y="368"
        fontFamily="var(--font-aptos, sans-serif)"
        fontSize="12"
        fill="#ECEFE5"
        textAnchor="middle"
        dominantBaseline="middle"
        letterSpacing="0.24"
      >
        Operation
      </text>
    </svg>
  );
}
