const LinkedList = require('./until');
const printList = require('./printList');


class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
};


const partition = (list, partitionNode) => {
    let current = list.head;

    const list1DummyHead = new Node(null);
    const head1 = list1DummyHead.next;
    let current1 = head1;

    const list2DummyHead = new Node(null);
    list2DummyHead.next = partitionNode;
    let head2 = list2DummyHead.next;
    let current2 = head2;

    while (current !== null) {
        if (partitionNode >= current.value) {
            current2.next = new Node(current.value);
            current2 = current2.next;
        } else {
            current1.next = new Node(current.value);
            current1 = current2.next;
        }
        current = current.next;
    }

    printList(head1);
    printList(head2);
};

/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 2 -> 1 -> 5 -> 5 -> 8 -> 10

var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

partition(a, 5);
