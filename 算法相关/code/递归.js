//打印path求和
// function getPathNum(n, arr) {
//     const cache = new Map();
//     const path = [];
//     const logic = (m) => {
//         if (arr.includes(m)) {
//             path.push(m);
//             console.log(path.join('->'));
//             path.pop();
//             return m;
//         };
//         if (cache.get(m)) return cache.get(m);
//         path.push(1);
//         const L1 = logic(m - 1)
//         path.pop();
//         path.push(2);
//         const L2 = logic(m - 2);
//         path.pop();
//         //cache.set(m, L1 + L2);
//         return L1 + L2;
//     };
//     return logic(n)
// }

//优化版
function getPathNum(n, arr) {
    const cache = new Map();
    const logic = (m) => {
        if (arr.includes(m)) return m;
        if (cache.get(m)) return cache.get(m);
        const result = logic(m - 1) + logic(m - 2);
        cache.set(m, result);
        return result;
    };
    return logic(n);
}

// const a = 1000001, b = 2;
// console.time('time');
// for (let i = 0, num = 10000_0000_0; i < num; ++i) {
//     a ** b;
// }
// console.timeEnd('time');
// console.time('time1');
// for (let i = 0, num = 10000_0000_0; i < num; ++i) {
//     a * a;
// }
// console.timeEnd('time1');

const Base64KeyChars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function compressUUID(uuid) {
    uuid = uuid.replace(/-/g, '');
    let r = 5;
    const len = uuid.length;
    const o = [];
    const t = uuid.slice(0, r);

    while (r < len) {
        const u = parseInt(uuid[r], 16);
        const a = parseInt(uuid[r + 1], 16);
        const d = parseInt(uuid[r + 2], 16);

        o.push(Base64KeyChars[(u << 2) | (a >> 2)]);
        o.push(Base64KeyChars[((3 & a) << 4) | d]);
        r += 3;
    }

    return t + o.join('');
}

console.log(compressUUID('9334b25e-1df3-4634-a746-d5254bb3d6c6'));

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let first = 0;
    let result = [];
    let i = 1;
    while (1) {
        if (nums[i] + nums[first] > target) {
            ++first;
        } else if (nums[i] + nums[first] === target) {
            result.push(nums[first], nums[i]);
            break;
        } else {
            ++i;
        }
    }
    return result;
};
// twoSum([14, 15, 16, 22, 53, 60], 76);
