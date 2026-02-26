document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");
const terminal = document.getElementById("terminal");

/* ---------------- Boot Text ---------------- */

function typeText(text, delay = 30) {
  return new Promise(resolve => {
    let i = 0;
    output.textContent = "";

    function typing() {
      if (i < text.length) {
        output.textContent += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      } else {
        resolve();
      }
    }

    typing();
  });
}

async function bootSequence() {
  await typeText("Initializing archive...\n");
  await new Promise(r => setTimeout(r, 500));

  await typeText("Loading academic modules...\n");
  await new Promise(r => setTimeout(r, 500));

  await typeText("Authenticating user...\n");
  await new Promise(r => setTimeout(r, 700));

  await typeText("Access granted.\n\n");
  await new Promise(r => setTimeout(r, 800));

  showMenu();
}

/* ---------------- Menu ---------------- */

function showMenu() {
  output.innerHTML = `
WELCOME TO MY PORTFOLIO
-----------------------
Type H = History Paper
Type P = Philosophy Paper
Type L = Literature Paper

Tap screen to type commands
<span class="cursor"></span>
`;
}

function loadHistory() {
  output.textContent = `
HISTORY PAPER
-------------
[THE ACID ASPECT: PSYCHEDELIC DRUGS AND COUNTERCULTURE IN THE SIXTIES]

Press ESC to return
`;
}

function loadPhilosophy() {
  output.textContent = `
PHILOSOPHY PAPER
----------------
[Paste philosophy essay here]

Press ESC to return
`;
}

function loadLiterature() {
  output.textContent = `
LITERATURE PAPER
----------------
[Paste literature essay here]

Press ESC to return
`;
}

/* ---------------- Command Handling ---------------- */

function handleCommand(key) {
  if (!key) return;

  key = key.toLowerCase();

  if (key === "h") loadHistory();
  if (key === "p") loadPhilosophy();
  if (key === "l") loadLiterature();
  if (key === "escape") showMenu();
}

/* Desktop keyboard */
document.addEventListener("keydown", (event) => {
  event.preventDefault();
  handleCommand(event.key);
});

/* Mobile keyboard */
input.addEventListener("input", (event) => {
  let value = event.target.value;
  if (!value) return;

  let lastChar = value.slice(-1);
  handleCommand(lastChar);

  input.value = "";
});

/* ---------------- Focus Handling ---------------- */

terminal.addEventListener("click", () => input.focus());
terminal.addEventListener("touchstart", () => input.focus());

/* ---------------- Start ---------------- */

bootSequence();
input.focus();

});





