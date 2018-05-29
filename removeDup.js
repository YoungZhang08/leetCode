/**
 * 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，
 * 返回移除后数组的新长度。不要使用额外的数组空间，
 * 你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 * 
 * // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
 * int len = removeDuplicates(nums);
 * // 在函数里修改输入数组对于调用者是可见的。
 * // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
 * for (int i = 0; i < len; i++) {
 *    print(nums[i]);
 * }
 */
/**
 * 解决思路：这个题的重点在原地修改数组，修改后返回数组长度，再在
 * 函数外部打印改变后的数组内部元素，主要考察的在函数内部对引用类型的
 * 函数参数的修改在调用者身上也是可以看到的，也就是说在函数外部打印的
 * 数组和函数内部的数组是同一片引用区域
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    
    if(nums == null || nums.length == 0) {
        return 0;
    }

    for(var i = 0,j = 0; i < nums.length; i++) {
        if(nums[j] != nums[i]) {
            nums[++j] = nums[i];
        }
    }

    return j+1;
}

var arr = [1, 1, 2];
var len = removeDuplicates(arr);

for(var i = 0; i < len; i++) {
    console.log(arr[i]);
}
