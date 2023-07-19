import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 插入排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function insertionSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const { length } = source;
    for (let i = 1; i < length; ++i) {
        const value = source[i];
        let j = i - 1;
        for (; j >= 0; --j) {
            if (compareFn(value, source[j]) < 0) {
                source[j + 1] = source[j];
            } else {
                break;
            }
        }
        source[j + 1] = value;
    }
    return source;
}
