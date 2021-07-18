const inputEl = document.querySelector("input");
const outputEl = document.querySelector("span");

const changeOutput = () => {
  outputEl.textContent = inputEl.value ? inputEl.value : "незнакомец";
};

inputEl.addEventListener("input", changeOutput);
