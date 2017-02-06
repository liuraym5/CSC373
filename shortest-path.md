## Single Source Shortest Path

### Input

- $G = (V, E)$, a directed or undirected graph
- $c: E \rightarrow \mathbb R$, a weight function
- $s \in V$, the source

### Output

An array $A$ such that $\forall v \in V$, $A[v] = d(s,v)$.

### Definitions

Let $d: V \times V \rightarrow \mathbb N$ be the length of the shortest path
, so that $d(u,v)$ is the shortest path from $u$ to $v$.

Observe that the problem is not well defined if there exists a 
negative-weight cycle reachable from $s$.

```
    /-(-6)\
    v      \
o---o---o--o
  4   3  2

```

We also have an optimal substructure.
