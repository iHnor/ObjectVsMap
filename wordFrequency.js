function wordFrequency (text){
    let map = new Map();

    for (let i = 0; i < text.length; i++){ 
        // console.log(map.has(text[i]));
        lowerText = text[i].toLowerCase();

        if (map.has(lowerText) == false) {
            map.set(lowerText, 1);
            // console.log(text[i]);                
        }
        else {
            valueKey = map.get(lowerText)
            map.set(lowerText, valueKey + 1);
        }
        // console.log(map);
    }
    return map;
    // map.set(text[1], 1);
    // console.log(map.has(text[1]));

}

function printRezultat(printText){
    for (const [key, value] of printText){
        console.log(key,' - ', value);
    }
}

someText = 'Little red fox likes red box Red box is big'
let splitText = someText.split(' ');
// console.log(splitText);
let rezult = wordFrequency(splitText);
printRezultat(rezult);
// console.log(rezult);

