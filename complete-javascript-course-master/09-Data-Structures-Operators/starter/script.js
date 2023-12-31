'use strict';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address
  }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
    }
    };

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(newName);

// const passenger = 'jessica ann smith davis';

// function upperName(name) {
//   const nameArr = name.split(' ');
//   // const upperArr = nameArr.map(a => a[0].toUpperCase() + a.slice(1));
//   const upperArr = nameArr.map(a => a.replace(a[0], a[0].toUpperCase()))
//   const upperStr = upperArr.join(' ');
//   return upperStr;
// }

// console.log(upperName(passenger));

// const message = 'Go to gate 23!';

// console.log(message.padStart(25, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);

//   return last.padStart(str.length, '*');
// }

// console.log(maskCreditCard(64563543));
// console.log(maskCreditCard(4337846386464784));

// // Repeat
// const message2 = 'Bad weather... All departures Delayed... ';
// console.log(message2.repeat(5));

// const planesInLine = function(n) {
//   console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
// }

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('jonas'.toUpperCase());

// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// // Comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimedEmail = lowerEmail.trim();

// // console.log(trimedEmail);

// const nomalizedEmail = loginEmail.toLowerCase().trim();

// console.log(nomalizedEmail);
// console.log(email === nomalizedEmail);

// // replacing
// const priceGB = '288,97€'
// const priceUS = priceGB.replace('€', '$').replace(',', '.');

// console.log(priceUS);

// const announcement = 'All passengers come to boarding door 23, Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans

// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// // Practice exercise
// const checkBaggage = function(items) {
//   const baggage = items.toLowerCase();
//   if(baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
// }

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');


// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(plane[3]);

// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(0, -1));

// const checkMiddleSeat = function(seat) {
//   seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ? console.log('middle seat') : console.log('no middle seat');;
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('jonas'));
// console.log(new String(airline));
// console.log(new String(airline));
// console.log(typeof new String(airline).slice(1));


// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

//   console.log(rest);


// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = new Date().getHours();
// console.log(time);

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// console.log(rest);
// console.log(rest.size);

// // rest.clear();

// // rest.set([1, 2], 'Test');
// // console.log(rest);

// // console.log(rest.get([1, 2]));

// const arr = [1, 2];
// rest.set(arr, 'Test');
// console.log(rest);

// console.log(rest.get(arr));

// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ])
// console.log(question);

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);
// hoursMap.set('f', function() {
// });
// console.log(hoursMap);

// console.log(question.get('question'));
// for(const [key, value] of question) {
//   if(typeof key === 'number') {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);
// console.log(question.get(question.get('correct') === answer));

// console.log([...question]);

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet);
// const ordersArr = [...ordersSet];
// console.log(ordersArr);

// console.log(new Set('Jonas'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('Pasta'));

// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// console.log(ordersSet);

// ordersArr.push('ab')
// console.log(ordersArr);

// ordersSet.delete('Risotto');
// console.log(ordersSet);

// // ordersSet.clear();
// // console.log(ordersSet);


// for(const order of ordersSet) {
//   console.log(order);
// }

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffSet = [...new Set(staff)];
// console.log(staffSet);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

// console.log(new Set('Jonasschmedtman').size);

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `
// }
// console.log(openStr);

// const values = Object.values(openingHours);

// for(const {open, close} of values) {
//   console.log(open, close);
// }

// const entries = Object.entries(openingHours);
// console.log(entries);

// for(const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// // restaurant.openingHours.mon && console.log(restaurant.openingHours.mon.open); =
// console.log(restaurant.openingHours.mon?.open);

// // if(restaurant.openingHours && restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
// console.log(restaurant.openingHours?.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for(const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');



// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for(const item of menu) console.log(item);

// for(const item of menu.entries()) console.log(item);
// console.log(menu.entries());
// console.log([...menu.entries()]);
// console.log([...menu]);

// for(const item of menu.entries()){
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for(const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);
// }

// for(const item in menu) console.log(item);

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);
// restaurant.numGuests = 0;

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main]
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);


// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;

// console.log(restaurantName, hours, tags);

// // const { menu = [], starterMenu: starters = [] } = restaurant;

// // console.log(menu, starters);

// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c:14};

// ({a, b} = obj);
// console.log(a, b);

// const {
//   fri: {open: o, close: c}
// } = openingHours;

// console.log(o, c);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// })

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr); 

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }

// const mainMenuCopy = [...restaurant.mainMenu];

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);


// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
// // restaurant.orderPasta(...ingredients);

// const newRestorant = {foundIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newRestorant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// const add = function(...numbers) {
//   let sum = 0;
//   for(let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// }
// add(2, 3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// restaurant.orderPizza('mushrooms');