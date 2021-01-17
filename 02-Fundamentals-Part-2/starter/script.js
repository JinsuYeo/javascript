"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) {
//     hasDriverLicense = true;
// }

// if(hasDriversLicense) {
//     console.log('i can drive');
// }

// function logger () {
//     console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// const fruitJUice = fruit(5, 0);
// console.log(fruitJUice);

// function cutFruitePieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitePieces(apples);
//     const orangePieces = cutFruitePieces(oranges);

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
//     return juice;
// }

// appleOrangeJuice = fruitProcessor(2, 3);

// console.log(appleOrangeJuice);

// console.log(friend);

// console.log(friend[0]);
// console.log(friend[2]);
// console.log(friend.length);

// friend[2] = 'Jay'

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const years = new Array(1991, 1984, 2008, 2020);

// const age1 = calcAge(years[0]);
// console.log(age1);

// const friend = ['Michael', 'Steven', 'Peter'];

// friend.push('Jay');

// console.log(friend);

// friend.unshift('John');
// console.log(friend);

// friend.pop();
// console.log(friend);

// if(friend.includes('Peter')){
//     console.log('You have a friend called Peter');
// }

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function() {
//     //     return 2037 - this.birthYear;
//     // }

//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
//     }
// };

// // console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

// console.log(jonas.calcAge());
// console.log(jonas.age);
// // console.log(jonas['calcAge'](1991));

// console.log(jonas.getSummary());

// for(let i = 1; i <= 10; i++) {
//     console.log(`Lifting weight repetition ${i}`);
// }

const jonasArray = [
  "Jonas",
  "Schedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

jonasArray.forEach((e) => console.log(e, typeof e));

const jonas = jonasArray.slice();
console.log(jonas);

// const jonasTypes = []
// for(let i = 0; i <= jonas.length; i++){
//     jonasTypes[i] = typeof jonas[i];
// }

const jonasTypes = jonas.map(function (e) {
  return typeof e;
});

console.log(jonasTypes);
