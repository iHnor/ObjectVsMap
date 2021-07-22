function wordFrequency (text){
    text = text.split(' ');
    let map = new Map();

    for (let i = 0; i < text.length; i++){ 
        let lowerText = text[i].toLowerCase();

        if (map.has(lowerText) == false) {
            map.set(lowerText, 1);
        }
        else {
            let valueKey = map.get(lowerText)
            map.set(lowerText, valueKey + 1);
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

