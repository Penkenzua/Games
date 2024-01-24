const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = 64 * 16
canvas.height = 64 * 9

        const parsedCollisions = сollisionsLevel1.parse2D()
        const collisionBloks = parsedCollisions.createObjectsFrom2D() 

const backgroundLevel1 = new Sprite({
    position:{
      x:0,
      y:0,
    }, 
    imageSrc: 'img/backgroundLevel1.png'
  })
const player = new Player()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
function animate (){
    window.requestAnimationFrame(animate)
    backgroundLevel1.draw()
    collisionBloks.forEach(сollisionsBlock=>{
        сollisionsBlock.draw()
    }) 
    player.velocity.x=0
    if(keys.d.pressed)player.velocity.x = 5
    else if(keys.a.pressed)player.velocity.x =-5
    
    player.draw()
    player.update()

}

animate()
