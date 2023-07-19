//数组栈
class ArrayStack<T> {
    private stack: T[];
    constructor() {
        this.stack = [];
    }
    push(item: T): void {
        this.stack.push(item);
    }
    pop(): T {
        return this.stack.length > 0 ? this.stack.pop() : null;
    }
}

function computeMaxCallStackSize(): number {
    try {
        return 1 + computeMaxCallStackSize();
    } catch (e) {
        // Call stack overflow
        return 1;
    }
}

// console.log(computeMaxCallStackSize());
