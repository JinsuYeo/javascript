document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');


const convertText = function(e) {
    const text = textArea.value;
    const textArr = text.split('\n');
    const converted1 = [];

    // for(const i of textArr) {
    //     let e = i.toLowerCase();
    //     e = e.replace('_' + e[e.indexOf('_') + 1], e[e.indexOf('_') + 1].toUpperCase()).trim();

    //     e = e.padEnd(20, ' ');
    //     e = `${e + '✅'.repeat(textArr.indexOf(i) + 1)}`;
    //     console.log(e);
    //     converted1.push(e);
    // }

    for(const [i, e] of textArr.entries()){
        if(e.includes('_')){
        const [first, second] = e.toLowerCase().trim().split('_');
        
        let output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
        output = output.padEnd(20) + `${'✅'.repeat(i + 1)}`;

        converted1.push(output);
        } else {
            console.log(textArea.value);
            return;
        }
        
    }

    console.log(converted1);
    const convertedText = converted1.join('\n')
    textArea.value = convertedText;
    console.log(textArea.value);
}

btn.addEventListener('click', convertText);
