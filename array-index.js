// array index 
var friendsAge = [11, 13, 15];
var heroine = ['kopila', 'sabana', 'mousomi'];
var friendsAgeIndex = friendsAge.indexOf(13);
console.log(friendsAgeIndex);
var friendsAgeIndex = friendsAge.indexOf(113);  //Ans: -1
console.log(friendsAgeIndex);
var heroineIndex2 = heroine[1];
console.log(heroineIndex2);
console.log(heroine[5]);    //Ans: undefined
console.log(friendsAge);
friendsAge[0] = 12;
console.log(friendsAge);