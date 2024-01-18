// Remove Dups
// PROBLEM: Write code to remove duplicates from an unsorted linked list.

const LinkedList = require("./until");


const printList = (head) => {
    let current = list.head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
};


const removeDups = (list) => {
    const values = [];
    let cur = list.head;
    let prev = null;

    while (cur !== null) {
        if (values.includes(cur.value)) {
            //Duplicate found
            let elem = cur;
            prev.next = cur.next;
            cur = cur.next;
            elem.next = null;
        } else {
            // New value, add to array
            values.push(cur.value);
            prev = cur;
            cur = cur.next;
        }
    }
    
    return list;
};

//quick test
let list = new LinkedList();
for (let elem of [1, 5, 1, 6, 8, 6, 8, 8, 8, 8]) {
  list.append(elem);
}

removeDups(list);
console.log(list._toArray()); // [1, 5, 6, 8]



/* TESTS 
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

const f = new Node('f');
const g = new Node('g');
const h = new Node('g');
const i = new Node('g');
const j = new Node('g');

f.next = g;
g.next = h;
h.next = i;
i.next = j;


const k = new Node('g');
const l = new Node('g');
const m = new Node('g');
const n = new Node('b');
const o = new Node('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;
*/
