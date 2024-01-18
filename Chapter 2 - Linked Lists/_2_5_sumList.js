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

const sumList = (head1, head2) => {
    let dummyHead = new Node(null);
    let tail = dummyHead;

    let current1 = head1;
    let current2 = head2;
    let carry = 0;

    while (current1 !== null || current2 !== null || carry !== 0 ) {
        const val1 = current1 === null ? 0 : current1.value;
        const val2 = current2 === null ? 0 : current2.value;

        let sum = val1 + val2 + carry;
        carry = sum > 9 ? 1 : 0;
        let digit = sum % 10;

        tail.next = new Node(digit);
        tail = tail.next;

        if (current1 !== null) current1 = current1.next;
        if (current2 !== null) current2 = current2.next;
    }

    printList(dummyHead.next);

};

const a1 = new Node(1);
const a2 = new Node(2);
const a3 = new Node(6);
a1.next = a2;
a2.next = a3;
// 1 -> 2 -> 6

const b1 = new Node(4);
const b2 = new Node(5);
const b3 = new Node(3);
b1.next = b2;
b2.next = b3;
// 4 -> 5 -> 3

sumList(a1, b1);
// 5 -> 7 -> 9
