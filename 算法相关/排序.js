//冒泡排序
/**
 * 1.原地排序算法
 * 2.稳定的排序算法
 * 3.best:O(n) bad:O(n*2) avg:O(n*2)
 * @param {Number[]} arr 排序数组
 * @param {boolean} dir 排序方向 true---小->大 false---大->小
 * @returns {Number[]} 排序后数组
 */
function bubbleSort(arr, dir) {
    const isCompare = dir ? (a, b) =>
        a > b
        : (a, b) =>
            a < b;
    for (let i = 0, len = arr.length; i < len; ++i) {
        let flag = false;
        for (let j = 0; j < len - i - 1; ++j) {
            if (isCompare(arr[j], arr[j + 1])) {
                flag = true;
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        if (!flag) break;
    }
    return arr;
}


//插入排序
/**
 * 1.原地排序算法
 * 2.稳定的排序算法
 * 3.best:O(n) bad:O(n*2) avg:O(n*2)
 * 
 * @param {Number[]} arr 排序数组
 * @param {boolean} dir 排序方向 true---小->大 false---大->小
 * @returns {Number[]} 排序后数组
 */
function insertSort(arr, dir) {
    const isCompare = dir ? (a, b) =>
        a > b
        : (a, b) =>
            a < b;

    for (let i = 1, len = arr.length; i < len; ++i) {
        let j = i - 1;
        let value = arr[i];
        for (; j >= 0; --j) {
            if (isCompare(arr[j], value)) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            } else {
                break;
            }
        }
        arr[j + 1] = value;
    }

    return arr;

}

//选择排序
/**
 * 1.原地排序算法
 * 2.不稳定的排序算法
 * 3.best:O(n*2) bad:O(n*2) avg:O(n*2)
 * 
 * @param {Number[]} arr 排序数组
 * @param {boolean} dir 排序方向 true---小->大 false---大->小
 * @returns {Number[]} 排序后数组
 */
function selectSort(arr, dir) {
    const isCompare = dir ? (a, b) =>
        a > b
        : (a, b) =>
            a < b;
    for (let i = 0, len = arr.length; i < len - 1; ++i) {

        for (let j = i + 1; j < len; ++j) {
            if (isCompare(arr[i], arr[j])) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }

    }

    return arr;
}

//归并排序
/**
 * 1.非原地排序算法（O(n)）
 * 2.稳定的排序算法
 * 3.O(nlogn)
 * 
 * @param {Number[]} arr 排序数组
 * @param {boolean} dir 排序方向 true---小->大 false---大->小
 * @returns {Number[]} 排序后数组
 */
function mergeSort(arr, dir) {
    const isCompare = dir ? (a, b) =>
        a > b
        : (a, b) =>
            a < b;
    const logic = (start, end) => {
        if (start >= end) return;
        const mid = Math.floor((end + start) / 2);
        logic(start, mid);
        logic(mid + 1, end);
        let i = start, j = mid + 1, k = 0, temp = [];
        while (i <= mid && j <= end) {
            temp.push(isCompare(arr[j], arr[i]) ? arr[i++] : arr[j++]);
        }
        while (i <= mid) {
            temp.push(arr[i++]);
        }
        while (j <= end) {
            temp.push(arr[j++]);
        }
        for (i = 0, len = temp.length; i < len; ++i) {
            arr[start + i] = temp[i];
        }
    }
    logic(0, arr.length - 1);
    return arr;
}

//快速排序
/**
 * 1.原地排序算法
 * 2.非稳定的排序算法
 * 3.O(nlogn)
 * 
 * @param {Number[]} arr 排序数组
 * @param {boolean} dir 排序方向 true---小->大 false---大->小
 * @returns {Number[]} 排序后数组
 */
function fastSort(arr, dir) {
    const isCompare = dir ? (a, b) =>
        a > b
        : (a, b) =>
            a < b;
    const logic = (start, end) => {
        if (start >= end) return;
        const taget = arr[end];
        let i = start;
        for (let j = start; j < end; ++j) {
            if (isCompare(taget, arr[j])) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i++] = temp;

            }
        }
        arr[end] = arr[i];
        arr[i] = taget;

        logic(start, i - 1);
        logic(i + 1, end);
    }
    logic(0, arr.length - 1);
    return arr;
}


//console.log(fastSort([5, 3, 8, 9, 1, 0, 0], true));




//快速排序

function test(arr, bool) {
    const isCompare = bool ? (a, b) => a > b : (a, b) => a < b;
    const logic = (start, end) => {
        if (start >= end) return;
        const target = arr[end];
        let i = start, j = start;
        while (j < end) {
            if (isCompare(arr[j], target)) {
                const temp = arr[i];
                arr[i++] = arr[j];
                arr[j] = temp;
            }
            ++j;
        }
        arr[end] = arr[i];
        arr[i] = target;
        logic(start, i - 1);
        logic(i + 1, end);
    }
    logic(0, arr.length - 1);
    return arr;
}

//console.log(test([5, 3, 8, 9, 1, 0, 0], true));

//计数排序
function countingSort(arr) {
    let min = Infinity, max = -Infinity;
    for (let i = 0, { length } = arr; i < length; ++i) {
        min = Math.min(arr[i], min);
        max = Math.max(arr[i], max);
    }
    const C = new Array(max - min + 1).fill(0);
    for (let i = 0, { length } = arr; i < length; ++i) {
        C[arr[i] - min] += 1;
    }
    for (let i = 1, { length } = C; i < length; ++i) {
        C[i] += C[i - 1];
    }
    const result = new Array(arr.length);
    for (let i = arr.length - 1; i >= 0; --i) {
        result[C[arr[i] - min] - 1] = arr[i];
        C[arr[i] - min] -= 1;
    }
    return result;
}

// console.log(countingSort([5, -1, 2, -5, 1, 5, 7, 9, 3, 2, 6, 7, 4]));




/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
    const tabel = {
        '(': -1,
        ')': 1
    }
    const stack = [];
    const left = [], right = [];
    for (let i = 0, { length } = s; i < length; i++) {
        const top = stack[stack.length - 1];
        if (tabel[s[i]]) {
            tabel[s[i]] > 0 ? right.push(i) : left.push(i);
            if (s[i] === '(' || !top || top > 0) {
                stack.push((i + 1) * tabel[s[i]]);
            } else if (s[i] === ')') {
                stack.pop();
            }
        }
    }
    if (stack.length === 0) return [s];
    let res = [s];
    Array.prototype.includes = function (target) {
        if (this.valueOf().length === 0) return false;
        return !this.valueOf().every(value => value.replace(/_/g, '') !== target.replace(/_/g, ''));
    }
    let leftStack = []
    while (stack.length && stack[stack.length - 1] < 0) {
        leftStack.push(stack.pop());
    }
    const logic = (value) => {
        if (value > 0) {
            const newRes = [];
            for (let j = 0; right[j] <= value - 1; ++j) {
                for (let k = 0; k < res.length; ++k) {
                    if (res[k][right[j]] === '_') continue;
                    const temp = res[k].substring(0, right[j]) + '_' + res[k].substring(right[j] + 1, 25);
                    if (!newRes.includes(temp)) {
                        newRes.push(temp);
                    }
                }

            }
            res = newRes;
        } else {
            const newRes = [];
            for (let j = left.length - 1; left[j] >= -value - 1; --j) {
                for (let k = 0; k < res.length; ++k) {
                    if (res[k][left[j]] === '_') continue;
                    const temp = res[k].substring(0, left[j]) + '_' + res[k].substring(left[j] + 1, 25);
                    if (!newRes.includes(temp)) {
                        newRes.push(temp);
                    }
                }

            }
            res = newRes;
        }
    }
    for (let i = 0, { length } = stack; i < length; ++i) {
        logic(stack[i]);
    }
    for (let i = 0, { length } = leftStack; i < length; ++i) {
        logic(leftStack[i]);
    }
    return res.length === 0 ? [''] : res.map(value => value.replace(/_/g, ''));
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const { length: m } = ransomNote;
    const { length: n } = magazine;

    if (n < m) return false;

    const cnt = new Array(26).fill(0);
    const start = 'a'.charCodeAt();
    for (let i = 0; i < n; ++i) {
        ++cnt[magazine[i].charCodeAt() - start];
    }

    for (let i = 0; i < m; ++i) {
        const index = ransomNote[i].charCodeAt() - start;
        if (!cnt[index]) {
            return false;
        }
        --cnt[index];
    }

    return true;
};