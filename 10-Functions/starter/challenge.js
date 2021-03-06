// 'use strict';

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         const answer = prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`);
//         if(typeof Number(answer) === 'number' && answer < this.answers.length) {
//             this.answers[answer]++;
//         }
//         this.displayResults();
//     },
//     displayResults(type = 'array') {
//         type === 'array' ? console.log(this.answers) : console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
// }

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


// const data1 = {
//     answers: [5, 2, 3]
// }
// const data2 = {
//     answers: [1, 5, 3, 9, 6, 1]
// }


// const temp1 = poll.displayResults.bind(data1);
// const temp2 = poll.displayResults.bind(data2);

// temp1();
// temp2();
// temp1('string');
// temp2('string');

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function() {
        header.style.color = 'blue';
    })
})();
