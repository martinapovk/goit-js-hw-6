function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector("body");
const changeColorBtnRef = document.querySelector(".change-color");
const textColorRef = document.querySelector(".color");

changeColorBtnRef.addEventListener("click", () => {
  const color = getRandomHexColor();

  bodyRef.style.backgroundColor = color;
  textColorRef.textContent = color;
});
