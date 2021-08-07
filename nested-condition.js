var price1 = 50;
var price2 = 40;
var price3 = 30;
var price4 = 10;
var myBudget = 25;

if (price1 < myBudget) {
    console.log('Price1');
}
else if (price2 < myBudget) {
    console.log('Price2');
}
else if (price3 < myBudget) {
    console.log('Price3');
}
else {
    console.log('Price4');
}

if (price4 < myBudget) {
    if (myBudget == 20) {
        console.log('Price4');
    }
    else {
        console.log('Price4 Not');
    }
}
else {
    console.log('Price none');
}
