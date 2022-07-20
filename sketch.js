//DECLARAÇÃODE VARIÁVEIS//

var tela = 1;
var nivel = 1;
var fase = 1;
var ponto = 0;

/////variaveis do menu/////

var largura1 = 75;
var largura2 = 135;
var largura3 = 95;
var largura4 = 120;
var largura5 = 120;
var altura1 = 35;
var altura2 = 35;
var altura3 = 35;
var altura4 = 95;
var altura5 = 75;
var xMenu1 = 10;
var xMenu2 = 230;
var xMenu3 = 495;
var xMenu4 = 250;
var xMenu5 = 250;
var yMenu1 = 7;
var yMenu2 = 7;
var yMenu3 = 7;
var yMenu4 = 65;
var yMenu5 = 275;

/////////variaveis carro///////

var xcar = 130;
var ycar = 500;
var carmusic;
var car;

//////variaveis do buraco///////

var tam = 0;
var tam1 = 0;
var tam2 = 0;
var tam3 = 0;
var xo1 = [];
var posBuracoX = [];
var posBuracoY = [];
var posBuracoX1 = [];
var posBuracoY1 = [];
var buraco1 = [];
var tipos = [];
var fases = [];
var palavras = [];
var b1;
var colisao = false;

/////variaveis vetoriais imagens///////

var imagens = [];
var monossilaba = [];
var dissilaba = [];
var trissilaba = [];
var polissilaba = [];
var oxitona = [];
var paroxitona = [];
var proparoxitona = [];
var qtdBuraco = 6;

//////variaveis das palavras///////////

var paMono = ["céu", "cor", "cruz", "flor", "pai", "pão", "sal", "sol", "trem"]; //////palavra monossilabas///////
var paDis = [
  "amor",
  "bíblia",
  "casal",
  "doce",
  "grande",
  "mulher",
  "mundo",
  "olhar",
  "puxar",
]; //////palavra dissilabas////////
var paTris = [
  "ideia",
  "problema",
  "sucesso",
  "amanhã",
  "amigo",
  "arvore",
  "açucar",
  "carinho",
  "comida",
]; //////palavra trissilabas////////
var paPoli = [
  "borboleta",
  "esperança",
  "matemática",
  "política",
  "telefone",
  "televisão",
  "escuridão",
  "sabomete",
  "travesseiro",
]; //////palavra polissilabas///////
var paOxitona = [
  "abacaxi",
  "alguém",
  "anéis",
  "armazém",
  "jacaré",
  "azul",
  "bebê",
  "café",
  "chapéu",
]; //////palavra oxitona///////
var paParoxitona = [
  "Álbum",
  "Amigo",
  "Fácil",
  "Felicidade",
  "Ideia",
  "Jiboia",
  "Mesa",
  "Proibido",
  "Revólver",
]; //////palavra paroxitona///////
var paProparoxitona = [
  "abóbora",
  "álibi",
  "análise",
  "analítico",
  "âncora",
  "ângulo",
  "ânimo",
  "antídoto",
  "artístico",
]; //////palavra proparoxitona///////

/////////ESPAÇO DAS FUNÇOES GERAIS////////////////////////////

function preload() {
  
  img =  loadImage("tela1.png"); /////imagens de fundo e tela/////
  img1 = loadImage("tela2.jpg"); /////imagens de fundo e tela/////
  img2 = loadImage("tela3.jpg"); /////imagens de fundo e tela/////
  img3 = loadImage("tela4.png"); /////imagens de fundo e tela/////
  img4 = loadImage("imagem4.png"); /////imagens de fundo e tela/////
  img5 = loadImage("imagem5.png"); /////imagens de fundo e tela/////
  img6 = loadImage("tela5.png"); //imagens de fundo e tela//
  img7 = loadImage("tela6.png"); //imagens de fundo e tela//
  img8 = loadImage("tela7.png"); //imagens de fundo final//

  //CARREGAMENTO DAS IMAGENS DOS BURACOS//

  monossilaba[0] = loadImage("CEU.png");
  monossilaba[1] = loadImage("COR.png");
  monossilaba[2] = loadImage("CRUZ.png");
  monossilaba[3] = loadImage("FLOR.png");
  monossilaba[4] = loadImage("PAI.png");
  monossilaba[5] = loadImage("PÃO.png");
  monossilaba[6] = loadImage("SAL.png");
  monossilaba[7] = loadImage("SOL.png");
  monossilaba[8] = loadImage("TREM.png");
  dissilaba[0] = loadImage("AMOR.png");
  dissilaba[1] = loadImage("BIBLIA.png");
  dissilaba[2] = loadImage("CASAL.png");
  dissilaba[3] = loadImage("DOCE.png");
  dissilaba[4] = loadImage("GRANDE.png");
  dissilaba[5] = loadImage("MULHER.png");
  dissilaba[6] = loadImage("MUNDO.png");
  dissilaba[7] = loadImage("OLHAR.png");
  dissilaba[8] = loadImage("PUXAR.png");
  trissilaba[0] = loadImage("IDEIA.png");
  trissilaba[1] = loadImage("PROBLEMA.png");
  trissilaba[2] = loadImage("SUCESSO.png");
  trissilaba[3] = loadImage("amanhã.png");
  trissilaba[4] = loadImage("amigo.png");
  trissilaba[5] = loadImage("arvore.png");
  trissilaba[6] = loadImage("acucar.png");
  trissilaba[7] = loadImage("carinho.png");
  trissilaba[8] = loadImage("comida.png");
  polissilaba[0] = loadImage("borboleta.png");
  polissilaba[1] = loadImage("esperança.png");
  polissilaba[2] = loadImage("matematica.png");
  polissilaba[3] = loadImage("politica.png");
  polissilaba[4] = loadImage("telefone.png");
  polissilaba[5] = loadImage("televisão.png");
  polissilaba[6] = loadImage("escuridão.png");
  polissilaba[7] = loadImage("sabonete.png");
  polissilaba[8] = loadImage("travesseiro.png");

  oxitona[0] = loadImage("abacaxi.png");
  oxitona[1] = loadImage("alguém.png");
  oxitona[2] = loadImage("anéis.png");
  oxitona[3] = loadImage("armazém.png");
  oxitona[4] = loadImage("jacaré.png");
  oxitona[5] = loadImage("azul.png");
  oxitona[6] = loadImage("bebê.png");
  oxitona[7] = loadImage("café.png");
  oxitona[8] = loadImage("chapéu.png");
  paroxitona[0] = loadImage("album.png");
  paroxitona[1] = loadImage("AMIGO1.png");
  paroxitona[2] = loadImage("Fácil.png");
  paroxitona[3] = loadImage("Felicidade.png");
  paroxitona[4] = loadImage("IDEIA1.png");
  paroxitona[5] = loadImage("Jiboia.png");
  paroxitona[6] = loadImage("Mesa.png");
  paroxitona[7] = loadImage("Proibido.png");
  paroxitona[8] = loadImage("Revólver.png");
  proparoxitona[0] = loadImage("abóbora.png");
  proparoxitona[1] = loadImage("álibi.png");
  proparoxitona[2] = loadImage("análise.png");
  proparoxitona[3] = loadImage("analítico.png");
  proparoxitona[4] = loadImage("âncora.png");
  proparoxitona[5] = loadImage("ângulo.png");
  proparoxitona[6] = loadImage("ânimo.png");
  proparoxitona[7] = loadImage("antídoto.png");
  proparoxitona[8] = loadImage("artístico.png");

  /////////////imagem e audio do carro/////////////
  
  carmusic = createAudio("motor2.mp3");
  car = loadImage("carro.png");

} //CARREGAMENTO DAS IMAGENS//

function mouseClicked() {
  //////menu tela 1////////////

  if (
    tela == 1 &&
    mouseX > xMenu1 &&
    mouseX < xMenu1 + largura1 &&
    mouseY > yMenu1 &&
    mouseY < yMenu1 + altura1
  ) {
    tela = 2;

    carmusic.loop(); ///mantem o audio tocando/////
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
  } else if (
    tela == 5 &&
    mouseX > xMenu3 &&
    mouseX < xMenu3 + largura3 &&
    mouseY > yMenu3 &&
    mouseY < yMenu3 + altura3
  ) {
    tela = 2;
  }

  //////menu tela 2////////////
  else if (
    tela == 2 &&
    mouseX > xMenu2 &&
    mouseX < xMenu2 + largura2 &&
    mouseY > yMenu2 &&
    mouseY < yMenu2 + altura2
  ) {
    tela = 1;
    nivel = 1;
    ponto = 0;
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

  //////menu tela 5////////////

  if (
    tela == 5 &&
    mouseX > xMenu5 &&
    mouseX < xMenu5 + largura5 &&
    mouseY > yMenu5 + 100 &&
    mouseY < yMenu5 + 100 + altura5
  ) {
    tela = 1;
    nivel = 1;
    ponto = 0;
    carmusic.pause();
  } else if (
    tela == 5 &&
    mouseX > xMenu5 &&
    mouseX < xMenu5 + largura5 &&
    mouseY > yMenu5 &&
    mouseY < yMenu5 + altura5
  ) {
    tela = 2;
    carmusic.loop();
  }

  //////menu tela 6////////////

  if (
    tela == 6 &&
    mouseX > xMenu5 &&
    mouseX < xMenu5 + largura5 &&
    mouseY > yMenu5 + 100 &&
    mouseY < yMenu5 + 100 + altura5
  ) {
    tela = 1;
    nivel = 1;
    ponto = 0;
    carmusic.pause();
  } else if (
    tela == 6 &&
    mouseX > xMenu5 &&
    mouseX < xMenu5 + largura5 &&
    mouseY > yMenu5 &&
    mouseY < yMenu5 + altura5
  ) {
    tela = 2;
    carmusic.loop();
  }

  //////menu tela 7////////////

  if (
    tela == 7 &&
    mouseX > xMenu5 &&
    mouseX < xMenu5 + largura5 &&
    mouseY > yMenu5 + 100 &&
    mouseY < yMenu5 + 100 + altura5
  ) {
    tela = 1;
    nivel = 1;
    ponto = 0;
    carmusic.pause();
  }
} /////função dos botoes do menu//////

function tamanho(h) {
  return (15 / 35) * h + 10;
} /////funções do deslocamento do buraco/////

function velocidadey(h) {
  return (10 / 350) * h + 0.1;
} //funções do deslocamento do buraco////

function largura(h) {
  return (29 / 35) * h + 0.1;
} /////funções do deslocamento do buraco/////

function carregarImg() {
  var j;
  for (i = 0, j = 0; j < 9, i < 63; j++, i++) {
    if (i < 9) {
      imagens[i] = monossilaba[j];
      tipos[i] = 1;
      fases[i] = 1;
      palavras[i] = paMono[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 18) {
      imagens[i] = dissilaba[j];
      tipos[i] = 2;
      fases[i] = 1;
      palavras[i] = paDis[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 27) {
      imagens[i] = trissilaba[j];
      tipos[i] = 3;
      fases[i] = 1;
      palavras[i] = paTris[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 36) {
      imagens[i] = polissilaba[j];
      tipos[i] = 4;
      fases[i] = 1;
      palavras[i] = paPoli[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 45) {
      imagens[i] = oxitona[j];
      tipos[i] = 5;
      fases[i] = 2;
      palavras[i] = paOxitona[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 54) {
      imagens[i] = paroxitona[j];
      tipos[i] = 6;
      fases[i] = 2;
      palavras[i] = paParoxitona[j];
      if (j == 8) {
        j = 0;
      }
    } else if (i < 63) {
      imagens[i] = proparoxitona[j];
      tipos[i] = 7;
      fases[i] = 2;
      palavras[i] = paProparoxitona[j];
      if (j == 8) {
        j = 0;
      }
    }
  }
} ///carregando o vetor das imagens, tipos, fases e palavras//

function objetivo() {
  if (nivel == 1 && fase == 1) {
    frameRate(20);
    fill(0);
    noStroke();
    textSize(17);
    return text("PALAVRA", 25, 175), text("MONOSÍLABAS", 10, 195);
  } else if (nivel == 2 && fase == 1) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 175), text("DISSÍLABAS", 10, 195);
  } else if (nivel == 3 && fase == 1) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 175), text("TRISSÍLABAS", 10, 195);
  } else if (nivel == 4 && fase == 1) {
    fill(0);
    noStroke();
    textSize(20);

    return text("PALAVRA", 25, 175), text("POLISSÍLABAS", 05, 195);
  } else if (nivel == 1 && fase == 2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 35, 175), text("OXÍTONAS", 20, 195);
  } else if (nivel == 2 && fase == 2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 175), text("PAROXÍTONAS", 15, 195);
  } else if (nivel == 3 && fase == 2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 175), text("PROPAROXÍTONAS", 5, 195);
  }
} ///carrega tela do objetivo//

function testeDistancia(a, b) {
  g = parseInt(dist(xcar, ycar, a, b));
  if (g < 10) {
    if (tipos[b1] > 0 && tipos[b1] < 9) {
      colisao = true;
    }
    if (colisao == true) {
      ponto = ponto + 10;
      colisao = false;
    }
  }
} ///testa distancia carro/buraco///

function trocaBuraco() {
  for (i = 0; i < qtdBuraco; i++) {
    if (nivel == 1) {
      b1 = parseInt(random(0, 63));
    } else if (nivel == 2) {
      b1 = parseInt(random(0, 63));
    } else if (nivel == 3) {
      b1 = parseInt(random(0, 63));
    } else if (nivel == 4) {
      b1 = parseInt(random(0, 63));
    }
    buraco1[i] = imagens[b1];
    posBuracoY[i] = parseInt(random(150, 180));
    posBuracoX[i] = parseInt(random(290, 300));
    if (i == 0) {
      xo1[i] = 0.3;
    }
    if (i == 1) {
      xo1[i] = -0.3;
    }
    if (i == 2) {
      xo1[i] = 0.3;
    }
    if (i == 3) {
      xo1[i] = -0.3;
    }
  }
} ///////troca os buracos/////

function atualizaNivel() {
  if (ponto > 50 && nivel == 1 && fase == 1) {
    tela = 5;
    nivel = 2;
    carmusic.pause();
  } else if (ponto > 100 && nivel == 2 && fase == 1) {
    tela = 5;
    nivel = 3;
    carmusic.pause();
  } else if (ponto > 150 && nivel == 3 && fase == 1) {
    tela = 5;
    nivel = 4;
    carmusic.pause();
  } else if (ponto > 200 && nivel == 4 && fase == 1) {
    tela = 6;
    nivel = 1;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 250 && nivel == 1 && fase == 2) {
    tela = 6;
    nivel = 2;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 300 && nivel == 2 && fase == 2) {
    tela = 6;
    nivel = 3;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 350 && nivel == 3 && fase == 2) {
    tela = 7;
    carmusic.pause();
  }
} ///atualiza o nivel/////

//INICIO DO JOGO

function setup() {
  createCanvas(600, 600);
  frameRate(20);
  carregarImg(); ///função que carrega o vetor ////
  
  for (i = 0; i < qtdBuraco; i++) {
    if (nivel == 1) {
      b1 = parseInt(random(1, 8));
    } else if (nivel == 2) {
      b1 = parseInt(random(9, 16));
    } else if (nivel == 3) {
      b1 = parseInt(random(18, 26));
    } else if (nivel == 4) {
      b1 = parseInt(random(27, 35));
    }
    buraco1[i] = imagens[b1];
    posBuracoY[i] = parseInt(random(150, 180));
    posBuracoX[i] = parseInt(random(290, 300));

    if (i == 0) {
      xo1[i] = 0.3;
    }
    if (i == 1) {
      xo1[i] = -0.3;
    }
    if (i == 2) {
      xo1[i] = 0.3;
    }
    if (i == 3) {
      xo1[i] = -0.3;
    }
  }
}

function draw() {
  textStyle(BOLD);

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
  } ////////////////TELA 1 MENU PRINCIPAL////////
  else if (tela == 2) {
    imageMode(CORNER);
    background(img1);
    textAlign(LEFT);
    image(img5, 0, 110, 150, 150);
    objetivo();

    /////INICIO DO JOGO////////

    fill(120);
    noStroke();
    textSize(20);
    text("Nível: " + nivel, 15, 30);
    text("Fase: " + fase, 100, 30);
    text("Pontos: " + ponto, 470, 30);

    ///////////MOVIMENTO DOS BURACOS///

    for (i = 0; i < qtdBuraco; i++) {
      tam = tamanho(posBuracoY[i] - 150);
      imageMode(CENTER);
      image(buraco1[i], posBuracoX[i], posBuracoY[i], tam, tam);
      posBuracoX[i] = parseInt(xo1[i] * largura(posBuracoY[i] - 150) + 300);
      if (i == 0) {
        xo1[i] = 0.3;
      } else if (i == 1) {
        xo1[i] = -0.3;
      } else if (i == 2) {
        xo1[i] = 0.3;
      } else if (i == 3) {
        xo1[i] = -0.3;
      }
      posBuracoY[i] = posBuracoY[i] + velocidadey(posBuracoY[i] - 150);

      ////////comparar a posição do carro com o buraco////////////

      testeDistancia(posBuracoX[i], posBuracoY[i]);

      ////////atualiza o nivel quando ponto atinge metas////////////

      atualizaNivel();

      if (posBuracoY[3] > 1500) {
        posBuracoY[i] = parseInt(random(150, 180));
        posBuracoX[i] = parseInt(random(290, 300));
        trocaBuraco();
        tam = 0;
      }
    }

    //MOVIMENTO DO CARRO///

    imageMode(CENTER);
    image(car, xcar, ycar);
    imageMode(CORNER);

    if (keyIsDown(LEFT_ARROW) && xcar > 80) {
      xcar -= 10;
    }
    if (keyIsDown(RIGHT_ARROW) && xcar < 500) {
      xcar += 10;
    }
    if (keyIsDown(UP_ARROW) && ycar > 500) {
      ycar -= 10;
    }
    if (keyIsDown(DOWN_ARROW) && ycar < 550) {
      ycar += 10;
    }


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
    
  } //////////TELA 2 JOGO /////////////////
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
  } //////////TELA 3 INFORMAÇÕES//////////
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
  } ///////TELA 4 CRÉDITOS////////////
  else if (tela == 5) {
    background(img6);
    if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 &&
      mouseY < yMenu5 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5, largura5, altura5, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Continuar", 262, 300);
    text("Nível: " + nivel, 275, 330);
    if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 + 100 &&
      mouseY < yMenu5 + 100 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5 + 100, largura5, altura5 - 15, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Sair", 280, 400);
  } ///////TELA 5 FASE 1 VIVEIS 1 A 4////////////
  else if (tela == 6) {
    background(img7);
    if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 &&
      mouseY < yMenu5 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5, largura5, altura5, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Continuar", 262, 300);
    text("Fase: " + fase, 272, 320);
    text("Nível: " + nivel, 272, 340);
    if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 + 100 &&
      mouseY < yMenu5 + 100 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5 + 100, largura5, altura5 - 15, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Sair", 280, 400);
  } ///////TELA 6 FASE 2 VIVEIS 1 A 3////////////
  else if (tela == 7) {
    background(img8);

    if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 + 100 &&
      mouseY < yMenu5 + 100 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5 + 100, largura5, altura5 - 15, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Sair", 290, 410);
  } ///////TELA 7 GAME OVER////////
}
