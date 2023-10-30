
function setup() {
  createCanvas(1206, 650);
  jugador = createSprite(205, 525, 30, 30);
  jugador.addAnimation("correr",correr);
  jugador.scale = 0.6;
  suelo = createSprite(603, 625);
  suelo.addImage(Suelo);
  suelo.scale = 0.6;
}

function draw() 
{
  background(fondo);
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    jugador.x += 4
    jugador.mirrorX(1)
  }
  if(keyDown(LEFT_ARROW)){
    jugador.x -= 4
    jugador.mirrorX(-1)
  }
  if(keyDown(DOWN_ARROW)){
    jugador.y += 4
  }
  if(keyDown(UP_ARROW) || keyDown(32)){
    jugador.velocityY = -15
  }
  jugador.velocityY += 1
  if(keyDown(82)){
    jugador.x = 205
    jugador.y = 205
  }
  jugador.collide(suelo);
}
function preload(){
  Suelo=loadImage("./SPRITES/Suelo.jpg");
  fondo = loadImage("./SPRITES/Nubes.jpg");
  correr = loadAnimation("./SPRITES/m1.gif","./SPRITES/m2.gif","./SPRITES/m3.gif");
}