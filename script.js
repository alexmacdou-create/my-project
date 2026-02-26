document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");

function showMenu() {
  output.innerHTML = `
WELCOME TO MY PORTFOLIO
-----------------------
H = History
P = Philosophy
L = Literature
`;
}

function bootSequence() {
  output.textContent = "Booting portfolio...";
  setTimeout(showMenu, 1500);
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "h") output.textContent = "History paper loading...";
  if (key === "p") output.textContent = "Philosophy paper loading...";
  if (key === "l") output.textContent = "Literature paper loading...";

  if (key === "escape") showMenu();
});

document.getElementById("terminal").addEventListener("click", () => {
  input.focus();
});

bootSequence();

});




