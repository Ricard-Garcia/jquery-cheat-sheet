/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { removeEventVanilla } from "./script.js";

// console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

let examples = document.getElementsByClassName("example");
let runButton = document.getElementById("run-button");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0 ----------------------------------------------------------
function htmlLoaded() {
  // Macro
  macroTextVanilla.innerText = `// Loading an html file

document.onload = function(){
  console.log("HTML file loaded!");
};`;

  // Output
  runButton.onclick = function () {
    outputVanilla.innerHTML = "> HTML file loaded!";
    console.log("HTML file loaded!");
  };
}

//1 ----------------------------------------------------------
function clickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Clicked element

element.onclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Click me";

    function clickItemInside(event) {
      event.target.innerText = "Clicked!";
    }

    exampleButton.addEventListener("click", clickItemInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", clickItemInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//2 ----------------------------------------------------------
function dblClickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Double clicked element

element.ondblclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Double click me";

    function dblClickItemInside(event) {
      event.target.innerText = "Clicked!";
    }

    exampleButton.addEventListener("dblclick", dblClickItemInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "dblclick", dblClickItemInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//3 ----------------------------------------------------------
function keyPressed() {
  // Macro
  macroTextVanilla.innerText = `// Return a message on a pressed key

element.onkeypress = function(){
  this.innerText = "Key pressed!";
};`;

  // Output
  runButton.onclick = function () {
    outputVanilla.innerText = "";
    let outputText = "> Key pressed! \n";

    function keyPressedInside() {
      outputVanilla.innerText = outputText;
      outputText += "> Key pressed! \n";
    }

    document.addEventListener("keypress", keyPressedInside);
    // Removing event listener if example is clicked
    removeEventVanilla(document, "keypress", keyPressedInside, examples);
  };
}

//4 ----------------------------------------------------------
function mouseMoved() {
  // Macro
  macroTextVanilla.innerText = `// Show mouse movement

document.onmousemove = function(e){
  console.log("> Mouse at:("
  + e.pageX + ", "
  + e.pageY + ")");
};`;

  // Output
  runButton.onclick = function () {
    function mouseMovedInside(e) {
      outputVanilla.innerText =
        "> Mouse at: (" + e.pageX + ", " + e.pageY + ")";
    }

    document.addEventListener("mousemove", mouseMovedInside);
    // Removing event listener if example is clicked
    removeEventVanilla(document, "mousemove", mouseMovedInside, examples);
  };
}

//5 ----------------------------------------------------------
function changedInput() {
  // Macro
  macroTextVanilla.innerText = `// Changed input behaviour

element.onchange = function(){
  this.style.color = "yellow";
  this.style.color = "2px solid yellow";
  this.style.color = "black";
};`;

  // Output
  runButton.onclick = function () {
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("type", "text");

    function changedInputInside(event) {
      event.target.style.color = "var(--accent-color)";
      event.target.style.outline = "2px solid var(--accent-color)";
      event.target.style.backgroundColor = "var(--dark-color";
    }

    exampleInput.addEventListener("change", changedInputInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleInput, "change", changedInputInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleInput);
  };
}

//6 ----------------------------------------------------------
function loadedImage() {
  // Macro
  macroTextVanilla.innerText = `// Loaded image

image.onload = function(){
  console.log("Image loaded!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/montypython.jpg");

    function loadedImageInside() {
      console.log("Image loaded!");
    }

    exampleImage.addEventListener("load", loadedImageInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleImage, "load", loadedImageInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleImage);
    outputVanilla.innerHTML += "\n\n> Image loaded!";
  };
}

//7 ----------------------------------------------------------
function errorImage() {
  // Macro
  macroTextVanilla.innerText = `// Not loaded image

image.error = function(){
  console.log("Image not loaded!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleImage = document.createElement("img");
    exampleImage.classList.add("example-image");
    exampleImage.setAttribute("alt", "Monty Python");
    exampleImage.setAttribute("src", "./assets/img/montypythonerror.jpg");

    function errorImageInside() {
      console.log("Image not loaded!");
    }

    exampleImage.addEventListener("error", errorImageInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleImage, "error", errorImageInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleImage);
    outputVanilla.innerHTML += "\n\n> Image not loaded!";
  };
}

//8 ----------------------------------------------------------
function submittedForm() {
  // Macro
  macroTextVanilla.innerText = `// Submitted form

form.onsubmit = function(){
  console.log("Submitted form!");
};`;

  // Output
  runButton.onclick = function () {
    let exampleForm = document.createElement("form");
    exampleForm.classList.add("example-form");
    let exampleInput = document.createElement("input");
    exampleInput.classList.add("example-input");
    exampleInput.setAttribute("placeholder", "Text goes here");
    exampleInput.required = true;
    let exampleSubmit = document.createElement("input");
    exampleSubmit.classList.add("example-submit");
    exampleSubmit.setAttribute("type", "submit");
    exampleSubmit.innerText = "Submit";

    exampleForm.appendChild(exampleInput);
    exampleForm.appendChild(exampleSubmit);

    function submittedFormInside() {
      console.log("Submitted form!");
    }

    exampleForm.addEventListener("submit", submittedFormInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleForm, "submit", submittedFormInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleForm);
  };
}

//9 ----------------------------------------------------------
function selectedOption() {
  // Macro
  macroTextVanilla.innerText = `// Selected option

select.onchange = function(){
  console.log("Movie: " + select.value");
};`;

  // Output
  runButton.onclick = function () {
    let exampleSelect = document.createElement("select");
    exampleSelect.classList.add("example-select");

    let option1 = document.createElement("option");
    option1.innerText = "The Life of Brian";
    option1.setAttribute("value", option1.innerText);

    let option2 = document.createElement("option");
    option2.innerText = "Spamalot";
    option2.setAttribute("value", option2.innerText);

    let option3 = document.createElement("option");
    option3.innerText = "The meaning of Life";
    option3.setAttribute("value", option3.innerText);

    exampleSelect.appendChild(option1);
    exampleSelect.appendChild(option2);
    exampleSelect.appendChild(option3);

    let selected = document.createElement("p");

    function selectedOptionInside(event) {
      console.log("Movie: " + event.target.value);
      selected.innerText = "\n> Movie: " + event.target.value;
    }

    exampleSelect.addEventListener("change", selectedOptionInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleSelect, "change", selectedOptionInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleSelect);
    outputVanilla.appendChild(selected);
  };
}

//10 ----------------------------------------------------------
function mouseOver() {
  // Macro
  macroTextVanilla.innerText = `// Mouse over element

element.onmouseover = function(){
  this.text("Mouse over");
};

// Mouse out element

element.onmouseout = function(){
  this.text("Mouse out");
}`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Mouse out";
    exampleButton.style.cursor = "auto";

    function mouseOverInside() {
      this.innerText = "Mouse over";
    }

    function mouseOverInsideOut() {
      this.innerText = "Mouse out";
    }

    exampleButton.addEventListener("mouseover", mouseOverInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "mouseover", mouseOverInside, examples);

    exampleButton.addEventListener("mouseout", mouseOverInsideOut);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "mouseout", mouseOverInsideOut, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(exampleButton);
  };
}

//11 ----------------------------------------------------------
function checkBoxOnOff() {
  // Macro
  macroTextVanilla.innerText = `// Checked unchecked checkbox

element.onclick = function(event){
  if (event.target.checked == true){
    console.log("Welcome to the Ministry of Silly Walks!")
  } else {
    console.log("How you dare?")
  }
}`;

  // Output
  runButton.onclick = function () {
    // Checkbox wrapper
    let checkboxWrapper = document.createElement("label");
    checkboxWrapper.classList.add("checkbox");

    // Hidden input + styled span
    let inputWrapper = document.createElement("span");
    inputWrapper.classList.add("checkbox-input");

    let exampleInput = document.createElement("input");
    exampleInput.setAttribute("type", "checkbox");
    exampleInput.setAttribute("id", "exampleCheck");

    let exampleCheck = document.createElement("span");
    exampleCheck.classList.add("checkbox-control");
    exampleCheck.classList.add("example-checkbox");

    inputWrapper.appendChild(exampleInput);
    inputWrapper.appendChild(exampleCheck);

    let exampleLabel = document.createElement("label");
    exampleLabel.innerText = "I am a Monty Python fan";
    exampleLabel.setAttribute("for", "exampleCheck");
    exampleLabel.classList.add("example-label");

    checkboxWrapper.appendChild(inputWrapper);
    checkboxWrapper.appendChild(exampleLabel);

    let exampleParagraph = document.createElement("p");

    function checkBoxOnOffInside(event) {
      if (event.target.checked == true) {
        exampleParagraph.innerText =
          "\n> Welcome to the Ministry of Silly Walks!";
        console.log("I'm a fan");
      } else {
        exampleParagraph.innerText = "\n> How you dare?";
        console.log("I'm not a fan");
      }
    }

    inputWrapper.addEventListener("click", checkBoxOnOffInside);
    // Removing event listener if example is clicked
    removeEventVanilla(
      inputWrapper,
      "mouseover",
      checkBoxOnOffInside,
      examples
    );

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }
    outputVanilla.appendChild(checkboxWrapper);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//12 ----------------------------------------------------------
function ulSelection() {
  // Macro
  macroTextVanilla.innerText = `// Return li element

let liElements = document.getElementsByTagName("li");

for (let l of liElements{
  l.onclick = function(){
    console.log(this.outerHTML);
  }
});`;

  // Output
  runButton.onclick = function () {
    let exampleUL = document.createElement("ul");
    exampleUL.classList.add("example-ul");

    let ulItem1 = document.createElement("li");
    ulItem1.innerText = "Graham Chapman";
    let ulItem2 = document.createElement("li");
    ulItem2.innerText = "Terry Jones";
    let ulItem3 = document.createElement("li");
    ulItem3.innerText = "Terry Gilliam";
    let ulItem4 = document.createElement("li");
    ulItem4.innerText = "Eric Idle";
    let ulItem5 = document.createElement("li");
    ulItem5.innerText = "John Clesse";
    let ulItem6 = document.createElement("li");
    ulItem6.innerText = "Michael Pallin";

    exampleUL.appendChild(ulItem1);
    exampleUL.appendChild(ulItem2);
    exampleUL.appendChild(ulItem3);
    exampleUL.appendChild(ulItem4);
    exampleUL.appendChild(ulItem5);
    exampleUL.appendChild(ulItem6);

    let exampleParagraph = document.createElement("p");

    function ulSelectionInside() {
      exampleParagraph.innerText = "\n> " + this.outerHTML;
      console.log(this);
    }

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleUL);
    outputVanilla.appendChild(exampleParagraph);

    let liElements = $("li");
    for (let l of liElements) {
      l.addEventListener("click", ulSelectionInside);
      // Removing event listener if example is clicked
      removeEventVanilla(l, "click", ulSelectionInside, examples);
    }
  };
}

// Functions
//13 ----------------------------------------------------------
function createHTML() {
  // Macro
  macroTextVanilla.innerText = `// Create an html element

let container = document.createElement("div");

element.onclick = function(){
  let newElement = document.createElement("p");
  newElement.innerText = "Element created"
  container.appendChild(newElement);
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Create";
    exampleButton.style.marginBottom = "var(--margin)";

    function createHTMLInside() {
      let exampleParagraph = document.createElement("p");
      exampleParagraph.classList.add("example-element");
      exampleParagraph.innerText = "Element created";
      outputVanilla.appendChild(exampleParagraph);
      console.log("Element created in vanilla!");
    }

    exampleButton.addEventListener("click", createHTMLInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", createHTMLInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
  };
}

//14 ----------------------------------------------------------
function removeHTML() {
  // Macro
  macroTextVanilla.innerText = `// Remove an html element

let container = document.createElement("div");
let child = document.getElementById("child");

element.onclick = function(){
  container.removeChild(child);
};`;

  // Output
  runButton.onclick = function () {
    let exampleButton = document.createElement("div");
    exampleButton.setAttribute("class", "example-button");
    exampleButton.innerText = "Delete";
    exampleButton.style.marginBottom = "var(--margin)";

    let exampleParagraph = document.createElement("p");
    exampleParagraph.classList.add("example-element");
    exampleParagraph.innerText = "Element to remove";

    function deleteHTMLInside() {
      if (outputVanilla.contains(exampleParagraph)) {
        outputVanilla.removeChild(exampleParagraph);
        console.log("Element deleted in vanilla!");
      } else {
        console.log("Element already removed");
      }
    }

    exampleButton.addEventListener("click", deleteHTMLInside);
    // Removing event listener if example is clicked
    removeEventVanilla(exampleButton, "click", deleteHTMLInside, examples);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    outputVanilla.appendChild(exampleButton);
    outputVanilla.appendChild(exampleParagraph);
  };
}

//15 ----------------------------------------------------------
function appendElement() {
  // Macro
  macroTextVanilla.innerText = `// Append an html element

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Appending the child after 2 seconds
setTimeout(function(){
  container.appendChild(child);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.innerText = "Child";

    setTimeout(function () {
      let appendedChild = exampleChild.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Appended child!";
      exampleParent.appendChild(appendedChild);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild);
    outputVanilla.appendChild(exampleParent);
  };
}

//16 ----------------------------------------------------------
function prependElement() {
  // Macro
  macroTextVanilla.innerText = `// Prepend an html element

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Prepending the child after 2 seconds
setTimeout(function(){
  container.insertBefore(child, container.firstChild);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild = document.createElement("div");
    exampleChild.classList.add("example-child");
    exampleChild.innerText = "Child";

    setTimeout(function () {
      let appendedChild = exampleChild.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Prepended child!";
      exampleParent.insertBefore(appendedChild, exampleParent.childNodes[1]);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild);
    outputVanilla.appendChild(exampleParent);
  };
}

//17 ----------------------------------------------------------
function addAfter() {
  // Macro
  macroTextVanilla.innerText = `// Create & add element after

let container = document.getElementById("#parent");
let child = document.createElement("div");

// Creating & adding element after 2 seconds
setTimeout(function(){
  container.insertBefore(child, container.childNodes[2]);
}, 2000);`;

  // Output
  runButton.onclick = function () {
    let exampleParent = document.createElement("div");
    exampleParent.setAttribute("class", "example-parent");
    exampleParent.innerText = "Parent";

    let exampleChild1 = document.createElement("div");
    exampleChild1.classList.add("example-child");
    exampleChild1.innerText = "Child 1";

    let exampleChild2 = document.createElement("div");
    exampleChild2.classList.add("example-child");
    exampleChild2.innerText = "Child 2";

    let exampleChild3 = document.createElement("div");
    exampleChild3.classList.add("example-child");
    exampleChild3.innerText = "Child 3";

    setTimeout(function () {
      let appendedChild = exampleChild1.cloneNode(true);
      appendedChild.classList.add("example-appended-child");
      appendedChild.innerText = "Inserted after Child 2!";
      exampleParent.insertBefore(appendedChild, exampleChild3);
    }, 2000);

    // Resetting output if it's filled
    if (outputVanilla.hasChildNodes()) {
      outputVanilla.innerHTML = null;
    }

    exampleParent.appendChild(exampleChild1);
    exampleParent.appendChild(exampleChild2);
    exampleParent.appendChild(exampleChild3);
    outputVanilla.appendChild(exampleParent);
  };
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const vanillaExamples = [
  // Events

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
  // 4
  function () {
    mouseMoved();
  },
  // 5
  function () {
    changedInput();
  },
  // 6
  function () {
    loadedImage();
  },
  // 7
  function () {
    errorImage();
  },
  // 8
  function () {
    submittedForm();
  },
  // 9
  function () {
    selectedOption();
  },
  // 10
  function () {
    mouseOver();
  },
  // 11
  function () {
    checkBoxOnOff();
  },
  // 12
  function () {
    ulSelection();
  },

  // Functions

  // 13
  function () {
    createHTML();
  },
  // 14
  function () {
    removeHTML();
  },
  // 15
  function () {
    appendElement();
  },
  // 16
  function () {
    prependElement();
  },
  // 17
  function () {
    addAfter();
  },
];
