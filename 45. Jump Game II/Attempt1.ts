function jumpAttempt1(nums: number[]): number {
  const stepsArr: number[] = new Array(nums.length).fill(100000);
  stepsArr[nums.length - 1] = 0;

  for (let j = nums.length - 2; j >= 0; j--) {
    if (nums[j] === 0) {
      continue;
    }
    if (nums[j] + j >= nums.length - 1) {
      stepsArr[j] = 1;
    } else {
      for (let i = j + 1; i <= j + nums[j] && i < nums.length; i++) {
        if (stepsArr[i] === 1) {
          stepsArr[j] = 2;
          break;
        }
        stepsArr[j] = Math.min(stepsArr[j], 1 + stepsArr[i]);
      }
    }
  }
  return stepsArr[0];
}
