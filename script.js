//Select elements======
const buttons = document.querySelectorAll("button");
const display = document.querySelector("input");

//button selection=====
for(let button of buttons){
    button.addEventListener("click",function(){
        
        //get button text
        let value = button.innerText;

        //arithmetic operations=====
        if(value === "AC" ){
            //AC operation
            display.value = "";

        }else if(value === "DE"){
            //Delete operation
            display.value = display.value.slice(0,-1);

        }else if(value === "="){
            try{
                //Arithmetic operation
                display.value = eval(display.value);

            }catch{

                display.value = "#Error";
            }
        }else{
            //displaying the values
            display.value += value;

        }
    });  
}
//keyboard responses
    document.addEventListener("keydown",function(event){

        //key selection
        let key = event.key;

        //major functions
        if(key === "Enter"){
            //Arithmentic operrations
            try{

                display.value = eval(display.value);

            }catch{

                display.value = "#Error";
            }

        }else if(key === "Backspace"){
            //Backspace operation
            display.value = display.value.slice(0,-1);

        }else if(key === "Delete"){
            //Delete operation
            display.value = "";

        }else if("1234567890+-*/.".includes(key)){
            //Adding numbers from keyboard
            display.value += key;
        }
    });