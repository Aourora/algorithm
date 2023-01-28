import { cloneDeep } from 'lodash';

export default class Queue<T> {
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
        return cloneDeep(this.data);
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
