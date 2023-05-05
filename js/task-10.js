function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector("#boxes");
const inputRef = document.querySelector("#controls input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");

destroyBtnRef.addEventListener("click", destoryBoxes);

function destoryBoxes() {
  boxesRef.innerHTML = "";
  inputRef.value = "";
}

createBtnRef.addEventListener("click", () => {
  if (
    inputRef.value > parseInt(inputRef.max) ||
    inputRef.value < parseInt(inputRef.min) ||
    inputRef.value === ""
  ) {
    alert(
      `Повинно бути ведено число в межах від ${inputRef.min} до ${inputRef.max}`
    );
    inputRef.value = "";
    return;
  }

  createBoxes(parseInt(inputRef.value));
});

function createBoxes(amount) {
  let size = 30;
  let newBoxes = [];

  for (let i = 1; i <= amount; i += 1) {
    newBoxes.push(`<div style =
      "width: ${size}px; height: ${size}px; background-color:${getRandomHexColor()}"></div>`);
    size += 10;
  }

  boxesRef.insertAdjacentHTML("beforeend", newBoxes.join(""));
  inputRef.value = "";
}
