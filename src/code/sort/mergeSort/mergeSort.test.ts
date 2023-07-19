import 'mocha';
import { expect } from 'chai';
import { CompareFnType } from '../common';
import { mergeSort } from './mergeSort';

const work = <T>(source: Array<T>, compareFn?: CompareFnType<T>): void => {
    expect(mergeSort([...source], compareFn)).to.be.deep.equal(
        [...source].sort(compareFn)
    );
};

describe('mergeSort函数测试', function () {
    it('可以正常排序', function () {
        work([1, 2, 2, 3]);
        work([1, 3, 2, 3]);
        work([-1, -11, -8, -89]);
        work([11, 10, 9, 91]);
        work([11, 10, 2, 3], (a, b) => a - b);
        work([11, 10, 2, 3], (a, b) => b - a);
        work([11, 10, 2, 3], () => 0);
        work([11, 10, 2, 3], () => 1);
        work([11, 10, 2, 3], () => -1);
    });
});
