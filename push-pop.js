var friend = ['a', 'b', 'c', 'd']
console.log(friend);
friend.push('e');
friend.push('f');
console.log(friend);
friend.pop();
console.log(friend);
friend.pop();
// pop returns the last item value
var lastItem = friend.pop();
console.log(friend);
console.log(lastItem);
// add item in the beginning
friend.unshift('z');
console.log(friend);
// remove item in the beginning
friend.shift();
console.log(friend);

