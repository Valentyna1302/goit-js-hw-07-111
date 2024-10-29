const categories = document.querySelectorAll("#categories li.item");

console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  console.log(`Category: ${category.querySelector("h2").textContent}`);
  console.log(`Elements: ${category.querySelectorAll("ul > li").length}`);
});

// const categories = document.querySelectorAll("#categories li.item");

// console.log(`Number of categories: ${categories.length}`);

// categories.forEach(({ firstElementChild, lastElementChild }) => {
//   console.log(`Category: ${firstElementChild.textContent}`);
//   console.log(`Elements: ${lastElementChild.children.length}`);
// });
