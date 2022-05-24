import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 选择排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function selectionSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const { length } = source;
    for (let i = 0; i < length - 1; ++i) {
        let value = source[i];
        let index = i;
        for (let j = i + 1; j < length; ++j) {
            if (compareFn(source[j], value) < 0) {
                value = source[j];
                index = j;
            }
        }
        if (index !== i) {
            source[index] = source[i];
            source[i] = value;
        }
        // for (let j = i + 1; j < length; ++j) {
        //     if (compareFn(source[j], source[i]) < 0) {
        //         const temp = source[i];
        //         source[i] = source[j];
        //         source[j] = temp;
        //     }
        // }
    }
    return source;
}
