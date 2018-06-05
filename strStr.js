/**
 * 实现 strStr() 函数。给定一个 haystack 字符串和一个 needle 字符串，
 * 在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。
 * 如果不存在，则返回  -1。
 * 示例 1:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 示例 2:
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 * 说明:
 * 当 needle 是空字符串时，我们应当返回什么值呢？这是一个在面试中很好的问题。
 * 对于本题而言，当 needle 是空字符串时我们应当返回 0 。
 * 这与C语言的 strstr() 以及 Java的 indexOf() 定义相符。
 */

/**思路：暴力匹配——利用一层循环，同时遍历文本串和模式串，
 * 假设当前遍历元素相同，那么文本串和模式串的指针同时后移一位继续匹配
 * 假设当前遍历元素不同，那么文本串的指针回溯到第一个匹配的字符位置
 * 模式串的指针回退为0，最后通过判断模式串的指针位置是否等于其长度
 * 如果等于，返回i当前的指针位置减去j当前的位置就是匹配串的第一个字符位置
 * 如果不等，返回-1
 * 如果模式串为空，返回0 */

 /**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    let i = 0;
    let j = 0;
    let hayLen = haystack.length;
    let needLen = needle.length;

    if(needle === '') {
        console.log(0);
        return 0;
    }

    while(i < hayLen && j < needLen) {
        let hayStr = haystack.substr(i, 1);
        let needStr = needle.substr(j, 1);
        console.log(hayStr, needStr);
        if(hayStr === needStr) {
            i++;
            j++;
        } else {
            i = i - j + 1;
            j = 0;
        }  
    }

    if(j == needLen) {
        console.log(i - j);
        return i - j;
    } else {
        console.log(-1);
        return -1;
    }
}

strStr('hello', 'll');