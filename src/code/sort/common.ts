export type CompareFnType<T> = (a: T, b: T) => number;

export const defaultCompareFn = (a: unknown, b: unknown): number => {
    const _a = JSON.stringify(a);
    const _b = JSON.stringify(b);

    let index = 0;
    while (_a.charCodeAt(index) === _b.charCodeAt(index++));
    if (_a.charAt(--index) && _b.charAt(index)) {
        return _a.charCodeAt(index) - _b.charCodeAt(index);
    } else if (_a.charAt(index)) {
        return 1;
    } else {
        return -1;
    }
};
