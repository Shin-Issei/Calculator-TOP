const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll(".num-btn");
numberButtons.forEach(btn => {
    btn.addEventListener("click", () =>{
        // display.textContent = Number(btn.textContent);
       display.textContent = Number(btn.textContent)
    })
})
