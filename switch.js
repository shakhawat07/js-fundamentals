var color = 'white';

if (color == 'red') {
    console.log('Color is Red')
}
else if (color == 'yellow') {
    console.log('Color is Yellow')
}
else if (color == 'green') {
    console.log('Color is Green')
}
else {
    console.log('Color is White')
}

switch (color) {
    case 'red':
        console.log('Color is Red');
    case 'yellow':
        console.log('Color is Yellow');
    case 'green':
        console.log('Color is Green');
    default:
        console.log('Color is White');
}