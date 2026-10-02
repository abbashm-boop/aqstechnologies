# AQS Technologies

Next.js website for AQS Technologies, with TypeScript, Tailwind CSS, and Supabase.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase (`@supabase/ssr` for browser, server, and session refresh)

## Getting started

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Add your project URL and anon key from the Supabase dashboard to `.env.local`. The site still renders if those values are empty. Database calls throw a clear error until they are set. Keep `SUPABASE_SERVICE_ROLE_KEY` on the server only.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## File structure

```text
src/
  app/
    (site)/            Public pages: home, about, services, contact
    api/health/        Lightweight health check
    layout.tsx         Root HTML, fonts, metadata
    error.tsx          Root error boundary
    not-found.tsx
    loading.tsx
  components/
    layout/            Header and footer
    ui/                Shared UI primitives
  config/site.ts       Site name, navigation, and copy
  lib/
    env.ts             Environment checks
    supabase/
      client.ts        Browser client (Client Components)
      server.ts        Cookie-based server client
      admin.ts         Service-role client (server only)
      proxy.ts         Session refresh helper
  proxy.ts             Next.js proxy (auth cookie refresh)
  types/database.ts    Generated Supabase types
supabase/migrations/   SQL migrations
```

Use `createClient` from `@/lib/supabase/server` in Server Components, Route Handlers, and Server Actions. Use `@/lib/supabase/client` only in Client Components. Use `@/lib/supabase/admin` only when a request must bypass Row Level Security.

After you add tables, replace `src/types/database.ts`:

```bash
npx supabase gen types typescript --project-id <project-id> --schema public > src/types/database.ts
```
