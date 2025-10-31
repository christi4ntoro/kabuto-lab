export interface Product {
  id: string;
  name: string;
  price: number;
  benefit: string;
  buyUrl: string;
}

export const products: Product[] = [
  {
    id: "narrative-protocol",
    name: "Narrative Immersion Protocol",
    price: 97,
    benefit: "Complete framework for immersive experience design",
    buyUrl: "https://kabutolab.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID"
  },
  {
    id: "test-product",
    name: "Test Product Two",
    price: 49,
    benefit: "Another amazing product for testing",
    buyUrl: "#"
  }
];