
function checkZero(value){
    return value==0? true : false; // value==0 || false;
}
function strToNum(value){
    return Number(value);
}
function checkNumber(value){
    if (value > -Infinity && value < Infinity) {
        return true;
    }else {
        return false;
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
        return "Делить на 0 нельзя!";
    }else{
        return a / b;
    }
    
};
function rem(a, b){
    if (checkZero(b)) {
        return "Делить на 0 нельзя!";
    }else{
        return a % b;
    }
};
function pow(a, b){
    return a ** b;
};
function Calc(operand = "sum", a = 1, b = 1){
    let operation = {
        "sum": sum(a,b),
        "multi": multi(a,b),
        "subt": subt(a,b),
        "div": div(a,b),
        "rem": rem(a,b),
        "pow": pow(a,b),
    }
    const isValidNum = checkNumber(a) && checkNumber(b);
    if (!isValidNum) {
        return "error"
    }else if (operand in operation) {
        return operation[operand];
    }else{
        return "Unknown operation!"
    }

}

console.log(Calc("multi", 5, 5));