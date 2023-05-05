const inputRef = document.querySelector("#validation-input");
const countOfSymbols = parseInt(inputRef.dataset.length);

inputRef.addEventListener("blur", () => {
  inputRef.classList.remove("valid");
  inputRef.classList.remove("invalid");

  inputRef.classList.add(
    inputRef.value.length === countOfSymbols ? "valid" : "invalid"
  );
});
