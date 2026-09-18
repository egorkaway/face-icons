# Face Icons

Procedural toy-style faces rendered as iOS-like squircles. Vanilla HTML, CSS, and JavaScript — no build step, no dependencies.

Open `index.html` locally or deploy the folder as a static site (Netlify, GitHub Pages, any static host).

## Local

Serve the folder (opening the file directly can block downloads in some browsers):

```bash
python3 -m http.server 8766
```

Then open [http://localhost:8766](http://localhost:8766).

- Click a face to reroll it
- **Download PNG** saves a 1024×1024 icon
- Press `R` or Space to shuffle the grid

## Deploy on Netlify

This repo is already a static site. In the Netlify UI:

1. Import the GitHub repository
2. Leave the build command empty
3. Set the publish directory to `.` (the repo root)

`netlify.toml` sets the publish directory for you. After the first deploy, every push to `main` can publish automatically.

## How it works

Each face is a seeded SVG. The generator mixes:

- Face tones (light through deep brown, plus a few toy colors)
- Hair, matching eyes, a single mouth, optional nose
- Horizontal two-tone bodies (buses / hoodies) — not left/right splits
- Optional cheek flags: English, UK, Portuguese, Spanish, French, Italian, Polish, Czech, Slovak, Ukrainian, Catalan, Basque, Galician  
  A face may wear the same flag on both cheeks or a different one on each

Eyes and mouths pick dark or light ink from the background they sit on, so they stay readable on both pale and deep skin.

Core files:

- `index.html` — page shell
- `style.css` — layout
- `faces.js` — generator
- `app.js` — grid, shuffle, PNG export
