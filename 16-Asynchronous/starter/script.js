'use strict';
/* 
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('korea (Republic of)');

const renderCountry = function(data, className = '') {
    const html = `
            <article class="country ${className}">
              <img class="country__img" src="${data.flag}" />
              <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 100000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
            </article>
            `
        countriesContainer.insertAdjacentHTML('beforeend', html);    
        // countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = function(country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();
    
//     request.addEventListener('load', function() {
    
//         const [data] = JSON.parse(this.responseText);

//         renderCountry(data);

//         const [neighbour] = data.borders;

//         if(!neighbour) return;

//         const request2  = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         request2.send();
//         request2.addEventListener('load', function() {
//             const data2 = JSON.parse(this.responseText);

//             renderCountry(data2, 'neighbour');
//         })
//     })
// }

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');

// setTimeout(() => {
//     console.log('1 sec');
//     setTimeout(() => {
//         console.log('2 sec');
//         setTimeout(() => {
//             console.log('3 sec');
//             setTimeout(() => {
//                 console.log('4 sec');
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const renderError = function(msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errMsg = 'Something went wrong') {
    return fetch(url).then(response => {
        if(!response.ok) 
          throw new Error(`${errMsg} ${response.status}`);  

        return response.json();
    })
}

const getCountryData = function(country) {
    const request = getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
    .then(function(data) {
        renderCountry(data[0]);
        const neighbour = data[0].borders[0];

        if(!neighbour) 
          throw new Error('No neighbour found!');

        return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found2');
    }).then(data => {
        renderCountry(data, 'neighbour');
        // const neighbour = data.borders[0];

        // if(!neighbour) return;

        // return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
    // }).then(function(response) {
    //     return response.json();
    // }).then(data => {
    //     renderCountry(data, 'neighbour');
    }).catch(err => {
        console.error(err);
        renderError(err.message);
    }).finally(() => countriesContainer.style.opacity = 1);
}

// const getCountryData = function(country) {
//     const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// }

btn.addEventListener('click', function() {
    getCountryData('portugal');
 })*/

// getCountryData('australia');

// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 0);
// Promise.resolve(3).then(res => console.log(res));
// Promise.resolve(4).then(res => {
//     for(let i = 0; i < 1000000000; i++) {}
//     console.log(res);
// });
// console.log(5);

// const lotteryPromise = new Promise(function(resolve, reject) {

//     console.log('Lottery draw is happening');
//     setTimeout(() => {
//         if(Math.random() >= 0.5) {
//         resolve('You WIN');
//     } else {
//         reject(new Error('You lost your money'));
//     }
//     }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// // Promisifying setTimeout
// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

// wait(1).then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
// }).then(() => {
//     console.log('I waited for 4 seconds');
//     return wait(1);
// })

// setTimeout(() => {
//         console.log('1 sec');
//         setTimeout(() => {
//             console.log('2 sec');
//             setTimeout(() => {
//                 console.log('3 sec');
//                 setTimeout(() => {
//                     console.log('4 sec');
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));



// const getPosition = function() {
//     return new Promise(function(resolve, reject) {
//         // navigator.geolocation.getCurrentPosition(
//         //     position => resolve(position), 
//         //     err => reject(err)
//         //     );
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// };

// getPosition().then(pos => console.log(pos)).catch(err => console.error(err));

