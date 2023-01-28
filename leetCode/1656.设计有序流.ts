/*
 * @lc app=leetcode.cn id=1656 lang=typescript
 *
 * [1656] 设计有序流
 */

// @lc code=start
class OrderedStream {
    private data: Array<string>;
    private ptr: number;
    constructor(n: number) {
        this.data = new Array(n);
        this.ptr = 0;
    }

    insert(idKey: number, value: string): string[] {
        this.data[idKey - 1] = value;
        const result: Array<string> = [];
        if (idKey - 1 === this.ptr) {
            while (this.data[this.ptr]) {
                result.push(this.data[this.ptr++]);
            }
        }

        return result;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end
