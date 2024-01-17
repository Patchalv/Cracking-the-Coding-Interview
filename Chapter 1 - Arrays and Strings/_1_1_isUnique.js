/*
IS UNIQUE

A) Implement an algorithm to determine if a string has all unique characters. 

B) What if you cannot use additional data structures

*/

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

console.log('Actual:', isUnique('a1b2c3d4e5'), '//  Desired: true');
console.log('Actual:', isUnique('abcdeeffg'), '//  Desired: false');