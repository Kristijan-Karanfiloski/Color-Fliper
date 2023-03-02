const colors = ["rgba(255, 255, 0, 1)", "#FF0000", "#0080FF", "#000000"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");
const bodyEl = document.querySelector("body");

btn.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * colors.length);

  bodyEl.style.backgroundColor = colors[randomNum];

  color.textContent = colors[randomNum];
});
