
function checkZero(value){
    return value==0? true : false; // value==0 || false;
}
function strToNum(value){
    return Number(value);
}
function checkNumber(value){
    if (value == NaN) {
        return false;
    } else {
        return true;
    }
    //return (value == NaN)? false : true;
}
function checkAction(value){
    if (value=="sum" || value=="multi" || value=="subt"||value=="div"||value=="rem"||value=="pow") {
        return true;
    }else{
        return false;
    }
}

function showMessageErrNum(value){
    if (!checkNumber(value)) {
        return confirm("Error Ошибочный ввод! Повторить?");
    }   
};
function showMessageErrAction(valueAction){
    if (!checkAction(valueAction)) {
        return confirm("unknown operation! Ошибочный ввод! Повторить?");
    }
};

function sum(a, b){
    return a + b;
};
function multi(a, b){
    return a * b;
};
function subt(a, b){
    return a - b;
};
function div(a, b){
    if (checkZero(b)) {
        alert("Делить на 0 нельзя!")
    }else{
        return a / b;
    }
    
};
function rem(a, b){
    if (checkZero(b)) {
        alert("Делить на 0 нельзя!")
    }else{
        return a % b;
    }
};
function pow(a, b){
    return a ** b;
};
let a = 0, b = 0, result = 0, valueAction = "",flContinue;
do {
    a = strToNum(prompt('Введите число а',"1"));    
} while (showMessageErrNum(a));
if (checkNumber(a)) {
    do {
        b = strToNum(prompt('Введите число b','1'));    
    } while (showMessageErrNum(b));
    if (checkNumber(b)) {
        do {
            valueAction = prompt('Ведите одно математическое действие: sum, multi, subt, div, rem, pow', 'sum');    
        } while (showMessageErrAction(valueAction)); 
        if (checkAction(valueAction)) {
            if (valueAction=="sum") {
                result = sum(a, b);
            }else if(valueAction=="multi") {
                result = multi(a, b);
            }else if(valueAction=="subt") {
                result = subt(a, b);
            }else if(valueAction=="div") {
                result = div(a, b);
            }else if(valueAction=="rem") {
                result = rem(a, b);
            }else if(valueAction=="pow") {
                result = pow(a, b);
            }
            alert(`Результат ${result}`)
        }    
    }
     
}
 

