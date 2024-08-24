function twoSum(nums: number[], target: number): number[] {
    const numMap = {}
    for (let [index, num] of nums.entries()){
        const remainder = target - num
        if(remainder in numMap){
            return [numMap[remainder], index]
        }
        numMap[num] = index
    }
    return []
};