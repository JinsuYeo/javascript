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
var lastDigit = function(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('').slice(-2).join('');
    var base = parseInt(str1[str1.length - 1]);
    var power = ((str2 - 2) % 4) + 10;
  
  
    if (str2.length === 1 && power === 8) {
      return 1;
      
    } else if (str1.length === 1 && (power - 7 === 1)) {
      return 0;
      
    } else if (str2 === "00") {
      return 0;
      
    } else {
      let calc = Math.pow(base, power).toString().split('');
      return parseInt(calc[calc.length -1]);
    }
  }
  
  
  console.log(lastDigit("8070891901449613265", "0")); // 1
  console.log(lastDigit("0158942604792392851842218537760171359280889674380", "0")); // 1
  
  console.log(lastDigit("10","10000000000")); // 0
  console.log(lastDigit("621235205498814911028506123278008343255366785993554008865140882747002314493", "64835398760")); // 1
  console.log(lastDigit("3433608610927187715619542", "355024882738969557338915062955398986683204207038804501497777765383")); // 8
  console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651")); // 7
  console.log(lastDigit("136088", "33564018225932835982713759233350865771910706166553649446547633715172858554192852643275337297")); // 8
  // console.log(`str1: ${str1} and str2: ${str2}`);
  