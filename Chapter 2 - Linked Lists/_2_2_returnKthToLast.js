const LinkedList = require('./until');

const findKthToLast = (k, list) => {
    let slow = list.head;
    let fast = list.head;

    for (i = 0; i < k; i++) {
        if (fast === null) return null;
        fast = fast.next;
    }

    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
};

/* TESTS */
let l = new LinkedList();
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)



console.log(findKthToLast(3, l));

console.log(findKthToLast(10, l));

console.log(findKthToLast(-1, l));

console.log(findKthToLast(0, l));

console.log(findKthToLast(1, l));