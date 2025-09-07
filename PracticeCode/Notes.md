## string Methods


- indexOf() : 
```
Returns the position of the first occurrence of a substring.

@param searchString — The substring to search for in the string

@param position — The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
```

- Split() : 

```
Split a string into substrings using the specified separator and return them as an array.

@param separator — A string that identifies character or characters to use in separating the string. 
If omitted, a single-element array containing the entire string is returned.

@param limit — A value used to limit the number of elements returned in the array.
```
- includes():
```
Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.

@param searchString — search string

@param position — If position is undefined, 0 is assumed, so as to search all of the String.
```

- lastIndexOf():
```
Returns the last occurrence of a substring in the string.

@param searchString — The substring to search for.

@param position — The index at which to begin searching. If omitted, the search begins at the end of the string.
```

- replace():
```
Replaces text in a string, using a regular expression or search string.

@param searchValue — A string or regular expression to search for.

@param replaceValue — A string containing the text to replace. When the searchValue is a RegExp, all matches are replaced if the g flag is set (or only those matches at the beginning, if the y flag is also present). Otherwise, only the first match of searchValue is replaced.
```

- replaceAll():
```
Replace all instances of a substring in a string, using a regular expression or search string.

@param searchValue — A string to search for.

@param replaceValue — A string containing the text to replace for every successful match of searchValue in this string.
```

- startsWith():

``` javascript
let text = "Hello Tushar";

console.log(text.startsWith("Hello"));   // true
console.log(text.startsWith("Tushar"));  // false
console.log(text.startsWith("Tushar", 6)); // true (starts checking at index 6)
```
- endsWith():
``` javascript
let text = "Hello Tushar";

console.log(text.endsWith("Tushar"));   // true
console.log(text.endsWith("Hello"));    // false
console.log(text.endsWith("Hello", 5)); // true (only checks first 5 chars: "Hello")

```