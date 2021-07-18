const inputEl = document.querySelector("input");
const btnCreateCollection = document.querySelector('[data-action="render"]');
const btnDestroyCollection = document.querySelector('[data-action="destroy"]');
const wrapperEl = document.querySelector("#boxes");
let collection = [];
let boxSize = 30;

const createRandomRgbColor = () =>
  `(${(Math.random() * (255 - 1) + 1).toFixed(0)}, ${(
    Math.random() * (255 - 1) +
    1
  ).toFixed(0)}, ${(Math.random() * (255 - 1) + 1).toFixed(0)})`;

const createBoxes = amount => {
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");

    divEl.style.width = boxSize + `px`;
    divEl.style.height = boxSize + `px`;

    boxSize += 10;
    divEl.style.backgroundColor = `rgb${createRandomRgbColor()}`;
    collection.push(divEl);
  }
  wrapperEl.append(...collection);
};

const destroyBoxes = () => {
  wrapperEl.innerHTML = "";
  collection = [];
  boxSize = 30;
  inputEl.value = "";
};

btnCreateCollection.addEventListener("click", () => createBoxes(inputEl.value));
btnDestroyCollection.addEventListener("click", destroyBoxes);
