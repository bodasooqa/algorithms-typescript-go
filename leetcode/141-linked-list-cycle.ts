class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;

    // slow - 1 step, fast - 2 steps
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        // Сдвигаем указатели
        slow = slow!.next;
        fast = fast.next.next;

        // Если есть цикл, то рано или поздно они встретятся
        if (slow === fast) return true;
    }

    // Если fast или fast.next стали null, значит цикла нет
    return false;
}

const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = node; // Цикл

hasCycle(node); // true