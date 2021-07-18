const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const createItemsElement = array => {
  return array.map(element => {
    const item = document.createElement("li");
    item.textContent = element;
    return item;
  });
};

listEl.append(...createItemsElement(ingredients));