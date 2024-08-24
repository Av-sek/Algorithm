function maxSubArray(nums: number[]): number {
  let maxSum = 0;
  let localMaxSum = 0;

  for (let num of nums) {
    localMaxSum += num;
    if (maxSum < localMaxSum) {
      maxSum = localMaxSum;
    }
    if (localMaxSum <= 0) {
      localMaxSum = 0;
    }
  }
  return maxSum;
}

/*
    - We basically sum the subarrays till we have the positive result 
    compare that with maxSum if it is maximum than local sum than just 
    update the value
    - if the sum of sub array results in negative reset the local sum
*/
