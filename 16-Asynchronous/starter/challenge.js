'use strict';

// const whereAmI = function(lat, lng) {
//     const request = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//         if(!response.ok) throw new Error(`${response.status}`)

//         return response.json();
//     })
//     .then(data => {
//             console.log(data);
//             console.log(`You are in ${data.city}, ${data.country}`);
//             getCountryData(data.country);
//     }).catch(err => console.log(err));
// }

// whereAmI('52.508', '13.381');
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);