export default class Heap<T> {
    private count: number;
    private data: T[];

    constructor(private compare: (a: T, b: T) => number) {
        this.count = 0;
        this.data = [];
    }

    public insert(v: T): void {
        ++this.count;
        this.data[this.count] = v;
        let i = this.count,
            t = (i / 2) | 0;
        while (t > 0 && this.compare(this.data[t], this.data[i]) > 0) {
            [this.data[i], this.data[t]] = [this.data[t], this.data[i]];
            i = t;
            t = (i / 2) | 0;
        }
    }

    public delete(): T | undefined {
        if (!this.count) return undefined;
        const top = this.data[1];
        this.data[1] = this.data[this.count];
        --this.count;
        let i = 1,
            j = 1;
        while (true) {
            if (
                2 * i <= this.count &&
                this.compare(this.data[i], this.data[2 * i]) > 0
            )
                j = 2 * i;
            if (
                2 * i + 1 <= this.count &&
                this.compare(this.data[j], this.data[2 * i + 1]) > 0
            )
                j = 2 * i + 1;
            if (i === j) break;
            [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
            i = j;
        }
        return top;
    }
}
