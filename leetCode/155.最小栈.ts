/*
 * @lc app=leetcode.cn id=155 lang=typescript
 *
 * [155] 最小栈
 */

// @lc code=start

//辅助栈
class MinStack {
    private stack: number[];
    private minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        this.minStack.push(Math.min(val, this.getMin()));
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        if (!this.minStack.length) return Infinity;
        return this.minStack[this.minStack.length - 1];
    }
}

// //元组
// class MinStack {
//     private stack: { val: number; min: number }[];
//     constructor() {
//         this.stack = [];
//     }

//     push(val: number): void {
//         const min = Math.min(val, this.getMin());
//         this.stack.push({ val, min });
//     }

//     pop(): void {
//         this.stack.pop();
//     }

//     top(): number {
//         return this.stack[this.stack.length - 1].val;
//     }

//     getMin(): number {
//         if (!this.stack.length) return Infinity;
//         return this.stack[this.stack.length - 1].min;
//     }
// }

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
