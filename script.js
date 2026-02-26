document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");
const terminal = document.getElementById("terminal");

/* ---------------- Typing Animation ---------------- */

function typeText(text, delay = 20) {
  return new Promise(resolve => {

    let i = 0;
    output.textContent = "";

    function type() {
      if (i < text.length) {
        output.textContent += text[i];
        i++;
        setTimeout(type, delay);
      } else resolve();
    }

    type();

  });
}

/* ---------------- Pages ---------------- */

async function bootSequence() {

  await typeText("Initializing portfolio system...\n");
  await new Promise(r => setTimeout(r, 600));

  await typeText("Loading academic archives...\n");
  await new Promise(r => setTimeout(r, 600));

  await typeText("System ready.\n\n");

  showHelp();
}

function showHelp() {

  output.innerHTML = `
PORTFOLIO TERMINAL
------------------
Commands:

HISTORY
PHILOSOPHY
LITERATURE
HELP
`;
}

function loadHistory() {
  output.textContent = `
HISTORY PAPER
-------------

[Your history essay here]

Type HELP to return
`;
}

function loadPhilosophy() {
  output.textContent = `
PHILOSOPHY PAPER
----------------

[Your philosophy essay here]

Type HELP to return
`;
}

function loadLiterature() {
  output.textContent = `
LITERATURE PAPER
----------------

[Your literature essay here]

Type HELP to return
`;
}

/* ---------------- Command Engine ---------------- */

function runCommand(cmd) {

  if (!cmd) return;

  cmd = cmd.toLowerCase().trim();

  if (cmd === "history") loadHistory();
  if (cmd === "philosophy") loadPhilosophy();
  if (cmd === "literature") loadLiterature();
  if (cmd === "help") showHelp();

}

/* Input Handling */

input.addEventListener("keydown", e => {

  if (e.key === "Enter") {
    e.preventDefault();

    runCommand(input.value);

    input.value = "";
  }

});

/* Prevent mobile page scrolling */
document.body.addEventListener("touchmove", e => {
  e.preventDefault();
}, { passive:false });

terminal.addEventListener("click", () => input.focus());
terminal.addEventListener("touchstart", () => input.focus());

bootSequence();
input.focus();

});






