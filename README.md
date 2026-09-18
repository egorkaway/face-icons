# Face Icons

Procedural toy-style faces rendered as iOS-like squircles. A design exploration for [sovnik.com](https://sovnik.com). Vanilla HTML, CSS, and JavaScript — no build step, no dependencies.

Open `index.html` locally or deploy the folder as a static site (Netlify, GitHub Pages, any static host).

## Local

Serve the folder (opening the file directly can block downloads in some browsers):

```bash
python3 -m http.server 8766
```

Then open [http://localhost:8766](http://localhost:8766).

- Click a face to reroll it
- **Download PNG** saves a 1024×1024 high-res icon
- **Download SVG** saves the raw scalable vector icon
- Filter avatars by **All**, **Humans**, **Creatures**, or **Vehicles**
- Press `R` or Space to shuffle the grid

## Deploy on Netlify

This repo is already a static site. In the Netlify UI:

1. Import the GitHub repository
2. Leave the build command empty
3. Set the publish directory to `.` (the repo root)

`netlify.toml` sets the publish directory for you. After the first deploy, every push to `main` can publish automatically.

## How it works

Each face is a seeded SVG with tactile vinyl/toy shading and subtle rim highlights. The generator mixes:

- **Characters & Tones:** Humans with varied skin tones, fantasy creatures, and retro vehicles/buses
- **Hairstyles & Headwear:** Bangs, afro puffs, pompadour swoops, wavy bobs, beanies, caps, headbands, topknots, spiky hair, and shiny bald heads
- **Facial Expressions:** Eyebrows (neutral, arched, happy, curious, furrowed), eyes (glossy catchlights, anime sparkles, winks, happy squints, sleepy lids)
- **Mouths:** Joyous open smiles with teeth & tongue, laughing mouths, playful tongue-out (`:P`), confident smirks, kawaii cat mouths, and whistles
- **Clothing & Collars:** Crewneck sweaters, hoodies with drawstrings, ribbed turtlenecks, and polo collars
- **Accessories:** Round wireframe glasses, bold acetate frames, sunglasses, over-ear headphones, earrings, mustaches, and stubble
- **Cheeks & Flags:** Soft blush, anime line blush (`///`), heart blush, or regional flag badges (English, UK, Portuguese, Spanish, French, Italian, Polish, Czech, Slovak, Ukrainian, Catalan, Basque, Galician)

Eyes and features pick high-contrast ink based on WCAG contrast against their background skin tones.

Core files:

- `index.html` — page shell and category filters
- `style.css` — dark tactile UI layout and cards
- `faces.js` — procedural SVG generator
- `app.js` — interactive grid, filtering, and PNG/SVG export

