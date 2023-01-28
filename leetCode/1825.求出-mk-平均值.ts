/*
 * @lc app=leetcode.cn id=1825 lang=typescript
 *
 * [1825] 求出 MK 平均值
 */

// @lc code=start

class MultiSet<T> {
    constructor(
        private compare: (a: T, b: T) => number,
        private data: Array<T> = []
    ) {}

    public insert(ele: T): void {
        const { data, size, compare } = this;
        let start = 0,
            end = size - 1;
        let mid: number;
        while (start <= end) {
            mid = start + ((end - start) >> 1);
            if (compare(data[mid], ele) >= 0) {
                if (mid === 0 || compare(data[mid - 1], ele) < 0) {
                    break;
                } else {
                    end = mid - 1;
                }
            } else {
                start = mid + 1;
            }
        }
        this.data.splice(start > end ? size : mid, 0, ele);
    }

    public push(ele: T): void {
        this.data.push(ele);
    }

    public unshift(ele: T): void {
        this.data.unshift(ele);
    }

    public delete(ele: T): boolean {
        if (this.isEmpty()) {
            return false;
        }
        const { data, size, compare } = this;
        let start = 0,
            end = size - 1;
        let mid: number;
        while (start <= end) {
            mid = start + ((end - start) >> 1);
            if (compare(data[mid], ele) > 0) {
                end = mid - 1;
            } else if (compare(data[mid], ele) < 0) {
                start = mid + 1;
            } else {
                break;
            }
        }
        if (start > end) return false;
        this.data.splice(mid, 1);
        return true;
    }

    public begin(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[0];
    }

    public end(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[this.size - 1];
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public clear(): void {
        this.data = [];
    }

    public get size(): number {
        return this.data.length;
    }
}

class MyQueue<T> {
    private data: Array<T> = [];
    constructor(private _size: number) {}

    public enQueue(ele: T): T {
        this.data.push(ele);
        if (this.size > this._size) {
            return this.deQueue();
        }
    }

    public deQueue(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data.shift();
    }

    public front(): T {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.data[0];
    }

    public all(): Array<T> {
        return this.data.slice();
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public clear(): void {
        this.data = [];
    }

    public get size(): number {
        return this.data.length;
    }
}

class MKAverage {
    protected queue: MyQueue<number>;
    protected sum: number = 0;
    protected m1: MultiSet<number>;
    protected m2: MultiSet<number>;
    protected m3: MultiSet<number>;

    constructor(protected m: number, protected k: number) {
        this.queue = new MyQueue(m);
    }

    addElement(num: number): void {
        const { queue, m, k } = this;
        const p = queue.enQueue(num);
        const { size } = queue;
        if (size === m) {
            if (p === undefined) {
                const t = queue.all();
                const f = (a: number, b: number): number => a - b;
                t.sort(f);
                this.m1 = new MultiSet(f, t.splice(0, k));
                this.m3 = new MultiSet(f, t.splice(-k));
                this.m2 = new MultiSet(f, t);
                this.sum = t.reduce((r, c) => r + c);
            } else {
                const { m1, m2, m3 } = this;
                if (num < m1.end()) {
                    const t = m1.end();
                    m1.insert(num);
                    m1.delete(t);
                    m2.insert(t);
                    this.sum += t;
                } else if (num > m3.begin()) {
                    const t = m3.begin();
                    m3.insert(num);
                    m3.delete(t);
                    m2.insert(t);
                    this.sum += t;
                } else {
                    m2.insert(num);
                    this.sum += num;
                }

                if (p > m2.end()) {
                    m3.delete(p);
                    const t = m2.end();
                    m2.delete(t);
                    m3.unshift(t);
                    this.sum -= t;
                } else if (p < m2.begin()) {
                    m1.delete(p);
                    const t = m2.begin();
                    m2.delete(t);
                    m1.push(t);
                    this.sum -= t;
                } else {
                    m2.delete(p);
                    this.sum -= p;
                }
            }
        }
    }

    calculateMKAverage(): number {
        const { queue, m, k, sum } = this;
        return queue.size < m ? -1 : Math.floor(sum / (m - 2 * k));
    }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
// @lc code=end
