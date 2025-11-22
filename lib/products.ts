export interface Product {
  id: string;
  name: string;
  price: number;
  benefit: string;
  productUrl: string;
  image?: string; // Add this - optional so existing data still works
}

export const products: Product[] = [
  {
    id: "kb-pro-nip-quick-start-guide",
    name: "NIP Quick Start Guide",
    price: 0,
    benefit: "10-page summary of the Narrative Immersion Protocol with checklists for each design stage",
    productUrl: "/products/nip-quick-start-guide",
    image: "/images/products/kabutolab-nip-quick-start-guide.jpg"
  },
  {
    id: "kb-pro-figma-storyboard-template",
    name: "Storyboard Template (Figma)",
    price: 0,
    benefit: "Pre-built Figma template for mapping immersive scenarios with decision nodes and emotional arcs",
    productUrl: "/products/figma-storyboard-template",
    image: "/images/products/kabutolab-figma-storyboard-template.jpg"
  },
  {
    id: "kb-pro-measurement-toolkit",
    name: "Measurement Toolkit",
    price: 0,
    benefit: "Google Sheets + Forms templates for pre/post assessments with automatic data analysis",
    productUrl: "/products/measurement-toolkit",
    image: "/images/products/kabutolab-measurement-toolkit.jpg"
  },
  {
    id: "kb-pro-scorm-course-template",
    name: "SCORM Course Template",
    price: 0,
    benefit: "Open-source HTML/CSS/JS template for building interactive courses with quiz integration",
    productUrl: "/products/scorm-course-template",
    image: "/images/products/kabutolab-scorm-course-template.jpg"
  },
  {
    id: "kb-pro-complete-nip-framework",
    name: "The Complete NIP Framework",
    price: 97,
    benefit: "Full 50-page framework for designing immersive training with 80 % retention. Includes methodology guide, worksheets, templates, 3 case studies, and Figma resources",
    productUrl: "/products/complete-nip-framework",
    image: "/images/products/kabutolab-complete-nip-framework.jpg"
  },
  {
    id: "kb-pro-design-templates-pack",
    name: "Design Templates Pack",
    price: 197,
    benefit: "Figma storyboard system + Notion project hub + measurement frameworks + video tutorials for rapid prototyping across any immersive platform",
    productUrl: "/products/design-templates-pack",
    image: "/images/products/kabutolab-design-templates-pack.jpg"
  },
  {
    id: "kb-pro-immersive-course-design-fundamentals",
    name: "Immersive Course Design Fundamentals",
    price: 147,
    benefit: "3-hour video course teaching effective immersive training design. 5 modules covering why immersive training fails, narrative design, technical implementation, and measurement",
    productUrl: "/products/immersive-course-design-fundamentals",
    image: "/images/products/kabutolab-immersive-course-design-fundamentals.jpg"
  },
  {
    id: "kb-pro-storytelling-for-immersive-media",
    name: "Storytelling for Immersive Media",
    price: 47,
    benefit: "eBook applying animation and comic principles to VR/AR/XR design. 6 chapters on visual storytelling, pacing, and character design",
    productUrl: "/products/storytelling-for-immersive-media",
    image: "/images/products/kabutolab-storytelling-for-immersive-media.jpg"
  },
  {
    id: "kb-pro-experience-templates-pack",
    name: "Experience Templates Pack",
    price: 67,
    benefit: "10 pre-designed scenario structures (Emergency Response, Clinical Decision, Safety Training, etc.) with story outlines and decision trees. Platform-agnostic",
    productUrl: "/products/experience-templates-pack",
    image: "/images/products/kabutolab-experience-templates-pack.jpg"
  },
  {
    id: "kb-pro-unity-xr-starter-kit",
    name: "Unity XR Starter Kit",
    price: 67,
    benefit: "Pre-configured Unity project with XR Interaction Toolkit, basic interactions, commented code, and 30-minute tutorial",
    productUrl: "/products/unity-xr-starter-kit",
    image: "/images/products/kabutolab-unity-xr-starter-kit.jpg"
  },
  {
    id: "kb-svc-healthcare-immersive-masterclass",
    name: "Healthcare Immersive Masterclass",
    price: 497,
    benefit: "4-week online course for healthcare professionals. 16 video lessons covering VR, AR, and AI-enhanced training. Live Q&A, community access, and certificate",
    productUrl: "/services/healthcare-immersive-masterclass",
    image: "/images/products/kabutolab-healthcare-immersive-masterclass.jpg"
  },
  {
    id: "kb-svc-nip-certification-program",
    name: "NIP Certification Program",
    price: 1997,
    benefit: "8-week cohort-based training to become Certified Narrative Immersion Protocol Practitioner. Includes capstone project and alumni network",
    productUrl: "/services/nip-certification-program",
    image: "/images/products/kabutolab-nip-certification-program.jpg"
  },
  {
    id: "kb-svc-immersive-training-audit",
    name: "Immersive Training Audit",
    price: 1497,
    benefit: "Expert analysis by HCI researcher. 3-hour review + 20-page report + prioritized recommendations + 30-minute strategy call. Works for VR, AR, conversational AI, or mixed reality",
    productUrl: "/services/immersive-training-audit",
    image: "/images/products/kabutolab-immersive-training-audit.jpg"
  },
  {
    id: "kb-svc-custom-scenario-design-workshop",
    name: "Custom Scenario Design Workshop",
    price: 2997,
    benefit: "2-day intensive (remote or on-site) teaching your team to design scenarios using NIP methodology. Includes documentation and follow-up support",
    productUrl: "/services/custom-scenario-design-workshop",
    image: "/images/products/kabutolab-custom-scenario-design-workshop.jpg"
  },
  {
    id: "kb-svc-executive-strategy-session",
    name: "Executive Strategy Session",
    price: 3500,
    benefit: "4-hour strategic consultation for C-level executives. Current state assessment, roadmap recommendations, ROI projections, and 20-30 page brief",
    productUrl: "/services/executive-strategy-session",
    image: "/images/products/kabutolab-executive-strategy-session.jpg"
  },
  {
    id: "kb-svc-research-partnership",
    name: "Research Partnership",
    price: 8000,
    benefit: "Pilot study collaboration. Custom immersive experience + research study with 30-50 participants + data analysis + co-authored publication",
    productUrl: "/services/research-partnership",
    image: "/images/products/kabutolab-research-partnership.jpg"
  },
  {
    id: "kb-svc-done-with-you-immersive-sprint",
    name: "Done-With-You Immersive Sprint",
    price: 12500,
    benefit: "4-week collaborative build. One custom immersive scenario designed and built together. Full source code included with 30-day support",
    productUrl: "/services/done-with-you-immersive-sprint",
    image: "/images/products/kabutolab-done-with-you-immersive-sprint.jpg"
  },
  {
    id: "kb-svc-full-custom-immersive-training",
    name: "Full Custom Immersive Training",
    price: 35000,
    benefit: "Complete immersive training solution. Multiple scenarios across VR/AR/AI platforms, LMS integration, train-the-trainer program, 12-month support, and outcome measurement",
    productUrl: "/services/full-custom-immersive-training",
    image: "/images/products/kabutolab-full-custom-immersive-training.jpg"
  }
];