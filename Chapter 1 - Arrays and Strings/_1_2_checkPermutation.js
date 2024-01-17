/*
CHECK PERMUTATION

Given two strings, write a method to decide if one is a permutation of the other.
*/

let string1 = 'abcd';
let string2 = 'dacb';
let string3 = "test";
let string4 = "ttew";

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

console.log(checkPermutation(string1, string2)); // true
console.log(checkPermutation(string3, string4)); // false
