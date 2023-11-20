// const calcAverage = (gameOne, gameTwo, gameThree) => (gameOne + gameTwo + gameThree) / 3;


// const avgDolphins = calcAverage(85, 54 ,41);
// const avgKoalas = calcAverage(23, 34, 27);

// console.log(avgDolphins ,avgKoalas);

// const checkerWinner = function(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//     } else if (2 * avgDolphins <= avgKoalas) {
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//     } else {
//         console.log('No team win');
//     }
// };

// checkerWinner(avgDolphins, avgKoalas);


// const calcTip = function(billValue) {
//     let tip;
//     if (billValue >= 50  && billValue <= 300){
//         tip = billValue * 0.15;
//     } else {
//         tip = billValue * 0.2;
//     }

//     return tip;
// }

// const bills = [125, 555, 44];

// const tips = [calcTip(125), calcTip(555), calcTip(44)];

// const total = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + tips[2]];

// console.log(tips, total);


// const mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// const john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.BMI = this.mass / (this.height * this.height);
//         return this.BMI;
//     }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.BMI, john.BMI);

// console.log(`${mark.BMI > john.BMI ? mark.firstName + ' ' + mark.lastName : john.firstName + ' ' + john.lastName}'s BMI (${mark.BMI > john.BMI ? mark.BMI : john.BMI}) is higher than ${john.BMI < mark.BMI ? john.firstName + ' ' + john.lastName : mark.firstName + ' ' + mark.lastName}'s (${john.BMI < mark.BMI ? john.BMI : mark.BMI})`);


// function Person(fullName, mass, height) {
//     this.fullName = fullName,
//     this.mass = mass,
//     this.height = height
// };

// Person.prototype.calcBMI = function() {
//     this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
//     return this.BMI;
// }

// const mark = new Person('Mark Miller', 78, 1.69);
// const john = new Person('John Smith', 92, 1.95);

// console.log(mark.calcBMI(), john.calcBMI());

// if(mark.BMI > john.BMI) {
//     console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s BMI (${john.BMI})`);
// } else if (john.BMI > mark.BMI) {
//     console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s BMI (${mark.BMI})`);
// } else {
//     console.log('Same BMI');
// }


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = function(billValue) {
        let tip;
        if (billValue >= 50  && billValue <= 300){
            tip = billValue * 0.15;
        } else {
            tip = billValue * 0.2;
        }
    
        return tip;
    }
    
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

console.log(tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));


