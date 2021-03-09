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
