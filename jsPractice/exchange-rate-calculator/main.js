const currencyElOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyElTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');






function calculate () {
    const currencyOne = currencyElOne.value;
    const currencyTwo = currencyElTwo.value;

    fetch(`https://v6.exchangerate-api.com/v6/a953e2970ac128bb6ab52af5/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.conversion_rates[currencyTwo];
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

        amountTwo.value = (amountOne.value * rate).toFixed(2);
    });
};

currencyElOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyElTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyElOne.value;
    currencyElOne.value =  currencyElTwo.value;
    currencyElTwo.value = temp;
    calculate();
});



calculate();