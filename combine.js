/**
 * 给定两个整数 n 和 k，返回
 * 1 ... n 中所有可能的 k 个数的组合。
 * 示例:
 * 输入: n = 4, k = 2
 * 输出:
 * [
 *     [2,4],
 *     [3,4],
 *     [2,3],
 *     [1,2],
 *     [1,3],
 *     [1,4],
 * ]
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
function combine(n, k) {
    if(n <= 0) {
        return 0;
    }

    let result = [];
    if(k <= n) {
        for(let i = 1; i <= n; i++) {
            var arr = [];
            arr.push(i);
    
            if(k == 1) {
                result.push(arr);
                return result;
            } else {
                
            }
        }
    }

    console.log(result);
    return result;
};

combine(4, 1);