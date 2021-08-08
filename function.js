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