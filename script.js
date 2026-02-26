document.addEventListener("DOMContentLoaded", () => {

const output = document.getElementById("output");
const input = document.getElementById("commandInput");

function showMenu() {

output.textContent = `
PORTFOLIO TERMINAL

Commands:

history
philosophy
literature
help
`;

}

function loadHistory() {
output.textContent = "History Paper\n\n[Insert essay]\n\nType help";
}

function loadPhilosophy() {
output.textContent = "Philosophy Paper\n\n[Insert essay]\n\nType help";
}

function loadLiterature() {
output.textContent = "Literature Paper\n\n[Insert essay]\n\nType help";
}

function runCommand(cmd) {

if (!cmd) return;

cmd = cmd.toLowerCase().trim();

if (cmd === "history") loadHistory();
else if (cmd === "philosophy") loadPhilosophy();
else if (cmd === "literature") loadLiterature();
else showMenu();

}

input.addEventListener("keydown", e => {

if (e.key === "Enter") {

e.preventDefault();

runCommand(input.value);

input.value = "";

}

});

showMenu();

input.focus();

});





