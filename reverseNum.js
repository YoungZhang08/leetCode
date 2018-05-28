/**
 * 给定一个 32 位有符号整数，将整数中的数字进行反转。
 * 示例 1:输入: 123
 *       输出: 321
 * 示例 2:输入: -123
 *       输出: -321
 * 示例 3:输入: 120
 *       输出: 21
 * 注意:假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−2^31,  2^31 − 1]。
 * 根据这个假设，如果反转后的整数溢出，则返回 0。
 * @param {number} x
 * @return {number}
 */

/**
 * 思路：对给定的数字第一次对10取余，之后每一次都用整除10的结果再对10取余
 * 就可以拿到反转后的每一位数字，之后设置目标返回值先为0，再用目标值*10+每一位数字
 * 循环结束，目标返回值就会变成需要返回的数值，之后再对反转后的数字做溢出判断
 */
function reverse(x) {  
    let result = cycleNum(x);
    
    if(result <= Math.pow(2, 31) - 1 && result >= -1 * Math.pow(2, 31)) {
        if(x > 0) {
            return result;
        }else if(x < 0) {
            result *= -1;
            return result;
        }
    } else {
        return 0;
    }

    return result;
}

// 循环处理数字，
function cycleNum(num) {
    let y = Math.abs(num); // 处理负数
    var temp = 0; // 返回目标数值

    do {
        temp = temp * 10 + (y % 10);
        y = Math.floor(y / 10);
    } while(y > 0);

    return temp;
}

reverse(321);