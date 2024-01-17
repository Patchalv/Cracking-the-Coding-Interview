/*
    ONE WAY

    There are three types of edits that can be performed on strings: 
    - insert a character
    - remove a character
    - replace a character
    Given two strings, write a function to check if they are one or zero edits away.

    Example:
    pale, ple -> true
    pales, pale -> true
    pale, bake -> false
*/

/*
    FALSE IF:
    - String1 length is not equal to, plus + or minus 1 to length of String2

    Create hashmap object literal where each character of string1 is key and frequency is value. 
    Loop through each character from string2. If present in object, reduce by one. 
    If sum of values is more than 1, must be false.
    Otherwise true.
*/


const oneWay = (string1, string2) => {
    let count = {};
    let reducedString1 = '';
    let reducedString2 = '';
    let num = 0;
 
    // Remove spaces and all characters to lower case.    
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== ' ') reducedString1 += string1[i].toLowerCase();
    }
    
    for (let i = 0; i < string2.length; i++) {
        if (string2[i] !== ' ') reducedString2 += string2[i].toLowerCase();
    }

    // Check if lengths the same
    let stringLengthDifference = reducedString1.length - reducedString2.length;

    if (stringLengthDifference > 1 || stringLengthDifference < -1) return false;

    for (let char of reducedString1) {
        if (!(char in count)) count[char] = 0;
        count[char]++;
    }
    
    for (let char of reducedString2) {
        if (char in count && count[char] > 0) count[char]--;
    }

    for (let char in count) {
        num += count[char];
    }
    
    if (num > 1) {
        return false;
    } else {
        return true;
    }
    
};

/*
n = length of string
    Runtime: O(n)
*/

console.log(oneWay('Pale', 'ple'), 'true');
console.log(oneWay('Pale', 'Pales'), 'true');
console.log(oneWay('Pale', 'Bake'), 'false');
console.log(oneWay('Pale', 'pppe'), 'false');
console.log(oneWay('Pale', 'Paleeeeeee'), 'false');





