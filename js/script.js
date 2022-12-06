// Canvas
const canvas = document.getElementById('canvas1')

// Context
const ctx = canvas.getContext('2d')
console.log('ctx', ctx)

// Sizes
const CANVAS_WIDTH = (canvas.width = 600)
const CANVAS_HEIGHT = (canvas.height = 600)

const playerImage = new Image()
// playerImage.src = 'assets/img/CarrotStickman/skeleton-animation_00.png'
playerImage.src = 'shadow_dog.png'
// 6876px of width / 12 columns = 573
const spriteWidth = 575
// 5230px of height / 10 anitations or 10 rows = 523
const spriteHeight = 523

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.fillRect(100, 50, 100, 100)
  // ctx.drawImage(playerImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
  ctx.drawImage(
    playerImage,
    0,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT
  )
  requestAnimationFrame(animate)
}

animate()
