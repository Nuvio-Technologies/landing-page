# Nuvio Technologies — Landing Page

Marketing site for Nuvio Technologies, built on the [Aspect](https://www.shadcnblocks.com/template/aspect) premium template from shadcnblocks (Next.js 15, Tailwind 4, shadcn/ui).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to ./out
```

The site is a static export (`output: 'export'`), so `./out` can be deployed to Vercel, Netlify, Cloudflare Pages or any static host.

## Editing content

- Company details (email, WhatsApp number, contacts, domain): `src/lib/site.ts`
- Homepage sections: `src/app/page.tsx` and `src/components/sections/`
- Logo: `public/nuvio-logo.png` (source) → `public/images/brand/` (site sizes) and `src/app/favicon.ico`, `icon.png`, `apple-icon.png`
- SEO: page metadata in `src/app/layout.tsx`, structured data in `src/components/seo/json-ld.tsx`, plus `robots.ts`, `sitemap.ts`, `manifest.ts` and `opengraph-image.png` in `src/app/`. FAQ copy lives in `src/lib/faq.ts` so the page and structured data stay in sync.

The contact form has no backend: it opens WhatsApp with the enquiry pre-filled.
