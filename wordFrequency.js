function wordFrequency (text){
    let map = new Map();
    map.set(text[1], 1);
    console.log(map.has(text[1]));    
}

someText = 'Little red fox likes red box Red box is big'
let splitText = someText.split(' ');
// console.log(splitText);
let rezult = wordFrequency(someText); 