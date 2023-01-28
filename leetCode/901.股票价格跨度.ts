/*
 * @lc app=leetcode.cn id=901 lang=typescript
 *
 * [901] 股票价格跨度
 */

// @lc code=start
class StockSpanner {
    protected stack: Array<{ price: number; value: number }>;
    constructor() {
        this.stack = [];
    }

    next(price: number): number {
        let value = 1;
        while (
            this.stack.length &&
            this.stack[this.stack.length - 1].price <= price
        ) {
            value += this.stack.pop()!.value;
        }
        this.stack.push({ price, value });
        return value;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
// @lc code=end
