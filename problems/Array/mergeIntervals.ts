function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b)=> a[0]-b[0])
    let merged = [intervals[0]];
    let mergedIndex = 0;
    for (let i=1;i<intervals.length;i++){
      if(merged[mergedIndex][1] >= intervals[i][0]){
          merged[mergedIndex][1] = Math.max(merged[mergedIndex][1], intervals[i][1])
      } else { 
          merged.push(intervals[i])
          mergedIndex++;
      }
    }
    return merged;
  };

let intervals = [[2,3],[2,2],[3,3],[1,3],[5,7],[2,2],[4,6]]

const merged = merge(intervals);

console.log(merged)
