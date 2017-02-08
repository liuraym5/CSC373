# Dijkstra's Algorithm

BFS finds the shortest path in a graph with unit lenght edges. With
Dijkstra's algorithm, we adapt BFS so that we can handle graphs
$G = (V, E)$ with edge lengths $l(e)$ as *positive integers*.

I'll present the algorithm first, and then I'll discuss the aspects of it.

## Algorithm

### Input

- A graph $G = (V,E)$
- Positive edge lengths $\{l_e : e \in E\}$
- A starting verex $v$.

### Output

- For all vertices $u$ that can be reached from $s$, `dist`$(u) = d(s,u)$

~~~
def dijkstra(G,l,s):
  V,E = G
  dist = []  # an array of size |V|
  prev = []  # an array of size |V|

  for u in V:
      dist[u] = infty
      prev[u] = null 

  dist[s] = 0

  H = queue(V)  $ the dist-values are keys
  while H is not empty:
    u = delete_min(H)  # return and remove the elem the with smallest key
    for all edges e=(u,v) in E:
        if dist(v) > dist(u) + l(e):
            dist(v) = dist(u) + l(e)
            prev(v) = u
            # notifies queue that a the value for v has been decreased
            # accomodate the decrease in key value of the element
            decrease_key(H, v)
~~~

