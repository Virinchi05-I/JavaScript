// While loop

let i = 0
while (i < 10) {
    // i++ // pre increment // output --> 0 1 2 3 4 5 6 7 8 9
    // console.log(i);
    i++ // post increment // output -->  1 2 3 4 5 6 7 8 9 10
}

let arr = [1, 4, 8, 14, 17, 21]
let sum = 0;

let j = 0
do {
    sum = arr[j] + sum
    j++
} while (j < arr.length)

// console.log(sum)

let k = 1
do {
    k++
    console.log("DO-WHILE : loop is running")
} while (k < 5);

let a = 1;
while(a < 5){
    console.log("WHILE: loop is running");
    a++
}