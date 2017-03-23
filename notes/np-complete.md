---
prev:
  link: np-polyver.html
  title: Polynomial Verification
next:
  link: np-reductions.html
  title: Reductions

---

# NP Completeness and Reducibility

$NP$-complete problems ($NPC$) are a class of problems such that if any can be
solved in polynomial time, then _every_ problem in $NP$ has a polynomial time
solution (!!).

This set of problems are the "hardest" problems in $NP$. In the
[previous](np-polyver.html) section, we discussed polynomial time verification.
We'll talk about polynomial time _reductions_ in this section.

## Reducibility

This is essentially a "translation" from one problem $Q$ to another problem
$Q'$. For example, $ax+b=0$ can be transformed to $0x^2+ax+b=0$. When we do our
"translation", we want to preserve difficulty of problems, so that we can say
$Q$ is no harder to solve than $Q'$. We're saying that $Q'$ is $Q$ with a
different paint job.

### Polynomial-time reducible
Because "easy" things run in polynomial time, we want our "translations" to
happen in polynomial time, so that if our problems are easy, then the
translation won't change that.

We write $L_1 \leq_p L_2$ is $L_1$ is polynomial time reducible to $L_2$.
Our translation function $f$ is defined as follows

- $f: \{0,1\}^* \rightarrow \{0,1\}^*$
- $x \in L_1$ if and only if $f(x) \in L_2$
- $x \notin L_1$ then $f(x) \notin L_2$

We call $f$ the reduction function, and $F$ that computes $f(x)$ the _reduction
algorithm_

```

_______            ________
{0,1}* |    f     |{0,1}*
o -----|----------|->o
_____  |          |______
   o-|-|----------|---\  |
     | |          |    o |
o----|-|----------|---/  |
  o--|-|----------|---->o|
 L1  | |          | L2   |
```

#### Reducibility and $P$

If $L_1,L_2 \subseteq \{0,1\}^*$ are languages such that $L_1 \leq_p L_2$, then
$L_2 \in P \Rightarrow L_1 \in P$ (proof $^1$)



## NP-completeness

We can now relate problems by saying that one is at least as hard as another
(within polynomial time). So $L_1 \leq_p L_2$, then $L_1$ is not more than a
polynomial factor harder than $L_2$. We can now properly define $NP$-complete:

A language $L \subseteq \{0,1\}^*$ is $NP$-complete if

1. $L \in NP$
2. $L' \leq_p L \ \forall \ L' \in NP$

The class of languages that satisfy 1 and 2 are defined as $NPC$
Satisfying 2 but not 1 means that $L$ is $NP$-hard.


## Circuit-SAT

<small>This is a very technical proof, so I wont present it (CLRS does not
either). Instead, let's outline it! For some steps of the
proof, I'll place it under a "spoiler" box (click the arrow to expand). Try to
put together the next steps, take a guess, or use it when reviewing!</small>


### Definition

We use $NOT$, $AND$, and $OR$ gates in a circuit, and each variable takes in
either 0 (false) or 1 (true). A _truth assignment_ function is a function that
assigns to each variable $x_i$ either a 1 or a 0. A _satisfying assignment_ is
an assignment function that results in $1$ at the circuit output. Our goal is to
find a _satisfying assignment_  given a circuit. We frame our problem as
follows:

> Given a boolean combinational circuit composed of $AND$, $OR$, and $NOT$
> gates, is it satisfiable?

### Language

$\mathcal L_{CIRCUIT-SAT} = \{ \langle C \rangle : C$ is a satisfiable boolean
combinational circuit $\}$

### $\mathcal L_{CIRCUIT-SAT} \in NP$

Each variable has 2 options. It can be a 1 or a 0. So if you have $k$ variables,
there are $2^k$ options. Checking each option takes $\Omega(2^k)$ time, which is
not polynomial. Since the definition for $NPC$ has two [parts](#np-completeness)

### 1. Circuit-SAT is $NP$

We need to provide a two-input polynomial time algorithm $A$ that verifies
$\mathcal L_{CIRCUIT-SAT}$. One of the inputs is a boolean combinational circuit
$C$, and the other is an assignment function $V:$ inputs of $C \rightarrow
\{0,1\}$.

$A$ is as follows:

- For each gate, check that the value provided by the certificate on the output
    wire is correctly computed as a function of the values on the input wires.
- If the outpt of the circuit is 1, $A(C,V) = 1$, otherwise 0.

Because of the way we formed the algorithm, we have these two guarantees.

1. If a satisfiable circuit $C$ is given to $A$, there is a certificate of
   length polynomial (with respect to $C$) and causes $A$ to output 1.
2. If an unsatisfiable input is given, then no certificate can trick $A$ into
   outputting $1$.

   And so $A$ runs in polynomial time and so $\mathcal L_{CIRCUIT-SAT} \in NP$

### 2. Circuit-SAT is $NP$-hard

We need to show that every problem in $NP$ is polynomial-time reducible to 
$\mathcal L_{CIRCUIT-SAT}$. The idea is to manipulate the state of the computer
a bunch of times and doing a bunch of other stuff. I think that's a good enough
explanation for now 😛. Please make a pull request to add this.


By 1. and 2. $\mathcal L_{CIRCUIT-SAT}$ is in $NPC$


---
- $^1$ CLRS Lemma 34.3
