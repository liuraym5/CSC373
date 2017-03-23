---
prev: 
  link: np-polyver.html
  title: Polynomial Verification
next:
  link: np-reductions.html
  title: Reductions

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



