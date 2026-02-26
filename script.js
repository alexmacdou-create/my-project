document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("mobileInput");

function typeText(text, delay = 30) {
  return new Promise((resolve) => {
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

function showMenu() {
  output.innerHTML = `
WELCOME TO MY PORTFOLIO
-----------------------
Press H to access a History paper
Press P to access a Philosophy paper
Press L to access a Literature paper

Press ESC to return here
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
[Paste your philosophy essay here]

Press ESC to return
`;
}

document.getElementById("terminal").addEventListener("touchstart", () => {
  input.focus();
});

function handleCommand(key) {
  if (key === "h") loadHistory();
  if (key === "p") loadPhilosophy();

  if (key === "l") {
    output.textContent = `
LITERATURE PAPER
----------------
[Paste literature essay here]

Press ESC to return
`;
  }

  if (key === "escape") {
    showMenu();
  }
}

document.addEventListener("keydown", function(event) {
  handleCommand(event.key.toLowerCase());
});

input.addEventListener("keyup", function(event) {
  handleCommand(event.key.toLowerCase());
  input.value = "";
});

bootSequence();

function focusInput() {
  input.focus();
}

document.getElementById("terminal").addEventListener("click", focusInput);
input.focus();

});



