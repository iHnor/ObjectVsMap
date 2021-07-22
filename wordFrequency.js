function wordFrequency (text){
    let words = text.toLowerCase().split(' ');
    let map = new Map();

    for (let i = 0; i < words.length; i++){ 
        let word = words[i];
        
        if (map.has(word)) {
            let count = map.get(word)
            map.set(word, count + 1);
        }
        else {
            map.set(word, 1);
         
        }
    }
    return map;
}
module.exports = wordFrequency;

function printRezultat(printText){
    for (const [key, value] of printText){
        console.log(key,' - ', value);
    }
}

let someText = 'red black'
let rezult = wordFrequency(someText);
printRezultat(rezult);

