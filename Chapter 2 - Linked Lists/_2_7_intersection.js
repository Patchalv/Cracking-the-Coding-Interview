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

const checkIntersection = (head1, head2) => {
    let current1 = head1;
    let current2 = head2;
    let tail1;
    let tail2;

    while (current1 !== null) {
        if (current1.next === null) {
            tail1 = current1;
        }
        current1 = current1.next;
    }

    while (current2 !== null) {
        if (current2.next === null) {
            tail2 = current2;
        }
        current2 = current2.next;
    }
    if (tail1 === tail2) {
        return true;
    } else {
        return false;
    }
}

const reverseList = (head) => {
    let current = head;
    let prev = null;

    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

const intersection = (head1, head2) => {
    if (!checkIntersection(head1, head2)) return false;

    let reverseHead1 = reverseList(head1);
    let current1 = reverseHead1;

    let reverseHead2 = reverseList(head2);
    let current2 = reverseHead2;
    console.log(reverseHead1);
    console.log(reverseHead2);

    /*
    while (current1 !== null || current2 !== null) {
        if (current1 === current2) return current1;
        current1 = current1.next;
        current2 = current2.next;
    }
    */
};













/* TEST */

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');
let h = new Node('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

let a1 = new Node('a1');
let b1 = new Node('b1');
let c1 = new Node('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;




/*
let a2 = new Node('a2');
let b2 = new Node('b2');
let c2 = new Node('c2');

a2.next = b2;
b2.next = c2;
*/

console.log(intersection(a, b1));