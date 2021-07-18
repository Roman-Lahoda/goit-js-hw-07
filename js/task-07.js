const inputEl = document.querySelector("input");
const textEl = document.querySelector("#text");

const changeFontSize = () => {
  textEl.setAttribute("style", `font-size: ${inputEl.value}px`);
};

inputEl.addEventListener("input", changeFontSize);
