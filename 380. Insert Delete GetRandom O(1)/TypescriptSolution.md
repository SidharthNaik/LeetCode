# Intuition

<!-- Describe your first thoughts on how to solve this problem. -->

To implement Set functionality need a Map and to provide random values cannot transform the map to array which will require linear time $O(n)$

# Approach

<!-- Describe your approach to solving the problem. -->

To combine the array and map together to provide insert, delete and random number in $O(1)$
Create an array and map
Insert: Insert the element in array and store the position in map
Delete: Move the last element to the position of the element to be deleted and then update value in map. Since we cannot delete from the middle in array this must be done for Delete

# Complexity

- Time complexity:
  <!-- Add your time complexity here, e.g. $$O(n)$$ -->

  $$O(1)$$
  All operations are completed in constant time

- Space complexity:
  <!-- Add your space complexity here, e.g. $$O(n)$$ -->
  $$O(n)$$
  Both the data structures will have n values so  
  $O(n+n)$ = $O(2n)$ = $O(n)$

# Code

```typescript []
class RandomizedSet {
  private arr: Array<number>;
  private hash: Map<number, number>;
  constructor() {
    this.arr = new Array<number>();
    this.hash = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.hash.has(val)) {
      return false;
    }
    this.hash.set(val, this.arr.length);
    this.arr.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.hash.has(val)) {
      return false;
    }
    const last = this.arr[this.arr.length - 1];
    const index = this.hash.get(val);
    this.arr[index] = last;
    this.hash.set(last, index);
    this.arr.pop();
    this.hash.delete(val);
    return true;
  }

  getRandom(): number {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
  }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
```
