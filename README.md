# Built Happy Coastal website

Static site for GitHub Pages. No build step.

## Publish
1. Create a GitHub repo (for example `builthappycoastal-site`) and upload everything in this folder, including the hidden `.nojekyll` file.
2. Repo Settings > Pages > deploy from the `main` branch, root folder.
3. The `CNAME` file already points at builthappycoastal.com. Add the custom domain in the same Pages settings and follow GitHub's current docs for the DNS records at your registrar (verify them there, do not rely on old guides).
4. Turn on "Enforce HTTPS" once the certificate is issued.

## Update
- Furniture: edit `assets/pieces.js`. Put photos in `images/`.
- Renovation photos: swap the placeholder divs in `services.html` (instructions in the comment).
- Email: `info@builthappycoastal.com` appears in `contact.html`, the footer, and `assets/site.js`.

## Before launch
- Replace the three sample furniture entries.
- Remove the "not booking yet" notice on `services.html` only after HIC registration and liability insurance are in place.
