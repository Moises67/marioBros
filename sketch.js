
function setup() {
  createCanvas(1490, 650);
  Fondo = createSprite(648, 405);
  Fondo.addImage(fondo);
  Fondo.scale = 0.9;
  Fondo2 = createSprite(1944, 405);
  Fondo2.addImage(fondo2);
  Fondo2.scale = 0.9;
  suelo = createSprite(603, 625);
  suelo2 = createSprite(1809, 625);
  suelo.addImage(Suelo);
  suelo2.addImage(Suelo);
  suelo.scale = 0.6;
  suelo.velocityX = -5.5;
  suelo2.scale = 0.6;
  suelo2.velocityX = -5.5;
  Fondo.velocityX = -1;
  Fondo2.velocityX = -1;
  jugador = createSprite(205, 525, 30, 30);
  jugador.addAnimation("correr",correr);
  jugador.scale = 0.6;
}

function draw() 
{
  drawSprites();
  if(keyDown(DOWN_ARROW)){
    jugador.y += 4
  }
  if((keyDown(UP_ARROW) || keyDown(32)) && jugador.y>=470){
    jugador.velocityY = -40
  }
  if(suelo.x<=-603){
    suelo.x=1798
  }
  if(suelo2.x<=-603){
    suelo2.x=1798
  }
  if(Fondo.x<=-1944){
    suelo.x=1944
  }
  if(Fondo2.x<=-1944){
    suelo2.x=1944
  }
  jugador.velocityY += 3
  jugador.collide(suelo);
  jugador.collide(suelo2);
  suelo.debug=true;
  jugador.debug=true;
}
function preload(){
  Suelo=loadImage("./SPRITES/Suelo.jpg");
  fondo = loadImage("./SPRITES/Nubes.jpg");
  fondo2 = loadImage("./SPRITES/fondo2.jpeg")
  correr = loadAnimation("./SPRITES/m1.gif","./SPRITES/m2.gif","./SPRITES/m3.gif");
}