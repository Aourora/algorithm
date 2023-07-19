import { CompareFnType, defaultCompareFn } from '../common';
/**
 * 快速排序
 * @param source 待排序数组
 * @param compareFn 排列函数
 * @returns 排序后数组
 */
export function quickSort<T>(
    source: Array<T>,
    compareFn: CompareFnType<T> = defaultCompareFn
): Array<T> {
    const quick = (start: number, end: number): void => {
        if (start >= end) return;
        const pivot = source[end];
        let i = start;
        let j = i;
        while (j < end) {
            if (compareFn(source[j], pivot) < 0) {
                const temp = source[i];
                source[i] = source[j];
                source[j] = temp;
                ++i;
            }
            ++j;
        }
        source[end] = source[i];
        source[i] = pivot;
        quick(start, i - 1);
        quick(i + 1, end);
    };

    quick(0, source.length - 1);
    return source;
}
