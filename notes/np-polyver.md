---
prev: np-poly.html
next: np-complete.html
---

# Polynomial-time Verification

Let's start looking at algorithms that verify membership in languages.

## Hamiltonian Cycles

A _Hamiltonian cycle_ of an undirected graph $G=(V,E)$ is a simple cycle that
contains each vertex in $V$. We say a graph is _Hamiltonian_ if it contains a
Hamiltonian cycle.

Let's define the language for our problem "Does a graph $G$ have a Hamiltonian
cycle?"


> $\mathcal L_{HAM-CYCLE} = \{ \langle G \rangle : G$ is a Hamiltonian graph $\}$


If the graph has $m$ vertices, then there are $m!$ permutations, giving a
runtime of $\Omega(m!)$. Let $n$ be the size of the graph. Then a reasonable
encoding is $\Omega(\sqrt{n})$.

$$
\Omega(m!) = \Omega(\sqrt{n!}) = \Omega(2^{\sqrt{n}})
$$

That's clearly not in polynomial time.

However, we can _verify_ if a proposed solution $S=(V',E')$ is Hamiltonian in
polynomial time: just check if $V'$ is a permutation of $V$ and that the edges
in $E'$ exist in $E$. This can be implemented in $O(n^2)$.

## Verification Algorithm

Let $A$ be a verification algorithm. We define $A$ as follows:

- $A$ takes two argument:
    - A string $x$
    - A binary string $y$ (called the _certificate_)

We say $A$ **verifies an input string** $x$ if there exists a certificate $y$
such that $A(x,y) = 1$.

We can now look at the **language verified by** $A$

$$
L = \{x \in \{0,1\}^* | \ \exists\ y \in \{0,1\}^* : A(x,y) = 1 \}
$$


We can now define the complexity class $NP$ in a really nice way:

## $NP$

A language $L$ is in $NP$ if:

$$
L = \{x \in \{0,1\}^* | \ \exists\ y \in \{0,1\}^*, |y| = O(|x|^c) : A(x,y) = 1 \}
$$

In words, a language $L$ is in $$NP$$ if there exists a verification algorithm $A$
that verifies $L$ in polynomial time. So $L_{HAM-CYCLE}$ from before is in $NP$!

So P is the set of problems that can be solved quickly, and $NP$ are those that
can be verified quickly (so $P \subseteq NP$, because if it can be solved
quickly, then it can be verified by solving it).

```

  NP-HARD
--       --
 |  NPC  |
-|-------|-
 |  NP   |
-||-----||-
  |  P  |
--|-----|--
P != NP
```

```

|           | 
| NP-HARD   |
|           |
| --------- |
| P=NP=NPC  |
P = NP
```
