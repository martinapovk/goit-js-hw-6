const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

ingredientsListRef.append(
  ...ingredients.map((el) => {
    let newItem = document.createElement("li");
    newItem.textContent = el;
    newItem.classList.add("item");
    return newItem;
  })
);
