## 1. Merge Sort

a\) **Divide** the n-element sequence into two sorted sequence of sizes n/2 each

b\) **Conquer** by sorting the two subsequences recursively with mergesort

c\) **Combine** by merging the two subsequences together to produce final sorted sequence

A is an array, p, q, r are indices to the array such that $$p \leq q \lt r$$

```
public merge(A, p, q, r){
    int n1 = q - p + 1;
    int n2 = r - q;
    int[] l = new int[n1];
    int[] r = new int[n2];
    for (int i = 0; i < n1; i++){
        l[i] = A[i];
    }
    for (int j = 0; j < n2; j++){
        r[j] = A[q + j];
    }

}
```

```
public mergeSort(A, p, r){
    if (p < r){
        q = Math.floor((p + r)/ 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}
```



