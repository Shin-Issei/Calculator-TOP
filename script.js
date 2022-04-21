const display = document.querySelector("#display");
const NumberButtons = document.querySelectorAll(".btn");
const SymbolButtons = document.querySelectorAll(".sym-btn");
const Equals = document.querySelector("#equals");
const operatorSymbols = ["+", "-", "*", "/"];
let operandArr = [];
let opOneNum;
let opTwoNum;
let operation;
// The number buttons don't store anything yet. It only displays to the screen
NumberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!operatorSymbols.includes(btn.textContent)) {
      // If its a number then excecute
      operandArr.push(btn.textContent);
      let opOneSTR = operandArr.join("");
      display.textContent = opOneSTR;
    }
  });
});

// The number only needs to be stored as an operand once an operation is chosen.

SymbolButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operation = btn.textContent;
    if (typeof opOneNum === "undefined") {
      opOneNum = Number(display.textContent);
      console.log("the first operand is " + opOneNum);
    }
    operandArr = [];
    display.textContent = "";
    console.log(operation);
  });
});

Equals.addEventListener("click", () => {
  if (typeof opOneNum !== "undefined") {
    opTwoNum = Number(display.textContent);
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
    let ans = opOneNum / opTwoNum;
    ClearAll();
    return (display.textContent = ans);
  }
});

function ClearAll() {
  operandArr = [];
  opOneSTR = "";
  opOneNum = undefined;
  opTwoNum = undefined;
}

//   if (btn.textContent === "+") {
//    opTwoNum = Number(display.textContent)
//       add(opOneNum, opTwoNum)
//     console.log("You chose addition");

//   }
//   if (btn.textContent === "-") {
//     console.log("You chose subtraction");
//   }
