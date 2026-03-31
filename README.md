# Construction Innova

Website for Construction Innova Company — home builders and renovation services.

**Live:** https://www.constructioninnova.com/

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Forms:** Formik + Yup (validation)
- **Email:** Nodemailer (SMTP)
- **Bot Protection:** Google reCAPTCHA v3

## Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── gallery/        # Project gallery
│   ├── contact/        # Contact form (client-side)
│   ├── api/contact/    # Contact form handler (server-side)
│   ├── layout.tsx      # Root layout (navbar, footer, SEO, analytics)
│   ├── page.tsx        # Home page
│   ├── sitemap.ts      # Dynamic XML sitemap
│   └── robots.ts       # Robots.txt config
├── components/         # Shared UI components (Navbar, Footer, etc.)
└── utils/
    ├── emails/         # Nodemailer transport + HTML email templates
    ├── schemas/        # Yup validation schemas
    └── checkCaptcha.ts # reCAPTCHA server-side verification
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables and fill in your values
cp .env.example .env.local

# Start dev server
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Environment Variables

See [`.env.example`](.env.example) for all required variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_RECAPTCHA_KEY` | reCAPTCHA v3 site key (public) |
| `RECAPTCHA_KEY` | reCAPTCHA v3 secret key |
| `SMTP_HOST` | SMTP server hostname |
| `SMTP_EMAIL` | Sender email address |
| `SMTP_PASSWORD` | Email password / app password |

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

## Contact Form Flow

1. User fills out form (validated client-side with Formik + Yup)
2. reCAPTCHA v3 token is generated
3. `POST /api/contact` receives the data
4. Server validates fields and verifies captcha
5. Email is sent to the business owner via Nodemailer
