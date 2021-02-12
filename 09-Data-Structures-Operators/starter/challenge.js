const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'
    ],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function(...playersName) {
        let temp = '';
        for(let i = 0; i < playersName.length; i++) {
            temp += playersName[i] + ', ';
        }
        console.log(`${temp}total ${playersName.length} goals`);
    }
};

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = players1;
// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const {team1, x: draw, team2} = game.odds;

// console.log(team1, draw, team2);

// game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.printGoals(...game.scored);

// team1 > team2 && console.log(game.team2) || team1 < team2 && console.log(game.team1);

// for(const [i, e] of game.scored.entries()) {
//     console.log(`Goal ${i + 1}: ${e}`);
// }

// const odd = Object.values(game.odds);
// console.log(odd);
// let sum = 0;
// let avr;
// for(const o of odd) {
//     sum += o;
//     avr = sum / odd.length;
// }
// console.log(`${avr}`);

// const gameArr = Object.entries(game);
// const oddArr = Object.entries(game.odds);
// console.log(gameArr);
// console.log(oddArr);

// for(const [key, value] of oddArr) {
//     console.log(`Odd of victory ${game[key] ?? 'draw'}: ${value}`);
// }

// const scorers = {}
// for(const s of game.scored) {
//     scorers[s] ? scorers[s]++ : (scorers[s] = 1);
// }

// console.log(scorers);

// function solution(n, lost, reserve) {
//     var answer = 0;
//     const temp = n - lost.length - reserve.length;
//     console.log(temp)
    
//     lost.sort((a, b) => a - b);
//     reserve.sort((a, b) => a - b);
    
//     for(const r of reserve) {
//         for(const l of lost) {
//                             console.log(l, r);

//             if(l - 1 === r) {
//                 lost.splice(lost.indexOf(l), 1);
//                 reserve.splice(reserve.indexOf(r), 1);
                
//                 answer += 2;
//                 console.log(answer)
//                 console.log(reserve, lost)
//             } 
//     }
//     }
        
//     answer += temp + reserve.length;
    
//     return answer;
// }

// solution(5, [2, 4], [1, 3, 5]);