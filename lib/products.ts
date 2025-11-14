export interface Product {
  id: string;
  name: string;
  price: number;
  benefit: string;
  buyUrl: string;
  image?: string; // Add this - optional so existing data still works
}

export const products: Product[] = [
  {
    id: "product-01",
    name: "Narrative Immersion Protocol",
    price: 0,
    benefit: "Complete framework for immersive experience design",
    buyUrl: "https://kabutolab.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID",
    image: "/images/narrative-protocol.jpg" // Add your image path
  },
  {
    id: "product-02",
    name: "Product Two",
    price: 0,
    benefit: "Another amazing product for testing",
    buyUrl: "#",
    image: "/images/test-product.jpg" // Add your image path
  },
  {
    id: "product-03",
    name: "Product Three",
    price: 0,
    benefit: "Complete framework for immersive experience design",
    buyUrl: "https://kabutolab.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID",
    image: "/images/narrative-protocol.jpg" // Add your image path
  },
  {
    id: "product-04",
    name: "Product Four",
    price: 0,
    benefit: "Another amazing product for testing",
    buyUrl: "#",
    image: "/images/test-product.jpg" // Add your image path
  },
  {
    id: "product-05",
    name: "Product Five",
    price: 0,
    benefit: "Complete framework for immersive experience design",
    buyUrl: "https://kabutolab.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID",
    image: "/images/narrative-protocol.jpg" // Add your image path
  },
  {
    id: "product-06",
    name: "Product Six",
    price: 0,
    benefit: "Another amazing product for testing",
    buyUrl: "#",
    image: "/images/test-product.jpg" // Add your image path
  },
  {
    id: "product-07",
    name: "Product Seven",
    price: 97,
    benefit: "Complete framework for immersive experience design",
    buyUrl: "https://kabutolab.lemonsqueezy.com/checkout/buy/YOUR-PRODUCT-ID",
    image: "/images/narrative-protocol.jpg" // Add your image path
  },
  {
    id: "product-08",
    name: "Product Eight",
    price: 0,
    benefit: "Another amazing product for testing",
    buyUrl: "#",
    image: "/images/test-product.jpg" // Add your image path
  }
];