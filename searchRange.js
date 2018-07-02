/**给定一个按照升序排列的整数数组 nums，
 * 和一个目标值 target。找出给定目标值
 * 在数组中的开始位置和结束位置。你的
 * 算法时间复杂度必须是 O(log n) 级别。
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 示例 1:
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 示例 2:
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1] 
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
    let len = nums.length;
    let low = 0;
    let high = len - 1;
    let arr = [-1,-1];

    if(len === 0) {
        return arr;
    }

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(target === nums[mid]) {
            let i = mid;
            let j = mid;

            while(i >= 0 && nums[i] === target) {
                i--;
            }
            if(i < 0) {
                arr[0] = 0;
            } else {
                arr[0] = i + 1;
            }

            while(j < len && nums[j] === target) {
                j++;
            }
            if(j > len) {
                arr[1] = len - 1;
            } else {
                arr[1] = j - 1;
            }

            console.log(arr);
            return arr;
        } else if(target < nums[mid]) {
            high = mid - 1;
        } else{
            low = mid + 1;
        }
    }

    console.log(arr);
    return arr;
}

searchRange([5, 7, 7, 8, 8, 10], 8);
searchRange([5, 7, 7, 8, 10], 6);