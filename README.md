This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

------------
.vscode/
└── settings.json

app/
├── about/
│   └── page.tsx
├── blog/
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
├── contact/
│   └── page.tsx
├── products/
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
├── tutorials/
│   ├── [slug]/
│   │   └── page.tsx
│   └── page.tsx
├── favincon.ico
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── home/
│   ├── BlogSection.tsx
│   ├── CTASection.tsx
│   ├── Hero.tsx
│   ├── ProductScrollSection.tsx
│   ├── ProductScrollWrapper.tsx
│   └── Services.tsx
├── products/
│   └── ProductsClient.tsx
├── shared/
│   ├── Footer.tsx
│   ├── GoogleAnalytics.tsx
│   └── Header.tsx
├── ui/
│   ├── ProductCard.tsx
│   └── ServiceCard.tsx
│   └── TutorialCard.tsx
└── page.tsx

content/
└── blog/
│   ├── first-post.md
│   └── second-post.md
└── products/
│   ├── first-product.md
│   ├── second-product.md
│   ├── third-product.md
│   ├── fouth-product.md
│   └── fifth-product.md
└── tutorials/
    └── first-tutorial.md

lib/
├── blog.ts
├── cta.ts
├── products.ts
├── productUtils.ts
└── services.ts

public/
├── blog/
├── hero/
├── products/
└── shared/

eslint.config.mjs
next-env.d.ts
next.config.mjs
package-lock.json
package.json
pstcss.config.mjs
README.md
tailwind.config.mjs
tsconfig.json
tsconfig.tsbuilinfo

------------


Logo IMAGES NAMING:
public/shared/
├── logo.svg                    # Main/default (usually color)
├── logo-white.svg              # White version
├── logo-black.svg              # Black version
├── logo-icon.svg               # Icon only (no text)
├── logo-icon-white.svg         # Icon only white
├── logo-horizontal.svg         # Horizontal layout
├── logo-vertical.svg           # Vertical/stacked layout
├── logo-wordmark.svg           # Text only, no icon
└── logo-small.png              # Raster fallback if needed



-----
PRODUCTS MD STRUCTRE
---
name: "Product Name"
price: 0
category: "course" # Options: template, course, ebook, toolkit, service
type: "free" # Options: free, paid, custom
highlighted: true # true = shows on homepage
benefit: "Short one-liner benefit"
description: "Longer description for product page"
image: "/products/your-image.jpg"
buyUrl: "https://gumroad.com/your-link" # External purchase link
features:
  - "Feature 1"
  - "Feature 2"
  - "Feature 3"
relatedProducts:
  - "product-slug-1"
  - "product-slug-2"
---