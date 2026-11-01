# Kangyoon Lee — Academic Website (Starter)

A lightweight, responsive, multi-page academic website intended for `kangyoon-lee.com`. **Revised Oct 31, 2026** to reflect the user’s latest MIT Manya Ghobadi/Mohammad Alizadeh Vision/Mission discussion and Google Drive project materials.

**Status:** Revised review draft. The user has purchased the domain on Cloudflare, but the website is not yet deployed or linked.

## Pages and features

- `index.html` — About, biography, research vision, selected projects, news preview, publications preview
- `projects.html` — 5 project descriptions
- `publications.html` — 3 publications from the Oct 26, 2026 CV
- `news.html` — expandable announcements (same source as homepage)
- `blog.html` — honest empty state until posts are written
- `styles.css` — responsive visual design; custom day/night colors
- `site.js` — working theme toggle, mobile nav, expandable news, footer year
- `assets/Kangyoon_Lee_CV.pdf` — copy of the provided CV
- `assets/profile.jpg` — the portrait selected in the October 31 website-planning conversation
- `assets/project-{kist,bn-ctgan,pfs-dff,lstm}.(png/jpg)` — actual photographs and research diagrams

## Review before publishing

1. Review the selected portrait and four project visuals for public presentation. The JHU ongoing project intentionally has no photograph yet.
2. Add your **verified LinkedIn URL** in `index.html` in place of the disabled `LinkedIn` span.
3. Review biography, project descriptions, and publication data for accuracy. Do not claim unreported results from ongoing AI DCN experiments.
4. Review the CV before making it publicly downloadable. The attached version is dated 2026-10-26.
5. Add actual PDF/project links when accessible.
6. Set up privacy-aware visitor analytics later; tracking is **not enabled** in this starter.

## Create a separate GitHub Pages project

Your GitHub account is `KangYoonLee`. **Do not modify `KangYoonLee.github.io`**.

1. The PUBLIC repository **`KangYoonLee/academic-website` already exists**. Do not create another repository.
2. Upload all files and directories from this folder to the root of the new repository. The repository root must contain `index.html`.
3. Open **Settings → Pages → Build and deployment** and select **Deploy from a branch**, `main`, `/(root)`, then Save.
4. After deployment, your testing URL should be: `https://kangyoonlee.github.io/academic-website/` (replace slug if you chose another repository name).
5. Since `kangyoon-lee.com` was purchased through Cloudflare, first verify domain ownership in personal GitHub Settings → Pages; then set `kangyoon-lee.com` as the Custom domain **only on academic-website**. Add the GitHub Pages apex A records and the `www` CNAME in Cloudflare DNS, then enable HTTPS. GitHub may add the CNAME file automatically.

Official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Domain and DNS

- Domain availability and exact checkout price must be checked **at the registrar** (e.g., Cloudflare Registrar).
- Do not assume an unregistered-looking domain is purchasable until checkout confirms it.
- GitHub docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- For root/apex domains such as `kangyoon-lee.com`, use GitHub's documented DNS A/AAAA or provider-supported ALIAS/ANAME setup. For `www`, use the documented CNAME record. Never point a `www` record directly to a repository URL.
- After changing DNS, wait for propagation and enforce HTTPS in Settings → Pages when available.

## Preview locally

Open `index.html` in a browser. All internal links are relative and work in a project-path deployment. Or serve the folder using `python3 -m http.server 8080` and visit `http://localhost:8080`.

## Design notes

This is an original minimal academic layout, inspired by the user's reference for clarity and hierarchy, not a duplicate of its source or content.

## Source grounding and publication caution

- Vision: Enable everyone to independently choose, customize, and deploy AI.
- Mission: Unlock the full potential of available computing resources through workload understanding and system optimization.
- Focus: Mechanism-aware communication optimization for distributed AI, with measurement → root-cause diagnosis → scheduling/routing/load balancing.
- Project evidence reviewed from Google Drive: 2024 HUFS PFS-DFF undergraduate thesis; BN-CTGAN draft; HUFS traffic-estimation technical report; KIST publication titles and the supplied CV.
- **Public website caution:** The BN-CTGAN manuscript and ongoing GPU-burst project should not be presented as accepted publications or completed systems. Internal Drive documents and raw traces should not be publicly linked without permission.
