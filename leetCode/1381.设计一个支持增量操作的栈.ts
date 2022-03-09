/*
 * @lc app=leetcode.cn id=1381 lang=typescript
 *
 * [1381] 设计一个支持增量操作的栈
 */

// @lc code=start
class CustomStack {
    private maxSize: number;
    private stack: number[];
    private assist: number[];
    private top: number;
    constructor(maxSize: number) {
        this.maxSize = maxSize;
        this.stack = new Array(maxSize);
        this.assist = new Array(maxSize).fill(0);
        this.top = -1;
    }

    push(x: number): void {
        if (this.top < this.maxSize - 1) {
            this.stack[++this.top] = x;
        }
    }

    pop(): number {
        if (this.top < 0) {
            return -1;
        } else {
            const { top, stack, assist } = this;
            const result = stack[top] + assist[top];
            if (top > 0) {
                assist[top - 1] += assist[top];
            }
            assist[this.top--] = 0;
            return result;
        }
    }

    increment(k: number, val: number): void {
        const index = k > this.top ? this.top : k - 1;
        this.assist[index] += val;
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
// @lc code=end
