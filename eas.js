//  Creating elements
const container = document.createElement("div");

// Putting elements into DOM
container.classList.add("container");
document.querySelector("body").appendChild(container);
// Creating all the squares and appending them to container element
for (i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  document.querySelector(".container").appendChild(square);
}
// Event of hovering
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("mouseover", changeColor);
});

// color change function
function changeColor(e) {
  e.target.classList.add("hovered");
}
