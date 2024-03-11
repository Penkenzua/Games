const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = 64 * 16
canvas.height = 64 * 9

        const parsedCollisions = сollisionsLevel1.parse2D()
        const collisionBlocks = parsedCollisions.createObjectsFrom2D() 

const backgroundLevel1 = new Sprite({
    position:{
      x:0,
      y:0,
    }, 
    imageSrc: './img/backgroundLevel1.png'
  })
const player = new Player({
    collisionBlocks,
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations:{
        idleRight:{
            frameRate:11,
            frameBuffer:5,
            loop:true,
            imageSrc: './img/king/idle.png',
        },
        idleLeft:{
            frameRate:11,
            frameBuffer:5,
            loop:true,
            imageSrc: './img/king/idleLeft.png',
        },
        runRight:{
            frameRate:8,
            frameBuffer:4,
            loop:false,
            imageSrc: './img/king/runRight.png',
        },
        runLeft:{
            frameRate:8,
            frameBuffer:4,
            loop:true,
            imageSrc: './img/king/runLeft.png',
        },
    },  
})
const doors = [
    new Sprite({
        position:{
            x:0,
            y:0,
        },
        imageSrc:'./img/doorOpen.png',
        frameRate:5,
        frameBuffer: 5,
    }),
]

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
    collisionBlocks.forEach(сollisionsBlock=>{
        сollisionsBlock.draw()
    }) 

    doors.forEach(doors=>{
        doors.draw()
    }) 
    player.velocity.x=0

    if(keys.d.pressed)
    {
    player.switchsSprite('runRight')
    player.velocity.x =3  
    player.lastDirection = 'right'
    }  else if(keys.a.pressed){
    player.switchsSprite('runLeft')
    player.velocity.x =-3
    player.lastDirection = 'left'
    } 
    else{
        if(player.lastDirection ==='left') player.switchsSprite('idleLeft')
        else {
            player.switchsSprite('idleRight')
        }
        
    } 
    
    player.draw()
    player.update()

}

animate()
