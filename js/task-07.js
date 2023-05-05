const inputRef = document.querySelector("#font-size-control");
const nameRef = document.querySelector("#text");

inputRef.addEventListener("input", () => {
  nameRef.style.fontSize = `${inputRef.value}px`;
});
