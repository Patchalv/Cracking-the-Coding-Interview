/*
CHECK PERMUTATION

Given two strings, write a method to decide if one is a permutation of the other.
*/

const checkPermutation = (stringA, stringB) => {

    // Create object as hash table.
    const count = {};

    for (let char of stringA) {
        if (char in count) {
            count[char]++;
        } else {
            count[char] = 1;
        }        
    }

    // If character exists in string B, reduce count by 1. If it doesn't not anagram so return false
    for (let char of stringB) {
        if (char in count) {
            count[char]--;
        } else {
            return false;
        }
    }

    // If any character count less than 0, then not anagram so return false
    for (let char in count) {
        if (count[char] !== 0) return false;
    }

    return true;
};

/*
n = length of stringA. m = length of stringB. 

TIME: O(n+m)
SPACE: O(1)

*/

console.log('Actual:', checkPermutation('abcd', 'dacb'), '//  Desired: true');
console.log('Actual:', checkPermutation('test', 'ttew'), '//  Desired: false');