'use strict';

const country = 'korea';
const continent = 'asia';
let population = 50;

console.log(country, continent, population);

const isIsland = false;
let language;
console.log(typeof (isIsland), typeof (population), typeof (country), typeof (language));

language = 'korean';

const halfPop = population / 2;
const finlandPop = 6;
const averagePop = 33;
population++

console.log(halfPop, population, population > finlandPop, population < averagePop);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


console.log(description);

if (population > averagePop) {
    console.log(`${country}'s population is avobe average`);
}

// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));

// if(numNeighbours === 1) {
//     console.log('Only 1 border');
// } else if(numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }


switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('mnons');
        break;
    case 'spanish':
        console.log('2nd');
        break;
    default:
        console.log('glt');
};

console.log(`${country}'s population is ${population > 33 ? 'avobe' : 'below'} average`);

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const korea = describeCountry('korea', 50, 'seoul');

console.log(korea);

function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const chinaPer = percentageOfWorld1(1441);

console.log(chinaPer);

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const koreaPer = percentageOfWorld2(50);
console.log(koreaPer);

const percentageOfWorld3 = population => (population / 7900) * 100;

const averPer = percentageOfWorld3(33);
console.log(averPer);

const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${(percentageOfWorld1(population)).toFixed(2)}% of the world.`;
}

const koreaPop = describePopulation('korea', population);

console.log(koreaPop);

const populations = [population, 1441, averagePop, finlandPop];

if (populations.length === 4) {
    console.log('populations has 4 elements');
} else {
    console.log('populations has not 4 elements');
}

const percentages = [koreaPer, chinaPer, averPer, percentageOfWorld1(finlandPop)];

console.log(percentages);

const neighbours = ['korea', 'china', 'japan'];

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

console.log(neighbours.indexOf('japan'));

neighbours[neighbours.indexOf('japan')] = 'Republic of Sweden';
console.log(neighbours);

const myCountry = {
    country: 'korea',
    capital: 'seoul',
    language: 'korean',
    population: 51,
    neighbours: neighbours,
    describe: function () {
        console.log(`${this.country} has ${this.population} million finnish-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`);
    },
    checkIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
        return this.isIsland;
    }
};

console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million finnish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

myCountry.describe();

console.log(myCountry.checkIsland());

for (let vn = 1; vn <= 50; vn++) {
    console.log(`Voter number ${vn} is currently voting`);
}

// const percentages2 = [];
// for(let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }
const percentages2 = populations.map(e => Number(percentageOfWorld1(e).toFixed(2)));
console.log(percentages2);

const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia']
];

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr) {
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}oC in ${i+1} days... `;
    }
    console.log(str); 
};

printForecast(data1);