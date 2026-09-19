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
- Logo (placeholder): `src/components/layout/logo.tsx` and `src/app/icon.svg`

The contact form has no backend: it opens WhatsApp with the enquiry pre-filled.
