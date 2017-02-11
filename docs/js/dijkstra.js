const animateDijkstra = (canvas) => {
  let v0 = vertex(0, [10, 200])
  let v1 = vertex(1, [60, 150])
  let v2 = vertex(2, [60, 250])
  let v3 = vertex(3, [110, 150])
  let v4 = vertex(4, [110, 250])

  let V = [v0, v1, v2, v3, v4]
  let E = [
    edge(v0,v1),
    edge(v0,v2),
    edge(v0,v3),
    edge(v1,v3),
    edge(v2,v3)
  ]

  let G = graph(V,E)

  const context = canvas.getContext('2d')
  const radius = 10 
  // const diameter = 2 * Math.PI * radius
  // Draws the node
  const draw_node = (x,y) => {
    context.beginPath()
    context.fillStyle = '#E2FFC6'
    context.arc(x, y, radius, 0, 2 * Math.PI)
    context.fill()
    context.lineWidth = 1
    context.strokeStyle = '#66CC01'
    context.stroke()
  }
  // Draws the edge
  const draw_edge = (start, end) => {
    context.beginPath()
    context.lineWidth = "3"
    context.strokeStyle = "black"
    // Draw from start to end
    context.moveTo(start[0], start[1])
    context.lineTo(end[0], end[1])
    context.stroke()
  }

  draw(G, draw_node, draw_edge)

}

// Creates the canvas to draw on :-)
const createCanvas = (id,css) => {
  let canvas = document.createElement('canvas')
  canvas.id = id
  canvas.className = css
  return canvas
}

// Show animation button
const createButton = (id, css) => {
  let button = document.createElement('button')
  button.id = id
  button.className = css
  return button
}

// wth does dis do
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

  let canvas = createCanvas('algo-canv')
  canvas.height = 400
  canvas.width = 400
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
