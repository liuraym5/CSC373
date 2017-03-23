---
prev: np-complete.html
next: np-intro.html

---

## Subset Sum

#### Input

- $A = \{a_1, ... , a_n \} \subseteq \mathbb Z_{> 0}$
- $t \in  \mathbb Z_{> 0}$

#### Output

- 1 if there exists a subset such that its sum is $t$.
- 0 otherwise


### Subset Sum is NP complete

Let 
$$
L_{SUB-SUM} = \{[ A=\{a_i\}, t ], \exists S \subseteq A \sum_{i \in S} a_i =
t\}
$$

We claim that the language is NPC.

#### Proof

1. The certificate is $S$. clearly a check of the certificate runs in polynomial
   time.
2. $L_{3-SAT} \leq_p L_{SUB-SUM}$ Given $\phi$, a 3-CNF over variables $x_i$ and
   has clauses $C_j$, we want to construct in polynomial time $A \subseteq Z_{> 0}$
   such that $\phi$ is SAT if and only if $(A,t) \in L_{SUB-SUM}$

Let's do 2:

For each variable $x_i$, let's introduce two integers $v_i$ and $v_i'$ with the
following properties

- $v_i$ has 1 at position $x_i$ in the variable part and at position $C_i$ for
    each $C_i$ satisfied by $x_i = T$.
- $v_i'$ has 1 at position $x_i$ in the variable part and at position $C_i$ for
    each $C_i$ satisfied by $x_i = F$.

For each clause, we introduce integers $S_i$, which has 1 at position $C_i$.
For each clause, we introduce integers $S_i'$, which has 2 at position $C_i$.

Consider the following example:

- $ C_1 = x_1 \lor \neg x_2 \lor \neg x_3$
- $ C_2 = \neg x_1 \lor \neg x_2 \lor \neg x_3$
- $ C_2 = \neg x_1 \lor \neg x_2 \lor x_3$

|   |x1 |x2 |x3 |C1 |C2 |C3 |
|---|---|---|---|---|---|---|
|v1 | 1 | 0 | 0 | 1 | 0 | 0 |
|v1'| 1 | 0 | 0 | 0 | 1 | 1 |
|v2 | 0 | 1 | 0 | 0 | 0 | 0 |
|v2'| 0 | 1 | 0 | 1 | 1 | 1 |
|v3 | 0 | 0 | 1 | 0 | 0 | 1 |
|v3'| 0 | 0 | 1 | 1 | 1 | 0 |

  
|   | x1| x2| x3| C1| C2| C3|
|---|---|---|---|---|---|---|
|S1 | 0 | 0 | 0 |  1|  0|  0|
|S1'| 0 | 0 | 0 |  2|  0|  0|
|S2 | 0 | 0 | 0 |  0|  1|  0|
|S2'| 0 | 0 | 0 |  0|  2|  0|
|S3 | 0 | 0 | 0 |  0|  0|  1|
|S3'| 0 | 0 | 0 |  0|  0|  2|

So we can construct our new integers in polynomial time. We want to show that
$\phi$ is SAT if and only if $(v_i, v_i', s_j, s_j', t) \in L_{SUB-SUM}$

##### =>

Assume $\phi$ is in SAT. Let $x$ be an SAT assignment. Select the following
numbers for the set:

- if $x_i = T$, select $v_i$
- if $x_i = F$, select $v_i'$
- if $C_i$ is satisfied by 1 literal, select $s_i, s_i'$, if by 2 select
    $s_i'$, and if satisfied by 3, selecte $s_i$.

So the subset adds up to $t$. There are exactly one of $v_i$, $v_i'$ that
belongs to $S$ for each $i$.

##### <=

Let $x$ be the assignment, where if $v_i \in S$, $x_i = T$, and if $v_i \in S$,
set $x_i  = F$. This implies that $x$ is a satisfying assignment.

## Knapsack

#### Input

- $v_1, ..., v_n \in \mathbb N$, our values of the items
- $v_1, ..., v_n \in \mathbb N$, our weights
- $W$, our capacity.

#### Output:

$$
\max_{S \subseteq [n]} \sum_{i \in S} v_i : \sum_{i \in S} w_i \leq W
$$

Let the language of the this problem be our $v_i, w_i, W, K$ such that there
exists $S \subseteq [n]$ such that

$$
\sum_{i \in S} v_i \geq k
$$

$$
\sum_{i \in S} w_i \geq W
$$

Let $v_i = a_i = w_i$, $W = k = t$

Then $\sum_{i \in S} v_i \geq t$ and $\sum_{i \in S} w_i \leq t$.
