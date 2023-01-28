export default class MultiSet<T> {
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

    public log(): void {
        console.log(this.data.toString());
    }
}
