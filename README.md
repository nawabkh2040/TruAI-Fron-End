# TruAI

AI-Powered Deepfake Detection & Media Authenticity Verification.

A small project that provides a React + Vite front-end for detecting deepfakes and verifying media authenticity.

**Repository structure**

- `Front-end/`: React + Vite web client (UI, pages, assets, API wrappers)
  - `src/`: React source
  - `public/`: static assets
  - `package.json`: Front-end scripts and dependencies

**Quick start (Front-end)**

1. Enter the front-end folder:

```
cd Front-end
```

2. Install dependencies:

```
npm install
```

3. Start the dev server:

```
npm run dev
```

4. Build for production:

```
npm run build
```

5. Preview the production build locally:

```
npm run preview
```

**Tech stack**

- Front-end: React, Vite
- Linting: ESLint

**Notes**

- The front-end includes example API wrappers in `src/api/` (`axios.js`, `detection.js`) intended to connect to a detection backend.
- Update any environment variables or API endpoints in `src/api/axios.js` before connecting to a live backend.


