/*
 * @lc app=leetcode.cn id=380 lang=typescript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
class RandomizedSet {
    private _map: Map<string, number>;
    private _array: number[];
    constructor() {
        this._map = new Map();
        this._array = [];
    }

    insert(val: number): boolean {
        if (this._map.has(`${val}`)) return false;
        this._map.set(`${val}`, this._array.push(val) - 1);
        return true;
    }

    remove(val: number): boolean {
        if (!this._map.has(`${val}`)) return false;
        const v = this._array.pop();
        const i = this._map.get(`${val}`);
        if (i < this._array.length) {
            this._map.set(`${v}`, i);
            this._array[i] = v;
        }
        this._map.delete(`${val}`);
        return true;
    }

    getRandom(): number {
        return this._array[Math.floor(Math.random() * this._array.length)];
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
