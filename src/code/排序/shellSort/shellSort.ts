import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 希尔排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function shellSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const { length } = source;
    for (let step = length >> 1; step > 0; step >>= 1) {
        for (let i = step; i < length; ++i) {
            let j = i - step;
            const value = source[i];
            for (; j >= 0; j -= step) {
                if (compareFn(value, source[j]) < 0) {
                    source[j + step] = source[j];
                } else {
                    break;
                }
            }
            source[j + step] = value;
        }
    }

    return source;
}
