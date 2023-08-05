import { initializePokemonStore } from "@kuinox/pokedex.js";

const inputSearch = document.getElementById("search");
inputSearch.addEventListener("input", onsearch);
const pokeListDiv = document.getElementsByClassName("pokeList")[0];
const app = document.getElementsByClassName("App")[0];

function onsearch() {
  const text = inputSearch.value;
  const entries = document.getElementsByClassName("pokeEntry");
  Array.from(entries).forEach((entry) => {
    const name = entry.getAttribute("pokeName");
    const doMatch = name.match(new RegExp(".*" + text + ".*"));
    //delete or ensure the class "hidden" depending on doMatch
    if (doMatch) {
      entry.classList.remove("hidden");
    } else {
      entry.classList.add("hidden");
    }
  });
}
let pokeStore; 
initializePokemonStore("").then((store) => {
  pokeStore = store;
  createEntries();
  onsearch();
});

function createEntries() {
  pokeListDiv.innerHTML = "";
  const pokemons = pokeStore.getPokemonsWithId();
  pokemons.forEach((p) => {
    const entry = document.createElement("li");
    pokeListDiv.appendChild(entry);
    entry.classList.add("pokeEntry");
    entry.setAttribute("pokeName", p.name);
    entry.setAttribute("pokeId", p.id);
    const button = document.createElement("button");
    entry.appendChild(button);
    button.classList.add(p.color);
    button.addEventListener("click", () => pokemonClicked(p.id));
    const div = document.createElement("div");
    button.appendChild(div);
    div.classList.add("buttonContent");
    const genList = document.createElement("div");
    genList.classList.add("genList");
    div.appendChild(genList);
    p.generations.forEach((g) => {
      const gen = document.createElement("span");
      genList.appendChild(gen);
      gen.classList.add("gen" + g);
      gen.textContent = convertToRoman(g);
    });
    const img = document.createElement("img");
    div.appendChild(img);
    img.alt = "Sprite of the pokemon" + p.name;
    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + p.id + ".png";
    img.loading = "lazy";
    img.classList.add("sprite");
    const pokeId = document.createElement("span");
    div.appendChild(pokeId);
    pokeId.classList.add("pokemonId");
    pokeId.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z"/></svg>${p.id}`;
    const name = document.createElement("span");
    div.appendChild(name);
    name.innerText = p.name;
    const typeList = document.createElement("ul");
    div.appendChild(typeList);
    typeList.classList.add("typeList");
    p.types.forEach((t) => {
      const type = document.createElement("li");
      typeList.appendChild(type);
      type.classList.add(t);
      type.textContent = t;
      const typeIcon = document.createElement("img");
      type.appendChild(typeIcon);
      typeIcon.alt = t + " icon";
      typeIcon.src = t + ".png";
      typeIcon.classList.add("typeIcon");
    });
    const br = document.createElement("br");
    div.appendChild(br);
  });
}

function pokemonClicked(id) {
  createModal(id);
}

function createModal(id) {
  const pokeInfo = pokeStore.getStatsWithId(id);
  const modal = document.createElement("div");
  app.appendChild(modal);
  modal.classList.add("modal");
  const modalContent = document.createElement("div");
  modal.appendChild(modalContent);
  modalContent.classList.add("modal-content");
  modalContent.classList.add(pokeInfo.color);
  const span = document.createElement("span");
  modalContent.appendChild(span);
  span.classList.add("close");
  span.innerHTML = "&times;";
  span.addEventListener("click", () => {
    modal.remove();
  });
  const title = document.createElement("h3");
  modalContent.appendChild(title);
  title.textContent = "Pokemon Stats";
  const pokeImg = document.createElement("img");
  modalContent.appendChild(pokeImg);
  pokeImg.alt = "Sprite of the pokemon" + pokeInfo.name;
  pokeImg.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokeInfo.id + ".png";
  const statsUl = document.createElement("ul");
  modalContent.appendChild(statsUl);
  pokeInfo.stats.forEach((s) => {
    const stat = document.createElement("li");
    statsUl.appendChild(stat);
    stat.textContent = s.stat.name + ": " + s.base_stat;
  });
}

function convertToRoman(num) {
  const romanNumerals = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
    "XVI",
    "XVII",
    "XVIII",
    "XIX",
    "XX",
  ];

  return romanNumerals[num - 1];
}

let frameCount = 0; // total number of frames
let totalFrameTime = 0; // total frame time
let averageFrameTime; // average frame time
let droppedFrames = 0; // counter for dropped frames
let oldTimeStamp = performance.now(); // initial timestamp

function refreshLoop(timeStamp) {
  let actualFrameTime = timeStamp - oldTimeStamp; // actual frame time
  oldTimeStamp = timeStamp;

  frameCount++;
  totalFrameTime += actualFrameTime;
  averageFrameTime = totalFrameTime / frameCount; // calculate average frame time

  if (actualFrameTime > averageFrameTime * 1.2) { // if actual frame time is significantly longer than average
    droppedFrames += (actualFrameTime / averageFrameTime) - 1; // calculate number of dropped frames
  }

  window.requestAnimationFrame(refreshLoop);
}

window.requestAnimationFrame(refreshLoop);

setInterval(() => {
  document.getElementById("frameDropped").innerHTML = "Dropped Frames: " + droppedFrames.toFixed(0);
}, 1000);