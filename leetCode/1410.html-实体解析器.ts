/*
 * @lc app=leetcode.cn id=1410 lang=typescript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
function entityParser(text: string): string {
    const map = new Map<string, string>();
    map.set('&quot', '"');
    map.set('&apos', "'");
    map.set('&amp', '&');
    map.set('&gt', '>');
    map.set('&lt', '<');
    map.set('&frasl', '/');
    let str = '';
    let key = '';
    for (const s of text) {
        if (key) {
            if (s === ';') {
                str += map.has(key) ? map.get(key) : key + ';';
                key = '';
            } else if (s === '&') {
                str += key;
                key = '&';
            } else {
                key += s;
            }
        } else if (s !== '&') {
            str += s;
        } else {
            key = '&';
        }
    }
    str += key;
    return str;
}
// @lc code=end
