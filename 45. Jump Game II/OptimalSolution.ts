function jump(nums: number[]): number {
  let start = 0,
    end = 0,
    jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    end = Math.max(end, i + nums[i]);
    if (i === start) {
      start = end;
      jumps++;
    }
  }
  return jumps;
}
