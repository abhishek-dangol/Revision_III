function eraseOverlapIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;
    let prevEnd = intervals[0][1]
    for (let i = 1; i < intervals.length; i++){
        let currStart = intervals[i][0];
        let currEnd = intervals[i][1];
        if (currStart >= prevEnd) {
            prevEnd = currEnd;
        } else {
            count++;
            prevEnd = Math.min(currEnd, prevEnd);
        }
    }
    return count;
}

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
);