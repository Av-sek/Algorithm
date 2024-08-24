function moveZeroes(nums: number[]): void {
  let zeroStartIndex: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    nums[i] = 0;
    if(num!=0){
        nums[zeroStartIndex] = num;
        zeroStartIndex++;
    }
  }
}


const num1 = [0,1,0,3,2]
const num2 = [0,0,1]

moveZeroes(num1)
moveZeroes(num2)

console.log(num1)
console.log(num2)


/*
    Explanation:

    for each number we will store the index at which the 0 starts i.e if there is [1,0,0,2,3] the zero starts at index 1
    for each non zero number we replace it by 0 and starting 0 by that number this maintains the order of that number 
    while also moving the 0 at the end 

    we now move 0 start index by 1 as that place contains an non 0 number now

    so in above array [1,0,0,2,3] --> when 2 is encountered we replace it with first 0 at index 1 i.e.
    [1,2,0,0,3] --> now the zero is at index 2 so we shift that zero start index
*/