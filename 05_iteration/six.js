const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach( (item) => { // arrow function 
//     console.log(item);
//     return item;
// } )

// console.log(values);

const myNum = [1, 2, 3, , 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter( (num) => num > 4)
// console.log(newNum);

// const newNum = []

// myNum.forEach( (num) => {
//     if (num > 4){
//         newNum.push(num)
//     }
// } )

// console.log(newNum);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  { title: 'Book Ten', genre: 'Fiction', publish: 2000, edition: 2005 },
  { title: 'Book Eleven', genre: 'Science', publish: 1995, edition: 2002 },
  { title: 'Book Twelve', genre: 'History', publish: 2003, edition: 2012 },
  { title: 'Book Thirteen', genre: 'Non-Fiction', publish: 1983, edition: 1991 },
  { title: 'Book Fourteen', genre: 'Fiction', publish: 2010, edition: 2017 },
  { title: 'Book Fifteen', genre: 'Science', publish: 1998, edition: 2004 },
  { title: 'Book Sixteen', genre: 'History', publish: 1985, edition: 1993 },
  { title: 'Book Seventeen', genre: 'Non-Fiction', publish: 2006, edition: 2013 },
  { title: 'Book Eighteen', genre: 'Fiction', publish: 1991, edition: 1999 },
  { title: 'Book Nineteen', genre: 'Science', publish: 2015, edition: 2020 },
  { title: 'Book Twenty', genre: 'History', publish: 2007, edition: 2015 },
  { title: 'Book Twenty-One', genre: 'Non-Fiction', publish: 1982, edition: 1990 },
  { title: 'Book Twenty-Two', genre: 'Fiction', publish: 1996, edition: 2001 },
  { title: 'Book Twenty-Three', genre: 'Science', publish: 2004, edition: 2011 },
  { title: 'Book Twenty-Four', genre: 'History', publish: 1988, edition: 1995 },
  { title: 'Book Twenty-Five', genre: 'Fiction', publish: 2012, edition: 2018 }
];

let userBooks = books.filter( (bk) => {
        return bk.publish > 2005 && bk.genre === "Science"
} )

userBooks = books.filter( (bk) => bk.genre === "Fiction")

console.log(userBooks);
