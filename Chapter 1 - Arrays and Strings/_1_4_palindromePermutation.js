/*
    PALINDROME PERMUTATION

    Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards or backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. You can ignore casing and non-letter characters.
*/

/*

    PLANNDED SOLUTION:

    Create a hashmap using an object literal. Go through each character, ignoring spaces, and add them to the object as they key. Their frequency as the value.

    Iterate through the object and add how many frequencies are odd. 

    A string is a palindrome if:
    - String is only 1 character
    - There is only 1 character with an odd frequency.
*/

const isPalindrome = (string) => {
    let count = {};
    let newString = '';
    let oddCount = 0;

    // Remove spaces and all characters to lower case.    
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') newString += string[i].toLowerCase();
    }

    // If only 1 character, then must be palindrome.
    if (newString.length < 2) return true;


    // Create object characters as keys and frequency as value.
    for (let char of newString) {
        if (!(char in count)) {
            count[char] = 0;
        } 
        count[char]++;
    }

    for (let char in count) {
        if (count[char] %2 !== 0) oddCount++;
    }

    if (oddCount > 1) {
        return false;
    } else {
        return true;
    }
};

/*
n = length of string
    Runtime: O(n)
*/


console.log('Actual:', isPalindrome('I'), '//  Desired: true');
console.log('Actual:', isPalindrome('Taco cat'), '//  Desired: true');
console.log('Actual:', isPalindrome('Tact Coa'), '//  Desired: true');
console.log('Actual:', isPalindrome('Tact Boa'), '//  Desired: false');
console.log('Actual:', isPalindrome('Chicken'), '//  Desired: false');



