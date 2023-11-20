// function Person(mass, height) {
//     this.mass = mass;
//     this.height = height;
// }

// let mark = new Person(95, 1.88);
// let john = new Person(85, 1.76);

// const BMI = function (mass, height) {
//     return mass / height ** 2;
// }

// const markBMI = (BMI(mark.mass, mark.height)).toFixed(2);
// const johnBMI = (BMI(john.mass, john.height)).toFixed(2);

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI);
// console.log(johnBMI);

// console.log(markHigherBMI);

// if(markHigherBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

// let n = '1' + 1;
// n = n - 1;
// console.log(n);



// const DolphinAvr = (97 + 112 + 101) / 3;
// const KoalasAvr = (109 + 95 + 106) / 3;

// console.log(DolphinAvr, KoalasAvr);

// if(DolphinAvr > KoalasAvr && DolphinAvr >= 100) {
//     console.log('Dolphin win');
// } else if(DolphinAvr < KoalasAvr && KoalasAvr >= 100) {
//     console.log('koalas win')
// } else if(DolphinAvr === KoalasAvr && DolphinAvr >= 100){
//     console.log('Draw');
// } else {
//     console.log('no one win');
// }

const billValue = 430;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 15 / 100 : billValue * 20 / 100;

// let tip;
// if(billValue >= 50 && billValue <= 300) {
//     tip = billValue * 15 / 100;
// } else {
//     tip = billValue * 20 / 100;
// }


console.log(`The bill was ${billValue}, the tip was ${tip}, and total value ${billValue + tip}`);

