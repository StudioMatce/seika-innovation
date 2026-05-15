"use client";

// Hook custom: ritorna true quando l'header deve essere nascosto.
// Logica: scroll verso il basso oltre `threshold`px → hidden.
// Scroll verso l'alto → visible. Sempre visibile sopra il threshold.
// Usa requestAnimationFrame + dead-zone di 5px per evitare jitter.

import { useEffect, useState } from "react";

export function useHideOnScroll(threshold = 100) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        if (currentY < threshold) {
          setHidden(false);
        } else if (currentY > lastY + 5) {
          setHidden(true);
        } else if (currentY < lastY - 5) {
          setHidden(false);
        }
        lastY = currentY;
        ticking = false;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return hidden;
}
