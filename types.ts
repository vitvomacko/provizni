
export type Language = 'CZ' | 'EN';

export interface Tariff {
  id: string;
  name: string;
  speedDownload: number; // Mbps
  speedUpload: number; // Mbps
  price: number; // CZK/month
  technology: 'Optika' | 'Bezdrát' | 'VDSL';
  features: string[];
}

export interface Translation {
  heroTitle: string;
  heroSub: string;
  howItWorks: string;
  howItWorksDesc: string;
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  calculatorTitle: string;
  calculatorSub: string;
  referralCount: string;
  yourPrice: string;
  freeInternet: string;
  contactTitle: string;
  tariffsTitle: string;
  ctaButton: string;
  faqTitle: string;
}
