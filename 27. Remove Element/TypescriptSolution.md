# 27. Remove Element (Easy)

## Intuition

The nums array contains integers and another variable val which contains element to be removed. One way to remove a element in array equal to val is to have two pointers and swap with next element in array not equal to val

## Approach

Two pointers method.
Pointer i and j. Pointer i will move ahead after swapping element not equal to val and pointer j will traverse the whole array

Only if an element at j is not equal to val then it is swapped with the element at position i and i is incremented.

At the end i will stop after the last element not equal to val and hence have the count of the elements not equal to val

## Complexity

Time complexity:
O(n) Single traversal across the array

## Space complexity:

O(1) Only the elements passed and another variable to swap. Using constant space

## Code

```
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i=0
    for(let j=0;j<nums.length;j++){
        if(nums[j]!== val){
            nums[i] = nums[j]
            i++
        }
    }
    return i
};
```
