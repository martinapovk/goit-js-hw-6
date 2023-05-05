const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", () => {
  let name = inputRef.value;
  if (name === "") {
    name = "Anonymous";
  }
  outputRef.textContent = name;
});
