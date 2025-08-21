const arr = [1, 2, 3, 4, 5] // iteration over array
for (const element of arr) {
    // console.log(element)
}

const greetings = "Hello World" // iteration over string
for (const word of greetings) { 
    // if( word === " "){
    //     continue;
    // }else{
    // console.log(`Each char is ${word}`);
    // }

    // console.log(`Each char is ${word}`);
}
 
const map = new Map(); // iterating over map
map.set('IN', "India");
map.set('US', "United States of America");
map.set('EN', "England");
map.set('CA', "Canada");
map.set('IN', "India");

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',
}

// for (const [key, value] of myObject) {
//     console.Log(key, ':-', value)
// }

