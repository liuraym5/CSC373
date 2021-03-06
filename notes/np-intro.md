---
prev:
  link: dijkstra.html
  title: Dijkstra
next:
  link: np-poly.html
  title: Polynomials
---

# Introduction to Complexity 

## Definitions

### Optimization Problems

These are problems in which each legal solution has a value, and we want to find
a legal solution with the _best_ value.

### Decision Problems

These are problems where the answer is simply 1 or 0 (yes or no).

### Reductions

This is the notion of showing that a problem is no harder or easier than
another. Suppose we have two decision problems, $A$, and $B$, with instances
$\alpha$ and $\beta$, respectively. Suppose we have a procedure $P$ that takes
instances of $A$ and transforms them to instances of $B$ (in very hand wavy
notation, $P: A \rightarrow B$). Let $P$ have the following characteristics:

- P runs in polynomial time
- The answer for $\alpha$ is yes iff the answer for $P(\alpha)$ is yes

Say we _know how to solve_ $B$ _in polynomial time_ (lets call this $c$). Then using $P$, we say $A$
is just as easy to solve.

$$
a \Rightarrow c(P(a)) \in \{0,1\} 
$$

Both $P$ and $c$ take polynomial time, and so we have a way to decide $A$ in
polynomial time.

### $\leq_p$

We say a language $L_1$ is [_polynomial time reducible_](np-reductions.html) to a language $L_2$, and
write $L_1 \leq_p L_2$ when there exists a polynomial-time computable function
$f: \{0,1\}^* \rightarrow \{0,1\}^*$ such that $x \in L_1$ if and only if $f(x)
\in L_2$

### P

This is the class of problems that are solvable in polynomial time ($O(n^k)) for
a constant $k$ and $n$ is the size of the input). This is more formally defined
[here](np-poly.html).

### [Verification Algorithm](np-polyver.html)

A two argument algorithm that takes in a string and a certificate, and we say
the algorithm _verifies_ the string if there exists a certificate that makes it
true. ($A$(graph, graph has some property) is 1 if the graph has that property
and 0 otherwise (or it could go on forever...?))

### NP

This is the class of problems _verifiable_ in polynomial time. Suppose we are
given an input $I$ and a possible solution $S$. We'll call $S$ the
_certificate_. The problem is NP if we can check if the certificate is correct
in polynomial time with respect to the size of the input $I$ (so it runs in
$O(|I|^k)$).

### NP-hard

A language $L$ that satisfies property 2, but not necessarily 1 is considered
NP-hard



### NPC

[Informally] These are problems in NP and are as "hard" as any problem in NP.

[Formally] A language $L \subseteq \{0,1\}^*$ is NP-complete if 

1. $L \in NP$
2. $L' \leq_p L \ \forall \ L' \in NP$

---

We can cast an optimization problem as a decision problem by adding a bound on
the value we are optimizing. If an optimization problem is easy, then its
related decision problem is also easy, and if a decision problem is hard, then
so is the optimization problem.

$P \subseteq NP$. This is because the verification step can just be solving the
problem. The big question is whether $P \subset NP$ or $P = NP$

If _any_ NPC problem can be solved in polynomial time, then _every_ problem in
$NP$ has a polynomial time algorithm. 

