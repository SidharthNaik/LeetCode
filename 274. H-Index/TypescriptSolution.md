# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

citations contain the the array of citations of the research papers published. To find the minimum number of papers h with at least h citations, would need to find all the papers above a certain count say x. Then return the count of the papers

# Approach

<!-- Describe your approach to solving the problem. -->

Sort the citations.
i from 0 -> citations.length. Then going over them to find until the citations count is greater than the remaining count so the rest will also be equal or higher so it will be at least citations.length-i.

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  $$O(n*log(n))$$
  Sorting will have time complexity of nlog(n) and citations will be n so
  nlog(n) + n ~ nlog(n)

- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  $$O(1)$$
  No additional data structures are used so it will be constant

# Code

```typescript []
function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) {
      return citations.length - i;
    }
  }
  return 0;
}
```
