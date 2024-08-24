function rotateArray(nums: number[], numOfRotation: number){
    // [1,2,3,4,5] --> 3 times --> [3,4,5,1,2]
    const sizeOfArray = nums.length
    while(numOfRotation> 0){
        const lastElement = nums[sizeOfArray-1]
        for (let y=sizeOfArray-1; y > 0; y--){
            nums[y] = nums[y-1]
        }
        nums[0] = lastElement
        numOfRotation -=1
    }
    return nums
}


function optimizedRotateArray(nums: number[], numOfRotation: number){
    // [1,2,3,4,5] --> [5,4,3,2,1] --> [3,4,5,1,2]

    function reverserAnArray(start: number, end:number){
        while(start<end){
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }

    reverserAnArray(0, nums.length-1);
    reverserAnArray(0, numOfRotation-1);
    reverserAnArray(numOfRotation, nums.length-1)
    return nums;
}
console.log(optimizedRotateArray([1,2,3,4,5], 3))