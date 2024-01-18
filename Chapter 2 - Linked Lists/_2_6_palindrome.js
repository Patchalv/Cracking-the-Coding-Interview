/*
A string is a palindrome if:
- String is only 1 character
- There is only 1 character with an odd frequency.
*/

class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
};

const printList = (head) => {
    while (head !== null) {
      console.log(head.value);
      head = head.next;
    }
};

const checkPalindrome = (head) => {
    let current = head;
    let array = [];
    let i = 0;


    while (current !== null) {
        array.push(current.value);
        current = current.next;
    }

    let j = array.length -1;

    for (i = 0; i < array.length; i++) {
        
        if (array[i] !== array[j]) return false;
        j--;
    }

    return true;

};





const a1 = new Node(0);
const a2 = new Node(1);
const a3 = new Node(2);
const a4 = new Node(1);
const a5 = new Node(0);

a1.next = a2;
a2.next = a3;
a3.next = a4;
a4.next = a5;

const b1 = new Node(0);
const b2 = new Node(2);
const b3 = new Node(2);
const b4 = new Node(1);
const b5 = new Node(0);

b1.next = b2;
b2.next = b3;
b3.next = b4;
b4.next = b5;

console.log(checkPalindrome(a1));
console.log(checkPalindrome(b1));
