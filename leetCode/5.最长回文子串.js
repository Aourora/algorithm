// /*
//  * @lc app=leetcode.cn id=5 lang=javascript
//  *
//  * [5] 最长回文子串
//  */

// // @lc code=start
// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//     let startIndex = 0;
//     let maxLength = 1;
//     const { length } = s;

//     if (length <= 1) return s;

//     for (let i = 0; i < length; ++i) {
//         const Data1 = getLength(s, i, i, length);
//         const Data2 = getLength(s, i, i + 1, length);

//         const Data = Data1.length > Data2.length ? Data1 : Data2;
//         if (Data.length > maxLength) {
//             maxLength = Data.length;
//             startIndex = Data.start;
//         }
//     }

//     return s.substring(startIndex, startIndex + maxLength);

// };

// var getLength = function (s, left, right, length) {

//     while (left >= 0 && right < length && s[left] === s[right]) {
//         --left;
//         ++right;
//     }

//     return { start: left + 1, length: right - left - 1 };

// }

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = strs[0].split("");
  for (let i = 1, { length } = strs; i < length && result.length; ++i) {
    const str = strs[i];
    for (let j = 0, { length: len } = str; j < len && result[j]; ++j) {
      if (result[j] !== str[j]) {
        result.splice(j);
        break;
      }
    }
  }
  return result.join("");
};
