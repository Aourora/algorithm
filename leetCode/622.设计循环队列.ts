/*
 * @lc app=leetcode.cn id=622 lang=typescript
 *
 * [622] 设计循环队列
 */

// @lc code=start
class MyCircularQueue {
    protected data: Array<number>;
    protected fIndex: number;
    protected rIndex: number;

    constructor(k: number) {
        this.data = new Array(k);
        this.fIndex = 0;
        this.rIndex = 0;
    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;
        this.data[this.fIndex++ % this.data.length] = value;
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;
        ++this.rIndex;
        return true;
    }

    Front(): number {
        return this.isEmpty() ? -1 : this.data[this.rIndex % this.data.length];
    }

    Rear(): number {
        return this.isEmpty()
            ? -1
            : this.data[(this.fIndex - 1) % this.data.length];
    }

    isEmpty(): boolean {
        return this.fIndex === this.rIndex;
    }

    isFull(): boolean {
        return this.fIndex - this.rIndex === this.data.length;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end
