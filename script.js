let display = document.querySelector(".display");
// by default se transforma in html colectie, trebuie de convertit intrun array(.from())
let buttons = Array.from( document.querySelectorAll(".button"))


buttons.map(button=>{
button.addEventListener("click", parametru =>{
console.log(parametru.target)
    switch(parametru.target.innerText){

            case "C":
               display.innerText="";
            break;

            case "←":
                if(display.innerText){
                    display.innerText = display.innerText.slice(0, -1)};
                break;

            case "=":
            display.innerText = eval(display.innerText);
            break;
    
        
        default:
            display.innerText += parametru.target.innerText;

    }

})
})