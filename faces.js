const SIZE = 200;

const HUMAN_PALETTES = [
  { skin: "#FFF6EA", hair: "#1A1A1A", lip: "#E96C32", blush: "#F3A8BD", tongue: "#DC3B3B", feature: "#1A1A1A" },
  { skin: "#F8E0C8", hair: "#3B2318", lip: "#D94B6A", blush: "#E89AA8", tongue: "#C92A4A", feature: "#2A1A12" },
  { skin: "#F3D5B5", hair: "#4A2C14", lip: "#C45C4A", blush: "#E8A090", tongue: "#C0392B", feature: "#2A1A12" },
  { skin: "#E8C39E", hair: "#2B1A10", lip: "#A94B3A", blush: "#D98978", tongue: "#B03A2E", feature: "#1A1A1A" },
  { skin: "#D4A574", hair: "#1C120C", lip: "#8C3A2A", blush: "#C97B6A", tongue: "#A33A2A", feature: "#1A1A1A" },
  { skin: "#C68642", hair: "#111111", lip: "#6D2E1C", blush: "#B56A58", tongue: "#8E2A1E", feature: "#1A1A1A" },
  { skin: "#A47148", hair: "#2A1810", lip: "#5C2A1A", blush: "#A45C4C", tongue: "#7A2418", feature: "#140E0A" },
  { skin: "#8D5524", hair: "#0E0A08", lip: "#4A1E14", blush: "#8F4A3C", tongue: "#6B1E16", feature: "#0E0A08" },
  { skin: "#6B3E26", hair: "#1A0E0A", lip: "#3A1610", blush: "#7A3A32", tongue: "#5A1814", feature: "#100A08" },
  { skin: "#4A2C2A", hair: "#0A0604", lip: "#2A100C", blush: "#6A322C", tongue: "#4A1410", feature: "#0A0604" },
  { skin: "#3B2219", hair: "#111111", lip: "#24100C", blush: "#5C2A24", tongue: "#3E1210", feature: "#080404" },
  { skin: "#E6C8A8", hair: "#6B3E2E", lip: "#B85C4A", blush: "#E09A88", tongue: "#C0392B", feature: "#2A1A12" },
  { skin: "#C9A07A", hair: "#3D2318", lip: "#8A4030", blush: "#C47A68", tongue: "#A33224", feature: "#241610" },
  { skin: "#B08968", hair: "#5C3317", lip: "#703024", blush: "#B06858", tongue: "#8A2A1E", feature: "#1A100C" },
  { skin: "#9C7A58", hair: "#2C1810", lip: "#5A281C", blush: "#A06050", tongue: "#7A2218", feature: "#140E0A" },
  { skin: "#7A4E32", hair: "#120C08", lip: "#401810", blush: "#8A4034", tongue: "#5C1812", feature: "#0C0806" },
  { skin: "#F7D7C4", hair: "#E8C14D", lip: "#E07A5A", blush: "#F0A898", tongue: "#E85A4A", feature: "#3B2318" },
  { skin: "#EAD2B8", hair: "#C97B3A", lip: "#D45C48", blush: "#E89888", tongue: "#C92A4A", feature: "#3B2318" },
  { skin: "#D8B496", hair: "#8D5524", lip: "#A04838", blush: "#D08070", tongue: "#B03A2E", feature: "#2A1810" },
  { skin: "#FFD6E0", hair: "#7EC8E3", lip: "#FF6B9A", blush: "#FF9BB5", tongue: "#FF4D6D", feature: "#2B2B4A" },
  { skin: "#E7F6E8", hair: "#1B5E20", lip: "#2E7D32", blush: "#A5D6A7", tongue: "#E53935", feature: "#1B5E20" },
  { skin: "#EDE7F6", hair: "#4527A0", lip: "#7E57C2", blush: "#B39DDB", tongue: "#AB47BC", feature: "#311B92" },
  { skin: "#E0F7FA", hair: "#006064", lip: "#00838F", blush: "#80DEEA", tongue: "#26C6DA", feature: "#004D40" },
  { skin: "#FFF3E0", hair: "#E65100", lip: "#FF7043", blush: "#FFAB91", tongue: "#FF5252", feature: "#4E342E" },
  { skin: "#FBE9E7", hair: "#5D4037", lip: "#6D4C41", blush: "#FFCCBC", tongue: "#E64A19", feature: "#3E2723" },
  { skin: "#F5F0E8", hair: "#111111", lip: "#111111", blush: "#F5B7B1", tongue: "#C0392B", feature: "#111111" },
  { skin: "#F2C6A0", hair: "#1A1A1A", lip: "#C45C6A", blush: "#E89AA8", tongue: "#D94B6A", feature: "#1A1A1A" },
  { skin: "#C4553A", hair: "#2A120C", lip: "#6A2018", blush: "#E07A68", tongue: "#B83224", feature: "#1A0C08" },
];

const VEHICLE_PALETTES = [
  { top: "#F5C518", bottom: "#2F8A46", glass: "#FFF6DC", feature: "#1A1A1A", bumperColor: "#14331C" },
  { top: "#FF6B6B", bottom: "#4ECDC4", glass: "#FFF8EE", feature: "#1A1A1A", bumperColor: "#1B4B4A" },
  { top: "#74B9FF", bottom: "#0984E3", glass: "#F7FCFF", feature: "#1A1A1A", bumperColor: "#0B3A66" },
  { top: "#A29BFE", bottom: "#6C5CE7", glass: "#F8F5FF", feature: "#1A1A1A", bumperColor: "#2D1B69" },
  { top: "#FD79A8", bottom: "#E84393", glass: "#FFF5F9", feature: "#1A1A1A", bumperColor: "#6D214F" },
  { top: "#55EFC4", bottom: "#00B894", glass: "#F4FFFB", feature: "#1A1A1A", bumperColor: "#0B5A48" },
  { top: "#FAB1A0", bottom: "#E17055", glass: "#FFF8F3", feature: "#1A1A1A", bumperColor: "#6D3A2E" },
  { top: "#DFE6E9", bottom: "#636E72", glass: "#FFFFFF", feature: "#2D3436", bumperColor: "#2D3436" },
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
const INK_LIGHT = "#F7F2EA";

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

function pickContrasting(color, bg, min = 3) {
  if (color && contrastRatio(color, bg) >= min) return color;
  return inkOn(bg);
}

function bgAt(spec, y) {
  if (spec.kind === "vehicle") return spec.glass;
  if (spec.kind === "creature" && spec.twoTone && y >= spec.splitY * SIZE) return spec.secondary;
  return spec.skin;
}

function applyContrast(spec) {
  const eyeY = spec.kind === "vehicle" ? 80 : spec.eyeY * SIZE;
  const mouthY = 142;
  const eyeBg = spec.kind === "vehicle" ? spec.glass : bgAt(spec, eyeY);
  const mouthBg = spec.kind === "vehicle" ? spec.bottom : bgAt(spec, mouthY);
  spec.eyeInk = inkOn(eyeBg);
  spec.mouthInk = inkOn(mouthBg);
  spec.feature = spec.eyeInk;
  spec.mouthBg = mouthBg;
  if (spec.lip) spec.lip = pickContrasting(spec.lip, mouthBg, 2.8);
  return spec;
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

function generateFace(seed = randomSeed()) {
  const rng = mulberry32(seed);
  const kind = weighted(rng, [
    ["classic-bus", 0.16],
    ["human", 0.6],
    ["vehicle", 0.14],
    ["creature", 0.1],
  ]);
  if (kind === "classic-bus") return applyContrast(genClassicBus(rng, seed));
  if (kind === "vehicle") return applyContrast(genVehicle(rng, seed));
  if (kind === "creature") return applyContrast(withFaceDetails(rng, genCreature(rng, seed)));
  return applyContrast(withFaceDetails(rng, genHuman(rng, seed)));
}

function withFaceDetails(rng, spec) {
  if (chance(rng, 0.42)) {
    const left = pick(rng, FLAG_IDS);
    const right = chance(rng, 0.52) ? left : pick(rng, FLAG_IDS.filter((id) => id !== left));
    spec.flags = { left, right };
    spec.cheeks = false;
  }
  spec.nose = chance(rng, 0.62)
    ? pick(rng, ["dot", "oval", "button"])
    : null;
  return spec;
}

function genClassicBus(rng, seed) {
  return {
    kind: "vehicle",
    seed,
    ...VEHICLE_PALETTES[0],
    splitY: range(rng, 0.56, 0.6),
    glassPad: range(rng, 0.11, 0.14),
    eyeSize: range(rng, 1.05, 1.2),
    hasBumper: true,
    lights: false,
    grill: "door",
  };
}

function baseHuman(palette) {
  return {
    skin: palette.skin,
    hairColor: palette.hair,
    lip: palette.lip,
    blush: palette.blush,
    tongue: palette.tongue,
    feature: palette.feature,
    hairWave: 0.6,
    hairH: 0.24,
    mouthScale: 1,
    cheekSize: 1,
  };
}

function genHuman(rng, seed) {
  const palette = pick(rng, HUMAN_PALETTES);
  const mouth = weighted(rng, [
    ["smile", 0.34],
    ["open", 0.22],
    ["cat", 0.18],
    ["o", 0.16],
    ["flat", 0.1],
  ]);
  return {
    kind: "human",
    seed,
    ...baseHuman(palette),
    hair: pick(rng, ["cap", "bangs", "bowl", "none"]),
    hairWave: range(rng, 0.25, 1),
    hairH: range(rng, 0.2, 0.28),
    eyes: pick(rng, ["dots", "ovals", "glossy", "pills"]),
    eyeSize: range(rng, 0.75, 1.15),
    eyeGap: range(rng, 0.88, 1.15),
    eyeY: range(rng, 0.34, 0.42),
    mouth,
    cheeks: chance(rng, 0.5),
    cheekSize: range(rng, 0.9, 1.2),
    freckles: chance(rng, 0.18),
  };
}

function genVehicle(rng, seed) {
  const palette = pick(rng, VEHICLE_PALETTES);
  return {
    kind: "vehicle",
    seed,
    ...palette,
    splitY: range(rng, 0.54, 0.62),
    glassPad: range(rng, 0.1, 0.15),
    eyeSize: range(rng, 0.95, 1.2),
    hasBumper: chance(rng, 0.9),
    lights: chance(rng, 0.28),
    grill: pick(rng, ["door", "door", "slats", "none"]),
  };
}

function genCreature(rng, seed) {
  const palette = pick(rng, HUMAN_PALETTES);
  return {
    kind: "creature",
    seed,
    ...baseHuman(palette),
    secondary: palette.hair,
    horns: chance(rng, 0.75),
    eyes: pick(rng, ["glossy", "ovals", "dots"]),
    mouth: pick(rng, ["cat", "o", "smile"]),
    splitY: range(rng, 0.55, 0.72),
    twoTone: chance(rng, 0.5),
    cheeks: chance(rng, 0.35),
    eyeY: 0.42,
    eyeGap: 1,
    eyeSize: 1.05,
  };
}

function renderFace(spec) {
  const id = `f${spec.seed.toString(36)}`;
  const clip = `${id}-clip`;
  const gloss = `${id}-gloss`;
  const glossH = `${id}-glossH`;
  const path = superellipsePath(SIZE);

  const body =
    spec.kind === "vehicle"
      ? drawVehicle(spec)
      : spec.kind === "creature"
        ? drawCreature(spec, id)
        : drawHuman(spec, id);

  return tag("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: `0 0 ${SIZE} ${SIZE}`,
    width: SIZE,
    height: SIZE,
    fill: "none",
  }, [
    tag("defs", {}, [
      tag("clipPath", { id: clip }, tag("path", { d: path })),
      tag("linearGradient", { id: gloss, x1: "0", y1: "0", x2: "0", y2: "1" }, [
        tag("stop", { offset: "0%", "stop-color": "#fff", "stop-opacity": "0.26" }),
        tag("stop", { offset: "34%", "stop-color": "#fff", "stop-opacity": "0.03" }),
        tag("stop", { offset: "72%", "stop-color": "#000", "stop-opacity": "0" }),
        tag("stop", { offset: "100%", "stop-color": "#000", "stop-opacity": "0.15" }),
      ].join("")),
      tag("linearGradient", { id: glossH, x1: "0", y1: "0", x2: "1", y2: "0" }, [
        tag("stop", { offset: "0%", "stop-color": "#fff", "stop-opacity": "0.08" }),
        tag("stop", { offset: "55%", "stop-color": "#fff", "stop-opacity": "0" }),
        tag("stop", { offset: "100%", "stop-color": "#000", "stop-opacity": "0.07" }),
      ].join("")),
    ].join("")),
    tag("g", { "clip-path": `url(#${clip})` }, [
      body,
      tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: `url(#${gloss})` }),
      tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: `url(#${glossH})` }),
    ].join("")),
  ].join(""));
}

function drawHuman(spec, id) {
  const parts = [tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.skin })];
  parts.push(drawHair(spec, spec.hairColor, spec.hair));
  if (spec.flags) parts.push(drawFlagCheeks(spec, id));
  else if (spec.cheeks) parts.push(drawCheeks(spec));
  if (spec.freckles) parts.push(drawFreckles(spec.eyeInk || spec.feature, 58, 108));
  parts.push(drawEyes(spec, spec.eyes, spec.eyeInk, SIZE / 2, spec.eyeY * SIZE, spec.eyeGap, spec.eyeSize));
  parts.push(drawNose(spec));
  parts.push(drawMouth(spec));
  return parts.join("");
}

function drawHair(spec, color, style) {
  if (style === "none") return "";
  if (style === "cap") {
    const bump = 4 * spec.hairWave;
    return [
      tag("ellipse", { cx: 100, cy: 4, rx: 72, ry: 36 + bump, fill: color }),
      tag("ellipse", { cx: 68, cy: 14, rx: 40, ry: 28, fill: color }),
      tag("ellipse", { cx: 132, cy: 12, rx: 38, ry: 26, fill: color }),
    ].join("");
  }
  if (style === "bangs") {
    const h = spec.hairH * SIZE;
    return tag("path", {
      d: `M 0 0 H ${SIZE} V ${h * 0.45} C 150 ${h * 1.1} 120 ${h * 0.4} 100 ${h * 0.85} C 70 ${h * 1.2} 36 ${h * 0.35} 0 ${h * 0.9} Z`,
      fill: color,
    });
  }
  if (style === "bowl") {
    return tag("ellipse", { cx: 100, cy: 8, rx: 98, ry: 46, fill: color });
  }
  return "";
}

function drawCheeks(spec) {
  const r = 17 * spec.cheekSize;
  const y = 118;
  return [
    tag("circle", { cx: 34, cy: y, r, fill: spec.blush }),
    tag("circle", { cx: 166, cy: y, r, fill: spec.blush }),
  ].join("");
}

function cheekCenters(spec) {
  const y = spec.kind === "creature" ? 118 : 114;
  return [{ cx: 36, cy: y }, { cx: 164, cy: y }];
}

function drawFlagCheeks(spec, id) {
  const [left, right] = cheekCenters(spec);
  const w = 38;
  const h = 26;
  return [
    drawFlagBadge(`${id}-L`, left.cx, left.cy, w, h, spec.flags.left),
    drawFlagBadge(`${id}-R`, right.cx, right.cy, w, h, spec.flags.right),
  ].join("");
}

function drawFlagBadge(id, cx, cy, w, h, flag) {
  const x = cx - w / 2;
  const y = cy - h / 2;
  const clip = `${id}-c`;
  return [
    tag("clipPath", { id: clip }, tag("rect", { x, y, width: w, height: h, rx: 6 })),
    tag("g", { "clip-path": `url(#${clip})` }, [
      tag("g", { transform: `translate(${x} ${y})` }, drawFlag(flag, w, h)),
    ].join("")),
    tag("rect", {
      x,
      y,
      width: w,
      height: h,
      rx: 6,
      fill: "none",
      stroke: "#fff",
      "stroke-opacity": "0.45",
      "stroke-width": "1.4",
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
  const spots = [[x, y], [x + 12, y + 8], [x - 6, y + 10]];
  return spots.map(([sx, sy]) => tag("circle", { cx: sx, cy: sy, r: 2.2, fill: color, opacity: "0.5" })).join("");
}

function drawEyes(spec, type, color, cx, cy, gapMul, sizeMul) {
  const gap = 22 * gapMul;
  const ink = color || spec.eyeInk || spec.feature;
  return drawEye(type, ink, cx - gap, cy, sizeMul, -1) + drawEye(type, ink, cx + gap, cy, sizeMul, 1);
}

function drawEye(type, color, x, y, sizeMul, dir) {
  const s = sizeMul;
  const shine = luminance(color) > 0.45 ? "rgba(0,0,0,0.28)" : "#fff";
  if (type === "dots") {
    return tag("ellipse", { cx: x, cy: y, rx: 6.2 * s, ry: 8.2 * s, fill: color });
  }
  if (type === "ovals") {
    return tag("ellipse", { cx: x, cy: y, rx: 7.5 * s, ry: 15 * s, fill: color });
  }
  if (type === "pills") {
    return tag("rect", { x: x - 7 * s, y: y - 16 * s, width: 14 * s, height: 32 * s, rx: 7 * s, fill: color });
  }
  if (type === "glossy") {
    const rx = 13.5 * s;
    const ry = 13.5 * s;
    return [
      tag("ellipse", { cx: x, cy: y, rx, ry, fill: color }),
      tag("circle", { cx: x + 4.5 * dir, cy: y - 4.5, r: 4.4 * s, fill: shine }),
    ].join("");
  }
  return tag("ellipse", { cx: x, cy: y, rx: 8 * s, ry: 10 * s, fill: color });
}

function drawNose(spec) {
  if (!spec.nose) return "";
  const y = spec.eyeY * SIZE + 24;
  const ink = spec.eyeInk || spec.feature;
  if (spec.nose === "dot") {
    return tag("circle", { cx: 100, cy: y, r: 5.2, fill: ink });
  }
  if (spec.nose === "oval") {
    return tag("ellipse", { cx: 100, cy: y + 2, rx: 6, ry: 9, fill: ink });
  }
  return tag("ellipse", { cx: 100, cy: y + 1, rx: 9.5, ry: 6.5, fill: ink, opacity: "0.9" });
}

function drawMouth(spec) {
  const ink = spec.mouthInk || spec.feature;
  if (spec.mouth === "open") return drawOpen(spec);
  if (spec.mouth === "smile") {
    return tag("path", {
      d: "M 70 138 Q 100 160 130 138",
      stroke: ink,
      "stroke-width": 7,
      "stroke-linecap": "round",
      fill: "none",
    });
  }
  if (spec.mouth === "cat") {
    return tag("path", {
      d: "M 78 138 Q 90 152 100 140 Q 110 152 122 138",
      stroke: ink,
      "stroke-width": 6,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      fill: "none",
    });
  }
  if (spec.mouth === "flat") {
    return tag("rect", { x: 78, y: 140, width: 44, height: 6, rx: 3, fill: ink });
  }
  return tag("ellipse", { cx: 100, cy: 142, rx: 11, ry: 13, fill: ink });
}

function drawOpen(spec) {
  return [
    tag("circle", { cx: 100, cy: 146, r: 26, fill: spec.lip }),
    tag("circle", { cx: 100, cy: 146, r: 14, fill: spec.mouthBg || spec.skin }),
  ].join("");
}

function drawVehicle(spec) {
  const split = spec.splitY * SIZE;
  const padX = spec.glassPad * SIZE + 4;
  const padY = spec.glassPad * SIZE;
  const glassH = split - padY - 12;
  const eyeY = padY + glassH * 0.52;
  const parts = [
    tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.top }),
    tag("rect", { x: 0, y: split, width: SIZE, height: SIZE, fill: spec.bottom }),
    tag("rect", {
      x: padX,
      y: padY,
      width: SIZE - padX * 2,
      height: glassH,
      rx: 34,
      fill: spec.glass,
    }),
    drawEyes(spec, "glossy", spec.eyeInk || spec.feature, 100, eyeY, 1.08, spec.eyeSize),
  ];
  if (spec.lights) {
    parts.push(
      tag("circle", { cx: 34, cy: split + 16, r: 7, fill: "#F8E9A1" }),
      tag("circle", { cx: 166, cy: split + 16, r: 7, fill: "#F8E9A1" }),
    );
  }
  if (spec.grill === "door" || spec.hasBumper) {
    parts.push(tag("rect", { x: 78, y: 158, width: 44, height: 34, rx: 10, fill: spec.bumperColor }));
  }
  if (spec.grill === "slats") {
    parts.push(
      tag("rect", { x: 70, y: 152, width: 60, height: 7, rx: 3.5, fill: spec.bumperColor }),
      tag("rect", { x: 70, y: 166, width: 60, height: 7, rx: 3.5, fill: spec.bumperColor }),
    );
  }
  return parts.join("");
}

function drawCreature(spec, id) {
  const parts = [tag("rect", { x: 0, y: 0, width: SIZE, height: SIZE, fill: spec.skin })];
  if (spec.twoTone) {
    parts.push(tag("rect", { x: 0, y: spec.splitY * SIZE, width: SIZE, height: SIZE, fill: spec.secondary }));
  }
  if (spec.horns) {
    parts.push(
      tag("ellipse", { cx: 40, cy: 10, rx: 24, ry: 26, fill: spec.hairColor }),
      tag("ellipse", { cx: 160, cy: 10, rx: 24, ry: 26, fill: spec.hairColor }),
    );
  }
  if (spec.flags) parts.push(drawFlagCheeks(spec, id));
  else if (spec.cheeks) {
    parts.push(
      tag("circle", { cx: 42, cy: 118, r: 16, fill: spec.blush }),
      tag("circle", { cx: 158, cy: 118, r: 16, fill: spec.blush }),
    );
  }
  parts.push(drawEyes(spec, spec.eyes, spec.eyeInk || spec.feature, 100, spec.eyeY * SIZE, spec.eyeGap, spec.eyeSize));
  parts.push(drawNose(spec));
  parts.push(drawMouth(spec));
  return parts.join("");
}

function faceSVG(seed) {
  return renderFace(generateFace(seed));
}

if (typeof window !== "undefined") {
  window.FaceIcons = { generateFace, renderFace, faceSVG, randomSeed };
}

if (typeof module !== "undefined") {
  module.exports = { generateFace, renderFace, faceSVG, randomSeed };
}
