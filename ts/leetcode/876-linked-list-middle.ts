class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function middleNode(head: ListNode | null): ListNode | null {
    if (!head) return null;

    // slow - 1 step, fast - 2 steps
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        // Сдвигаем указатели
        slow = slow!.next;
        fast = fast.next.next;
    }

    return slow;
}
const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

middleNode(node); // Node with value 3