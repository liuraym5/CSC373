const dijkstra = (G, len, s) => {

  const deleteMin(arr) => {
    let found = false
    const min = Math.min.apply(arr)
    return arr.filter(e => {
      if (found) { return true }
      if (!found && e === min) { found = true }
      return e !== min
    })
  }

  /* we don't really care about running time,
   * just correctness :)
   */

  const V = G.v
  const E = G.E

  let dist = new Array(V.length)
  let prev = new Array(V.length)

  V.forEach(i => {
    dist[i] = Infinity
    prev[i] = null
  })

  dist[s] = 0

  let queue = []
  V.forEach(i => queue.push(i))

  while (queue != []) {
    const u = delete_min(queue)
    for (let i = 0; i < E.length; i++) {
      const e = E[i]

    }
  }

}

const animateDijkstra = () => null 

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
