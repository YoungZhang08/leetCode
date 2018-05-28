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
 * 利用数组存储翻转后的每一位数字，之后再用变量对数组的每一位数字乘以位数相加返回
 */
function reverse(x) {
    
    var result = getArr(cycleNum(x));
    
    if(result <= Math.pow(2, 31) - 1 && result >= -1 * Math.pow(2, 31)) {
        if(x > 0) {
            console.log(result);
        }else if(x < 0) {
            result *= -1;
            console.log(result);
        }
    } else {
        return 0;
    }
    
    return result;
}

// 循环处理数字，把翻转后的每一位数字存进数组
function cycleNum(num) {
    const arr = []; // 用于存储翻转后的每一位数字
    let y = Math.abs(num);  // 处理负数

    do {
        arr.push(y % 10);
        y = Math.floor(y / 10);
    } while(y > 0);
    return arr;
}

// 取数组中的数字，利用临时变量将其相加得最终结果
function getArr(array) {
    let temp = 0; // 用于存储翻转后的数字
    
    for(var i = 0,j = array.length - 1; i < array.length, j >= 0; i++, j--) {
        temp += array[i] * Math.pow(10, j);
    }
    return temp;
}

reverse(1534236469);