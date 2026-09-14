# Premium Interactive Birthday Surprise

A mobile-first interactive birthday gift built with React, Vite, Framer Motion and Lucide React.

## Local

```bash
npm install
npm run dev
```

## GitHub Pages

1. Upload the **contents of this folder** to the root of your GitHub repository. Do not upload the ZIP itself.
2. Push the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, select **GitHub Actions**.
5. Open the **Actions** tab and wait for `Deploy birthday surprise to GitHub Pages` to finish.
6. Open **Settings → Pages → Visit site**.

The workflow automatically detects the repository name and sets the Vite base path, so you can name the repository anything.

## Customize

For normal personalization, edit only:

`src/config/birthdayConfig.js`

Add your own photos under `public/images/` and music at `public/audio/birthday.mp3` if desired.

Missing photos and music fail gracefully.
