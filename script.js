document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");
const terminal = document.getElementById("terminal");

/* ---------------- Typing Animation ---------------- */

function typeText(text, delay = 25) {

  return new Promise(resolve => {

    let i = 0;
    output.textContent = "";

    function type() {

      if (i < text.length) {
        output.textContent += text[i];
        i++;
        setTimeout(type, delay);
      } else {
        resolve();
      }

    }

    type();

  });

}

/* ---------------- Boot Sequence ---------------- */

async function bootSequence() {

  await typeText("Initializing portfolio system...\n");
  await new Promise(r => setTimeout(r, 600));

  await typeText("Loading academic archives...\n");
  await new Promise(r => setTimeout(r, 600));

  await typeText("System ready.\n\n");

  showHelp();
}

/* ---------------- Pages ---------------- */

function showHelp() {

  output.innerHTML = `
PORTFOLIO TERMINAL
------------------

Available Commands:

history
philosophy
literature
help
`;
}

function loadHistory() {

  output.textContent = `
HISTORY PAPER
-------------

[Insert history essay here]

Type help to return
`;
}

function loadPhilosophy() {

  output.textContent = `
PHILOSOPHY PAPER
----------------

[Insert philosophy essay here]

Type help to return
`;
}

function loadLiterature() {

  output.textContent = `
LITERATURE PAPER
----------------

[Insert literature essay here]

Type help to return
`;
}

/* ---------------- Command Engine ---------------- */

function runCommand(cmd) {

  if (!cmd) return;

  cmd = cmd.toLowerCase().trim();

  if (cmd === "history") loadHistory();
  else if (cmd === "philosophy") loadPhilosophy();
  else if (cmd === "literature") loadLiterature();
  else showHelp();

}

/* ---------------- Input Handling ---------------- */

input.addEventListener("keydown", e => {

  if (e.key === "Enter") {

    e.preventDefault();

    runCommand(input.value);

    input.value = "";

  }

});

/* Prevent mobile scrolling when typing */
document.body.addEventListener("touchmove", e => {
  e.preventDefault();
}, { passive:false });

terminal.addEventListener("click", () => input.focus());
terminal.addEventListener("touchstart", () => input.focus());

/* Start */
bootSequence();
input.focus();

});






