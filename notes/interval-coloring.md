# Interval Coloring

## Interval Coloring

[Slides](http://www.cs.toronto.edu/~denisp/csc373/docs/borodin-interval-coloring.pdf) for the interval coloring problem

Given a set of intervals, color all intervals so that intervals having the same colors do not intersect.

Goal: Minimize the number of colors used.

## Machine Minimization

We augment the interval coloring problem so that instead of getting the minimum  
number of colors, we try to find the minimum number of machines so that intervals  
running on the $$ i $$th machine do not intersect \(each machine gets non-intersecting processes\).

#### Input:

An array $$ A $$ of $$ n \geq 1 $$ intervals.

#### Output:

$$ d \in \mathbb{N} $$ so that all intervals running on

**Def**: $$ \text{depth}(A) $$ is called the depth of $$ A $$, and is the maximum number of  
intervals over one point in the timeline

```
|-------||=-----||------|
    |-----=---|------|
      |---=|
          ^ depth of 3
```

We claim that the $$d$$ we will return satisfies


$$
d \geq \text{depth}(A)
$$


Surprisingly, $$ \text{depth}(A) = d $$. This is achieved by the greedy algorithm we will  
display below.



```javascript
// javascript
function machineNumber(A, n) {
  A.sort( (s1,s2) => s1.start - s2.start )
  let M = [] // should have size n
  M[1] = 1
  for (let i = 2; i < n; i++) {
    let S = []
    for (let j = 1; j < i - 1; j++) {
      if (overlap(A[j], A[i])) {
        S.push(M[j])
      }
    }
    const minS = Math.min.apply(S)
    // smallest natural number not in S, assuming N = 1,2,...
    const min = minS < 2 : 1 ? minS--
    M[i] = min
  }
  return Math.max.apply(M)
}
```



