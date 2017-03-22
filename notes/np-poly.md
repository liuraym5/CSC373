# Polynomial Time

 Let's formalize polynomial-time solvable problems. We'll first say that for
 most "reasonable" model of computation, polynomial in one means polynomial in
 another. We'll also mention that polynomials are closed under addition,
 multiplication, and composition, which means that if we do $f\ op\ g, op \in
 \{+,*, \circ \}$, we get a polynomial.

## Abstract Problems

An Abstract Problem $Q$ is a _binary relation_ on a set of problem _instances_
$I$ and a set of problem _solutions_ $S$. In this way we can view a [decision
problem](np-intro.html#decision-problems) as a function that maps instances $I$
to $\{0,1\}$.

## Encodings

An _encoding_ of a set $S$ of objects is a mapping $e$ from $S$ to the set of
binary strings ($e: S \rightarrow \{0,1\}^*$).

So an algorithm that solves a decision problem takes in the encoding of the
problem as input.

### [Def] Concrete Problem

A problem whose instance set is the set of binary strings.

An algorithm **solves** a concrete problem in $O(T(n))$, where $n$ is the length
of the instance $i$.

### [Def] Polynomial Time Solvable

We say a _concrete problem_ is polynomial time solvable if there exists an
algorithm to solve it in time $O(n^k)$ for some constant $k$.

## The complexity class P

We define the complexity class $P$ as the set of concrete decision problems that
are polynomial time solvable.

## Languages

Recall what a formal language $L$ over an alphabet $\Sigma$ is (if you don't
remember, here's a [wiki](https://en.wikipedia.org/wiki/Formal_language) article)

For any decision problem $Q$, as a language $L$ over $\Sigma = \{0,1\}$,
where $L = \{ x \in \Sigma^* : Q(x) = 1\}$.

We say an algorithm $A$ accepts a string $x \in \{0,1\}^*$ if $A(x) = 1$, and
rejects it otherwise.

An language $L$ is **decided** by an algorithm $A$ if

- $x \in L \rightarrow A(x) = 1$
- $y \notin L \rightarrow A(y) = 0$

(As an aside, this seems very similar to what it means to be representable in
formal logic)

## Decidability in Polynomial Time

A language $L$ is decided in polynomial time by an algorithm $A$ if there exists
a constant $k$ such that for any string length $n$ in $\{0, 1\}^*$, $A$ decides
if $x$ is in $L$ in $O(n^k)$.

(In our more casual discussions: For an input of size $n$, $A$ runs in $O(n^k)$)

We can now present the folloowing theorem (without proof)$^1$

> $P = \{L : L$ is accepted by a polynomial time algorithm $\}$

---

$^1$ See CLRS Theorem 34.2 for the proof.
