const SIZE = 200;

const HUMAN_PALETTES = [
  { skin: "#FFF6EA", hair: "#1A1A1A", lip: "#E96C32", blush: "#F3A8BD", tongue: "#DC3B3B", shirt: "#4A90E2", shirtAccent: "#FFFFFF" },
  { skin: "#FCE7D6", hair: "#3B2318", lip: "#D94B6A", blush: "#E89AA8", tongue: "#C92A4A", shirt: "#50E3C2", shirtAccent: "#20A389" },
  { skin: "#F8E0C8", hair: "#8D5524", lip: "#D94B6A", blush: "#E89AA8", tongue: "#C92A4A", shirt: "#FF6B6B", shirtAccent: "#FFE66D" },
  { skin: "#F3D5B5", hair: "#4A2C14", lip: "#C45C4A", blush: "#E8A090", tongue: "#C0392B", shirt: "#6C5CE7", shirtAccent: "#A29BFE" },
  { skin: "#E8C39E", hair: "#2B1A10", lip: "#A94B3A", blush: "#D98978", tongue: "#B03A2E", shirt: "#00B894", shirtAccent: "#55EFC4" },
  { skin: "#D4A574", hair: "#1C120C", lip: "#8C3A2A", blush: "#C97B6A", tongue: "#A33A2A", shirt: "#FD79A8", shirtAccent: "#FFFFFF" },
  { skin: "#C68642", hair: "#111111", lip: "#6D2E1C", blush: "#B56A58", tongue: "#8E2A1E", shirt: "#0984E3", shirtAccent: "#74B9FF" },
  { skin: "#A47148", hair: "#2A1810", lip: "#5C2A1A", blush: "#A45C4C", tongue: "#7A2418", shirt: "#F39C12", shirtAccent: "#F1C40F" },
  { skin: "#8D5524", hair: "#0E0A08", lip: "#4A1E14", blush: "#8F4A3C", tongue: "#6B1E16", shirt: "#E17055", shirtAccent: "#FAB1A0" },
  { skin: "#6B3E26", hair: "#1A0E0A", lip: "#3A1610", blush: "#7A3A32", tongue: "#5A1814", shirt: "#2D3436", shirtAccent: "#636E72" },
  { skin: "#4A2C2A", hair: "#0A0604", lip: "#2A100C", blush: "#6A322C", tongue: "#4A1410", shirt: "#9B59B6", shirtAccent: "#8E44AD" },
  { skin: "#3B2219", hair: "#111111", lip: "#24100C", blush: "#5C2A24", tongue: "#3E1210", shirt: "#00CEC9", shirtAccent: "#81ECEC" },
  { skin: "#E6C8A8", hair: "#6B3E2E", lip: "#B85C4A", blush: "#E09A88", tongue: "#C0392B", shirt: "#2ECC71", shirtAccent: "#27AE60" },
  { skin: "#C9A07A", hair: "#3D2318", lip: "#8A4030", blush: "#C47A68", tongue: "#A33224", shirt: "#E84393", shirtAccent: "#FF7675" },
  { skin: "#B08968", hair: "#5C3317", lip: "#703024", blush: "#B06858", tongue: "#8A2A1E", shirt: "#34495E", shirtAccent: "#BDC3C7" },
  { skin: "#F7D7C4", hair: "#E8C14D", lip: "#E07A5A", blush: "#F0A898", tongue: "#E85A4A", shirt: "#3498DB", shirtAccent: "#2980B9" },
  { skin: "#EAD2B8", hair: "#C97B3A", lip: "#D45C48", blush: "#E89888", tongue: "#C92A4A", shirt: "#16A085", shirtAccent: "#1ABC9C" },
  { skin: "#D8B496", hair: "#8D5524", lip: "#A04838", blush: "#D08070", tongue: "#B03A2E", shirt: "#D35400", shirtAccent: "#E67E22" },
  { skin: "#FFD6E0", hair: "#7EC8E3", lip: "#FF6B9A", blush: "#FF9BB5", tongue: "#FF4D6D", shirt: "#B2BEC3", shirtAccent: "#FFFFFF" },
  { skin: "#E7F6E8", hair: "#1B5E20", lip: "#2E7D32", blush: "#A5D6A7", tongue: "#E53935", shirt: "#2C3E50", shirtAccent: "#E74C3C" },
  { skin: "#EDE7F6", hair: "#4527A0", lip: "#7E57C2", blush: "#B39DDB", tongue: "#AB47BC", shirt: "#6C5CE7", shirtAccent: "#FDCB6E" },
  { skin: "#E0F7FA", hair: "#006064", lip: "#00838F", blush: "#80DEEA", tongue: "#26C6DA", shirt: "#FF7675", shirtAccent: "#FAB1A0" },
  { skin: "#FFF3E0", hair: "#E65100", lip: "#FF7043", blush: "#FFAB91", tongue: "#FF5252", shirt: "#0984E3", shirtAccent: "#74B9FF" },
  { skin: "#F5F0E8", hair: "#111111", lip: "#111111", blush: "#F5B7B1", tongue: "#C0392B", shirt: "#E74C3C", shirtAccent: "#FFFFFF" },
  { skin: "#F2C6A0", hair: "#FF4081", lip: "#C45C6A", blush: "#E89AA8", tongue: "#D94B6A", shirt: "#30336B", shirtAccent: "#130F40" },
  { skin: "#C4553A", hair: "#2A120C", lip: "#6A2018", blush: "#E07A68", tongue: "#B83224", shirt: "#F9CA24", shirtAccent: "#F0932B" },
];

const CREATURE_PALETTES = [
  { skin: "#A8E6CF", hair: "#3B7A57", blush: "#FF8B94", belly: "#DCEDC1", accent: "#FFD3B6", shirt: "#2D3436" },
  { skin: "#FFD3B6", hair: "#FF8B94", blush: "#FFAAA5", belly: "#FFF3E0", accent: "#A8E6CF", shirt: "#6C5CE7" },
  { skin: "#B3E5FC", hair: "#0288D1", blush: "#81D4FA", belly: "#E1F5FE", accent: "#FFCA28", shirt: "#01579B" },
  { skin: "#E1BEE7", hair: "#7B1FA2", blush: "#CE93D8", belly: "#F3E5F5", accent: "#00E676", shirt: "#4A148C" },
  { skin: "#FFE082", hair: "#F57C00", blush: "#FFB74D", belly: "#FFF8E1", accent: "#FF4081", shirt: "#D84315" },
  { skin: "#C5E1A5", hair: "#33691E", blush: "#AED581", belly: "#F1F8E9", accent: "#7C4DFF", shirt: "#1B5E20" },
  { skin: "#FF8A80", hair: "#B71C1C", blush: "#FF5252", belly: "#FFEBEE", accent: "#40C4FF", shirt: "#880E4F" },
  { skin: "#90CAF9", hair: "#1565C0", blush: "#64B5F6", belly: "#E3F2FD", accent: "#FF5252", shirt: "#0D47A1" },
];

const VEHICLE_PALETTES = [
  { top: "#F5C518", bottom: "#2F8A46", glass: "#EAF6FA", bumper: "#14331C", light: "#FFF9D2", rim: "#FFFFFF" },
  { top: "#FF6B6B", bottom: "#4ECDC4", glass: "#F0FCFC", bumper: "#1B4B4A", light: "#FFEAA7", rim: "#FFE66D" },
  { top: "#74B9FF", bottom: "#0984E3", glass: "#F5FBFF", bumper: "#0B3A66", light: "#FFF4CC", rim: "#FFFFFF" },
  { top: "#A29BFE", bottom: "#6C5CE7", glass: "#F9F8FF", bumper: "#2D1B69", light: "#FFF9D2", rim: "#FDCB6E" },
  { top: "#FD79A8", bottom: "#E84393", glass: "#FFF7FA", bumper: "#6D214F", light: "#FFEAA7", rim: "#FFFFFF" },
  { top: "#55EFC4", bottom: "#00B894", glass: "#F4FFFB", bumper: "#0B5A48", light: "#FFF9D2", rim: "#F8A5C2" },
  { top: "#FAB1A0", bottom: "#E17055", glass: "#FFF8F5", bumper: "#6D3A2E", light: "#FFEAA7", rim: "#FFFFFF" },
  { top: "#DFE6E9", bottom: "#636E72", glass: "#FFFFFF", bumper: "#2D3436", light: "#FFEAA7", rim: "#FF7675" },
  { top: "#F9CA24", bottom: "#130F40", glass: "#F0F3FF", bumper: "#0A0826", light: "#FFF9D2", rim: "#FFFFFF" },
  { top: "#00CEC9", bottom: "#2D3436", glass: "#E6FAF9", bumper: "#181D1E", light: "#FFF9D2", rim: "#55EFC4" },
];

const FLAG_IDS = [
  "english",
  "uk",
  "portuguese",
  "spanish",
  "french",
  "italian",
  "polish",
  "czech",
  "slovak",
  "ukrainian",
  "catalan",
  "basque",
  "galician",
];

function mulberry32(a) {
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomSeed() {
  return (Math.random() * 0xffffffff) >>> 0;
}

function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

function range(rng, a, b) {
  return a + rng() * (b - a);
}

function chance(rng, p) {
  return rng() < p;
}

const INK_DARK = "#1A1410";
const INK_LIGHT = "#FBF7F0";

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

function luminance(hex) {
  const [r, g, b] = hexToRgb(hex).map((channel) => {
    const s = channel / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(a, b) {
  const light = Math.max(luminance(a), luminance(b));
  const dark = Math.min(luminance(a), luminance(b));
  return (light + 0.05) / (dark + 0.05);
}

function inkOn(bg) {
  return contrastRatio(INK_DARK, bg) >= contrastRatio(INK_LIGHT, bg) ? INK_DARK : INK_LIGHT;
}

function weighted(rng, pairs) {
  const total = pairs.reduce((sum, [, w]) => sum + w, 0);
  let r = rng() * total;
  for (const [item, w] of pairs) {
    r -= w;
    if (r <= 0) return item;
  }
  return pairs[pairs.length - 1][0];
}

function attrs(obj) {
  return Object.entries(obj)
    .filter(([, v]) => v !== undefined && v !== null && v !== false)
    .map(([k, v]) => `${k}="${String(v).replace(/"/g, "&quot;")}"`)
    .join(" ");
}

function tag(name, a, children) {
  if (children == null || children === "") return `<${name} ${attrs(a)}/>`;
  return `<${name} ${attrs(a)}>${children}</${name}>`;
}

function superellipsePath(size, n = 5.1, steps = 96) {
  const cx = size / 2;
  const cy = size / 2;
  const rx = size / 2;
  const ry = size / 2;
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    const ct = Math.cos(theta);
    const st = Math.sin(theta);
    const x = cx + rx * Math.sign(ct) * Math.abs(ct) ** (2 / n);
    const y = cy + ry * Math.sign(st) * Math.abs(st) ** (2 / n);
    pts.push(`${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return `M ${pts.join(" L ")} Z`;
}

/* =========================================================================
   FACE GENERATOR
   ========================================================================= */

function generateFace(seed = randomSeed(), forcedKind = null) {
  const rng = mulberry32(seed);
  const kind = forcedKind || weighted(rng, [
    ["human", 0.65],
    ["creature", 0.18],
    ["vehicle", 0.17],
  ]);

  if (kind === "vehicle") return applyVehicleContrast(genVehicle(rng, seed));
  if (kind === "train") return applyVehicleContrast(genTrain(rng, seed));
  if (kind === "creature") return applyCreatureContrast(genCreature(rng, seed));
  return applyHumanContrast(genHuman(rng, seed));
}

function applyHumanContrast(spec) {
  spec.ink = inkOn(spec.skin);
  spec.feature = spec.ink;
  spec.browInk = spec.hairColor && contrastRatio(spec.hairColor, spec.skin) > 2.2 ? spec.hairColor : spec.ink;
  return spec;
}

function applyCreatureContrast(spec) {
  spec.ink = inkOn(spec.skin);
  spec.feature = spec.ink;
  spec.browInk = spec.hairColor && contrastRatio(spec.hairColor, spec.skin) > 2 ? spec.hairColor : spec.ink;
  return spec;
}

function applyVehicleContrast(spec) {
  spec.eyeInk = inkOn(spec.glass);
  spec.feature = spec.eyeInk;
  return spec;
}

function genHuman(rng, seed) {
  const palette = pick(rng, HUMAN_PALETTES);
  const hair = weighted(rng, [
    ["bangs", 0.20],
    ["afro", 0.19],
    ["pompadour", 0.18],
    ["wavy-bob", 0.17],
    ["topknot", 0.12],
    ["spiky", 0.08],
    ["bald", 0.06],
  ]);

  const eyes = weighted(rng, [
    ["glossy", 0.32],
    ["happy", 0.20],
    ["winks", 0.15],
    ["sparkle", 0.13],
    ["dots", 0.10],
    ["sleepy", 0.10],
  ]);

  const mouth = weighted(rng, [
    ["open-smile", 0.32],
    ["smile", 0.22],
    ["tongue", 0.15],
    ["laugh", 0.12],
    ["smirk", 0.08],
    ["cat", 0.06],
    ["whistle", 0.05],
  ]);

  const brows = weighted(rng, [
    ["neutral", 0.35],
    ["arched", 0.25],
    ["happy", 0.20],
    ["curious", 0.15],
    ["furrowed", 0.05],
  ]);

  const shirt = weighted(rng, [
    ["crew", 0.38],
    ["hoodie", 0.28],
    ["turtleneck", 0.18],
    ["polo", 0.16],
  ]);

  const glasses = chance(rng, 0.28)
    ? pick(rng, ["round", "square", "sunglasses"])
    : "none";

  const accessories = {
    glasses,
    headphones: chance(rng, 0.12),
    earrings: chance(rng, 0.24),
    mustache: chance(rng, 0.14),
    stubble: chance(rng, 0.10),
  };

  let cheeks = "blush-soft";
  let flags = null;

  if (chance(rng, 0.32)) {
    const left = pick(rng, FLAG_IDS);
    const right = chance(rng, 0.5) ? left : pick(rng, FLAG_IDS.filter((id) => id !== left));
    flags = { left, right };
    cheeks = "flags";
  } else {
    cheeks = weighted(rng, [
      ["blush-soft", 0.50],
      ["blush-lines", 0.25],
      ["blush-heart", 0.15],
      ["none", 0.10],
    ]);
  }

  return {
    kind: "human",
    seed,
    ...palette,
    hair,
    hairColor: palette.hair,
    eyes,
    eyeSize: range(rng, 0.9, 1.15),
    eyeGap: range(rng, 0.95, 1.1),
    eyeY: range(rng, 0.38, 0.43),
    brows,
    mouth,
    nose: chance(rng, 0.7) ? pick(rng, ["button", "curve", "dot", "oval"]) : "none",
    shirtStyle: shirt,
    cheeks,
    flags,
    freckles: chance(rng, 0.22),
    accessories,
  };
}

function genCreature(rng, seed) {
  const palette = pick(rng, CREATURE_PALETTES);
  const ears = weighted(rng, [
    ["cat", 0.25],
    ["bear", 0.22],
    ["bunny", 0.18],
    ["horns", 0.18],
    ["antennae", 0.12],
    ["fins", 0.05],
  ]);

  const eyes = weighted(rng, [
    ["glossy", 0.35],
    ["sparkle", 0.25],
    ["happy", 0.18],
    ["winks", 0.12],
    ["dots", 0.10],
  ]);

  const mouth = weighted(rng, [
    ["cat", 0.30],
    ["open-smile", 0.25],
    ["fangs", 0.20],
    ["tongue", 0.15],
    ["smile", 0.10],
  ]);

  let cheeks = "blush-soft";
  let flags = null;

  if (chance(rng, 0.25)) {
    const left = pick(rng, FLAG_IDS);
    const right = chance(rng, 0.5) ? left : pick(rng, FLAG_IDS.filter((id) => id !== left));
    flags = { left, right };
    cheeks = "flags";
  } else {
    cheeks = weighted(rng, [
      ["blush-soft", 0.55],
      ["blush-lines", 0.25],
      ["blush-heart", 0.20],
    ]);
  }

  return {
    kind: "creature",
    seed,
    ...palette,
    ears,
    eyes,
    eyeSize: range(rng, 1.0, 1.25),
    eyeGap: range(rng, 0.95, 1.15),
    eyeY: 0.44,
    brows: chance(rng, 0.45) ? "happy" : "none",
    mouth,
    nose: chance(rng, 0.6) ? "button" : "none",
    cheeks,
    flags,
    twoTone: chance(rng, 0.45),
    splitY: range(rng, 0.62, 0.72),
    bellyPatch: chance(rng, 0.4),
    freckles: chance(rng, 0.15),
  };
}

function genVehicle(rng, seed) {
  const palette = pick(rng, VEHICLE_PALETTES);
  const type = weighted(rng, [
    ["bus", 0.45],
    ["car", 0.30],
    ["truck", 0.25],
  ]);
// Vehicle flag generation (mirrors human logic)
  let flags = null;
  if (chance(rng, 0.32)) {
    const left = pick(rng, FLAG_IDS);
    const right = chance(rng, 0.5) ? left : pick(rng, FLAG_IDS.filter(id => id !== left));
    flags = { left, right };
  }
  return {
    kind: "vehicle",
    seed,
    ...palette,
    type,
flags,
    // original splitY line
    splitY: range(rng, 0.54, 0.60),
    glassPad: range(rng, 0.10, 0.14),
    eyes: pick(rng, ["glossy", "sparkle", "happy", "winks"]),
    eyeSize: range(rng, 0.95, 1.15),
    hasBumper: true,
    hasLights: chance(rng, 0.8),
    hasWipers: chance(rng, 0.4),
    hasRoofRack: chance(rng, 0.3),
    grill: pick(rng, ["smile", "slats", "door", "none"]),
  };
}

function genTrain(rng, seed) {
  const liveries = [
    { label: "CP Alfa Pendular · Portugal", operator: "CP", model: "ALFA PENDULAR", top: "#F4F3EE", bottom: "#343C3B", accent: "#B51F2B", glass: "#263A43", stripe: "#B51F2B", badge: "#167347" },
    { label: "CP 5600 · Portugal", operator: "CP", model: "5600", top: "#F1C82E", bottom: "#17643B", accent: "#17643B", glass: "#263A43", stripe: "#F1C82E", badge: "#17643B" },
    { label: "CP Intercidades · Portugal", operator: "CP", model: "INTERCIDADES", top: "#F0EEE7", bottom: "#1D6848", accent: "#D92532", glass: "#253945", stripe: "#D92532", badge: "#1D6848" },
    { label: "Renfe AVE · Spain", operator: "renfe", model: "AVE", top: "#F5F3EF", bottom: "#4A3A59", accent: "#8C1D40", glass: "#263746", stripe: "#8C1D40", badge: "#6F1D46" },
    { label: "Renfe Cercanías · Spain", operator: "renfe", model: "CERCANÍAS", top: "#EEEDE9", bottom: "#C52836", accent: "#C52836", glass: "#293B45", stripe: "#C52836", badge: "#C52836" },
    { label: "Renfe Alvia · Spain", operator: "renfe", model: "ALVIA", top: "#F5F3EF", bottom: "#43434B", accent: "#A82042", glass: "#283946", stripe: "#A82042", badge: "#70213B" },
    { label: "Ouigo España · Spain", operator: "OUIGO", model: "OUIGO", top: "#F6F3ED", bottom: "#244C9A", accent: "#F04D9A", glass: "#263746", stripe: "#ED4B99", badge: "#244C9A" },
    { label: "Iryo · Spain", operator: "iryo", model: "ETR 1000", top: "#E8E5E0", bottom: "#B42036", accent: "#F07443", glass: "#23272D", stripe: "#E3483F", badge: "#B42036" },
  ];
  const livery = pick(rng, liveries);
  const flagChoices = livery.operator === "CP"
    ? ["portuguese"]
    : ["spanish", "catalan", "basque", "galician"];
  const left = pick(rng, flagChoices);
  return {
    kind: "train", seed, ...livery,
    flags: { left, right: flagChoices.length === 1 || chance(rng, 0.55) ? left : pick(rng, flagChoices.filter((flag) => flag !== left)) },
    eyes: pick(rng, ["glossy", "sparkle", "happy", "winks"]),
    eyeSize: range(rng, 0.9, 1.08),
    glass: "#263A43", light: "#FFF1B8",
  };
}

/* =========================================================================
   SVG RENDERING ENGINE
   ========================================================================= */

function renderFace(spec) {
  const id = `f${spec.seed.toString(36)}`;
  const clipId = `${id}-clip`;
  const glossId = `${id}-gloss`;
  const rimId = `${id}-rim`;
  const path = superellipsePath(SIZE);

  const body =
    spec.kind === "train"
      ? drawTrain(spec, id)
      : spec.kind === "vehicle"
      ? drawVehicle(spec, id)
      : spec.kind === "creature"
        ? drawCreature(spec, id)
        : drawHuman(spec, id);

  return tag("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    width: SIZE,
    height: SIZE,
    fill: "none",
    class: "face-svg",
  }, [
    tag("defs", {}, [
      tag("clipPath", { id: clipId }, tag("path", { d: path })),
      // Soft 3D lighting gradient overlay
      tag("linearGradient", { id: glossId, x1: "0", y1: "0", x2: "0", y2: "1" }, [
        tag("stop", { offset: "0%", "stop-color": "#ffffff", "stop-opacity": "0.32" }),
        tag("stop", { offset: "30%", "stop-color": "#ffffff", "stop-opacity": "0.06" }),
        tag("stop", { offset: "70%", "stop-color": "#000000", "stop-opacity": "0" }),
        tag("stop", { offset: "100%", "stop-color": "#000000", "stop-opacity": "0.18" }),
      ].join("")),
      // Rim highlight gradient
      tag("linearGradient", { id: rimId, x1: "0", y1: "0", x2: "1", y2: "1" }, [
        tag("stop", { offset: "0%", "stop-color": "#ffffff", "stop-opacity": "0.18" }),
        tag("stop", { offset: "50%", "stop-color": "#ffffff", "stop-opacity": "0" }),
        tag("stop", { offset: "100%", "stop-color": "#000000", "stop-opacity": "0.12" }),
      ].join("")),
    ].join("")),
    tag("g", { "clip-path": `url(#${clipId})` }, [
      body,
      // Ambient 3D surface sheen
      tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: `url(#${glossId})` }),
      tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: `url(#${rimId})` }),
      // Subtle tactile squircle border
      tag("path", {
        d: path,
        fill: "none",
        stroke: "rgba(255,255,255,0.18)",
        "stroke-width": "2.5",
      }),
    ].join("")),
  ].join(""));
}

/* =========================================================================
   HUMAN AVATAR DRAWING
   ========================================================================= */

function drawHuman(spec, id) {
  const parts = [];

  // 1. Skin Base
  parts.push(tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.skin }));

  // 2. Ears
  parts.push(drawEars(spec));

  // 3. Clothing / Collar at bottom
  parts.push(drawClothing(spec));

  // 4. Back Hair (if bob/afro)
  parts.push(drawBackHair(spec));

  // 5. Eyebrows
  parts.push(drawEyebrows(spec));

  // 6. Eyes
  parts.push(drawEyes(spec, spec.eyes, spec.ink, 100, spec.eyeY * SIZE, spec.eyeGap, spec.eyeSize));

  // 7. Cheeks / Flags
  if (spec.cheeks === "flags" && spec.flags) {
    parts.push(drawFlagCheeks(spec, id));
  } else if (spec.cheeks !== "none") {
    parts.push(drawCheeks(spec));
  }

  // 8. Freckles
  if (spec.freckles) {
    parts.push(drawFreckles(spec.ink, 56, 114));
  }

  // 9. Nose
  parts.push(drawNose(spec));

  // 10. Facial Hair (stubble / mustache)
  if (spec.accessories.mustache) {
    parts.push(drawMustache(spec));
  }
  if (spec.accessories.stubble) {
    parts.push(drawStubble(spec));
  }

  // 11. Mouth
  parts.push(drawMouth(spec));

  // 12. Front Hair & Headwear
  parts.push(drawHair(spec));

  // 13. Glasses / Sunglasses
  if (spec.accessories.glasses && spec.accessories.glasses !== "none") {
    parts.push(drawGlasses(spec, spec.accessories.glasses));
  }

  // 14. Headphones
  if (spec.accessories.headphones) {
    parts.push(drawHeadphones(spec));
  }

  return parts.join("");
}

function drawEars(spec) {
  const y = spec.eyeY * SIZE + 6;
  const earColor = spec.skin;
  const innerColor = "rgba(0,0,0,0.06)";
  const parts = [
    // Left ear
    tag("ellipse", { cx: 12, cy: y, rx: 11, ry: 15, fill: earColor }),
    tag("ellipse", { cx: 14, cy: y, rx: 6, ry: 9, fill: innerColor }),
    // Right ear
    tag("ellipse", { cx: 188, cy: y, rx: 11, ry: 15, fill: earColor }),
    tag("ellipse", { cx: 186, cy: y, rx: 6, ry: 9, fill: innerColor }),
  ];

  if (spec.accessories.earrings) {
    parts.push(
      tag("circle", { cx: 10, cy: y + 10, r: 3.5, fill: "#F1C40F", stroke: "#D4AC0D", "stroke-width": 0.8 }),
      tag("circle", { cx: 190, cy: y + 10, r: 3.5, fill: "#F1C40F", stroke: "#D4AC0D", "stroke-width": 0.8 }),
    );
  }

  return parts.join("");
}

function drawClothing(spec) {
  const shirt = spec.shirt;
  const accent = spec.shirtAccent || "#FFFFFF";
  const style = spec.shirtStyle; return "";

  if (style === "hoodie") {
    return [
      // Hoodie body
      tag("path", {
        d: "M 0 162 C 30 156 65 152 100 152 C 135 152 170 156 200 162 V 200 H 0 Z",
        fill: shirt,
      }),
      // Hoodie collar curve
      tag("path", {
        d: "M 52 166 C 70 188 130 188 148 166 C 132 176 68 176 52 166 Z",
        fill: accent,
        opacity: "0.9",
      }),
      // Drawstrings
      tag("path", { d: "M 88 175 V 196", stroke: "#FFFFFF", "stroke-width": "2.5", "stroke-linecap": "round" }),
      tag("path", { d: "M 112 175 V 196", stroke: "#FFFFFF", "stroke-width": "2.5", "stroke-linecap": "round" }),
      tag("circle", { cx: 88, cy: 196, r: 2.5, fill: "#BDC3C7" }),
      tag("circle", { cx: 112, cy: 196, r: 2.5, fill: "#BDC3C7" }),
    ].join("");
  }

  if (style === "turtleneck") {
    return [
      tag("path", {
        d: "M 0 168 C 30 160 65 156 100 156 C 135 156 170 160 200 168 V 200 H 0 Z",
        fill: shirt,
      }),
      // Turtleneck ribbed neck
      tag("rect", { x: 68, y: 154, width: 64, height: 26, rx: 8, fill: shirt }),
      tag("path", { d: "M 72 162 H 128 M 72 170 H 128", stroke: "rgba(0,0,0,0.15)", "stroke-width": "1.5" }),
    ].join("");
  }

  if (style === "polo") {
    return [
      tag("path", {
        d: "M 0 160 C 30 154 65 150 100 150 C 135 150 170 154 200 160 V 200 H 0 Z",
        fill: shirt,
      }),
      // Left collar flap
      tag("polygon", { points: "100,150 64,154 82,176", fill: accent }),
      // Right collar flap
      tag("polygon", { points: "100,150 136,154 118,176", fill: accent }),
      // Placket & buttons
      tag("rect", { x: 95, y: 168, width: 10, height: 32, fill: accent }),
      tag("circle", { cx: 100, cy: 176, r: 1.8, fill: "#2D3436" }),
      tag("circle", { cx: 100, cy: 188, r: 1.8, fill: "#2D3436" }),
    ].join("");
  }

  // Default: Crewneck sweater
  return [
    tag("path", {
      d: "M 0 164 C 30 158 65 154 100 154 C 135 154 170 158 200 164 V 200 H 0 Z",
      fill: shirt,
    }),
    tag("path", {
      d: "M 64 162 C 80 180 120 180 136 162",
      stroke: accent,
      "stroke-width": "4.5",
      "stroke-linecap": "round",
      fill: "none",
    }),
  ].join("");
}

function drawBackHair(spec) {
  const color = spec.hairColor;
  if (spec.hair === "afro") {
    // Large puffy curly back silhouette
    return [
      tag("circle", { cx: 38, cy: 52, r: 42, fill: color }),
      tag("circle", { cx: 162, cy: 52, r: 42, fill: color }),
      tag("circle", { cx: 28, cy: 96, r: 34, fill: color }),
      tag("circle", { cx: 172, cy: 96, r: 34, fill: color }),
      tag("circle", { cx: 100, cy: 30, r: 52, fill: color }),
    ].join("");
  }

  if (spec.hair === "wavy-bob") {
    return [
      tag("path", {
        d: "M 18 60 Q 6 110 32 142 Q 44 142 42 120 Q 30 80 38 60 Z",
        fill: color,
      }),
      tag("path", {
        d: "M 182 60 Q 194 110 168 142 Q 156 142 158 120 Q 170 80 162 60 Z",
        fill: color,
      }),
    ].join("");
  }

  return "";
}

function drawHair(spec) {
  const color = spec.hairColor;
  const style = spec.hair;

  if (style === "bald") {
    // Shiny cute bald reflection
    return tag("path", {
      d: "M 48 24 Q 72 14 100 14",
      stroke: "rgba(255,255,255,0.45)",
      "stroke-width": "4",
      "stroke-linecap": "round",
      fill: "none",
    });
  }

  if (style === "bangs") {
    return [
      // Ambient shadow on forehead
      tag("path", {
        d: "M 0 0 H 200 V 42 C 160 56 140 40 100 50 C 60 56 30 42 0 46 Z",
        fill: "rgba(0,0,0,0.12)",
      }),
      // Front bangs curve
      tag("path", {
        d: "M 0 0 H 200 V 38 C 160 52 140 36 100 46 C 60 52 30 38 0 42 Z",
        fill: color,
      }),
      // Cute highlight sheen
      tag("path", {
        d: "M 62 20 Q 100 28 138 20",
        stroke: "rgba(255,255,255,0.22)",
        "stroke-width": "3",
        "stroke-linecap": "round",
        fill: "none",
      }),
    ].join("");
  }

  if (style === "pompadour") {
    return [
      // Shadow
      tag("path", {
        d: "M 0 0 H 200 V 32 C 150 48 80 62 0 44 Z",
        fill: "rgba(0,0,0,0.12)",
      }),
      // Swoop
      tag("path", {
        d: "M 0 0 H 200 V 28 C 150 44 80 58 0 40 Z",
        fill: color,
      }),
      tag("path", {
        d: "M 40 18 Q 110 32 170 14",
        stroke: "rgba(255,255,255,0.24)",
        "stroke-width": "3.5",
        "stroke-linecap": "round",
        fill: "none",
      }),
    ].join("");
  }

  if (style === "spiky") {
    return [
      tag("polygon", { points: "30,30 50,4 70,28", fill: color }),
      tag("polygon", { points: "70,28 100,-2 130,28", fill: color }),
      tag("polygon", { points: "130,28 150,4 170,30", fill: color }),
      tag("path", { d: "M 0 0 H 200 V 28 Q 100 36 0 28 Z", fill: color }),
    ].join("");
  }

  if (style === "topknot") {
    return [
      // Top bun
      tag("circle", { cx: 100, cy: 12, r: 24, fill: color }),
      tag("circle", { cx: 100, cy: 12, r: 24, fill: "rgba(0,0,0,0.1)" }),
      tag("ellipse", { cx: 100, cy: 26, rx: 78, ry: 26, fill: color }),
    ].join("");
  }

  // Default short crop
  return [
    tag("ellipse", { cx: 100, cy: 16, rx: 78, ry: 28, fill: color }),
    tag("ellipse", { cx: 62, cy: 24, rx: 42, ry: 24, fill: color }),
    tag("ellipse", { cx: 138, cy: 24, rx: 42, ry: 24, fill: color }),
  ].join("");
}

/* =========================================================================
   EYEBROWS & EYES
   ========================================================================= */

function drawEyebrows(spec) {
  if (spec.brows === "none") return "";
  const ink = spec.browInk || spec.ink;
  const y = spec.eyeY * SIZE - 18;
  const gap = 24 * spec.eyeGap;

  if (spec.brows === "happy") {
    // Curved happy arches
    return [
      tag("path", { d: `M ${100 - gap - 14} ${y + 3} Q ${100 - gap} ${y - 4} ${100 - gap + 14} ${y + 3}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
      tag("path", { d: `M ${100 + gap - 14} ${y + 3} Q ${100 + gap} ${y - 4} ${100 + gap + 14} ${y + 3}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
    ].join("");
  }

  if (spec.brows === "curious") {
    // One raised, one neutral
    return [
      tag("path", { d: `M ${100 - gap - 13} ${y - 5} Q ${100 - gap} ${y - 12} ${100 - gap + 13} ${y - 5}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
      tag("path", { d: `M ${100 + gap - 13} ${y} Q ${100 + gap} ${y - 2} ${100 + gap + 13} ${y}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
    ].join("");
  }

  if (spec.brows === "arched") {
    // Stylized arched
    return [
      tag("path", { d: `M ${100 - gap - 14} ${y + 2} Q ${100 - gap - 2} ${y - 6} ${100 - gap + 13} ${y - 2}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
      tag("path", { d: `M ${100 + gap - 13} ${y - 2} Q ${100 + gap + 2} ${y - 6} ${100 + gap + 14} ${y + 2}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
    ].join("");
  }

  if (spec.brows === "furrowed") {
    // Determined / fierce
    return [
      tag("path", { d: `M ${100 - gap - 14} ${y - 4} L ${100 - gap + 13} ${y + 2}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round" }),
      tag("path", { d: `M ${100 + gap - 13} ${y + 2} L ${100 + gap + 14} ${y - 4}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round" }),
    ].join("");
  }

  // Neutral gentle brow
  return [
    tag("path", { d: `M ${100 - gap - 13} ${y} Q ${100 - gap} ${y - 3} ${100 - gap + 13} ${y}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
    tag("path", { d: `M ${100 + gap - 13} ${y} Q ${100 + gap} ${y - 3} ${100 + gap + 13} ${y}`, stroke: ink, "stroke-width": "3.5", "stroke-linecap": "round", fill: "none" }),
  ].join("");
}

function drawEyes(spec, type, color, cx, cy, gapMul, sizeMul) {
  const gap = 24 * gapMul;
  const ink = color || spec.ink || INK_DARK;

  if (type === "winks") {
    // Left eye normal, right eye wink
    return [
      drawEye("glossy", ink, cx - gap, cy, sizeMul, -1),
      drawWinkEye(ink, cx + gap, cy, sizeMul),
    ].join("");
  }

  return [
    drawEye(type, ink, cx - gap, cy, sizeMul, -1),
    drawEye(type, ink, cx + gap, cy, sizeMul, 1),
  ].join("");
}

function drawWinkEye(color, x, y, sizeMul) {
  const s = sizeMul;
  return tag("path", {
    d: `M ${x - 12 * s} ${y + 2} Q ${x} ${y - 10 * s} ${x + 12 * s} ${y + 2}`,
    stroke: color,
    "stroke-width": 5.5 * s,
    "stroke-linecap": "round",
    fill: "none",
  });
}

function drawEye(type, color, x, y, sizeMul, dir) {
  const s = sizeMul;
  const isDarkInk = luminance(color) < 0.45;
  const shine = isDarkInk ? "#FFFFFF" : "rgba(0,0,0,0.35)";

  if (type === "happy") {
    // Happy squint arc (⌒)
    return tag("path", {
      d: `M ${x - 12 * s} ${y + 2} Q ${x} ${y - 12 * s} ${x + 12 * s} ${y + 2}`,
      stroke: color,
      "stroke-width": 5.5 * s,
      "stroke-linecap": "round",
      fill: "none",
    });
  }

  if (type === "sleepy") {
    // Relaxed lower half-lid
    return [
      tag("path", {
        d: `M ${x - 12 * s} ${y - 2} Q ${x} ${y + 10 * s} ${x + 12 * s} ${y - 2}`,
        stroke: color,
        "stroke-width": 5 * s,
        "stroke-linecap": "round",
        fill: "none",
      }),
    ].join("");
  }

  if (type === "sparkle") {
    // Anime dual catchlight sparkle
    const rx = 13 * s;
    const ry = 15 * s;
    return [
      tag("ellipse", { cx: x, cy: y, rx, ry, fill: color }),
      tag("circle", { cx: x + 4 * dir, cy: y - 5, r: 4.8 * s, fill: shine }),
      tag("circle", { cx: x - 4 * dir, cy: y + 4, r: 2.2 * s, fill: shine, opacity: "0.85" }),
    ].join("");
  }

  if (type === "dots") {
    return tag("circle", { cx: x, cy: y, r: 7.5 * s, fill: color });
  }

  if (type === "ovals") {
    return tag("ellipse", { cx: x, cy: y, rx: 7.5 * s, ry: 13 * s, fill: color });
  }

  // Default: Tactile Glossy Eye
  const r = 13.5 * s;
  return [
    tag("ellipse", { cx: x, cy: y, rx: r, ry: r, fill: color }),
    tag("circle", { cx: x + 4.5 * dir, cy: y - 4.5, r: 4.4 * s, fill: shine }),
  ].join("");
}

/* =========================================================================
   NOSE & MOUTH
   ========================================================================= */

function drawNose(spec) {
  if (spec.nose === "none") return "";
  const y = spec.eyeY * SIZE + 20;
  const ink = spec.ink;

  if (spec.nose === "button") {
    return [
      tag("ellipse", { cx: 100, cy: y, rx: 6, ry: 4.2, fill: "rgba(0,0,0,0.12)" }),
      tag("ellipse", { cx: 100, cy: y - 1, rx: 5.2, ry: 3.6, fill: ink, opacity: "0.85" }),
    ].join("");
  }

  if (spec.nose === "curve") {
    return tag("path", {
      d: `M 97 ${y - 6} Q 104 ${y - 2} 100 ${y + 4} Q 96 ${y + 4} 94 ${y + 2}`,
      stroke: ink,
      "stroke-width": "2.8",
      "stroke-linecap": "round",
      fill: "none",
    });
  }

  if (spec.nose === "dot") {
    return tag("circle", { cx: 100, cy: y, r: 4, fill: ink, opacity: "0.8" });
  }

  return tag("ellipse", { cx: 100, cy: y, rx: 4.5, ry: 7, fill: ink, opacity: "0.8" });
}

function drawMouth(spec) {
  const ink = spec.ink;
  const tongue = spec.tongue || "#E74C3C";
  const lip = spec.lip || "#D94B6A";
  const y = 136;

  if (spec.mouth === "open-smile") {
    // Proper open smile with white teeth row and cute tongue arc
    return [
      // Mouth cavity
      tag("path", {
        d: `M 72 ${y} C 72 168 128 168 128 ${y} Z`,
        fill: "#2C1215",
      }),
      // White top teeth
      tag("path", {
        d: `M 76 ${y} C 86 ${y + 12} 114 ${y + 12} 124 ${y} Z`,
        fill: "#FFFFFF",
      }),
      // Tongue arc at bottom
      tag("path", {
        d: `M 84 158 C 84 146 116 146 116 158 C 110 166 90 166 84 158 Z`,
        fill: tongue,
      }),
      // Top lip stroke
      tag("path", {
        d: `M 70 ${y} Q 100 ${y + 3} 130 ${y}`,
        stroke: ink,
        "stroke-width": "4.5",
        "stroke-linecap": "round",
        fill: "none",
      }),
    ].join("");
  }

  if (spec.mouth === "laugh") {
    // Wide open laughing mouth
    return [
      tag("path", {
        d: `M 70 ${y - 4} C 70 174 130 174 130 ${y - 4} Q 100 ${y + 4} 70 ${y - 4} Z`,
        fill: "#2C1215",
      }),
      tag("path", {
        d: `M 74 ${y - 2} C 84 ${y + 10} 116 ${y + 10} 126 ${y - 2} Z`,
        fill: "#FFFFFF",
      }),
      tag("circle", { cx: 100, cy: 158, r: 14, fill: tongue }),
    ].join("");
  }

  if (spec.mouth === "tongue") {
    // Playful tongue sticking out (:P)
    return [
      tag("path", {
        d: `M 74 ${y} Q 100 ${y + 6} 126 ${y}`,
        stroke: ink,
        "stroke-width": "5",
        "stroke-linecap": "round",
        fill: "none",
      }),
      // Tongue flap
      tag("path", {
        d: `M 92 ${y + 2} V ${y + 18} C 92 ${y + 26} 110 ${y + 26} 110 ${y + 18} V ${y + 2} Z`,
        fill: tongue,
      }),
      tag("path", {
        d: `M 101 ${y + 4} V ${y + 16}`,
        stroke: "#C0392B",
        "stroke-width": "2",
      }),
    ].join("");
  }

  if (spec.mouth === "smirk") {
    // Crooked confident smirk
    return tag("path", {
      d: `M 82 ${y + 6} Q 102 ${y + 10} 124 ${y - 4}`,
      stroke: ink,
      "stroke-width": "5",
      "stroke-linecap": "round",
      fill: "none",
    });
  }

  if (spec.mouth === "cat") {
    // Kawaii :3 mouth
    return [
      tag("path", {
        d: `M 78 ${y} Q 89 ${y + 14} 100 ${y + 2} Q 111 ${y + 14} 122 ${y}`,
        stroke: ink,
        "stroke-width": "5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
      }),
    ].join("");
  }

  if (spec.mouth === "whistle") {
    // Cute whistling 'o'
    return [
      tag("ellipse", { cx: 100, cy: y + 2, rx: 8, ry: 9, fill: "#2C1215" }),
      tag("ellipse", { cx: 100, cy: y + 2, rx: 8, ry: 9, stroke: ink, "stroke-width": "3.5", fill: "none" }),
    ].join("");
  }

  // Classic warm smile
  return tag("path", {
    d: `M 74 ${y} Q 100 ${y + 22} 126 ${y}`,
    stroke: ink,
    "stroke-width": "5.5",
    "stroke-linecap": "round",
    fill: "none",
  });
}

/* =========================================================================
   CHEEKS, BLUSH & FLAGS
   ========================================================================= */

function drawCheeks(spec) {
  const y = 116;
  const blushColor = spec.blush || "#FF8B94";

  if (spec.cheeks === "blush-lines") {
    // Cute anime diagonal blush lines ///
    return [
      // Left
      tag("path", { d: "M 28 112 L 34 122 M 36 112 L 42 122 M 44 112 L 50 122", stroke: blushColor, "stroke-width": "2.8", "stroke-linecap": "round" }),
      // Right
      tag("path", { d: "M 150 112 L 156 122 M 158 112 L 164 122 M 166 112 L 172 122", stroke: blushColor, "stroke-width": "2.8", "stroke-linecap": "round" }),
    ].join("");
  }

  if (spec.cheeks === "blush-heart") {
    // Heart blush
    return [
      tag("path", { d: "M 36 114 A 4 4 0 0 0 28 118 Q 36 128 36 128 Q 36 128 44 118 A 4 4 0 0 0 36 114 Z", fill: blushColor, opacity: "0.85" }),
      tag("path", { d: "M 164 114 A 4 4 0 0 0 156 118 Q 164 128 164 128 Q 164 128 172 118 A 4 4 0 0 0 164 114 Z", fill: blushColor, opacity: "0.85" }),
    ].join("");
  }

  // Soft circle blush
  return [
    tag("circle", { cx: 36, cy: y, r: 16, fill: blushColor, opacity: "0.75" }),
    tag("circle", { cx: 164, cy: y, r: 16, fill: blushColor, opacity: "0.75" }),
  ].join("");
}

function drawFlagCheeks(spec, id) {
  const y = 114;
  const w = 36;
  const h = 24;
  return [
    drawFlagBadge(`${id}-L`, 36, y, w, h, spec.flags.left),
    drawFlagBadge(`${id}-R`, 164, y, w, h, spec.flags.right),
  ].join("");
}

function drawFlagBadge(id, cx, cy, w, h, flag) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const clip = `${id}-c`;
  return [
    tag("clipPath", { id: clip }, tag("rect", { x, y, width: w, height: h, rx: 5 })),
    // Subtle drop shadow under badge
    tag("rect", { x: x + 0.5, y: y + 1.5, width: w, height: h, rx: 5, fill: "rgba(0,0,0,0.18)" }),
    tag("g", { "clip-path": `url(#${clip})` }, [
      tag("g", { transform: `translate(${x} ${y})` }, drawFlag(flag, w, h)),
    ].join("")),
    // Shiny badge border
    tag("rect", {
      x,
      y,
      width: w,
      height: h,
      rx: 5,
      fill: "none",
      stroke: "#FFFFFF",
      "stroke-opacity": "0.6",
      "stroke-width": "1.2",
    }),
  ].join("");
}

function vStripes(w, h, colors) {
  const sw = w / colors.length;
  return colors.map((color, i) => tag("rect", { x: i * sw, y: 0, width: sw + 0.4, height: h, fill: color })).join("");
}

function hStripes(w, h, colors) {
  const sh = h / colors.length;
  return colors.map((color, i) => tag("rect", { x: 0, y: i * sh, width: w, height: sh + 0.4, fill: color })).join("");
}

function drawFlag(flag, w, h) {
  if (flag === "english") {
    const t = Math.max(4, h * 0.28);
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#fff" }),
      tag("rect", { x: (w - t) / 2, y: 0, width: t, height: h, fill: "#C8102E" }),
      tag("rect", { x: 0, y: (h - t) / 2, width: w, height: t, fill: "#C8102E" }),
    ].join("");
  }
  if (flag === "uk") {
    const whiteX = Math.max(5, h * 0.3);
    const redX = Math.max(2, h * 0.12);
    const whitePlus = Math.max(7, h * 0.44);
    const redPlus = Math.max(4, h * 0.24);
    const whiteBar = whitePlus * 0.72;
    const redBar = redPlus * 0.72;
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#012169" }),
      tag("line", { x1: 0, y1: 0, x2: w, y2: h, stroke: "#fff", "stroke-width": whiteX }),
      tag("line", { x1: w, y1: 0, x2: 0, y2: h, stroke: "#fff", "stroke-width": whiteX }),
      tag("line", { x1: 0, y1: 0, x2: w, y2: h, stroke: "#C8102E", "stroke-width": redX }),
      tag("line", { x1: w, y1: 0, x2: 0, y2: h, stroke: "#C8102E", "stroke-width": redX }),
      tag("rect", { x: (w - whitePlus) / 2, y: 0, width: whitePlus, height: h, fill: "#fff" }),
      tag("rect", { x: 0, y: (h - whiteBar) / 2, width: w, height: whiteBar, fill: "#fff" }),
      tag("rect", { x: (w - redPlus) / 2, y: 0, width: redPlus, height: h, fill: "#C8102E" }),
      tag("rect", { x: 0, y: (h - redBar) / 2, width: w, height: redBar, fill: "#C8102E" }),
    ].join("");
  }
  if (flag === "portuguese") {
    return [
      tag("rect", { x: 0, y: 0, width: w * 0.4, height: h, fill: "#006600" }),
      tag("rect", { x: w * 0.4, y: 0, width: w * 0.6, height: h, fill: "#DA291C" }),
      tag("circle", { cx: w * 0.4, cy: h / 2, r: h * 0.26, fill: "#FFD100" }),
    ].join("");
  }
  if (flag === "spanish") {
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#AA151B" }),
      tag("rect", { x: 0, y: h * 0.25, width: w, height: h * 0.5, fill: "#F1BF00" }),
    ].join("");
  }
  if (flag === "french") return vStripes(w, h, ["#002395", "#fff", "#ED2939"]);
  if (flag === "italian") return vStripes(w, h, ["#009246", "#fff", "#CE2B37"]);
  if (flag === "polish") return hStripes(w, h, ["#fff", "#DC143C"]);
  if (flag === "czech") {
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h / 2, fill: "#fff" }),
      tag("rect", { x: 0, y: h / 2, width: w, height: h / 2, fill: "#D7141A" }),
      tag("polygon", { points: `0,0 ${w * 0.42},${h / 2} 0,${h}`, fill: "#11457E" }),
    ].join("");
  }
  if (flag === "slovak") {
    return [
      hStripes(w, h, ["#fff", "#0B4EA2", "#EE1C25"]),
      tag("rect", { x: w * 0.12, y: h * 0.22, width: w * 0.22, height: h * 0.56, rx: 2, fill: "#EE1C25" }),
      tag("rect", { x: w * 0.19, y: h * 0.3, width: w * 0.08, height: h * 0.28, fill: "#fff" }),
      tag("rect", { x: w * 0.14, y: h * 0.38, width: w * 0.18, height: h * 0.08, fill: "#fff" }),
      tag("rect", { x: w * 0.12, y: h * 0.62, width: w * 0.22, height: h * 0.14, fill: "#0B4EA2" }),
    ].join("");
  }
  if (flag === "ukrainian") return hStripes(w, h, ["#0057B8", "#FFD700"]);
  if (flag === "catalan") {
    const n = 9;
    const sh = h / n;
    return Array.from({ length: n }, (_, i) =>
      tag("rect", { x: 0, y: i * sh, width: w, height: sh + 0.4, fill: i % 2 === 0 ? "#FCDD09" : "#DA121A" }),
    ).join("");
  }
  if (flag === "basque") {
    const t = Math.max(3.2, h * 0.18);
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#D52B1E" }),
      tag("path", {
        d: `M 0 0 L ${t} 0 L ${w} ${h - t} L ${w} ${h} L ${w - t} ${h} L 0 ${t} Z`,
        fill: "#009B48",
      }),
      tag("path", {
        d: `M ${w} 0 L ${w} ${t} L ${t} ${h} L 0 ${h} L 0 ${h - t} L ${w - t} 0 Z`,
        fill: "#009B48",
      }),
      tag("rect", { x: (w - t) / 2, y: 0, width: t, height: h, fill: "#fff" }),
      tag("rect", { x: 0, y: (h - t) / 2, width: w, height: t, fill: "#fff" }),
    ].join("");
  }
  if (flag === "galician") {
    const t = Math.max(4.5, h * 0.28);
    return [
      tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#fff" }),
      tag("path", {
        d: `M 0 0 L ${t} 0 L ${w} ${h - t} L ${w} ${h} L ${w - t} ${h} L 0 ${t} Z`,
        fill: "#0E69AF",
      }),
    ].join("");
  }
  return tag("rect", { x: 0, y: 0, width: w, height: h, fill: "#ccc" });
}

function drawFreckles(color, x, y) {
  const spots = [
    [x, y], [x + 10, y + 6], [x - 6, y + 8],
    [200 - x, y], [200 - x - 10, y + 6], [200 - x + 6, y + 8],
  ];
  return spots.map(([sx, sy]) => tag("circle", { cx: sx, cy: sy, r: 1.8, fill: color, opacity: "0.45" })).join("");
}

/* =========================================================================
   ACCESSORIES (GLASSES, HEADPHONES, FACIAL HAIR)
   ========================================================================= */

function drawGlasses(spec, type) {
  const y = spec.eyeY * SIZE;
  const gap = 24 * spec.eyeGap;

  if (type === "round") {
    // Stylish wireframe circle glasses
    return [
      // Left lens
      tag("circle", { cx: 100 - gap, cy: y, r: 19, fill: "rgba(255,255,255,0.15)", stroke: "#2D3436", "stroke-width": "3" }),
      // Right lens
      tag("circle", { cx: 100 + gap, cy: y, r: 19, fill: "rgba(255,255,255,0.15)", stroke: "#2D3436", "stroke-width": "3" }),
      // Bridge
      tag("path", { d: `M ${100 - gap + 19} ${y} H ${100 + gap - 19}`, stroke: "#2D3436", "stroke-width": "3" }),
      // Shine reflections
      tag("path", { d: `M ${100 - gap - 10} ${y - 12} L ${100 - gap + 6} ${y + 8}`, stroke: "rgba(255,255,255,0.4)", "stroke-width": "2" }),
      tag("path", { d: `M ${100 + gap - 10} ${y - 12} L ${100 + gap + 6} ${y + 8}`, stroke: "rgba(255,255,255,0.4)", "stroke-width": "2" }),
    ].join("");
  }

  if (type === "square") {
    // Bold acetate frames
    return [
      tag("rect", { x: 100 - gap - 20, y: y - 16, width: 40, height: 32, rx: 7, fill: "rgba(255,255,255,0.12)", stroke: "#1A1A1A", "stroke-width": "4.5" }),
      tag("rect", { x: 100 + gap - 20, y: y - 16, width: 40, height: 32, rx: 7, fill: "rgba(255,255,255,0.12)", stroke: "#1A1A1A", "stroke-width": "4.5" }),
      tag("path", { d: `M ${100 - gap + 20} ${y - 2} H ${100 + gap - 20}`, stroke: "#1A1A1A", "stroke-width": "4.5" }),
    ].join("");
  }

  if (type === "sunglasses") {
    // Cool dark shades with glossy gleam
    return [
      tag("rect", { x: 100 - gap - 21, y: y - 15, width: 42, height: 30, rx: 8, fill: "#151515" }),
      tag("rect", { x: 100 + gap - 21, y: y - 15, width: 42, height: 30, rx: 8, fill: "#151515" }),
      tag("path", { d: `M ${100 - gap + 21} ${y - 4} H ${100 + gap - 21}`, stroke: "#151515", "stroke-width": "4.5" }),
      // Gloss diagonal lines
      tag("path", { d: `M ${100 - gap - 12} ${y - 10} L ${100 - gap + 8} ${y + 10}`, stroke: "rgba(255,255,255,0.35)", "stroke-width": "2.5" }),
      tag("path", { d: `M ${100 + gap - 12} ${y - 10} L ${100 + gap + 8} ${y + 10}`, stroke: "rgba(255,255,255,0.35)", "stroke-width": "2.5" }),
    ].join("");
  }

  return "";
}

function drawHeadphones(spec) {
  const y = spec.eyeY * SIZE + 4;
  const color = spec.hatColor || "#E74C3C";

  return [
    // Top band
    tag("path", {
      d: "M 16 68 C 16 12 184 12 184 68",
      stroke: "#2D3436",
      "stroke-width": "6",
      "stroke-linecap": "round",
      fill: "none",
    }),
    // Left earpad
    tag("rect", { x: 2, y: y - 18, width: 16, height: 36, rx: 8, fill: color }),
    tag("rect", { x: 14, y: y - 14, width: 6, height: 28, rx: 3, fill: "#1A1A1A" }),
    // Right earpad
    tag("rect", { x: 182, y: y - 18, width: 16, height: 36, rx: 8, fill: color }),
    tag("rect", { x: 180, y: y - 14, width: 6, height: 28, rx: 3, fill: "#1A1A1A" }),
  ].join("");
}

function drawMustache(spec) {
  const color = spec.hairColor;
  const y = 130;
  return [
    tag("path", {
      d: `M 100 ${y} Q 82 ${y - 8} 68 ${y + 6} Q 84 ${y + 12} 100 ${y + 4} Q 116 ${y + 12} 132 ${y + 6} Q 118 ${y - 8} 100 ${y} Z`,
      fill: color,
    }),
  ].join("");
}

function drawStubble(spec) {
  const color = spec.browInk || spec.ink;
  const points = [
    [80, 144], [88, 148], [112, 148], [120, 144],
    [84, 154], [94, 156], [106, 156], [116, 154],
    [90, 162], [100, 164], [110, 162],
  ];
  return points.map(([x, y]) => tag("circle", { cx: x, cy: y, r: 1.2, fill: color, opacity: "0.4" })).join("");
}

/* =========================================================================
   CREATURE AVATARS
   ========================================================================= */

function drawCreature(spec, id) {
  const parts = [];

  // 1. Ears / Horns (behind head)
  parts.push(drawCreatureEars(spec));

  // 2. Base Skin
  parts.push(tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.skin }));

  // 3. Two-tone or Belly patch
  if (spec.twoTone) {
    parts.push(tag("rect", { x: 0, y: spec.splitY * SIZE, width: SIZE, height: SIZE, fill: spec.hair }));
  } else if (spec.bellyPatch) {
    parts.push(tag("ellipse", { cx: 100, cy: 190, rx: 62, ry: 40, fill: spec.belly || spec.accent }));
  }

  // 4. Eyebrows
  parts.push(drawEyebrows(spec));

  // 5. Eyes
  parts.push(drawEyes(spec, spec.eyes, spec.ink, 100, spec.eyeY * SIZE, spec.eyeGap, spec.eyeSize));

  // 6. Cheeks / Flags
  if (spec.cheeks === "flags" && spec.flags) {
    parts.push(drawFlagCheeks(spec, id));
  } else if (spec.cheeks !== "none") {
    parts.push(drawCheeks(spec));
  }

  // 7. Freckles / Markings
  if (spec.freckles) {
    parts.push(drawFreckles(spec.ink, 54, 114));
  }

  // 8. Nose
  if (spec.nose !== "none") {
    parts.push(tag("polygon", { points: "100,110 94,104 106,104", fill: spec.ink }));
  }

  // 9. Mouth (with fangs option)
  parts.push(drawCreatureMouth(spec));

  return parts.join("");
}

function drawCreatureEars(spec) {
  const color = spec.hair;
  const inner = spec.blush || spec.belly || "#FF8B94";
  const type = spec.ears;

  if (type === "cat") {
    return [
      // Left cat ear
      tag("polygon", { points: "18,48 54,4 68,46", fill: color }),
      tag("polygon", { points: "28,44 52,14 62,42", fill: inner }),
      // Right cat ear
      tag("polygon", { points: "182,48 146,4 132,46", fill: color }),
      tag("polygon", { points: "172,44 148,14 138,42", fill: inner }),
    ].join("");
  }

  if (type === "bear") {
    return [
      tag("circle", { cx: 34, cy: 26, r: 24, fill: color }),
      tag("circle", { cx: 34, cy: 26, r: 14, fill: inner }),
      tag("circle", { cx: 166, cy: 26, r: 24, fill: color }),
      tag("circle", { cx: 166, cy: 26, r: 14, fill: inner }),
    ].join("");
  }

  if (type === "bunny") {
    return [
      tag("ellipse", { cx: 52, cy: 12, rx: 14, ry: 36, fill: color }),
      tag("ellipse", { cx: 52, cy: 12, rx: 7, ry: 26, fill: inner }),
      tag("ellipse", { cx: 148, cy: 12, rx: 14, ry: 36, fill: color }),
      tag("ellipse", { cx: 148, cy: 12, rx: 7, ry: 26, fill: inner }),
    ].join("");
  }

  if (type === "horns") {
    return [
      // Left horn
      tag("path", { d: "M 32 44 Q 10 16 38 2 Q 52 14 54 44 Z", fill: color }),
      tag("path", { d: "M 24 24 Q 38 18 48 24", stroke: "rgba(255,255,255,0.4)", "stroke-width": "2" }),
      // Right horn
      tag("path", { d: "M 168 44 Q 190 16 162 2 Q 148 14 146 44 Z", fill: color }),
      tag("path", { d: "M 176 24 Q 162 18 152 24", stroke: "rgba(255,255,255,0.4)", "stroke-width": "2" }),
    ].join("");
  }

  if (type === "antennae") {
    return [
      tag("path", { d: "M 100 24 V 4", stroke: color, "stroke-width": "4.5", "stroke-linecap": "round" }),
      tag("circle", { cx: 100, cy: 4, r: 9, fill: spec.accent || "#FFD700" }),
      tag("circle", { cx: 100, cy: 4, r: 9, fill: "rgba(255,255,255,0.3)" }),
    ].join("");
  }

  // Fins / side tufts
  return [
    tag("polygon", { points: "6,80 24,60 24,100", fill: color }),
    tag("polygon", { points: "194,80 176,60 176,100", fill: color }),
  ].join("");
}

function drawCreatureMouth(spec) {
  const ink = spec.ink;
  const y = 132;

  if (spec.mouth === "fangs") {
    return [
      tag("path", {
        d: `M 76 ${y} Q 100 ${y + 18} 124 ${y}`,
        stroke: ink,
        "stroke-width": "5",
        "stroke-linecap": "round",
        fill: "none",
      }),
      // Cute fangs
      tag("polygon", { points: `84,${y + 4} 90,${y + 4} 87,${y + 14}`, fill: "#FFFFFF" }),
      tag("polygon", { points: `110,${y + 4} 116,${y + 4} 113,${y + 14}`, fill: "#FFFFFF" }),
    ].join("");
  }

  return drawMouth(spec);
}

/* =========================================================================
   VEHICLES
   ========================================================================= */

function drawVehicle(spec, id) {
  const split = spec.splitY * SIZE;
  const padX = spec.glassPad * SIZE + 6;
  const padY = spec.glassPad * SIZE + 2;
  const glassH = split - padY - 8;
  const eyeY = padY + glassH * 0.52;

  const parts = [
    // Top body color
    tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.top }),
    // Bottom body color
    tag("rect", { x: 0, y: split, width: SIZE, height: SIZE, fill: spec.bottom }),
    // Windshield frame / glass
    tag("rect", {
      x: padX,
      y: padY,
      width: SIZE - padX * 2,
      height: glassH,
      rx: 28,
      fill: spec.glass,
      stroke: "rgba(0,0,0,0.08)",
      "stroke-width": "3",
    }),
  ];

  // Windshield wipers
  if (spec.hasWipers) {
    parts.push(
      tag("line", { x1: 70, y1: eyeY + 14, x2: 60, y2: eyeY - 8, stroke: "#2D3436", "stroke-width": "2.5", "stroke-linecap": "round" }),
      tag("line", { x1: 130, y1: eyeY + 14, x2: 120, y2: eyeY - 8, stroke: "#2D3436", "stroke-width": "2.5", "stroke-linecap": "round" }),
    );
  }

  // Vehicle cute eyes inside windshield
  parts.push(drawEyes(spec, spec.eyes, spec.eyeInk, 100, eyeY, 1.08, spec.eyeSize));
  if (spec.flags && !spec.hasLights) {
    parts.push(drawFlagCheeks(spec, id));
  }

  // Headlights
  if (spec.hasLights) {
    parts.push(
      // Left headlight
      tag("circle", { cx: 34, cy: split + 16, r: 10, fill: spec.light, stroke: "#FFFFFF", "stroke-width": "1.5" }),
      tag("circle", { cx: 32, cy: split + 14, r: 3, fill: "#FFFFFF" }),
      // Right headlight
      tag("circle", { cx: 166, cy: split + 16, r: 10, fill: spec.light, stroke: "#FFFFFF", "stroke-width": "1.5" }),
      tag("circle", { cx: 164, cy: split + 14, r: 3, fill: "#FFFFFF" }),
    );
  }

  // Roof rack / luggage
  if (spec.hasRoofRack) {
    parts.push(
      tag("line", { x1: 40, y1: 12, x2: 160, y2: 12, stroke: "#2D3436", "stroke-width": "4", "stroke-linecap": "round" }),
      tag("rect", { x: 68, y: 4, width: 64, height: 10, rx: 3, fill: spec.bottom }),
    );
  }

  // Grill / Bumper details
  if (spec.grill === "smile") {
    parts.push(tag("path", {
      d: "M 80 156 Q 100 174 120 156",
      stroke: spec.bumper,
      "stroke-width": "6",
      "stroke-linecap": "round",
      fill: "none",
    }));
  } else if (spec.grill === "slats") {
    parts.push(
      tag("rect", { x: 74, y: 152, width: 52, height: 6, rx: 3, fill: spec.bumper }),
      tag("rect", { x: 74, y: 164, width: 52, height: 6, rx: 3, fill: spec.bumper }),
    );
  } else if (spec.grill === "door") {
    parts.push(
      tag("rect", { x: 78, y: 152, width: 44, height: 32, rx: 8, fill: spec.bumper }),
      tag("circle", { cx: 100, cy: 168, r: 6, fill: spec.light }),
    );
  }

  // Bottom bumper bar
  if (spec.hasBumper) {
    parts.push(tag("rect", { x: 44, y: 184, width: 112, height: 10, rx: 5, fill: spec.bumper }));
  }

  return parts.join("");
}

function drawTrain(spec, id) {
  const parts = [
    tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: "#DCE7E8" }),
    // Broad, softly rounded cab front and livery panels.
    tag("path", { d: "M 0 56 Q 0 14 38 8 L 162 8 Q 200 14 200 56 L 200 200 L 0 200 Z", fill: spec.top }),
    tag("path", { d: "M 0 139 Q 100 128 200 139 L 200 200 L 0 200 Z", fill: spec.bottom }),
    tag("path", { d: "M 0 139 Q 100 128 200 139 L 200 151 Q 100 140 0 151 Z", fill: spec.stripe }),
    // Wide panoramic windscreen, split like a real cab.
    tag("path", { d: "M 22 34 Q 100 23 178 34 L 169 91 Q 100 98 31 91 Z", fill: spec.glass, stroke: "#17252B", "stroke-width": 5 }),
    tag("line", { x1: 100, y1: 29, x2: 100, y2: 94, stroke: "#17252B", "stroke-width": 4 }),
  ];
  parts.push(drawEyes(spec, spec.eyes, "#F7F2E8", 100, 63, 1.18, spec.eyeSize));
  parts.push(drawFlagCheeks(spec, id));
  // CP and Renfe roundels/wordmarks are operator branding, never country flags.
  if (spec.operator === "CP") {
    parts.push(tag("circle", { cx: 100, cy: 119, r: 15, fill: spec.badge }));
    parts.push(tag("text", { x: 100, y: 123, fill: "#FFFFFF", "font-size": 10, "font-family": "Arial, sans-serif", "font-weight": 700, "text-anchor": "middle" }, "CP"));
  } else if (spec.operator === "renfe") {
    parts.push(tag("text", { x: 100, y: 123, fill: "#FFFFFF", "font-size": 15, "font-family": "Arial, sans-serif", "font-weight": 700, "font-style": "italic", "text-anchor": "middle" }, "renfe"));
  } else {
    parts.push(tag("text", { x: 100, y: 123, fill: "#FFFFFF", "font-size": spec.operator === "OUIGO" ? 10 : 14, "font-family": "Arial, sans-serif", "font-weight": 700, "font-style": "italic", "text-anchor": "middle" }, spec.operator));
  }
  parts.push(
    tag("rect", { x: 20, y: 153, width: 20, height: 10, rx: 5, fill: spec.light, stroke: "#FFFFFF", "stroke-width": 2 }),
    tag("rect", { x: 160, y: 153, width: 20, height: 10, rx: 5, fill: spec.light, stroke: "#FFFFFF", "stroke-width": 2 }),
    tag("rect", { x: 57, y: 177, width: 86, height: 8, rx: 4, fill: "#20272A" }),
    tag("text", { x: 100, y: 174, fill: "#FFFFFF", "font-size": 6, "font-family": "Arial, sans-serif", "font-weight": 700, "letter-spacing": 0.7, "text-anchor": "middle" }, spec.model),
    tag("line", { x1: 18, y1: 194, x2: 182, y2: 194, stroke: "#20272A", "stroke-width": 6, "stroke-linecap": "round" }),
  );
  return parts.join("");
}

function faceSVG(seed, forcedKind = null) {
  return renderFace(generateFace(seed, forcedKind));
}

if (typeof window !== "undefined") {
  window.FaceIcons = { generateFace, renderFace, faceSVG, randomSeed };
}

if (typeof module !== "undefined") {
  module.exports = { generateFace, renderFace, faceSVG, randomSeed };
}
