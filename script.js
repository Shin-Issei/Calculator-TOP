// Nessecary DOM references
const display = document.querySelector("#display");
const NumberButtons = document.querySelectorAll(".btn");
const SymbolButtons = document.querySelectorAll(".sym-btn");
const Equals = document.querySelector("#equals");
const ClearScrn = document.querySelector("#clear");
// Global Variables
const operatorSymbols = ["+", "-", "*", "/"];
let operandArr = [];
let opOneNum;
let opTwoNum;
let operation;
const whiteSpace = display.textContent; // The nbsp will stop the numbers from bouncing up and down.
let localOperation;
let flag = false;
//All Event Handlers

// The number buttons don't need to store anything since we just need to push the series of numbers to the screen.
NumberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operatorSymbols.includes(btn.textContent)) {
      operandArr.push(btn.textContent);
      let opOneSTR = operandArr.join("");
      display.textContent = opOneSTR;
    }
  });
});

// The number only needs to be stored as an operand once an operation is chosen.
SymbolButtons.forEach((btn) => {
  btn.addEventListener("click", () => {});
});

Equals.addEventListener("click", () => {
  // FnEquals(operation);
});

ClearScrn.addEventListener("click", () => {
  ClearAll();
});

function ClearAll() {
  display.textContent = whiteSpace;
  operandArr = [];
  opOneSTR = "";
  opOneNum = undefined;
  opTwoNum = undefined;
  console.log(whiteSpace);
}

function symbolPress() {
  if (typeof opOneNum === "undefined") {
    opOneNum = Number(display.textContent);
    console.log("the first operand is " + opOneNum);
  }
  if (typeof localOperation === "undefined") {
    localOperation = btn.textContent;
  } else {
    console.log(
      `The local operantion is defined already, it's ${localOperation}`
    );
    opTwoNum = display.textContent;
    FnEquals(localOperation);
    localOperation = btn.textContent;
  }
  operation = btn.textContent; // The 'equals' function needs to know this
  // let interOperation = btn.textContent
  operandArr = [];
  // display.textContent = whiteSpace;
  // console.log(operation);
}

function FnEquals() {
  if (typeof opOneNum !== "undefined") {
    opTwoNum = Number(display.textContent); // *Now* we can read the second
    console.log("the secdond operand is " + opTwoNum);
  }

  if (arguments[0] === "+") {
    let ans = opOneNum + opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (arguments[0] === "-") {
    let ans = opOneNum - opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (arguments[0] === "*") {
    let ans = opOneNum * opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (arguments[0] === "/") {
    let ans = Math.round((opOneNum / opTwoNum) * 100) / 100;
    if (opTwoNum === 0) {
      return (display.textContent = "No.");
    }
    ClearAll();
    return (display.textContent = ans);
  }
}
