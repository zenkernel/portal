# ZENKERNEL

Company website for **ZENKERNEL** — technology consulting, design, and implementation services. Built with **Next.js** and **Supabase**.

## Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 16 (App Router), React, TypeScript, Tailwind CSS |
| Backend / DB | Supabase (PostgreSQL, Row Level Security) |
| Hosting | Vercel (recommended) or any Node.js host |

## Project structure

```
zenkernel/
├── src/
│   ├── app/                    # Routes (thin — pages only)
│   │   ├── page.tsx            # Home
│   │   ├── services/
│   │   ├── about/
│   │   └── contact/
│   ├── components/             # Shared UI (layout, design system)
│   │   ├── layout/             # Header, Footer
│   │   └── ui/                 # Section, Button, etc.
│   ├── features/               # Domain modules
│   │   ├── contact/            # Contact form + server action
│   │   └── services/           # Service cards + Supabase queries
│   ├── lib/
│   │   ├── supabase/           # Browser + server clients
│   │   ├── constants.ts        # Site config & fallbacks
│   │   └── utils.ts
│   └── types/
│       └── database.types.ts   # Supabase schema types
├── supabase/
│   ├── migrations/             # SQL schema (run in Supabase)
│   └── seed.sql                # Default services content
├── .env.example
└── package.json
```

## Quick start

### 1. Install dependencies

```bash
npm install
```

### 2. Connect Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **Project Settings → API**, copy:
   - Project URL → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon` public key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Copy env template and fill in values:

```bash
cp .env.example .env.local
```

4. Apply the database schema — either:

   **Option A — Supabase Dashboard (SQL Editor)**  
   Run `supabase/migrations/20250524000000_initial_schema.sql`, then `supabase/seed.sql`.

   **Option B — Supabase CLI** (recommended for ongoing work)

   ```bash
   npx supabase login
   npx supabase link --project-ref YOUR_PROJECT_REF
   npx supabase db push
   psql "$DATABASE_URL" -f supabase/seed.sql   # or run seed in SQL Editor
   ```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Without Supabase configured, the site still works using fallback content in `src/lib/constants.ts`. The contact form requires a connected Supabase project.

## Connect to GitHub

```bash
# If you haven't pushed yet (repo is already git-initialized)
git remote add origin https://github.com/YOUR_ORG/zenkernel.git
git branch -M main
git push -u origin main
```

### Deploy on Vercel (optional)

1. Import the GitHub repo in [Vercel](https://vercel.com).
2. Add environment variables from `.env.example`.
3. Deploy — Vercel auto-detects Next.js.

## Database tables

| Table | Purpose |
|-------|---------|
| `services` | CMS content for Consult / Design / Implement (public read) |
| `contact_inquiries` | Contact form submissions (public insert only) |

Row Level Security is enabled. Contact inquiries are **not** readable from the public anon key — review them in the Supabase Dashboard or build an admin area later.

## Next steps

- [ ] Add your logo and brand colors in `src/app/globals.css`
- [ ] Customize copy on Home, About, and Services pages
- [ ] Set up Supabase Edge Function or email hook for new contact notifications
- [ ] Add case studies / portfolio (`projects` table + `/work` page)
- [ ] Add admin auth (Supabase Auth) to manage services content
- [ ] Generate types from live schema: `npx supabase gen types typescript --linked > src/types/database.types.ts`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
