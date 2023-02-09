/*
 * @lc app=leetcode.cn id=1797 lang=typescript
 *
 * [1797] 设计一个验证系统
 */

// @lc code=start
class AuthenticationManager {
    private map: Map<string, number> = new Map();
    constructor(private timeToLive: number) {}

    generate(tokenId: string, currentTime: number): void {
        this.map.set(tokenId, currentTime);
    }

    renew(tokenId: string, currentTime: number): void {
        if (this.map.get(tokenId) + this.timeToLive > currentTime) {
            this.map.set(tokenId, currentTime);
        } else {
            this.map.delete(tokenId);
        }
    }

    countUnexpiredTokens(currentTime: number): number {
        let result = 0;
        const keys = this.map.keys();
        for (const key of keys) {
            if (this.map.get(key) + this.timeToLive > currentTime) {
                ++result;
            } else {
                this.map.delete(key);
            }
        }

        return result;
    }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
// @lc code=end
