// object declare 
var student1 = {
    id: 76,
    name: 'Mew',
    marks: 97,
    phone: '01554500000'
};
console.log(student1);

// Object property show 
console.log(student1.id);
var mark = student1.marks;
console.log(mark);

// ways to set a object property 
student1.phone = '01554500500';
student1['name'] = 'mew mew'
var marksProperty = "marks";
student1[marksProperty] = 100;
console.log(student1);
