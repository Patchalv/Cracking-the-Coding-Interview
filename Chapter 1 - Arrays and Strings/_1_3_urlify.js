/*
    URLIFY

    Write a method to replace all spaces in a string with "%20".
    You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the true length of the string.
*/

const urlify = (string) => {
    let url = '';

    for (let char of string) {
        if (char === ' ') {
            url += '%20';
        } else {
            url += char;
        }
    }
    return url;
}

/*
n = length of string.
Time: O(n)
Space: O(n)
*/

console.log('Actual:', urlify('Mr John Smith'), '//  Desired: Mr%20John%20Smith');
