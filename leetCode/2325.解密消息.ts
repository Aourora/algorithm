/*
 * @lc app=leetcode.cn id=2325 lang=typescript
 *
 * [2325] 解密消息
 */

// @lc code=start
function decodeMessage(key: string, message: string): string {
    // const codeMap = new Map();
    // let i = -1;
    // for (const k of key) {
    //     if (k === ' ' || codeMap.has(k)) continue;
    //     codeMap.set(k, String.fromCharCode(97 + ++i));
    //     if (codeMap.size >= 26) break;
    // }
    // let result = '';
    // for (const s of message) {
    //     result += s === ' ' ? ' ' : codeMap.get(s);
    // }
    // return message;
    const codeArray = new Array(26);
    let i = -1;
    for (const k of key) {
        const p = k.codePointAt(0) - 97;
        if (k === ' ' || codeArray[p]) continue;
        codeArray[p] = String.fromCharCode(97 + ++i);
    }
    let result = '';
    for (const s of message) {
        result += s === ' ' ? ' ' : codeArray[s.codePointAt(0) - 97];
    }
    return result;
}
// @lc code=end
