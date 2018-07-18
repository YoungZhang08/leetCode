/**
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 输入为非空字符串且只包含数字 1 和 0。
 * 示例 1:
 * 输入: a = "11", b = "1"
 * 输出: "100"
 * 示例 2:
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 */
/**
 * 思路：这个题的重点就在按位相加、对进位的处理以及
 * 两个数的位数不等的情况处理，要让被加数的长度大于加数
 * 首先对位数不等的处理，加入被加数比加数短则交换两数
 * 接下来需要对字符串做转换处理成数组，因为在最开始做的时候
 * 我用数组的方式去访问可以，但是当成数组做赋值操作是无效的
 * 所以必须对其做转换，转换成功之后就是由后向前遍历
 * 我把相加的数扩展为三方：加数、被加数和进位add（标志）
 * 所以先对其相加暂存
 * 接着对这个暂时存储的值做判断，只有四种情况：0 1 2 3
 * 0和1是同种条件下相当于是当结果为0和1时就改变当前位最终结果
 * 2的时候需要进1，所以当前位需要修改为0并且add位要致1
 * 3的时候需要进1，所以当前为需要修改为1并且add位要致1
 * 当遍历完较短的数之后，还需要对长的数做处理以及最后的进位
 * 从刚才的结束位置开始，向前遍历长数，此时只剩下两方相加
 * 即进位和长数位，所以相加暂存结果，有两种情况
 * add位致1并且当前位为1，则当前位要修改为0且前面的add位致1
 * add位致1且当前位为0或者add位致0，则当前位只要修改为
 * 暂存的结果即可，最后一位如果有进位，则继续push进数组
 * 最终将数组翻转并转为字符串即是所求
 */
 /**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

function addBinary(a, b) {
    if(a.length < b.length) {
        var flag = a;
        a = b;
        b = flag;
    }

    var arr = [];
    a = a.split("");
    b = b.split("");
    let m = a.length - 1;
    let n = b.length - 1;
    let add = 0;

    while(n >= 0) {
        let temp = Number(a[m]) + Number(b[n]) + add;
        if(temp < 2) {
            arr.push(temp.toString());
            add = 0;
        } else if(temp === 2) {
            arr.push('0');
            add = 1;
        } else if(temp === 3) {
            arr.push('1');
            add = 1;
        }
        m--;
        n--;
    }
    while(m >= 0) {
        let last = add + Number(a[m]);
        if(last === 2){
            arr.push('0');
            add = 1;
        } else if(last === 1 || add === 0) {
            arr.push(last.toString());
            add = 0;
        }
        m--;
    }

    if(add === 1) {
        arr.push('1');
    }

    arr = arr.reverse().join('');
    console.log(arr);
    return arr;
}

addBinary("11", "1");