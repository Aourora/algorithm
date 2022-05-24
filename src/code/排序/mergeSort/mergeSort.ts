import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 归并排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function mergeSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const mergeSort = (start: number, end: number): Array<T> => {
        if (start >= end) return [source[start]];
        const mid = start + ((end - start) >> 1);
        return merge(mergeSort(start, mid), mergeSort(mid + 1, end), compareFn);
    };
    return mergeSort(0, source.length - 1);
}

const merge = <T>(
    left: Array<T>,
    right: Array<T>,
    compareFn: CompareFnType<T>
): Array<T> => {
    let temp: Array<T> = [];
    let i = 0;
    let j = 0;
    while (left[i] !== void 0 && right[j] !== void 0) {
        temp.push(compareFn(right[j], left[i]) < 0 ? right[j++] : left[i++]);
    }
    temp = temp.concat(left.slice(i), right.slice(j));
    return temp;
};
