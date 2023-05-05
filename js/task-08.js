const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = formRef.elements;

  if (email.value === "" || password.value === "") {
    alert("Треба заповнити всі поля!");
    return;
  }
  const output = {};
  output[email.name] = email.value;
  output[password.name] = password.value;
  console.log(output);
  formRef.reset();
});
