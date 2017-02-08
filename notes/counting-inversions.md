# Counting Inversions

_**Inversion Count**_

for an array indicates – how far \(or close\) the array is from being sorted. If array is already sorted then inversion count is 0. If array is sorted in reverse order that inversion count is the maximum. 

Def: An array of n ints \(i, j\) is an inversion if

* i &lt; j
* A\[i\] &gt; A\[j\]

Input: A array of n ints

Output: \# of inversions of A

Trivial algo: Consider all pairs O\(n^2\) time

```
public int countInversionBrute(int[] A){
    int inversions = 0;
    for (int i = 0; i < A.length - 1; i++){
        for (int j = i + 1; j < A.length; j++){
            if (A[i] > A[j]){
                inversions++;
            }
        }
    }
    return inversions;
}
```

**Divide and Conquer:**

Key Idea: Sort and count

Suppose we know the number of inversions in the left half and right half of the array \(let be inv1 and inv2\), what kinds of inversions are not accounted for in Inv1 + Inv2? The answer is – the inversions we have to count during the merge step. Therefore, to get number of inversions, we need to add number of inversions in left subarray, right subarray and merge\(\).

Runtime is O\(nlogn\)

