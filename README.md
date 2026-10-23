# Chetan Uppara — React Portfolio

CSCI 4360 Web Technologies, Fall 2026 — "Build and Publish a React Portfolio".

- **Live site:** https://chetanuppara.github.io/portfolio/
- **Repository:** https://github.com/chetanuppara/portfolio

A personal portfolio built with React 19, Vite and React Router 7, deployed to GitHub Pages by a GitHub Actions workflow.

## Run it locally

Requires Node 20.19+ or 22.12+.

```bash
npm install        # install the locked dependencies
npm run dev        # development server with hot reload (http://localhost:5173/portfolio/)
npm run lint       # oxlint
npm run build      # production build into dist/
npm run preview    # serve dist/ locally (http://localhost:4173/portfolio/)
```

## Structure

```
src/
  main.jsx                 createRoot + HashRouter
  App.jsx                  Routes: layout route, index, experience, projects, projects/:slug, contact, *
  index.css                styles + light/dark theme tokens
  components/
    Layout.jsx             header, NavLink navigation, skip button, <Outlet />, footer
    ProjectCard.jsx        one project card (props: project)
    ExperienceCard.jsx     one experience entry (props: experience)
    SkillList.jsx          skill badges rendered from an array
    ThemeToggle.jsx        extension B — persistent theme
  pages/
    BasicPages.jsx         Home, Experience, Contact, NotFound
    Projects.jsx           controlled filter + data-driven cards + no-match state
    ProjectDetail.jsx      useParams lookup + unknown-slug message
  data/
    projects.js            project array (5 entries, unique slugs)
    profile.js             name, intro, education, skills, experiences
.github/workflows/deploy.yml   build (npm ci, lint, build) then deploy to Pages
```

## How the requirements are met

| Requirement | Where |
|---|---|
| Function components, ≥2 reusable components with props | `Layout`, `ProjectCard`, `ExperienceCard`, `SkillList`, `ThemeToggle` |
| Data-driven cards with stable keys | `projects.map(p => <ProjectCard key={p.slug} … />)`; experiences keyed by `id`, skills by name |
| Controlled filter with `useState` | `Projects.jsx` — `value={query}` + `onChange` |
| No-match conditional rendering | `Projects.jsx` — "No projects match" |
| `Routes`, `Route`, `NavLink`, `Outlet`, `useParams` | `App.jsx`, `Layout.jsx`, `ProjectDetail.jsx` |
| Unknown URL | `path="*"` → `NotFound` |
| Unknown project slug | `ProjectDetail` renders "Project not found" |
| Accessibility | skip-to-content button, labeled filter input, one `h1` per view, `:focus-visible` outline, `aria-pressed` on the theme button, `role="status"` result count |
| Responsive | auto-fit CSS grid, wrapping nav, no horizontal scroll at 390px |

## Extension: B — persistent color theme

`ThemeToggle` keeps the choice in `useState`, initialised lazily from `localStorage` (inside `try/catch` so it still works when storage is blocked). A `useEffect` with dependency `[dark]` synchronises that state with two things outside React: the `data-theme` attribute on `<html>` (which switches the CSS custom properties) and `localStorage`. The toggle uses an updater (`setDark(d => !d)`) so it never relies on a stale captured value. It is rendered in `Layout` outside `<Outlet />`, so it stays mounted while routes change. The preference is local to this browser and origin.

**Tested:** switching to dark, navigating to another view (still dark), refreshing the page (still dark), switching back to light. See the dark-theme screenshot in the submission PDF.

## Why HashRouter + Vite `base`

`base: "/portfolio/"` makes the built HTML request `/portfolio/assets/…` instead of `/assets/…`, which fixes asset locations on a project site. `HashRouter` puts the route after `#`, so refreshing `/portfolio/#/projects/react-portfolio` only asks the server for `/portfolio/`, which GitHub Pages can always serve. One fixes assets; the other fixes deep-link refreshes.

## Verification checklist

| # | Check | Result |
|---|---|---|
| 1 | `npm run lint` passes with no errors | ✅ |
| 2 | `npm run build` succeeds; `dist/index.html` references `/portfolio/assets/…` | ✅ |
| 3 | Home, Experience, Projects, Contact all render | ✅ |
| 4 | Active nav link is highlighted; Home is not active on other views (`end` prop) | ✅ |
| 5 | Filter: mixed case + surrounding spaces ("  rEaCt  ") → 1 result | ✅ |
| 6 | Filter: no matches ("zzzz") → "No projects match" message | ✅ |
| 7 | Filter: empty → all 5 projects | ✅ |
| 8 | Card link opens `/#/projects/<slug>` detail view | ✅ |
| 9 | Refreshing a detail page still shows it (no 404) | ✅ |
| 10 | `/#/no-such-page` → "Page not found" | ✅ |
| 11 | `/#/projects/no-such-project` → "Project not found" | ✅ |
| 12 | Theme persists across navigation and refresh | ✅ |
| 13 | Tab → skip button appears; Enter moves focus to main content | ✅ |
| 14 | Focus outline visible on links, buttons and input | ✅ |
| 15 | Mobile width (390px): single column, no horizontal scroll | ✅ |
| 16 | No console errors and no failed (4xx/5xx) requests | ✅ |
| 17 | GitHub Actions build + deploy succeed; live site works in a private window | ☐ check after deploy |

## Credits

- Starter structure and code patterns from the CSCI 4360 assignment handout.
- Scaffold generated by `create-vite` (React template).
- Generative-AI use: I used Claude (Anthropic) to help write the code, following the course's generative-AI policy. I reviewed and edited the content.
