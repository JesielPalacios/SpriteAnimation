// Canvas
const canvas = document.getElementById('canvas1')

// Context
const ctx = canvas.getContext('2d')
console.log('ctx', ctx)

// Sizes
const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGHT = (canvas.height = 600)

const playerImage = new Image()
playerImage.src = 'assets/img/CarrotStickman/skeleton-animation_00.png'
let x = 0

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.fillRect(x, 50, 100, 100)
  x++
  requestAnimationFrame(animate)
}

animate()
