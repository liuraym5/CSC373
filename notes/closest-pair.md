# 3. Closest Pair of Points

Problem: Given n points in 2-dimonsions, find two whose mutual distance is smallest

Input: Array of points

Ouput: Array of two points that have the closest distance

## Brute Force Approach:

Go through every single pair of points, find the one pair with the smallest distance

```java
public Point[] closestPoints(Point[] points){
    double closestDistance = Double.MAX_VALUE;
    Point[] result = new Point[2];
    for (int i = 0; i < points.length - 1; i++){
        for (int j = i + 1; j < points.length; j++){
            double distance = computeDistance(point[i], point[j]);
            if (closestDistance > distance){
                closestDistance = distance;
            }
            result[0] = points[0];
            results[1] = points[1];
        }
    }
    return result;
}
```

This algorithm has the time complexity of $$O(n^{2})$$

## Faster Approach

a\) **Divide **the points with a line that is the median of the x coordinate of all points

b\) **Conquer **by finding the closest distance of pairs in each side

c\) **Combine **by picking the least distance out of the closest distance in left, right and **two points separated by the line**.

Problem - Combining is expensive. We have to compare results of i\) LHS closest pair ii\) RHS closest pair iii\) Pairs of points with one from LHS and one from RHS. This takes $$O(n^{2})$$.

**Goal - Improve iii\)**

Given n points $$P = \{P1, P2, ..., Pn\}$$, compute

$$Px$$, $$P$$ sorted by x coordinate, $$Py$$, $$P$$ sorted by y coordinate

Divide $$P$$ by vertical line $$l$$ into equal size sets $$Q, R$$.

Let $$dQ$$ be the closest distance in $$Q$$ and $$dR$$ be the closest distance in $$R$$.

Let $$d = min \{dQ, dR\}$$

Throw away all points out of $$l \pm d$$.

Claim: If there exists a pair of points $$p'$$, $$p''$$ with $$d(p', p'') \leq d$$, $$p'$$ and $$p''$$ appear within 9 positions in $$P_{y}$$.

```
l - d      l      l + d
  |        |        |
  |        x--------x
  |        |  x     | d
  |        |        |         The Rectangle is R
  |   p'   x--------x       
  |        |        | d
  |        |    x   |
  |        x--------x
      Q       R
```

The idea is this, suppose p' is in Q, the only possible positions of p'' are the x in the diagram. So p'' must appear within 9 positions.

&lt;NAGEE WRITE IN PYTHON&gt;

```
// X is P sorted by x coordinates
// Y is P sorted by y coordinates 

closestPairHelper(X, Y, n)
    if n <= 3
        return closestPairBruteForce(X, n)
    lx = X[n/2].x
    ly = X[n/2].y

    X1 = X[1 ... n/2]
    X2 = X[n/2 + 1 ... n]

    init array Y1 of size n/2
    init array Y2 of size n/2

    // This is sorting y coordinates in X1 and X2 so we can divide and conquer
    for k = 1 to n
        if Y[k].x < lx or (Y[k].x = lx and Y[k].y <= ly)
            Y1[i] = Y[k]
            i++
        else 
            Y2[j] = Y[k]
            j++

    (p1, p2) = closestPairHelper(X1, Y1, n/2)
    (p3, p4) = closestPairHelper(X2, Y2, n/2)

    delta = +infinity

    p', p'' = null

    if d(p1, p2) < d(p3, p4)
        delta = d(p1, p2)
        (p', p'') = (p1, p2)
    else 
        delta = d(p3, p4)
        (p', p'') = (p3, p4)

    Y' = emptySet

    // Throw away points outside of l
    for (k = 1 to n)
        if |Y[k].x - lx| <= delta
            Y' append(Y[k])

    // The magic part, find within 9 spots
    for (k = 1 to Y'.length)
        for (j = k + 1 to min(k + 7, Y'.length)
            if (d(Y'[k], Y'[j]) < delta)
                delta = d(Y'[k], Y'[j])
                (p', p'') = (Y'[k], Y'[j])
    
    return (p', p'')
```

Final recurrence is $$T(n) = 2T(n/2) + O(n) = O(log n)$$

