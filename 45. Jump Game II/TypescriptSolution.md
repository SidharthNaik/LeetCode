# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

Initial thoughts were to use Dynamic Programming with Bottom up approach and memory table for keeping the data on min jumps which leads time complexity to almost $O(n^2)$.
Sub optimal solution but solves it

# Approach

<!-- Describe your approach to solving the problem. -->

The optimal solution was using Greedy method. The max jump range for each jump is calculated then the loop is run only over that range to ensure each element is visited only once.

`i` loops from 0 to nums.length-1  
`start` and `end` hold the range of the next jump  
on reaching the end of the range `jump` is updated

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  $O(n)$
  Only once the array is traversed

- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  $O(1)$
  No data structure is used. Only a few variables to store the start, end of range and number of jumps

# Code

```typescript []
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
```
