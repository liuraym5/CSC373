const vertex = (label, value) => {
  return {
    neighbors: [],
    degree: 0,
    label: label,
    value: value
  };
};

const vPrint = (v) => {
  console.log(v.neighbors.map(u => u.label));
};

const vListStr = (l) => {
  let s = '( ';
  l.forEach(v => s = s + v.label + ' ');
  s = s + ')';
  return s;
};

const degree = (vertex) => {
  return vertex.neighbors.length;
};

const edge = (v1, v2) => {
  v1.neighbors.push(v2);
  v2.neighbors.push(v1);
  v1.degree++;
  v2.degree++;
  return [v1, v2];
};
const graph = (V, E) => {
  let adjMatrix = [];
  for (let i = 0; i < V.length; i++) {
    let row = [];
    for (let j = 0; j < V.length; j++) {
      row.push(false);
    }
    adjMatrix.push(row);
  }
  for (let i = 0;  i < V.length; i++) {
    let vert = V[i];
    let neighbors = vert.neighbors;
    for (let j = 0; j < neighbors.length; j++) {
      adjMatrix[vert.label][neighbors[j].label] = true;
    }
  }

  return {
    vertices: V,
    edges: E,
    directed: false,
    tree: false,
    adjacency: adjMatrix,
  };
};


const draw = (G, s, drawxy) => {
  G.vertices.forEach(v => v.enqueued = 0);
  G.vertices.forEach(v => v.depth = 1);
  G.vertices.forEach(v => v.shift = 1);
  let q = [];
  q.push(s);
  s.enqueued = 1;
  s.shift = 1
  s.depth = 1
  while (q.length > 0) {
    let v = q.shift();
    // draw here
    drawxy(v.shift*2, v.depth* 3)
    // console.log(Array(v.depth * 2).join('-') + ` ${v.label}`)
    vlen = v.neighbors.length + 1
    v.neighbors.forEach(u => {
      if (u.enqueued === 1) { return; }
      u.depth = v.depth + 1
      u.shift = 1 + vlen--;
      u.enqueued = 1;
      q.push(u);
    });
  }
};

