
const textbox=document.getElementById("textbox");
const toFarenhite=document.getElementById("toFarenhite");
const toCelcius=document.getElementById("toCelcius");
const result=document.getElementById("result");

temp;
function convert(){
    if(toFarenhite.checked){
        temp=Number(textbox.value);
        temp= temp * 5/9 + 32;
        result.textContent= temp.toFixed(1) + "℉";
    }else if(toCelcius.checked){
        temp=Number(textbox.value);
        temp= (temp - 32) * (5/9);
        result.textContent= temp.toFixed(1) + "℃";
    }else{
        result.textContent= "select a unit please"
    }
}