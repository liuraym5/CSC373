---
prev: np-complete.html
next: np-intro.html

---

# NP-complete problems:

## A List of NP-complete problems

- Shortest vs longest simple paths: Shortest path can be found in $O(VE)$, but
  the longest simple path is NP-complete.
- Euler tour vs hamiltonian cycle: An **Euler tour** of a connected, directed
  graph is a cycle that traverses each _edge_ once, we can solve in $O(E)$ a
  hamiltonian cycle is a simple cycle that visits each _vertex_ exactly once.
  Determining if a graph has a hamiltonian cyle is NP-complete.
- 2-CNF vs 3-CNF satisfiability: 2-CNF can be solved in polynomial time, but
  3-CNF is np complete.


## Defintions

### P

These are problems that can be solved in $O(n^k)$ for some constant $k$, where
$n$ is the size of the input problem.

### NP

These are the set of problems that are verifiable in polynomial time. So if we
are given a _certificate_ of a solution, then we can verify that the certificate
is correct in polynomial time of input size.

### NP-Complete

A problem is in the class NPC if it is in NP and it is as "hard" as any problem
in NP.

> If _any_ NP-complete problem can be solved in polynomial time, then every
> problem in NP has a polynomial time algorithm.

## Showing that problems are NPC

We rely on three key concepts:

### 1. Decision problems vs optimization problems

We can relate an optimization problem to a decision problem by adding a bound
$b$ and asking if we can do better than $b$.

### 2. Reductions

Consider a decision problem $A$, which we would like to solve in polynomial
time. Suppose we know how to solve a decision problem $B$ in polynomial time.
And suppose we have a procedure that transforms any instance $\alpha$ of $A$
into an instance $\beta$ of $B$ such that:

- The transformation takes polynomial time
- The answers are the same. The answer for $\alpha$ is yes iff the answer for
  $\beta$ is yes.

## Vertex Covers

Let $G=(V,E)$ be an undirected graph. $S \subset V$ is a vertex cover if every edge
$e \in E$ is incident on at least one node in $S$, and $|S| = k$, then we call
it a $k$-cover.

The language is as follows: $L_{VC} = \{ <G,k> | G$ has a $k$-cover $\}$.

We claim $L_{VC}$ is NP-complete.

#### Proof

1. [ 1 ] Certificate set $S \subset V(G)$. Verifier checks $|S|=k$ and that every edge is
incident on a vertex in $S$. Clearly the certificate is of polynomial size and
the verifier runs in polynomial time.
2. [ 2 ] We'll show that $L_{CLIQUE} \leq_p L_{VC}$
Given $G$, $k$, we
   need to construct $G'$ and $k'$ such that $G$ has a $k$-clique iff $G'$ has a
   $k-$cover. Let $V' = V$, $E'$ 
   be $(v 2) - E$, and $k' = n-k$. Then $G$ has a
   $k-$clique  S, then we need to show $V - S$ is a vertex cover in $G'$.
   $\{u,v\} \in E'$ 
   iff $\{ u,v \} \not \in E \rightarrow u \not \in S \lor v
   \not \in S $. Let $G'$ have $(n-k)$-cover_

   ## Hamiltonian Cycles

A Hamiltonian cycle is a simple cycle that goes through every vertex.

Fact: The language of hamiltonian cycles $\{ <G> | G$ has a hamiltonian cycle
$\} \in NPC$.

### Hamiltonian Path and Cycle

We'll show that a hamiltonian path reduces to hamiltonian cycles. Let $G=(V,E)$
be given, and we want to construct $G'$ such that if $G$ has a hamiltonian
cycle, then $G'$ has a hamiltonian path.

Pick an arbitrary $v \in V$, and split it into $v, v'$, where the neighbors of 
$v$ are the neighbors or $v'$ , and $v$ is not connected to $v'$ via an edge. We
introduce to new noes $f,s$ and connect $f$ to $v$ and $s$ to $v'$

```

          s  - v'  -
   /               \ \
v  -  =>          /
   \      f  - v  -
                   \
```

#### Proof

- [=>] Given a hamiltonian cycle, add $f, v'$ to the beginning and $v',s$ to the
  end, and this is a hamiltonian path.
  $$( v,u_i, v ) => ( f,v,u_i, v', s ) $$


Let's show that the hamiltonian cycle reduces to TSP. Given $G=(V,E)$,
undirected, we need to create $G',c,k$.

Let $G'$ be a complete graph on $V$ and the cost of an edge in $E'$ is 0 if it's
in $E$, and 1 otherwise. Then $G',c$ has a tour of cost o if and only if $G$ has
a hamiltonian cycle, ad the construction is in polynomial time.




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
