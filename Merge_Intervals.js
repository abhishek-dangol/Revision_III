function merge(intervals) {
    if (intervals.lenght < 2) {
        return intervals;
    }

    const result = [];
    intervals.sort((a, b) => a - b);
    let start = intervals[0][0];
    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++){
        let currInterval = intervals[i];
        if (currInterval[0] <= end) {
            end = Math.max(end, currInterval[1]);
        } else {
            result.push([start, end]);
            start = currInterval[0];
            end = currInterval[1];
        }
    }
    result.push([start, end]);
    return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);