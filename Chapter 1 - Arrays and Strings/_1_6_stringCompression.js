/*
    STRING COMPRESSION

    Implement a method to perform basic string compresssion using the counts of repeated characters. For example the string aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your method should return the original string. You can assume that the string has only uppercase and lowercase letters (a-z).
*/


const stringCompression = (string) => {
    let i = 0;
    let j = 0;
    let compressedString = '';

    while (j < string.length + 1) {
        if (string[i] === string[j]) {
            j++;
        } else {
            compressedString += string[i];
            let num = (j - i).toString();
            compressedString += num;
            i = j;
            j++;
        }
    }

    if (compressedString.length < string.length) {
        return compressedString;
    } else {
        return string;
    }
};

console.log(stringCompression('aabcccccaaa'), 'a2b1c5a3');
console.log(stringCompression('aa'), 'aa');
console.log(stringCompression('aaaaaAaaaa'), 'a5A1a4');