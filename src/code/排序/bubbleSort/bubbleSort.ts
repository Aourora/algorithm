import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 冒泡排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function bubbleSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const { length } = source;
    for (let i = 0; i < length; ++i) {
        for (let j = 0; j < length - i - 1; ++j) {
            if (compareFn(source[j + 1], source[j]) < 0) {
                const temp = source[j];
                source[j] = source[j + 1];
                source[j + 1] = temp;
            }
        }
    }
    return source;
}
