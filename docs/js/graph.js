const vertex = (label, value) => {
  return {
    neighbors: [],
    degree: 0,
    label: label,
    value: value,
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


const draw = (G, draw_node, draw_edge) => {
  for(i = 0; i < G.edges.length; i++) {
    console.log(G.edges[i])
    console.log(G.edges[i][0].value, G.edges[i][1].value)
    draw_edge(G.edges[i][0].value, G.edges[i][1].value)
  }
  for(i = 0; i < G.vertices.length; i++) {
    // console.log(G.vertices[i].value)
    draw_node(G.vertices[i].value[0], G.vertices[i].value[1])
  }


};

