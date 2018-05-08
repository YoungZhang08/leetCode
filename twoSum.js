"use strict";
/**
 * 
 * 给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
 * 你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
 * 示例:
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 给定 nums = [3, 4, 2], target = 6
 * 因为 nums[1] + nums[2] = 4 + 2 = 6
 * 所以返回 [1, 2]
 * 给定 nums = [3, 3], target = 6
 * 因为 nums[0] + nums[1] = 3 + 3 = 6
 * 所以返回 [0, 1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/**
 * 思路：在Map中存储key为target-nums[i]的差值，value为索引i
 * 遍历原始数组nums，如果Map中不存在nums[i]，set差值和i
 * 如果存在nums[i],说明Map中的键nums[i]对应的值和当次循环的i为所求
 */
function twoSum (nums, target) {
    const result = [];
    const myMap = new Map();
    if(nums == null || nums.length <= 1) {
        return false;
    }
    for(let i = 0,len = nums.length; i < len; i++) {
        if(myMap.has(nums[i])) {
            result[0] = myMap.get(nums[i]);
            result[1] = i;
        } else {
            myMap.set(target - nums[i], i);
        }
    }
    console.log(result);
    return result;
}
twoSum([3,3],6);

