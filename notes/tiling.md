# Tiling

[http://www.geeksforgeeks.org/divide-and-conquer-set-6-tiling-problem/](http://www.geeksforgeeks.org/divide-and-conquer-set-6-tiling-problem/)

**Input:**

$n * n$ chessboard. $n = 2^{k}, k \geq 1$

1 square is removed

**Output:**

Valid L-tiling of the board

```
// n is size of given square, p is location of missing cell
Tile(int n, Point p)

1) Base case: n = 2, A 2 x 2 square with one cell missing is nothing 
   but a tile and can be filled with a single tile.

2) Place a L shaped tile at the center such that it does not cover
   the n/2 * n/2 subsquare that has a missing square. Now all four 
   subsquares of size n/2 x n/2 have a missing cell (a cell that doesn't
   need to be filled).  See figure 2 below.

3) Solve the problem recursively for following four. Let p1, p2, p3 and
   p4 be positions of the 4 missing cells in 4 squares.
   a) Tile(n/2, p1)
   b) Tile(n/2, p2)
   c) Tile(n/2, p3)
   d) Tile(n/2, p3) 
```

T\(n\) = \# of ops on n x n board

Placing L tile takes O91\)

T\(n\) = 4T\(n/2\) + O\(1\)

T\(n\) = O\(n^2\)

