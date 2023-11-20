'use strict';

// const whereAmI = function() {
//     getPosition().then(pos => {
//         const { latitude: lat , longitude: lng } = pos.coords;
//         return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     })
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

// // whereAmI('52.508', '13.381');
// // whereAmI(19.037, 72.873);
// // whereAmI(-33.933, 18.474);
// btn.addEventListener('click', whereAmI);

// const wait = function(seconds) {
//     return new Promise(function(resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

let currentImg;

const createImg = function(imgPath) {
    return new Promise(function(resolve, reject) {
        const img = document.createElement('img');
        currentImg = img;
        img.src = imgPath;
        img.addEventListener('load', function(e) {
            document.querySelector('.images').insertAdjacentElement('beforeend', this);
            resolve(this);
        });
        img.addEventListener('error', function(e) {
            reject(new Error(e.message));
        });
    })
}

// createImg('img/img-1.jpg').then(img => wait(2)).then(() => {
//     img.style.display = 'none';

//     return wait(2);
// }).then(() => createImg('img/img-2.jpg')).then(() => wait(2)).then(() => {
//     img.style.display = 'none';
// }).catch(err => console.error(err));

const loadNPause = async function(sec) {
    try{
        const createImg1 = await createImg('img/img-1.jpg');
        await wait(sec);
        currentImg.style.display = 'none';
        await wait(sec);
        const createImg2 = await createImg('img/img-2.jpg');
        await wait(sec);
        currentImg.style.display = 'none'
    } catch(err) {
        console.error(err);
    }
    
}

// loadNPause(2);

const loadAll = async function(imgArr) {
    const imgs = imgArr.map(async img => await createImg(img));
    console.log(imgs);
    const realImgs = await Promise.all(imgs);
    console.log(realImgs);
    realImgs.forEach(img => img.classList.add('parallel'))
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);