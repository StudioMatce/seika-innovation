// Esporta l'array di tutti gli schemi (object types + singleton documents + collection documents).
// Importato da sanity.config.ts → schema.types.

import { ctaObject } from "./objects/cta";

import { siteSettings } from "./singletons/siteSettings";
import { homepageHero } from "./singletons/homepageHero";
import { showcaseMetrics } from "./singletons/showcaseMetrics";
import { homepageServizi } from "./singletons/homepageServizi";
import { chiSiamo } from "./singletons/chiSiamo";
import { metodo } from "./singletons/metodo";
import { prioritizzazione } from "./singletons/prioritizzazione";
import { risultatiSection } from "./singletons/risultatiSection";
import { manifesto } from "./singletons/manifesto";
import { ctaFinale } from "./singletons/ctaFinale";
import { serviziPage } from "./singletons/serviziPage";
import { doveOperiamoPage } from "./singletons/doveOperiamoPage";

import { caseStudy } from "./collections/caseStudy";
import { faqItem } from "./collections/faqItem";
import { city } from "./collections/city";

export const singletonTypes = [
  "siteSettings",
  "homepageHero",
  "showcaseMetrics",
  "homepageServizi",
  "chiSiamo",
  "metodo",
  "prioritizzazione",
  "risultatiSection",
  "manifesto",
  "ctaFinale",
  "serviziPage",
  "doveOperiamoPage",
] as const;

export const schemaTypes = [
  // Object types riusabili
  ctaObject,
  // Singletons
  siteSettings,
  homepageHero,
  showcaseMetrics,
  homepageServizi,
  chiSiamo,
  metodo,
  prioritizzazione,
  risultatiSection,
  manifesto,
  ctaFinale,
  serviziPage,
  doveOperiamoPage,
  // Collections
  caseStudy,
  faqItem,
  city,
];
