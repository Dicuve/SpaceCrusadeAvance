var canvas;
var bimg;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15;
var b1b, b2b, b3b, b4b, b5b, b6b, b7b, b8b, b9b, b10b, b11b, b12b, b13b, b14b, b15b;
var naveA, naveB;
var balaA, balaB;
var naveImg;
var fondo,fondoImg;
var bala, balaAImg, balaBImg;
var score = 0;


function preload(){
  
  barricadaimg = loadImage ("./image/bimg.png");
  naveAImg=loadImage("./image/naveA_img_r.png");
  naveBImg=loadImage("./image/naveB_img_r.png");
  fondoImg=loadImage("./image/fimg.jpg");
  bimg = loadImage("./image/bimgb.png");
  bimgA1 = loadImage ("./image/bimgA1.png");
  bimgA2 = loadImage ("./image/bimgA2.png");
  bimgB1 = loadImage("./image/bimgB1.png");
  bimgB2 = loadImage ("./image/bimgB2.png");
  balaAImg = loadImage ("./image/balaAImg (2).png");
  balaBImg = loadImage ("./image/balaBImg (2).png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //NAVE REPUBLICA

  // Primera barrera nave Republica

  b1 = createSprite (250, 370, 150, 125);
  b1.addImage("barricada",barricadaimg);
  b1.scale = 0.3;

  b2 = createSprite (230, 250, 150, 125);
  b2.addImage("b1",bimgA1);
  b2.scale = 0.3;

  b3 = createSprite (230, 490, 150, 125);
  b3.addImage("b2",bimgA2);
  b3.scale = 0.3;

  //Segunda barrera nave Republica

  b4 = createSprite (350, 370, 150, 125);
  b4.addImage("barricada",barricadaimg);
  b4.scale = 0.3;

  b5 = createSprite (330, 230, 150, 125);
  b5.addImage("b1",bimgA1);
  b5.scale = 0.3;

  b6 = createSprite (330, 490, 150, 125);
  b6.addImage("b2",bimgA2);
  b6.scale = 0.3;

  b7 = createSprite (230, 130, 150, 125);
  b7.addImage("b1",bimgA1);
  b7.scale = 0.3;
  
  b8 = createSprite (230, 590, 150, 125);
  b8.addImage("b2",bimgA2);
  b8.scale = 0.3;

  // Tercera barrera nave Republica

  b9 = createSprite (450, 370, 150, 125);
  b9.addImage("barricada",barricadaimg);
  b9.scale = 0.3;

  b10 = createSprite (430, 230, 150, 125);
  b10.addImage("b1",bimgA1);
  b10.scale = 0.3;

  b11 = createSprite (430, 490, 150, 125);
  b11.addImage("b2",bimgA2);
  b11.scale = 0.3;

  b12 = createSprite (340, 130, 150, 125);
  b12.addImage("b1",bimgA1);
  b12.scale = 0.3;
  
  b13 = createSprite (340, 590, 150, 125);
  b13.addImage("b2",bimgA2);
  b13.scale = 0.3;

  b14 = createSprite (260, 60, 150, 125);
  b14.addImage("b1",bimgA1);
  b14.scale = 0.3;
  
  b15 = createSprite (260, 660, 150, 125);
  b15.addImage("b2",bimgA2);
  b15.scale = 0.3;

  //NAVE IMPERIAL 

  // PRIMERA BARRICADA
  b1b = createSprite (windowWidth - 250, 370, 150, 125);
  b1b.addImage("b",bimg);
  b1b.scale = 0.3;

  b2b = createSprite (windowWidth - 230, 250, 150, 125);
  b2b.addImage("b1b",bimgB1);
  b2b.scale = 0.3;

  b3b = createSprite (windowWidth - 230, 490, 150, 125);
  b3b.addImage("b2b",bimgB2);
  b3b.scale = 0.3;

  //Segunda barrera nave Republica

  b4b = createSprite (windowWidth - 350, 370, 150, 125);
  b4b.addImage("b",bimg);
  b4b.scale = 0.3;

  b5b = createSprite (windowWidth - 330, 230, 150, 125);
  b5b.addImage("b1b",bimgB1);
  b5b.scale = 0.3;

  b6b = createSprite (windowWidth - 330, 490, 150, 125);
  b6b.addImage("b2b",bimgB2);
  b6b.scale = 0.3;

  b7b = createSprite (windowWidth - 230, 130, 150, 125);
  b7b.addImage("b1b",bimgB1);
  b7b.scale = 0.3;
  
  b8b = createSprite (windowWidth - 230, 590, 150, 125);
  b8b.addImage("b2b",bimgB2);
  b8b.scale = 0.3;

  // Tercera barrera nave Republica

  b9b = createSprite (windowWidth - 450, 370, 150, 125);
  b9b.addImage("b",bimg);
  b9b.scale = 0.3;

  b10b = createSprite (windowWidth - 430, 230, 150, 125);
  b10b.addImage("b1b",bimgB1);
  b10b.scale = 0.3;

  b11b = createSprite (windowWidth - 430, 490, 150, 125);
  b11b.addImage("b2b",bimgB2);
  b11b.scale = 0.3;

  b12b = createSprite (windowWidth - 340, 130, 150, 125);
  b12b.addImage("b1b",bimgB1);
  b12b.scale = 0.3;
  
  b13b = createSprite (windowWidth - 340, 590, 150, 125);
  b13b.addImage("b2b",bimgB2);
  b13b.scale = 0.3;

  b14b = createSprite (windowWidth - 260, 60, 150, 125);
  b14b.addImage("b1b",bimgB1);
  b14b.scale = 0.3;
  
  b15b = createSprite (windowWidth - 260, 660, 150, 125);
  b15b.addImage("b2b",bimgB2);
  b15b.scale = 0.3;
  
  naveA=createSprite(100,windowHeight/2,100,100);
  naveA.addImage("naveA",naveAImg);
  naveA.scale=0.2;

  naveB=createSprite(windowWidth-100,windowHeight/2,100,100);
  naveB.addImage("naveB",naveBImg);
  naveB.scale=0.2;
  
  bala=createSprite(750,500,50,50);
 // bala.addImage("bala",balaImg);
  bala.scale=.000001;



}

function draw() {
  background(fondoImg);
  textSize(20);
  text("Puntuacion:"+ score,50,50);

  //MOVIMIENTO NAVE REPUBLICA
  if (keyIsDown(UP_ARROW))
    naveB.y = naveB.y-3;
  if (keyIsDown(DOWN_ARROW))
    naveB.y = naveB.y+3;
  
// MOVIMIENTO NAVE IMPERIAL
  if (keyDown("w")){
    naveA.y --;
    naveA.y --;
    naveA.y --;
  }
  if (keyDown("s")){
    naveA.y ++;
    naveA.y ++;
    naveA.y ++;
}


    createbalaB();
    createbalaA();
  drawSprites();
}




function createbalaB() {
  if ( frameCount % 60 === 0){
  var balaB= createSprite(750,600,100,100);
  balaB.addImage(balaBImg);
  balaB.x =naveB.x;
  balaB.y = naveB.y;
  balaB.velocityX = -7;
  balaB.scale = 0.5;
  balaB.lifetime = 250;
  }
}

function createbalaA() {
  if ( frameCount % 60 === 0){
  var balaA= createSprite(naveA.x,naveA.Y,30,30);
  bala.velocityX=0;
  balaA.addImage(balaAImg);
  balaA.x =naveA.x;
  balaA.y = naveA.y;
  balaA.velocityX = 7;
  balaA.scale = 0.5;
  balaA.lifetime = 250;
  }
  if (balaA.x === b1.x ){
    b1.destroy();
  }
}







  /* var b = n1.y - n2.y;
      var a = n1.height/2 + n2.height/2;
    
      var c = n1.x - n2.x;
      var d = n1.width/2 + n2.width/2;
    
      var e = n2.y - n1.y;
      var f = n1.height/2 + n2.height/2;
    
      var g = n2.x - n1.x;
      var h = n1.width/2 + n2.width/2;
      
      if  ( b < a && c < d && e < f && g < h){
       
      }*/