function combinationSumI(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);
    dfs(0, candidates, [], target);

    function dfs(i, candidates, slate, remaining) {
        if (remaining === 0) {
            result.push(slate.slice());
            return;
        }
        if (remaining < 0) {
            return;
        }

        for (j = i; j < candidates.length; j++){
            slate.push(candidates[j]);
            dfs(j, candidates, slate, remaining - candidates[j]);
            slate.pop();
        }
    }
    return result;
}

console.log(combinationSumI([2, 3, 5], 8));