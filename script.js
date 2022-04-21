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
  btn.addEventListener("click", () => {
    operation = btn.textContent; // The 'equals' function needs to know this
    if (typeof opOneNum === "undefined") {
      opOneNum = Number(display.textContent);
      console.log("the first operand is " + opOneNum);
    }
    operandArr = [];
    display.textContent = "";
    // console.log(operation); 
  });
});

Equals.addEventListener("click", () => {
  if (typeof opOneNum !== "undefined") {
    opTwoNum = Number(display.textContent); // *Now* we can read the second
    console.log("the secdond operand is " + opTwoNum);
  }

  if (operation === "+") {
    let ans = opOneNum + opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (operation === "-") {
    let ans = opOneNum - opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (operation === "*") {
    let ans = opOneNum * opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
  if (operation === "/") {
    let ans = Math.round((opOneNum / opTwoNum) * 100)/100 ;
    if(opTwoNum === 0){
      return display.textContent = "No."
    }
    ClearAll();
    return (display.textContent = ans);
  }
});

ClearScrn.addEventListener("click", () => {ClearAll()});

function ClearAll() {
  display.textContent = "";
  operandArr = [];
  opOneSTR = "";
  opOneNum = undefined;
  opTwoNum = undefined;
  console.log("clear")
  
}
