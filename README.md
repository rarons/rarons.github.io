# robertarons.com — static site

Plain HTML + one CSS file (`css/style.css`) + one tiny script (`js/main.js`, which builds the email link). No build step.

## Add a paper
1. Put the PDF in `papers/` (lowercase, hyphenated file name).
2. In `research.html`, copy the commented `<li class="paper">` template at the top of the Working papers list, paste it where you want it, and fill it in. Delete any lines you don't need (coauthors, status, abstract, slides).

## Update the CV
Replace `cv/Arons-CV.pdf` (keep the file name) and update the size/page count on `cv.html` if it changes.

## Deploy
- **GitHub Pages:** push this folder's contents to a repo and turn on Pages (branch root). `.nojekyll` is already included. For the custom domain, add a `CNAME` file containing `www.robertarons.com` and update DNS.
- **Netlify:** drag and drop this folder, or connect the repo with no build command and publish directory `/`.

Canonical URLs, Open Graph URLs, and `sitemap.xml` assume `https://www.robertarons.com/`.
