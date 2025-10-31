export interface Product {
    id: string;
    name: string;
    price: number;
    currency: string;
    benefit: string;
    lemonsqueezy_url: string;
    description: string;
    highlights: string[];
  }
  
  export const products: Product[] = [
    {
      id: "narrative-immersion-protocol",
      name: "Narrative Immersion Protocol",
      price: 97,
      currency: "EUR",
      benefit: "Complete framework for immersive experience design",
      lemonsqueezy_url: "https://kabutolab.lemonsqueezy.com/checkout/buy/xxx",
      description: "Full methodology for creating immersive experiences...",
      highlights: ["50-page methodology", "Lifetime updates", "Private community"]
    },
    // Add more products here
  ];