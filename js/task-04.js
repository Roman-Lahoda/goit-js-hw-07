let counterValue = Number(document.querySelector("#value").textContent);
const decrementButtonEl = document.querySelector('[data-action="decrement"]');
const incrementButtonEl = document.querySelector('[data-action = "increment"]');

const decrementValue = () => {
  document.querySelector("#value").textContent =
    document.querySelector("#value").textContent - 1;
};
const incrementValue = () => {
  document.querySelector("#value").textContent =
    Number(document.querySelector("#value").textContent) + 1;
};

decrementButtonEl.addEventListener("click", decrementValue);
incrementButtonEl.addEventListener("click", incrementValue);
