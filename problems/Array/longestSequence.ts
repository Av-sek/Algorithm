function findLengthOfLCIS(nums: number[]): number {
    let longestCount = 1;
    let localCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            localCount = 1;
            continue;
        }
        localCount++;
        if (longestCount < localCount) {
            longestCount = localCount;
        }
    }
    return longestCount;
};


console.log(findLengthOfLCIS([1,3,5,4,2,3,4,5]));