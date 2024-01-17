// Remove Dups
// PROBLEM: Write code to remove duplicates from an unsorted linked list.

/* CLASS */
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


/* FUNCTIONS */
const printList = (head) => {
    const values = [];
    let current = head;
    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }
    console.log(values)
};

  

const removeDups = (head) => {
    let current = head;
    let elementToCHeck = current.next;

    while (current !== null) {
        if (current === current.next)




    }

}











/* TESTS */
const a = new LinkedList('a');
const b = new LinkedList('b');
const c = new LinkedList('c');
const d = new LinkedList('d');
const e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log('Test 01 - Expected False');
console.log(checkDups(a));

const f = new LinkedList('f');
const g = new LinkedList('g');
const h = new LinkedList('g');
const i = new LinkedList('g');
const j = new LinkedList('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;


const k = new LinkedList('g');
const l = new LinkedList('g');
const m = new LinkedList('g');
const n = new LinkedList('b');
const o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

