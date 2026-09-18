const COUNT = 12;
const grid = document.getElementById("grid");
const shuffleBtn = document.getElementById("shuffle");
const filterGroup = document.getElementById("filter-group");

let currentFilter = "all";
let seeds = Array.from({ length: COUNT }, () => FaceIcons.randomSeed());

function getForcedKind() {
  return currentFilter === "all" ? null : currentFilter;
}

function cardHTML(seed, index) {
  const forcedKind = getForcedKind();
  const face = FaceIcons.generateFace(seed, forcedKind);
  return `
    <article class="card">
      <button class="face" data-index="${index}" title="Click to reroll · ${face.kind} · seed ${seed}" aria-label="Random face ${index + 1}">
        ${FaceIcons.renderFace(face)}
      </button>
      <div class="card-actions">
        <button class="download-btn" type="button" data-action="png" data-index="${index}">PNG</button>
        <button class="download-btn" type="button" data-action="svg" data-index="${index}">SVG</button>
      </div>
    </article>
  `;
}

function render() {
  grid.innerHTML = seeds.map((seed, index) => cardHTML(seed, index)).join("");
}

function reroll(index) {
  seeds[index] = FaceIcons.randomSeed();
  const card = grid.children[index];
  if (!card) return;
  card.outerHTML = cardHTML(seeds[index], index);
}

function shuffle() {
  seeds = Array.from({ length: COUNT }, () => FaceIcons.randomSeed());
  render();
}

if (filterGroup) {
  filterGroup.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter-btn");
    if (!btn) return;
    filterGroup.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
}

grid.addEventListener("click", (event) => {
  const download = event.target.closest(".download-btn");
  if (download) {
    const index = Number(download.dataset.index);
    const action = download.dataset.action;
    const seed = seeds[index];
    const forcedKind = getForcedKind();
    if (action === "svg") {
      downloadFaceSVG(seed, forcedKind);
    } else {
      downloadFacePNG(seed, forcedKind);
    }
    return;
  }
  const face = event.target.closest(".face");
  if (!face) return;
  reroll(Number(face.dataset.index));
});

shuffleBtn.addEventListener("click", shuffle);

document.addEventListener("keydown", (event) => {
  if (event.target.closest("input, textarea")) return;
  if (event.key === "r" || event.key === " ") {
    event.preventDefault();
    shuffle();
  }
});

function downloadFaceSVG(seed, forcedKind) {
  const svg = FaceIcons.faceSVG(seed, forcedKind);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `face-${seed}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadFacePNG(seed, forcedKind) {
  const svg = FaceIcons.faceSVG(seed, forcedKind);
  const blob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, 1024, 1024);
    URL.revokeObjectURL(url);
    canvas.toBlob((png) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(png);
      a.download = `face-${seed}.png`;
      a.click();
      URL.revokeObjectURL(a.href);
    });
  };
  img.src = url;
}

render();

