const COUNT = 12;
const grid = document.getElementById("grid");
const shuffleBtn = document.getElementById("shuffle");

let seeds = Array.from({ length: COUNT }, () => FaceIcons.randomSeed());

function cardHTML(seed, index) {
  return `
    <article class="card">
      <button class="face" data-index="${index}" title="Click to reroll · seed ${seed}" aria-label="Random face ${index + 1}">
        ${FaceIcons.faceSVG(seed)}
      </button>
      <button class="download" type="button" data-index="${index}">Download PNG</button>
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

grid.addEventListener("click", (event) => {
  const download = event.target.closest(".download");
  if (download) {
    downloadFace(seeds[Number(download.dataset.index)]);
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

function downloadFace(seed) {
  const svg = FaceIcons.faceSVG(seed);
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
