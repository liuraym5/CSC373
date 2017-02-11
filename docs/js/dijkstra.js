// const dijkstra = (G, len, s) => {

//   const deleteMin(arr) => {
//     let found = false
//     const min = Math.min.apply(arr)
//     return arr.filter(e => {
//       if (found) { return true }
//       if (!found && e === min) { found = true }
//       return e !== min
//     })
//   }

//   /* we don't really care about running time,
//    * just correctness :)
//    */

//   const V = G.v
//   const E = G.E

//   let dist = new Array(V.length)
//   let prev = new Array(V.length)

//   V.forEach(i => {
//     dist[i] = Infinity
//     prev[i] = null
//   })

//   dist[s] = 0

//   let queue = []
//   V.forEach(i => queue.push(i))

//   while (queue != []) {
//     const u = delete_min(queue)
//     for (let i = 0; i < E.length; i++) {
//       const e = E[i]

//     }
//   }
// }

const animateDijkstra = (canvas) => {
  let v1 = vertex(0)
  let v2 = vertex(1)
  let v3 = vertex(2)
  let v4 = vertex(3)

  let V = [v1,v2,v3,v4]; // v4,v5,v6,v7];
  let E = [
    edge(v1,v2),
    edge(v1,v3),
    edge(v1,v4),
    edge(v2,v4),
    edge(v3,v4)
  ]

  let G = graph(V,E)

  const context = canvas.getContext('2d')
  const radius = 5 
  const diameter = 2 * Math.PI * radius
  const drawxy = (x,y) => {
    console.log(`${x}, ${y}`)
    context.beginPath()
    context.arc(2.5 * (x < diameter ? diameter + x : x), 
                1 * (y < diameter ? diameter + y : y), 
                radius, 0, 2 * Math.PI, false)
    context.fillStyle = '#E2FFC6'
    context.fill()
    context.lineWidth = 1
    context.strokeStyle = '#66CC01'
    context.stroke()
  }

  draw(G, v1, drawxy)

}

const createCanvas = (id,css) => {
  let canvas = document.createElement('canvas')
  canvas.id = id
  canvas.className = css
  return canvas
}

const createButton = (id, css) => {
  let button = document.createElement('button')
  button.id = id
  button.className = css
  return button
}

const destroy = (ids) => {
  for (let i = 0; i < ids.length; i++) {
    const element = document.getElementById(ids[i])
    element.outerHTML = ''
    delete element
  }
}


const initAnimation = () => {

  /* Setup */

  // get the div that contains all animation elements
  const algorithmDiv = document.getElementById('algorithm')

  // get the div that contains all animation buttons
  const algorithmButtons = document.getElementById('algorithm-buttons')

  // create a copy of the inital button that triggered this
  const triggerCopy = document.getElementById('animate').cloneNode(true)

  // now delete that node
  destroy(['animate'])


  /* insert the canvas */

  let canvas = createCanvas('algo-canv', 'w-100 h5 ba br1')
  algorithmDiv.appendChild(canvas);

  /* insert a hide animation button */
 
  // set up the button TODO: abstract to a function
  let deleteButton = createButton(
    'remove-animation',
    'f5 b link ph3 pv2 mb2 pointer dim ba br1 b--black green bg-white'
  )
  deleteButton.innerHTML = 'Hide Animation'
  deleteButton.onclick = () => {
    destroy(['algo-canv', 'remove-animation'])

    // re-create the initial trigger
    algorithmButtons.appendChild(triggerCopy)

    // re-attach the onclick
    triggerCopy.onclick = () => initAnimation()
  }

  // add the button
  algorithmButtons.appendChild(deleteButton)

  /* Animation */

  // run the animation on the canvas `canvas`
  animateDijkstra(canvas)
}


document.getElementById('animate').onclick = () => initAnimation()
