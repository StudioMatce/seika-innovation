"use client";

// SEZIONE: ProgressBar — linea decorativa ricorrente nel design Seika
// Struttura: tacca sinistra | linea dashed (sfondo) + linea continua (sovrapposta, animata) | tacca destra
// Animazione: la linea continua si carica da 0 al valore fill quando entra in viewport
// Perché "use client": serve useRef + IntersectionObserver per l'animazione on-scroll

import { useRef, useState, useEffect } from "react";

interface ProgressBarProps {
  /** Percentuale della parte piena (0–100). Default: 80 */
  fill?: number;
  /** Altezza delle tacche verticali in px. Default: 10 */
  height?: number;
  /** Colore della linea tratteggiata. Default: "green" */
  dashColor?: "green" | "light";
  className?: string;
}

export default function ProgressBar({
  fill = 80,
  height = 10,
  dashColor = "green",
  className = "",
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Osserva quando la barra entra in viewport
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dashBg = dashColor === "light" ? "#ECEFE5" : "#00A77D";

  return (
    <div
      ref={ref}
      className={`flex items-center w-full ${className}`}
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      {/* Tacca sinistra */}
      <div
        className="w-[1.5px] bg-sk-green shrink-0"
        style={{ height: `${height}px` }}
      />

      {/* Contenitore barra — posizionamento relativo per sovrapporre continua su dashed */}
      <div className="relative flex-1 flex items-center" style={{ height: `${height}px` }}>
        {/* Linea continua (da 0 a fill%) */}
        <div
          className="absolute top-1/2 left-0 h-[1.5px] bg-sk-green transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${fill}%` : "0%",
            transform: "translateY(-50%)",
          }}
        />

        {/* Linea tratteggiata (da fill% a 100%, si disegna progressivamente) */}
        <div
          className="absolute top-1/2 overflow-hidden transition-all duration-700 ease-out"
          style={{
            left: `${fill}%`,
            width: visible ? `${100 - fill}%` : "0%",
            height: `${height}px`,
            transform: "translateY(-50%)",
            transitionDelay: "900ms",
            transitionDuration: "1.5s",
          }}
        >
          <svg
            className="w-full"
            style={{ height: `${height}px` }}
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1={height / 2}
              x2="100%"
              y2={height / 2}
              stroke={dashBg}
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          </svg>
        </div>

        {/* Tacca al punto di arrivo della linea continua */}
        <div
          className="absolute top-0 bg-sk-green transition-opacity duration-500"
          style={{
            width: "1.5px",
            height: `${height}px`,
            left: `${fill}%`,
            opacity: visible ? 1 : 0,
            transitionDelay: "800ms",
          }}
        />
      </div>
    </div>
  );
}
