const listElRef = document.querySelectorAll("#categories .item");

console.log("Number of categories:", listElRef.length);

listElRef.forEach((el) => {
  console.log("Category:", el.firstElementChild.textContent);
  console.log("Elements:", el.lastElementChild.children.length);
});
