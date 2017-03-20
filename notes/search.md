# Search Problems

Most of the algorithms we've studied have an exponential number of possible
solutions (matching $n$ pairs is factorial in size, $n$ vertices has $n^{n-2}$
spanning trees), but we've taken advantage of structure and assumptions to
eliminate large classes of potential solutions, giving us polynomial time
algorithms in the worst case. We'll look at some problems that we have yet to
solve in efficient time.

But first, let's define some things:

### Search Problem

A search problem is specified by an algorithm $C$ that takes two inputs:

- An _instance_ $I$ and a proposed _solution_ $S$.
- $C$ runs in time polynomial to $|I|$.

We say $S$ is a solution to $I$ iff $C(I,S) =$ `true`

## Satisfiability

Satisfiability (`SAT`) has a boolean formula in CNF as its _instance_. A
_solution_ to the instance is a boolean assignment function that takes each
variable $v_i$ to `true` or `false`. The `SAT` problem is the following

> Given a Boolean formula in CNF, either find a satisfying truth assignment or
> report that none exists.

### Horn and 2SAT

A **Horn Formula** is a boolean formula where all clauses contain at most one
positive literal, and a greedy algorithm can be used to find the satisfying
truth assignment.

If we allow two literals, then we can use graph theory, and `SAT` can be solved
in linear time (DPV excersize 3.28).

If we allow three literals, we have no fast solution 😢. Thi is called the
`3SAT` problem.

## Traveling Salesman

This (quite famous) problem gives use $n$ vertices with $\frac{n(n-1)}{2}$
distances between them, and a budget $b$, and we are asked to solve for a
permutation $\pi$ of the vertices such that

$$
\sum_{i=1}^n d_{\pi(i), \pi(i+1\mod n-1)} \leq b
$$

TSP is a _search problem_:

- Instance: The vertices, distances, and budget
- Solution: the permutation $\pi$ (or nothing)

The problem here is finding the _optimum_ solution. If we are given a solution
$S$ to an instance $I$, how do we know if $S$ is the best solution?

