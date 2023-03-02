const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btn.addEventListener("click", () => {
  let hexColor = "#";
  const randomNum = Math.floor(Math.random() * hexArray.length);

  for (let i = 0; i < 6; i++) {
    hexColor += hexArray[randomNum];
  }

  color.textContent = hexColor;

  bodyEl.style.backgroundColor = hexColor;
});
