// Iteration 1: Names and Input
// 
const hacker1 = "Anne";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Anne";
console.log(`The navigator's name is ${hacker2}`);
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}.`);
}

// Iteration 3: Loops

let printName = "";
for (const char of hacker1) {
    printName += char.toUpperCase() + ' ';
}
console.log(printName.slice(0, -1));

let printName2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    printName2 += hacker2[i];
}
console.log(printName2);

var checkOrder = function(hacker1, hacker2) {
    for(i=0; i <= hacker1.length; i++) {
        if (hacker1[i] === undefined && hacker2[i] === undefined){
            return `What?! You both have the same name?`
        } else if (hacker1[i] === hacker2[i] ) {
            continue;
        } else if (hacker1[i] === undefined) { 
             return`The driver's name goes first.`;
        } else if (hacker2[i] === undefined) {
             return `Yo, the navigator goes first definitely.`;
        } else if (hacker1[i] < hacker2[i]) {
            return `The driver's name goes first.`;
        } else if (hacker2[i] < hacker1[i]) {
            return `Yo, the navigator goes first definitely.`;
        }
    }
}

console.log(checkOrder(hacker1, hacker2));


const paragraphe = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ornare risus eu tincidunt pharetra. Mauris sit amet urna sit amet ipsum ultricies facilisis et a nisl. Sed ut felis sit amet libero ultricies cursus. Integer feugiat sollicitudin faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus in felis in est tincidunt euismod sit amet ac libero. Donec consectetur ligula libero, eget vehicula ante interdum sit amet. Suspendisse tempus mattis molestie. Nam vel leo maximus, euismod leo in, maximus ligula. In posuere facilisis rutrum. Nunc ex nulla, posuere quis tempus ac, convallis vitae justo. Integer vitae tellus ac diam eleifend iaculis quis blandit quam. Integer sapien sapien, mollis et vulputate in, tincidunt vitae dui. Cras condimentum volutpat ultricies. Nunc fringilla massa lorem, non fringilla lectus semper eget. Proin vitae est a nulla tincidunt dignissim. Etiam vel lobortis nibh. Cras egestas iaculis nisi, eget ultrices arcu sollicitudin ac. Integer sollicitudin mauris erat, quis sodales odio eleifend non. Nullam imperdiet cursus lectus, eget ultrices enim ornare in. Donec lobortis felis vitae laoreet euismod. Vivamus quam est, commodo sit amet ligula eget, pretium tempor arcu. Integer porta mollis quam in condimentum. Donec eleifend risus in tempus rutrum. Suspendisse feugiat vulputate venenatis. Donec vel diam non ipsum ultricies commodo eu ac sapien. Donec id lobortis nisl, vel tempor nisi. Integer interdum rhoncus felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Proin bibendum hendrerit nibh quis placerat. Vestibulum vitae tortor id arcu euismod bibendum ac id justo. Fusce vitae lacinia sem. Suspendisse facilisis bibendum tristique. In mattis ultricies eros, vitae elementum massa fringilla sit amet. Aliquam bibendum id enim porttitor eleifend."

const numberOfWords = paragraphe.split(' ');
console.log(`There are ${numberOfWords.length-1} words in the paragraph.`);

const numberOfEt = paragraphe.split('et');
console.log(`There are ${numberOfEt.length-1} occurences of "et" in the paragraph.`);

const phraseToCheck = "Was it a car or a cat I saw?";

let phraseReverse = "";