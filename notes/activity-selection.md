## Activity Selection

Further readings: [http://web.mst.edu/~silvestris/teaching/algorithmsFall2014/notes/greedy\_proof.pdf](http://web.mst.edu/~silvestris/teaching/algorithmsFall2014/notes/greedy\_proof.pdf)

**Input:**  $A[n]$ such that an activity $A[i] = (s_i, f_i)$ is a tuple of its start and finish times.

**Output:** $S \in A$ such that no two activities in overlap. 

More formally, we want $S = \{A[i] \mid \forall i \neq j, [s_i, f_i) \cap [s_j, f_j) = \emptyset \}$

**Optimal solution: ** maximize $|S| $

Example:

```
|---- 1 ----||---- 2 ----|
  |----- 3 -----||---- 4 ----|
```

Possible answers: $S = \{1, 2\}, \{1, 4\},$ or $\{3, 4\}$

### Attempt: Brute Force

Trivial Algorithm (try all possible sets) $\in \Omega(2^n)$

### Solution: Greedy Approach

```
templateGreedy(A){
    sort A according to some criteria               # O(n log n)
    initialize S as an empty array

    while (A is not empty){                         # O(n)
        pick 1st activity from A
        add activity to S
        remove all overlapping activities from S
    }
    return S
}
```

### Possible Criteria

**1\) Increasing Starting Time**

$s_{1} \leq s_{2} \leq ... \leq s_{n}$

```
|----------- 1 -----------|
|---- 2 ----| |---- 3 ----|
```

Problem: This is not optimal if we have the first activity overlapping the all other activities, since it will simply return 1, which may not be the optimal solution.

**2\) Increasing Interval Length**

$f_1 - s_1 \leq f_2 - s_2 \leq ... \leq f_n - s_n$

```
|---- 1 ----||---- 2 ----|
       |--- 3 ---|
```

Problem: This is not optimal because if we have a short interval overlapping two intervals that do no intercept, 1 will be returned.

**3\) Pick interval that overlaps the least number of interval**

Problem: Not optimal

```
|--- 1 ---||--- 2 ---||--- 3 ---||--- 4 ---|
    |--  5  --|  |--  6  --| |--  7  --|
    |--  8  --|              |--  9  --|
    |-- 10  --|              |-- 11  --|
```

**4\) Earliest Finishing Time \(EFT\)**

$f_{1} \leq f_{2} \leq ... \leq f_{n}$

**Correctness:**

Def: $S_{i}$ denotes the partial solution of EFT prior to $i^{th}$ iteration

Def: $S_{i}$ is call feasible if it is possible to extend it to a complete optimal solution using only activities remaining in A

Loop Invariant: $S_{i}$ is feasible

**Proof by Induction on i:**

Base Case: $i = 0, S_{0} = \emptyset$, A has all activities, so feasible.

Inductive Hypothesis: $S_{i}$ is feasible for some $i \geq 0$, $S_{i}$ can be extended.

Inductive Step: Consider the $i^{th}$ iteration, $A \neq \emptyset$, let $a = [s, f)$ be the first activity chosen by EFT.

i\) Case 1: a is in the optimal solution \(OPT\)

Exchange Argument:

ii\) Case 2: a is not in OPT. Let $a' = [s', f')$, **next interval in OPT**, be the first interval after $S_{i}$ in OPT.

Note:

i\) $[s, f) \cap [s', f') \neq \emptyset$, because otherwise we could increase OPT by adding **a**

ii\) $f \leq f'$ by properties of EFT. Hence, $(OPT \backslash {a'}) \cup {a}$ is also OPT and extends $S_{i+1}$

**Easier Explanation please**

**Termination:**

$A = \emptyset, S_{i} = OPT$

The runtime of this algorithm will be O\(nlogn\) because we had to sort.

