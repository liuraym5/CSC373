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

<small>This is a slightly long proof, but bear with me! For some parts of the
proof, I'll place it under a "spoiler" box (click the arrow to expand). Try to
put together the next steps, take a guess, or use it when reviewing!</small>


### Definition

### Language

### $\mathcal L_{CIRCUIT-SAT} \in NP$

### Circuit-SAT is $NP$-hard

### Circuit-SAT is $NP$-complete


---
- $^1$ CLRS Lemma 34.3
