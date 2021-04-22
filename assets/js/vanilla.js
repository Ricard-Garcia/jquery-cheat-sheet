/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { blankMacroOutput } from "./script.js";

console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function htmlLoaded() {
  // Macro
  macroTextVanilla.innerText = `// Loading an html

document.onload(function(){
  console.log("HTML file loaded!");
});`;

  // Output
  outputVanilla.innerHTML = "HTML file loaded!";
}

//1
function clickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Clicked element

element.onclick = function(){
  this.innerText = "Clicked!";
}`;

  // Output
  let newButton = document.createElement("div");
  newButton.setAttribute("class", "example-button");
  newButton.innerText = "Click me";
  newButton.onclick = function () {
    this.innerText = "Clicked!";
  };
  outputVanilla.appendChild(newButton);
}

//2
function dblClickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Double clicked element

element.ondblclick = function(){
  this.innerText = "Clicked!";
}`;

  // Output
  let newButton = document.createElement("div");
  newButton.setAttribute("class", "example-button");
  newButton.innerText = "Double click me";
  newButton.ondblclick = function () {
    this.innerText = "Clicked!";
  };
  outputVanilla.appendChild(newButton);
}

//3
function keyPressed() {
  // Macro
  macroTextVanilla.innerText = `// Return a message on a pressed key

element.onkeypress = function(){
  this.innerText = "Key pressed!";
}`;

  // Output
  let outputText = "Key pressed!";
  document.onkeypress = function () {
    outputVanilla.innerText = outputText + "\n";
    outputText += "Key pressed!";
  };
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const vanillaExamples = [
  // 0
  function () {
    htmlLoaded();
  },
  // 1
  function () {
    clickedItem();
  },
  // 2
  function () {
    dblClickedItem();
  },
  // 3
  function () {
    keyPressed();
  },
];
