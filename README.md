# Iker Saitua — personal academic website

A bilingual-friendly (content currently in English), responsive academic website with no paid services, frameworks, build steps, or external font dependencies. Inspired by clean, editorial websites common in economic history and other social sciences.

## Contents

- `index.html` — homepage, books, complete *Left-Behind West* project, selected journal articles, teaching, public history, and a link to the contact form.
- `publications.html` — publication archive and DOI links.
- `contact.html` — separate styled contact form (name, email, subject, message).
- `cv.html` — readable academic profile and download link.
- `Iker_Saitua_CV_2026.pdf` — uploaded academic CV, currently included in the public site (you may remove it if you do not want to publish the full document).
- `styles.css` — colors, typography, spacing and responsive rules.
- `script.js` — the mobile navigation menu.
- `assets/left_behind_west_map.png` — responsive map converted from the supplied SVG, at 1680 px width.
- `assets/sheeptopia-cover.jpg` — official Sheeptopia cover image supplied by the author, saved locally for reliable display.
- `assets/anaconda-smelter-iker-saitua.jpg` — the author’s photograph of the former Anaconda smelter stack (20 November 2021), with attribution in the Current Research section.
- `assets/favicon.svg` — compact IS icon.
- `.nojekyll` — allows GitHub Pages to serve static files unchanged.

## Quick start — view locally

Unzip this folder. Double-click `index.html` in your file manager. If your browser blocks local files, run `python3 -m http.server 8000` in this folder, then visit `http://localhost:8000`.

The Sheeptopia cover is included in `assets` and works offline. The *Basque Immigrants* cover and the Anaconda smelter photograph are also stored locally, so they display offline. All other site content and the research map work offline.

## Publish to GitHub Pages (no terminal required)

1. Create a GitHub account at https://github.com/ (or sign in).
2. Click **New repository** (from the **+** menu).
3. To publish at the main address, name it **YOURUSERNAME.github.io**, substituting your exact GitHub username. Make the repository **Public**, then create it. Alternatively, name the repository something like `academic-website`, in which case the URL is normally `https://YOURUSERNAME.github.io/academic-website/`.
4. Unzip the download first. In your repository, choose **Add file → Upload files**, then drag **all files and the `assets` folder inside** `iker-saitua-web` (not the enclosing folder). Confirm that `index.html` is at the repository root. Choose **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment → Source**, select **Deploy from a branch**. Select `main`, folder `/(root)`, and **Save**.
6. When publication is finished, your site should appear at `https://YOURUSERNAME.github.io/` (or the subfolder URL for a project repository). GitHub's official docs: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

GitHub Pages is free for **public repositories** on GitHub Free. The published site and its publicly uploaded files will be visible to anyone.

## Editing after publishing

1. Open the repository and click `index.html` (or `publications.html`).
2. Click the pencil icon **Edit this file**.
3. Change the text. For project updates, search the file for `id="left-behind-west"` and edit only that section.
4. Scroll to **Commit changes** and confirm. GitHub Pages will rebuild automatically.
5. To replace the map, upload a new image named exactly `left_behind_west_map.png` into `assets` and overwrite the previous one.
6. Edit `styles.css` for design changes: all colors are near the top in the `:root` selector.
7. To change a book cover, replace `assets/sheeptopia-cover.jpg` with an updated cover (using the same file name), or modify the `<img>` `src` URLs in `index.html`.

### Connecting a custom domain

Register a domain with your preferred registrar. In the repository choose **Settings → Pages → Custom domain**, enter the domain, and follow GitHub’s exact instructions for the relevant DNS records. Configure the domain through your registrar; enable **Enforce HTTPS** when available. See https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Editorial notes to check before publishing

- Confirm that you want to make the **full 21-page CV** public. Otherwise remove the PDF and the two links pointing to it, or replace with a shorter CV.
- Check that your academic title and department are the public English-language forms you prefer.
- *Sheeptopia* is marked **forthcoming (16 February 2027)**, not published. The publisher link is https://www.oupress.com/9780806197784/sheeptopia/.
- *Left-Behind West* text and numerical results are supplied by the website owner, not independently audited here.
- The *Great Plains Quarterly* article appears in the provided CV with 2025 issue details, but previous production status was not unequivocal; it has been intentionally excluded from the online publications archive pending confirmation.

Site © 2026 Iker Saitua. The text and full CV originate from the owner. Book covers remain the intellectual property of their respective rights holders. The Sheeptopia cover was provided by the author; the older book cover was provided by the author.

## Bio and email details (October 2026 revision)

The short biography in `index.html` uses the supplied Associate Professor of Economic History and Institutional Economics title, names the three specified journals, and links to CNEAI. The academic email address is not displayed in the biography or home contact section. The contact form is on `contact.html`. The Left-Behind West map caption credits **Map by Iker Saitua**, while retaining the data sources.


## Contact form — IMPORTANT setup before using it

Peter Kopp's website uses a **Google Form** linked from its Contact menu; this site follows the same navigation principle, but hosts an integrated form styled to match Iker's design. The form sends via **FormSubmit.co**, a third-party service compatible with static GitHub Pages. Messages are handled by that service before being forwarded to the institutional email address. There is no contact server in this repository. **Do not enter sensitive information into test submissions.**

1. Upload/publish the website to GitHub Pages first.
2. Open the live **Contact** page and submit a short test message yourself.
3. FormSubmit sends a **one-time activation email** to `iker.saitua@ehu.eus`. Open it, verify the request, and activate the form. Check spam/junk if you cannot find it.
4. Submit a *second* test message to verify delivery. Until activation, messages are not immediately forwarded. This setup has **not been activated or tested in production** by ChatGPT.
5. To reduce exposure of the address in the HTML code, FormSubmit can issue a random-string action URL *after activation*. Replace the action URL in `contact.html` with that token when provided. As delivered, the recipient address is accessible in the HTML action attribute (even though it is written using an HTML entity for `@`), so it is not a guarantee against address harvesting. FormSubmit's default CAPTCHA and the hidden honeypot are enabled.

If you want an **actual Google Form like Peter Kopp's**, create your own Google Form with fields for name, email, and message. Replace each menu link to `contact.html` (and the home-page contact button) with your own form's public URL. Never point visitors at Peter Kopp's personal form.

Reference: https://formsubmit.co/ and https://formsubmit.co/documentation

## Photographs and book cover assets

- `assets/iker-saitua-portrait.jpg`: the photograph of Iker supplied for the About section.
- `assets/nevada-sheep-industry-cover.jpg`: the supplied cover of *Basque Immigrants and Nevada’s Sheep Industry* (University of Nevada Press, 2019).
- `assets/sheeptopia-cover.jpg`: the cover of *Sheeptopia* (University of Oklahoma Press, forthcoming February 2027).
- `assets/anaconda-smelter-iker-saitua.jpg`: photo by Iker Saitua of the Anaconda smelter stack in Montana, dated 20 November 2021.

All three are stored locally; GitHub Pages does not need to load them from an external image host. When updating them, keep the same file names, or update the image paths in `index.html`.

## October 2026 photo, book link, and teaching update

- The Nevada Press book in both `index.html` and `publications.html` links to its official publisher page: https://unpress.nevada.edu/9781943859993/basque-immigrants-and-nevadas-sheep-industry/
- The Left-Behind West project displays Iker Saitua’s Anaconda, Montana smelter photograph with the supplied English caption and 20 November 2021 credit.
- The Teaching section no longer lists History and Memory of the Basque Diaspora under Recent years. Politics and Economics, in the Master’s in Public Economics, is labeled **Spanish**, in agreement with the official programme: https://www.ehu.eus/es/web/master/master-economia-publica/programa.

### Master’s programme link

The 2026–27 Politics and Economics teaching listing includes a link to the EHU programme and notes that the programme is taught in Spanish (3 ECTS): https://www.ehu.eus/es/web/master/master-economia-publica/programa
