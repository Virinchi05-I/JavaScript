// for iterating over object 
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(key)
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programming = ["js", "cpp", "py", "rb", "swift"];

for (const key in programming) {
    // console.log(key);   
}

const map = new Map(); // iterating over map
map.set('IN', "India");
map.set('US', "United States of America");
map.set('EN', "England");
map.set('CA', "Canada");
map.set('IN', "India");

for (const key in map) {
    console.log(key);
    
}