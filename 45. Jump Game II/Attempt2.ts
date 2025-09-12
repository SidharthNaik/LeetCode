function jumpAttempt2(nums: number[]): number {
  let start = 0,
    end = 0,
    jumps = 0;
  while (end < nums.length - 1) {
    let currEnd = start + nums[start];
    for (let i = start + 1; i <= end; i++) {
      currEnd = Math.max(currEnd, i + nums[i]);
    }
    start = end + 1;
    end = currEnd;
    jumps++;
  }
  return jumps;
}
