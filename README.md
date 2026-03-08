<img src="./le_bouledogue.png" width="300"><br>

# Le Bouledogue

A fictional e-commerce site that simulates transactions and DOM manipulation. Welcome to **Le Bouledogue**!  

This project is built with [Next.js](https://nextjs.org) and was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Features

- Dynamic product pages for each item.
- Interactive shopping cart with quantity adjustments and total price calculation.
- User login simulation with conditional UI rendering (e.g., login/logout buttons).
- Styled with Tailwind CSS for responsive and modern layouts.
- Custom fonts using [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), including Geist and Great Vibes.
- Client-side DOM manipulation for enhanced user experience.
- TypeScript integration for type-safe React components.

---

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

---

## Project Structure Highlights

- `app/` – main Next.js application folder.
- `components/` – reusable React components (e.g., ProductCard, Cart, Navbar).
- `data/` – static product data and other JSON resources.
- `types/` – TypeScript interfaces for Products, Users, etc.
- `public/photos/` – static images used in products and UI.
- `lib/` – utility functions and mock API interactions (e.g., login simulation).

---

## Styling & Fonts

- Tailwind CSS is used for styling.  
- Custom fonts are loaded via [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts):
  - Geist for body text
  - Great Vibes for headings or decorative text
- Example usage in JSX:

```ts
className={`${geist.variable} ${geistMono.variable} ${greatVibes.className}`}

```

## Learn More

To learn more about Next.js, check out:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial.
- [Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions welcome.

---

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).  

For detailed deployment instructions, see [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---
