# NASHCO Rentals — Website

Marketing site for [NASHCO Rentals, LLC](https://rentnashco.com), a Texas-based heavy equipment rental and civil support company.

Built on Next.js 16 (App Router) + TypeScript + Tailwind CSS 4. Deployed on Vercel.

## Stack

- **Framework**: Next.js 16 (App Router, static rendering)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with a small brand token layer in `globals.css`
- **Fonts**: Inter (body) + Space Grotesk (display) via `next/font`
- **Email delivery**: [Resend](https://resend.com) (quote-request form → `heath@rentnashco.com`)
- **Hosting**: Vercel
- **Content**: File-based (TypeScript modules under `src/content/`). No CMS.

## Project layout

```
src/
  app/
    layout.tsx              # Root layout, fonts, metadata
    page.tsx                # Homepage
    globals.css             # Brand tokens + custom utilities (brushed-metal, grid, hairline)
    icon.svg                # Favicon — dark rounded square with NR badge
    opengraph-image.tsx     # 1200x630 social card (Slack/LinkedIn/iMessage/Twitter)
    sitemap.ts              # /sitemap.xml
    robots.ts               # /robots.txt
    contact/
      page.tsx              # Quote request page
      actions.ts            # Server action — validates + sends via Resend
    fleet/ services/
    industries/ about/
  components/
    Nav.tsx Footer.tsx      # Chrome
    Logo.tsx                # NR badge + wordmark (references /public/brand/)
    Container.tsx PageShell.tsx
    SchemaMarkup.tsx        # LocalBusiness + EquipmentRental JSON-LD
    QuoteForm.tsx           # Client form with useActionState
  content/
    site.ts                 # Company info, services, industries
    fleet.ts                # Fleet data — edit here to update listings
  lib/
    quote-schema.ts         # Zod schema — source of truth for form validation
public/
  brand/
    nr-wordmark.svg         # Source logo (black + cobalt, light-bg variant)
    nr-wordmark-dark.svg    # Dark-theme variant (silver + cobalt)
    nr-badge-dark.svg       # Badge-only dark variant
```

## Local development

```bash
npm install
npm run dev
```

Visit <http://localhost:3000>.

To test the quote form locally, copy `.env.example` to `.env.local` and set `RESEND_API_KEY`. Without the key, submissions are logged to the server console and the form shows a success message — no email is sent.

## Editing content

- **Fleet listings**: edit `src/content/fleet.ts`
- **Services / industries / company info**: edit `src/content/site.ts`
- **Homepage copy**: edit `src/app/page.tsx` (sections are small, clearly labeled components inside the file)
- **Sub-page copy**: each page in `src/app/{fleet,services,industries,about,contact}/page.tsx`

## Environment variables

See `.env.example`.

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Prod | API key from [resend.com](https://resend.com). Without it, form logs submissions but doesn't email. |
| `RESEND_FROM` | Optional | From address. Defaults to `onboarding@resend.dev` until you verify the domain in Resend. |
| `QUOTE_RECIPIENT` | Optional | Destination inbox. Defaults to `heath@rentnashco.com`. |

## Deploy to Vercel

1. Create a GitHub repo and push this directory to it.
2. Go to <https://vercel.com/new>, import the repo.
3. Vercel auto-detects Next.js — no config needed.
4. Under "Environment Variables", paste `RESEND_API_KEY`. Optionally set `RESEND_FROM` and `QUOTE_RECIPIENT`.
5. Click Deploy. First build runs in ~1 minute.
6. To connect `rentnashco.com`:
   - In Vercel: Project Settings → Domains → Add `rentnashco.com` and `www.rentnashco.com`.
   - At your registrar: point the domain's nameservers to Vercel, or add the A / CNAME records Vercel provides.
7. Every push to `main` redeploys automatically.

## Resend setup

1. Sign up at <https://resend.com> (free tier: 3K emails/month, 100/day).
2. Create an API key. Paste into Vercel env vars as `RESEND_API_KEY`.
3. **Domain verification (optional, recommended)**: add `rentnashco.com` in Resend and create the DNS records it gives you. Once verified, set `RESEND_FROM="NASHCO Rentals <quotes@rentnashco.com>"` so leads see a branded sender.

## Build / typecheck

```bash
npm run build      # Production build. Prerenders 11 static routes.
npx tsc --noEmit   # Type check only.
npm run lint       # ESLint.
```
