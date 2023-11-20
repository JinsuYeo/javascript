'use strict';

// const julia = [3, 5, 2, 12, 7];
// const kate = [4, 1, 15, 8, 3];
// const julia2 = [9, 16, 6, 8, 3];
// const kate2 = [10, 5, 6, 1, 4];


// const checkDogs = function(dogsJulia, dogsKate) {
//     const copyJulia = dogsJulia.slice();
//     copyJulia.splice(0, 1);
//     copyJulia.splice(-2, 2);

//     const juliaAndKate = copyJulia.concat(dogsKate);
    
//     juliaAndKate.forEach((dog, i) => console.log(`Dog number ${i} is ${dog >= 3 ? `an audult, and is ${dog} years old` : 'still a puppy 🐶'}`));
// }

// checkDogs(julia, kate);
// console.log('-'.padEnd(50, '-'));
// checkDogs(julia2, kate2); 

// const calcAverageHumanAge = function(dogsAge) {
//     const humanAge = dogsAge.map(function(dog, i) {
//         if(dog <= 2) return dog * 2;
//         else return 16 + dog * 4;
//     })
//     const excludeDogs = humanAge.filter(dogAge => dogAge >= 18);
//     const averageHumanAge = excludeDogs.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

//     return averageHumanAge;
// }

// console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]));

// const calcAverageHumanAge = ages => 
//         ages
//             .map(age => age <= 2 ? age : 16 + age * 4)
//             .filter(age => age >= 18)
//             .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
    

// console.log(calcAverageHumanAge([5,2,4,1,15,8,3]));
// console.log(calcAverageHumanAge([16,6,10,5,6,1,4]));

// const dogs = [
//     { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] }, 
//     { weight: 8, curFood: 200, owners: ['Matilda'] },
//     { weight: 13, curFood: 275, owners: ['Sarah', 'John'] }, 
//     { weight: 32, curFood: 340, owners: ['Michael'] },
//     ];

// dogs.forEach(dog => dog.recommendedFood = dog.weight ** .75 * 28);

// const sarahDog = dogs.filter(dog => dog.owners.includes('Sarah'))[0];

// const eatingOk = function(dog) {
//     const food = dog.curFood;
//     const recommended = dog.recommendedFood;

//     if(food > recommended + recommended*.1) {
//         return 'Eating too much';
//     } else if (food < recommended - recommended*.1) {
//         return 'Eating too little'
//     } else {
//         return 'Eating an okay amount';
//     }
// }

// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood + dog.recommendedFood*.1)
// .flatMap(dog => dog.owners);
// const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood - dog.recommendedFood*.1)
// .flatMap(dog => dog.owners);;


// console.log(eatingOk(sarahDog));

// console.log(ownersEatTooMuch.join(' and ') + '\'s dogs eat too much!');
// console.log(ownersEatTooLittle.join(' and ') + '\'s dogs eat too little!');

// console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
// console.log(dogs.some(dog => eatingOk(dog) === 'Eating an okay amount'));
// const [eatingOkayDog] = dogs.filter(dog => eatingOk(dog) === 'Eating an okay amount');
// console.log(eatingOkayDog);

// const sortedDogs = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
// console.log(sortedDogs);