/*
    STRING ROTATION

    Assume you have a method isSubstring which checks if one word is a substring of another. GIven two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring

    (e.g waterbottle is a rotation of erbottlewat)
*/

const isSubstring = (s1, s2) => {

    for (i = 0; i < s1.length; i++) {
        let partA = s1.slice(0, i);
        let partB = s1.slice(i);
        let newText = partB + partA;

        if (newText === s2) return true;
    }
    return false;
};

console.log(isSubstring('waterbottle', 'erbottlewat')); // True
console.log(isSubstring('cat', 'atc')); // True
console.log(isSubstring('Chicken', 'Chickens')); // False