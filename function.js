// declare function  
function add() {
    var x = 2 + 3;
    console.log(x);
}

// call the function 
add();

// function with parameter  
function showMoney(moneyParameter) {
    console.log('Money = ', moneyParameter);
    var unitPrice = 10;
    var unitQuantity = moneyParameter / unitPrice;
    return unitQuantity;
}
var money = 200;
var quantity = showMoney(money);
console.log('Quantity = ', quantity)

// multiple parameter in function 
function addTwoNumbers(num1, num2) {
    var addition = num1 + num2;
    return addition;
}
function multiplyTwoNumbers(num1, num2) {
    var multiplication = num1 * num2;
    return multiplication;
}
var number1 = 5;
var number2 = 10;
console.log('Addition = ', addTwoNumbers(number1, number2))
console.log('Multiplication = ', multiplyTwoNumbers(number1, number2))