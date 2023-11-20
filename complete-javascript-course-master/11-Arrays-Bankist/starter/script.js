'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
  
    const html = `<div class="movements__row">
                    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
                    <div class="movements__date">3 days ago</div>
                    <div class="movements__value">${mov}€</div>
                  </div>`

    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}



const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = acc.balance + '€';
}

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  const out = acc.movements
  .filter(mov => mov < 0)
  .reduce((acc, mov) => acc + Math.abs(mov), 0);
  
  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate) / 100)
  .filter(int => int >= 1)
  .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = incomes + '€';
  labelSumOut.textContent = out + '€';
  labelSumInterest.textContent = interest.toFixed(2) + '€';
}


const createUsernames = function(accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map(name => name[0])
    .join('');
  });
};

createUsernames(accounts);

const updateUI = function(acc) {
  displayMovements(acc.movements);
  calcDisplayBalance(acc);
  calcDisplaySummary(acc);
}

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value)

  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;

    containerApp.style.opacity = 100;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
})

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
    ) {
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      updateUI(currentAccount);
  }
})

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
})

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)) {
      const index = accounts.findIndex(acc => acc.username === currentAccount.username);
      
      accounts.splice(index, 1);

      containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
})

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* let arr = ['a', 'b', 'c', 'd', 'e'];


// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);
  
// CONCAT
const letters = arr.concat(arr2);
console.log(letters);

// JOIN
console.log(letters.join(' - ')); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for(const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function(movement, index, array) {
  if(movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// movements.forEach(a => a > 0 ? console.log(`You deposited ${a}`) : console.log(`You withdrew ${Math.abs(a)}`));
 */

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map
currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, key, set) {
  console.log(`${key}: ${value}`);
}) */

/* const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov) {
//   return Math.trunc(mov * eurToUsd); 
// })

// console.log(movements);
// console.log(movementsUSD);


const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));

console.log(movements);
console.log(movementsUSD);

const movementsDescription = movements.map((mov, i) => 
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
console.log(movementsDescription); */

// const deposit = movements.filter(mov => mov > 0);
// console.log(movements);
// console.log(deposit);

// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// // accumulator -> SNOWBALL
// const balance = movements.reduce((acc, mov) => acc + mov, 0);

// console.log(balance);


// let balance2 = 0;
// for(const mov of movements) {
//   balance2 += mov;
// }
// console.log(balance2);

// Maximum value
// const max = movements.reduce((a, c) => c > a ? c : a, movements[0]);
// console.log(max);

/* const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

  console.log(totalDepositsUSD); */

  // const firstWithdrawal = movements.find(mov => mov < 0);
  // console.log(movements);
  // console.log(firstWithdrawal);

  // const account = accounts.find(acc => acc.owner === 'Jessica Davis');
  // console.log(account);

  // let accounts2;
  // for(const acc of accounts) {
  //   console.log(acc.owner);
  //   acc.owner === 'Jessica Davis' ?  accounts2 = acc : accounts2 = accounts2;
  // }
  // console.log(accounts2);
/* 
  console.log(movements);

  // EQUALITY
  console.log(movements.includes(-130));

  // SOME: CONDITION
console.log(movements.some(mov => mov === -130));

  const anyDeposit = movements.some(mov => mov > 1500);

  console.log(anyDeposit); */

/*   // EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

//Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit)); */

// const arr = [[1, 2, 4], 4, 5, [6, 7], 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], 4, 5, [[6, 7], 8]];
// console.log(arrDeep.flat(2));

// // const accountMovements = accounts.map(acc => acc.movements);

// // const allMovements = accountMovements.flat();
// // console.log(allMovements);

// // const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// // console.log(overalBalance);

// // flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov,0);

//   console.log(overalBalance);

//   // flatMap
//   const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov,0);

//   console.log(overalBalance2);

// const owner = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owner.sort());

// console.log(movements);
// console.log(movements.sort((a, b) => a - b));
// console.log(movements.sort((a, b) => b - a));

// const arr = [1, 2, 3, 4, 5, 6, 7];

// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));

// x.fill(1, 3);
// x.fill(1);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);


// labelBalance.addEventListener('click', function() {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'),el => Number(el.textContent.replace('€', '')));

//   console.log(movementsUI);
// })

// const bankDepositSum = accounts
// .flatMap(acc => acc.movements)
// .filter(a => a > 0)
// .reduce((a, c) => a + c, 0);

// console.log(bankDepositSum);

// const numDeposits1000 = accounts
// .flatMap(acc => acc.movements)
// .reduce((a, c) => c >= 1000 ? 1 + a : a, 0);

// console.log(accounts.flatMap(acc => acc.movements));
// console.log(numDeposits1000);

// let a = 1;
// console.log(a++); 
// console.log(++a);

// const {deposit, withdrawal} = accounts
// .flatMap(acc => acc.movements)
// .reduce((sums, cur) => {
//   // cur > 0 ? sums.deposit += cur : sums.withdrawal += cur;
//   sums[cur > 0 ? 'deposit' : 'withdrawal'] += cur;
//   return sums;
// }, {deposit: 0, withdrawal: 0})

// console.log(deposit, withdrawal);

// // this is a nice title -> This Is a Nice Title

// const convertTitleCase = function(title) {
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in'];
//   return title
//     .toLowerCase().split(' ')
//     .map(a => exceptions.includes(a) ? a : a[0]
//     .toUpperCase() + a.slice(1))
//     .join(' ');
// }

// console.log(convertTitleCase('this is a nice title'));