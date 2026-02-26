document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");
const terminal = document.getElementById("terminal");

/* ---------------- Boot Sequence ---------------- */

function typeText(text, delay = 20) {
  return new Promise(resolve => {
    let i = 0;
    output.textContent = "";

    function typing() {
      if (i < text.length) {
        output.textContent += text[i];
        i++;
        setTimeout(typing, delay);
      } else resolve();
    }

    typing();
  });
}

async function bootSequence() {
  await typeText("Initializing archive...\n");
  await new Promise(r => setTimeout(r, 400));

  await typeText("Loading academic modules...\n");
  await new Promise(r => setTimeout(r, 400));

  await typeText("Access granted.\n\n");

  showPrompt();
}

/* ---------------- Terminal Navigation ---------------- */

function showPrompt() {
  output.innerHTML = `
WELCOME TO MY PORTFOLIO
-----------------------
Type commands below:

H = History Paper
P = Philosophy Paper
L = Literature Paper

Type command + ENTER
`;
}

/* Paper Loading */

function loadHistory() {
  output.textContent = `
HISTORY PAPER
-------------
[THE ACID ASPECT]

Press ESC or type MENU
`;
}

function loadPhilosophy() {
  output.textContent = `
PHILOSOPHY PAPER
----------------
Paper content here

Press ESC or type MENU
`;
}

function loadLiterature() {
  output.textContent = `
LITERATURE PAPER
----------------
Paper content here

Press ESC or type MENU
`;
}

/* ---------------- Command Parser ---------------- */

function processCommand(cmd) {

  if (!cmd) return;

  cmd = cmd.toLowerCase().trim();

  if (cmd === "h") loadHistory();
  if (cmd === "p") loadPhilosophy();
  if (cmd === "l") loadLiterature();
  if (cmd === "menu") showPrompt();

}

/* ---------------- Input Handling (THIS IS THE KEY FIX) ---------------- */

input.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {

    event.preventDefault();

    processCommand(input.value);

    input.value = "";
  }

  if (event.key === "Escape") {
    showPrompt();
  }

});

/* ---------------- Focus Handling ---------------- */

terminal.addEventListener("click", () => input.focus());
terminal.addEventListener("touchstart", () => input.focus());

/* Start */

bootSequence();
input.focus();

});





