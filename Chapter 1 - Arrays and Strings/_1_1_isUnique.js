/*
IS UNIQUE

A) Implement an algorithm to determine if a string has all unique characters. 

B) What if you cannot use additional data structures

*/

const string1 = 'a1b2c3d4e5';
const string2 = 'abcdeeffg';
//Outcome: boolean true or false

const isUnique = (string) => {
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[i] === string[j] && i !== j) return false;
        }
    }
    return true;
};

/*
Time: O(n2) due to nested for loops
Space: O(1)
*/

console.log(isUnique(string1)); // true
console.log(isUnique(string2)); // false