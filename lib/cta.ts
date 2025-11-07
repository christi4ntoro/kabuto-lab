export interface Cta {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonUrl: string;
}

// CTA content for the CTA section
export const ctaContent: Cta = {
  heading: "Ready to Transform Your Design?",
  subtext: "Join 500+ immersive designers creating unforgettable experiences",
  buttonText: "Get Started",
  buttonUrl: "/products"
};

// Markup configuration for JSX formatting (to be used in components)
export const ctaMarkup = {
  headingHighlight: "Transform",
  headingHighlightClass: "text-blue-400",
  subtextHighlight: "500+",
};

