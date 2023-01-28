/*
 * @lc app=leetcode.cn id=1636 lang=typescript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start

function flat<T>(data: any): Array<T> {
    const result: Array<any> = [];
    const logic = (data: any): void => {
        if (data instanceof Array) {
            data.forEach((d) => logic(d));
        } else {
            result.push(data);
        }
    };
    logic(data);
    return result;
}

function frequencySort(nums: number[]): number[] {
    const obj: Record<number, number> = {};
    nums.forEach((value) => {
        obj[value] = obj[value] ? ++obj[value] : 1;
    });
    const keys = Object.keys(obj);
    keys.sort((a, b) => obj[+a] - obj[+b] || +b - +a);
    // return keys.map((key) => new Array(obj[+key]).fill(+key)).flat();
    return flat(keys.map((key) => new Array(obj[+key]).fill(+key)));
}
// @lc code=end
