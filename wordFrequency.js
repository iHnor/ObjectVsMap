function wordFrequency (text){
    let map = new Map();

    for (let i = 0; i < text.length; i++){ 
        lowerText = text[i].toLowerCase();

        if (map.has(lowerText) == false) {
            map.set(lowerText, 1);
        }
        else {
            valueKey = map.get(lowerText)
            map.set(lowerText, valueKey + 1);
        }
    }
    return map;
    

}

function printRezultat(printText){
    for (const [key, value] of printText){
        console.log(key,' - ', value);
    }
}

someText = 'red Red rEd black'
let splitText = someText.split(' ');
let rezult = wordFrequency(splitText);
printRezultat(rezult);

