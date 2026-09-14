# Premium Birthday Surprise

React + Vite + Tailwind + Framer Motion interactive birthday experience.

## Run locally

```bash
npm install
npm run dev
```

## Customize

Edit only `src/config/birthdayConfig.js` for normal personalization. Add photos to `public/images/` and music to `public/audio/`.

## GitHub Pages

1. Create a GitHub repository named `birthday-surprise` (or change `base` in `vite.config.js` to your repository name).
2. Upload/push the entire project, including `.github/workflows/deploy.yml`, to the `main` branch.
3. In GitHub, open **Settings → Pages → Build and deployment** and select **GitHub Actions** as the source.
4. Push to `main` (or run the workflow manually). GitHub Actions will build and deploy the site automatically.
5. Your site will normally be available at `https://YOUR-USERNAME.github.io/birthday-surprise/`.

If your repository has a different name, update this line in `vite.config.js`:

```js
base: process.env.GITHUB_ACTIONS ? '/YOUR-REPOSITORY-NAME/' : '/',
```

For a `username.github.io` user-site repository, use `base: '/'`.
