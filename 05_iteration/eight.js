const myNums = [1, 2, 3, 4, 5]


// const sum = myNums.reduce( function(acc, currVal)  { 
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
//     return acc + currVal 
// }, 0);

const sum = myNums.reduce( (acc, currVal) => acc + currVal,   0)

console.log(sum);

const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 299
    },
    {
        itemName: "Java Course",
        price: 799
    },
    {
        itemName: "C++ Course",
        price: 599
    },
    {
        itemName: "Python Course",
        price: 999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
