# Hassan Adan

Personal site for **Hassan Adan**, an ICT technician based in Nairobi, Kenya. Network and helpdesk support, plus selected full-stack projects.

**Canonical:** [https://www.ahassan.software](https://www.ahassan.software)

## Stack

Vite, React, TypeScript, Tailwind CSS. The production build is a static SPA in `dist/`.

An optional Express process (`server.js`) can send the contact form through [Resend](https://resend.com). The static site does not need it: without `VITE_CONTACT_ENDPOINT`, the form opens the visitor’s email app.

## Develop

```bash
npm install
npm run dev
```

Vite prints a local URL (configured for port 8080).

## Build

```bash
npm run build
npm run preview
```

`npm run build` writes `dist/`. Serve that directory as static files. For nginx, fall back to `index.html` so client-side routes such as an unknown path still load the app shell:

```nginx
server {
    listen 80;
    server_name example.com;
    root /var/www/hassan-adan/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

On Coolify (or any static host), use:

- Build command: `npm ci && npm run build` (or `npm install && npm run build`)
- Publish directory: `dist`
- No start command

## Contact form

Copy `.env.example` to `.env` only if you want the API.

| Variable | Where | Purpose |
| --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | Vite build | Browser posts here. Leave empty to use `mailto:`. |
| `RESEND_API_KEY` | `server.js` | Resend secret. Required for the API. |
| `CONTACT_TO` | `server.js` | Inbox. Defaults to `adanhassan1910@gmail.com`. |
| `CONTACT_FROM` | `server.js` | Resend `from`. The default onboarding sender only delivers to the Resend account address until a domain is verified. |
| `PORT` | `server.js` | Defaults to `3001`. |
| `CORS_ORIGIN` | `server.js` | Optional allowed browser origin. |

```bash
npm run server
```

`VITE_*` values are baked in at build time. Set `VITE_CONTACT_ENDPOINT` before `npm run build` if the deployed form should call the API.

## CV

`Hassan_Adan_Resume.html` is the printable CV. The site links to `public/Hassan_Adan_CV.pdf`, which is the same document as `Hassan_Adan_Resume.pdf`. Regenerate after editing the HTML:

```bash
google-chrome --headless --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=Hassan_Adan_Resume.pdf Hassan_Adan_Resume.html
cp Hassan_Adan_Resume.pdf public/Hassan_Adan_CV.pdf
```
