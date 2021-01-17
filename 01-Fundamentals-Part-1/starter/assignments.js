const country = 'korea';
const continent = 'asia';
let population = 50;

console.log(country, continent, population);

const isIsland = false;
let language;
console.log(typeof(isIsland), typeof(population), typeof(country), typeof(language));

language = 'korean';

const halfPop = population / 2;
const finlandPop = 6;
const averagePop = 33;
population++

console.log(halfPop, population, population > finlandPop, population < averagePop);

let description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;


console.log(description);

if(population > averagePop) {
    console.log(`${country}'s population is avobe average`);
}