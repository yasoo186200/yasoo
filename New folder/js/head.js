function convertdollar(){
    var dollar = document.getElementById("dollar").Value;
    var result= document.getElementById("result");

    result.innerHTML = dollar*50;
    
    if(isNaN(dollar)){
        result.innerHTML="Enter Number Not Text";
    }else if (dollar<0){
        result.innerHTML="ENTER positive Number";
    }else if(dollar==0){
        result.innerHTML="Enter Namber Rather Than Zero";
    }else {
        result.innerHTML = doller*50 +"Egyption pound";
    }
    return false;
}