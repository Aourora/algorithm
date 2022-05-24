import { isEqual } from 'lodash';

interface Node<T> {
    val: T;
    next: Node<T> | null;
}

export default class SinglyLinkedList<T> {
    private head!: Node<T> | null;

    private size: number = 0;

    public get length(): number {
        return this.size;
    }

    /**
     * 查找元素是否在链表中
     * @param searchElement
     * @returns boolean
     */
    public has(searchElement: T): boolean {
        let node: Node<T> | null = this.head;
        while (node) {
            if (isEqual(node.val, searchElement)) {
                return true;
            }
            node = node.next;
        }
        return false;
    }

    /**
     * 修改某个元素的值
     * @param index
     * @param value
     * @returns 是否修改成功
     */
    public set(index: number, value: T): boolean {
        if (index < 0 || index >= this.size) return false;
        let i = 0;
        let node: Node<T> | null = this.head;
        while (node!.next && i < index) {
            ++i;
            node = node!.next;
        }
        node!.val = value;
        return true;
    }

    /**
     * 获取某个index位置的元素
     * @param index
     * @returns
     */
    public get(index: number): T | null {
        if (index < 0 || index >= this.size) return null;
        let i = 0;
        let node: Node<T> | null = this.head;
        while (node!.next && i < index) {
            ++i;
            node = node!.next;
        }
        return node!.val;
    }

    /**
     *  向链表中插入元素
     * @param val 元素
     * @param index 插入位置 index < 1 插入链表头部 index >= size 插入链表尾部
     */
    public push(val: T, index?: number): void {
        if (index === void 0) {
            index = this.size;
        }
        const listNode: Node<T> = { val, next: null };

        if (this.size < 1) {
            this.head = listNode;
        } else if (index < 1) {
            listNode.next = this.head;
            this.head = listNode;
        } else {
            let i = 1;
            let node: Node<T> | null = this.head;
            while (node!.next && i < index) {
                ++i;
                node = node!.next;
            }
            listNode.next = node!.next;
            node!.next = listNode;
        }
        ++this.size;
    }

    /**
     * 删除链表中的元素
     * @param index 删除位置 index < 1 删除链表头部 index >= size 删除链表尾部
     * @returns 被删除的元素
     */
    public pop(index?: number): T | null {
        if (this.size < 1) return null;

        if (index === void 0) {
            index = this.size;
        }
        let result;

        if (index < 1 || this.size === 1) {
            result = this.head;
            this.head = this.head!.next;
        } else {
            let node: Node<T> | null = this.head;
            let i = 1;
            while (i < index && node!.next!.next) {
                ++i;
                node = node!.next;
            }
            result = node;
            node!.next = node!.next!.next;
        }
        --this.size;
        return result!.val;
    }

    /**
     * 翻转链表
     * @returns
     */
    public revert(): void {
        if (this.size < 1) return;
        let pre = null;
        let next = null;
        let node = this.head;
        while (node) {
            next = node.next;
            node.next = pre;
            pre = node;
            node = next;
        }
        this.head = pre;
    }

    /**
     * 清空链表
     */
    public clear(): void {
        this.head = null;
    }

    /**
     * DeLog
     */
    public log(): void {
        let node: Node<T> | null = this.head;
        while (node) {
            console.log(node.val);
            node = node.next;
        }
        console.log('---------------length', this.length);
    }
}

//test
const t = new SinglyLinkedList<number>();
t.push(1);
t.push(2, -3);
t.push(3, 8);
t.push(4, 1);
t.push(5);
t.log();
t.pop(10);
t.log();
t.set(2, 10);
t.log();
t.revert();
t.log();
