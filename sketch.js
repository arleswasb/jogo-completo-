//DECLARAÇÃODE VARIÁVEIS//

var tela = 1;
var vO;
var largura1 = 75;
var largura2 = 135;
var largura3 = 95;
var largura4 = 120;
var altura1 = 35;
var altura2 = 35;
var altura3 = 35;
var altura4 = 95;
var xMenu1 = 10;
var xMenu2 = 230;
var xMenu3 = 495;
var xMenu4 = 250;
var yMenu1 = 7;
var yMenu2 = 7;
var yMenu3 = 7;
var yMenu4 = 65;
var pontos = 0;
var nivel = 0;
var xcar = 130;
var yPos;
var carmusic;
var car;
var letra = [];
var xburaco, yburaco;
var xo1, xo2, yo1, yo2;
var xR, yR; //////coordenadas da resposta//////
var numeroR; /////numero da resposta/////
var vO;

//CARREGAMENTO DAS IMAGENS DE FUNDO//

function preload() {
  img = loadImage("tela1.jpg");
  img1 = loadImage("tela2.jpg");
  img2 = loadImage("tela3.jpg");
  img3 = loadImage("tela4.png");
  car = loadImage("carro.png");
  letra = [loadImage("ca.png")];
  letra1 = [loadImage("lo.png")];
  letra2 = [loadImage("bo.png")];
  letra3 = [loadImage("la.png")];
  carmusic = createAudio("motor2.mp3");
}

function mouseClicked() {
  //////menu tela 1////////////

  if (
    tela == 1 &&
    mouseX > xMenu1 &&
    mouseX < xMenu1 + largura1 &&
    mouseY > yMenu1 &&
    mouseY < yMenu1 + altura1
  ) {
    tela = 2
    carmusic.loop();///mantem o audio tocando/////
  } else if (
    tela == 1 &&
    mouseX > xMenu2 &&
    mouseX < xMenu2 + largura2 &&
    mouseY > yMenu2 &&
    mouseY < yMenu2 + altura2
  ) {
    tela = 3;
  } else if (
    tela == 1 &&
    mouseX > xMenu3 &&
    mouseX < xMenu3 + largura3 &&
    mouseY > yMenu3 &&
    mouseY < yMenu3 + altura3
  ) {
    tela = 4;
  }

  //////menu tela 2////////////

  if (
    tela == 2 &&
    mouseX > xMenu2 &&
    mouseX < xMenu2 + largura2 &&
    mouseY > yMenu2 &&
    mouseY < yMenu2 + altura2
  ) {
    tela = 1;
    carmusic.pause();
  }

  //////menu tela 3////////////

  if (
    tela == 3 &&
    mouseX > xMenu1 &&
    mouseX < xMenu1 + largura1 &&
    mouseY > yMenu1 &&
    mouseY < yMenu1 + altura1
  ) {
    tela = 1;
  }

  //////menu tela 4////////////

  if (
    tela == 4 &&
    mouseX > xMenu1 &&
    mouseX < xMenu1 + largura1 &&
    mouseY > yMenu1 &&
    mouseY < yMenu1 + altura1
  ) {
    tela = 1;
  }
}

//INICIO DO JOGO

function setup() {
  createCanvas(600, 600);
  xo1 = 150;
  yo1 = 90;
  xo2 = 260;
  yo2 = 500;
  xo3 = 150;
  yo3 = 500;
  xo4 = 260;
  yo4 = 500;
  xi1 = 150;
  xi2 = 250;
  xi3 = 130;
  xi4 = 250;
  yi1 = 90;
  yi2 = 90;
  yi3 = 90;
  yi4 = 90;

  vO = 0.5;
}

function draw() {
  textStyle(BOLD);

  ///////////////TELA 1 MENU PRINCIPAL///////////////////

  if (tela == 1) {
    background(img);

    //MENU PRINCIPAL COM DUAS OPÇÕES///

    textAlign(LEFT);

    //MENU JOGAR//

    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Jogar", 20, 30);

    //MENU INFORMAÇÕES DO JOGO///

    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura2 &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu2, yMenu2, largura2, altura2, 15);
    }
    fill(20);
    noStroke();
    text("Informações", 240, 30);

    //MENU CRÉDITOS DO JOGO///

    if (
      mouseX > xMenu3 &&
      mouseX < xMenu3 + largura3 &&
      mouseY > yMenu3 &&
      mouseY < yMenu3 + altura3
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu3, yMenu3, largura3, altura3, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Créditos", 500, 30);
  }
  /////////////////TELA 2 JOGO /////////////////
  else if (tela == 2) {
    background(img1);
    
    

    /////INICIAR JOGO////////

    textAlign(LEFT);

    /////MENU DA TELA 2 INICIAR/////

    fill(120);
    noStroke();
    textSize(20);
    text("Nível: ", 15, 30);
    text("Pontos: ", 470, 30);

    ///////////MOVIMENTO DOS BURACOS///

    image(letra[0], xi1, yo1);
    xo1 = xo1 + vO;
    yo1 = yo1 + vO;
    image(letra1[0], xi2, yo2);
    xo2 = xo2 + vO;
    yo2 = yo2 + vO;
    image(letra2[0], xi3, yo3);
    xo3 = xo3 + vO;
    yo3 = yo3 + vO;
    image(letra3[0], xi4, yo4);
    xo4 = xo4 + vO;
    yo4 = yo4 + vO;

    if (yo1 == 350) {
      yo2 = 90;
    }
    if (yo1 == 500) {
      yo3 = 90;
    }
    if (yo2 == 400) {
      yo4 = 90;
    }
    if (yo3 == 500) {
      yo1 = 90;
    }

    //MOVIMENTO DO CARRO///

    image(car, xcar, 500);
    if (keyIsDown(LEFT_ARROW) && xcar > 25) {
      xcar -= 5;
    }
    if (keyIsDown(RIGHT_ARROW) && xcar < 445) {
      xcar += 5;
    }
    //////////DESENHO DO BURACO///////////

    ///////////RETORNAR TELA 1/////////

    if (
      mouseX > xMenu2 &&
      mouseX < xMenu2 + largura2 &&
      mouseY > yMenu2 &&
      mouseY < yMenu2 + altura2
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu2 + 20, yMenu2, largura2 - 65, altura2, 20);
    }
    fill(20);
    noStroke();
    text("Menu", 260, 30);
  }

  /////////////////tela 3 INFORMAÇÕES/////////////////
  else if (tela == 3) {
    background(img2);

    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Menu", 20, 30);

    ///////TELA 4 CRÉDITOS////////////
  } 
  else if (tela == 4) {
    background(img3);

    if (
      mouseX > xMenu1 &&
      mouseX < xMenu1 + largura1 &&
      mouseY > yMenu1 &&
      mouseY < yMenu1 + altura1
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu1, yMenu1, largura1, altura1, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Menu", 20, 30);
  }
}
