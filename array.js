var friendsAge = [11, 13, 15];
console.log(friendsAge);
console.log(typeof friendsAge);

var heroine = ['kopila', 'sabana', 'mousomi'];
var heroineCount = heroine.length;
console.log(heroine);
console.log(typeof heroine);
console.log(heroineCount);

// array index 
var friendsAgeIndex = friendsAge.indexOf(13);
console.log(friendsAgeIndex);
var friendsAgeIndex = friendsAge.indexOf(113);  //Ans: -1
console.log(friendsAgeIndex);
var heroineIndex2 = heroine[1];
console.log(heroineIndex2);
console.log(heroine[5]);    //Ans: undefined
friendsAge[0] = 12;
console.log(friendsAge);