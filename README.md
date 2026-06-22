# Naman Anand — Portfolio

Personal portfolio built with the **Resume-Nextjs** template, filled with Naman's content.

## Template

Original [Resume-Nextjs](https://github.com/GetNextjsTemplates/Resume-Nextjs) layout — light theme, orange accents, section numbering, Download PDF button.

## Content source

All text, projects, achievements, skills, and contact info from Naman's portfolio HTML.

## Sections

1. **Hero** — name, role, bio, profile photo
2. **Contact bar** — email, phone, GitHub + social links
3. **About Me** — bio, stats, core stack tags
4. **Achievements** — hackathon wins & education timeline
5. **Education & Skills** — degree, certifications, skill ratings
6. **Latest Works** — 4 projects with GitHub links
7. **Contact** — form + social links

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
```

Output is in `out/`. GitHub Actions workflow in `.github/workflows/deploy.yml` deploys to GitHub Pages automatically on push to `main`.

For a project site (`username.github.io/repo-name`), set base path before build:

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
```

## Edit content

- `public/data/page-data.json` — contact, education, skills
- `public/data/work-data.json` — projects
- Component files in `src/app/components/home/` for section-specific text
