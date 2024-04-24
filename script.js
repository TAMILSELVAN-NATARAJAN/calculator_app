const display=document.querySelector(".display");
const button=document.querySelectorAll("button");
const specialchars=['%','*','/','-','+','=']

let output="";

const calculate=(buttonvalue)=>{
   if(buttonvalue==="=" && output !=="")
   {
    output=eval(output.replace("%","/100"));
   }else if(buttonvalue ==="AC"){
    output="";
   }else if(buttonvalue ==="DEL"){
    output=output.toString().slice(0,-1);
   }else{
    if(output=== "" && specialchars.includes(buttonvalue))return;
    output+=buttonvalue;
   }
   display.value=output
}

button.forEach((button)=>{
    button.addEventListener("click",(e)=>calculate(e.target.dataset.value))
})