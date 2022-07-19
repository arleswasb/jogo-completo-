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
var qtdBuraco = 10;
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
var qtdBuraco = 8;

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
  img = loadImage("tela1.png"); /////imagens de fundo e tela/////
  img1 = loadImage("tela2.jpg"); /////imagens de fundo e tela/////
  img2 = loadImage("tela3.jpg"); /////imagens de fundo e tela/////
  img3 = loadImage("tela4.png"); /////imagens de fundo e tela/////
  img4 = loadImage("imagem4.png"); /////imagens de fundo e tela/////
  img5 = loadImage("imagem5.png"); /////imagens de fundo e tela/////
  img6 = loadImage("imagens/tela5.png"); //imagens de fundo e tela//
  img7 = loadImage("imagens/tela6.png"); //imagens de fundo e tela//
  img8 = loadImage("tela7.png"); //imagens de fundo final//
 

  //CARREGAMENTO DAS IMAGENS DOS BURACOS//

  monossilaba[0] = loadImage("buracos/monossilabas/CEU.png");
  monossilaba[1] = loadImage("buracos/monossilabas/COR.png");
  monossilaba[2] = loadImage("buracos/monossilabas/CRUZ.png");
  monossilaba[3] = loadImage("buracos/monossilabas/FLOR.png");
  monossilaba[4] = loadImage("buracos/monossilabas/PAI.png");
  monossilaba[5] = loadImage("buracos/monossilabas/PÃO.png");
  monossilaba[6] = loadImage("buracos/monossilabas/SAL.png");
  monossilaba[7] = loadImage("buracos/monossilabas/SOL.png");
  monossilaba[8] = loadImage("buracos/monossilabas/TREM.png");
  dissilaba[0] = loadImage("/buracos/dissilabas/AMOR.png");
  dissilaba[1] = loadImage("/buracos/dissilabas/BIBLIA.png");
  dissilaba[2] = loadImage("/buracos/dissilabas/CASAL.png");
  dissilaba[3] = loadImage("/buracos/dissilabas/DOCE.png");
  dissilaba[4] = loadImage("/buracos/dissilabas/GRANDE.png");
  dissilaba[5] = loadImage("/buracos/dissilabas/MULHER.png");
  dissilaba[6] = loadImage("/buracos/dissilabas/MUNDO.png");
  dissilaba[7] = loadImage("/buracos/dissilabas/OLHAR.png");
  dissilaba[8] = loadImage("/buracos/dissilabas/PUXAR.png");
  trissilaba[0] = loadImage("/buracos/trissilabas/IDEIA.png");
  trissilaba[1] = loadImage("/buracos/trissilabas/PROBLEMA.png");
  trissilaba[2] = loadImage("/buracos/trissilabas/SUCESSO.png");
  trissilaba[3] = loadImage("/buracos/trissilabas/amanhã.png");
  trissilaba[4] = loadImage("/buracos/trissilabas/amigo.png");
  trissilaba[5] = loadImage("/buracos/trissilabas/arvore.png");
  trissilaba[6] = loadImage("/buracos/trissilabas/açucar.png");
  trissilaba[7] = loadImage("/buracos/trissilabas/carinho.png");
  trissilaba[8] = loadImage("/buracos/trissilabas/comida.png");
  polissilaba[0] = loadImage("/buracos/polissilabas/borboleta.png");
  polissilaba[1] = loadImage("/buracos/polissilabas/esperança.png");
  polissilaba[2] = loadImage("/buracos/polissilabas/matematica.png");
  polissilaba[3] = loadImage("/buracos/polissilabas/politica.png");
  polissilaba[4] = loadImage("/buracos/polissilabas/telefone.png");
  polissilaba[5] = loadImage("/buracos/polissilabas/televisão.png");
  polissilaba[6] = loadImage("/buracos/polissilabas/escuridão.png");
  polissilaba[7] = loadImage("/buracos/polissilabas/sabonete.png");
  polissilaba[8] = loadImage("/buracos/polissilabas/travesseiro.png");

  oxitona[0] = loadImage("/buracos/oxitonas/abacaxi.png");
  oxitona[1] = loadImage("/buracos/oxitonas/alguém.png");
  oxitona[2] = loadImage("/buracos/oxitonas/anéis.png");
  oxitona[3] = loadImage("/buracos/oxitonas/armazém.png");
  oxitona[4] = loadImage("/buracos/oxitonas/jacaré.png");
  oxitona[5] = loadImage("/buracos/oxitonas/azul.png");
  oxitona[6] = loadImage("/buracos/oxitonas/bebê.png");
  oxitona[7] = loadImage("/buracos/oxitonas/café.png");
  oxitona[8] = loadImage("/buracos/oxitonas/chapéu.png");
  paroxitona[0] = loadImage("/buracos/paroxitonas/album.png");
  paroxitona[1] = loadImage("/buracos/paroxitonas/Amigo.png");
  paroxitona[2] = loadImage("/buracos/paroxitonas/Fácil.png");
  paroxitona[3] = loadImage("/buracos/paroxitonas/Felicidade.png");
  paroxitona[4] = loadImage("/buracos/paroxitonas/Ideia.png");
  paroxitona[5] = loadImage("/buracos/paroxitonas/Jiboia.png");
  paroxitona[6] = loadImage("/buracos/paroxitonas/Mesa.png");
  paroxitona[7] = loadImage("/buracos/paroxitonas/Proibido.png");
  paroxitona[8] = loadImage("/buracos/paroxitonas/Revólver.png");
  proparoxitona[0] = loadImage("/buracos/proparoxitonas/abóbora.png");
  proparoxitona[1] = loadImage("/buracos/proparoxitonas/álibi.png");
  proparoxitona[2] = loadImage("/buracos/proparoxitonas/análise.png");
  proparoxitona[3] = loadImage("/buracos/proparoxitonas/analítico.png");
  proparoxitona[4] = loadImage("/buracos/proparoxitonas/âncora.png");
  proparoxitona[5] = loadImage("/buracos/proparoxitonas/ângulo.png");
  proparoxitona[6] = loadImage("/buracos/proparoxitonas/ânimo.png");
  proparoxitona[7] = loadImage("/buracos/proparoxitonas/antídoto.png");
  proparoxitona[8] = loadImage("/buracos/proparoxitonas/artístico.png");

  /////////////imagem e audio do carro/////////////
  carmusic = createAudio("motor2.mp3");
  car = loadImage("carro.png");
  
  carregarImg(); ////////função que carrega o vetor que indexa os veores imagens, tipos, fases e palavras////////////////////////
}//CARREGAMENTO DAS IMAGENS//

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
}/////funções do deslocamento do buraco/////

function velocidadey(h) {
  return (10 / 350) * h + 0.1;
}//funções do deslocamento do buraco////

function largura(h) {
  return (29 / 35) * h + 0.1;
}/////funções do deslocamento do buraco/////

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
} ///carregando o vetor das imagens e tipos//

function objetivo(a, b) {
  if (nivel == 1 && fase==1) {
    frameRate(20);
    fill(0);
    noStroke();
    textSize(17);
    return text("PALAVRA", 25, 75), text("MONOSÍLABAS", 10, 95);
  } else if (nivel == 2 && fase==1) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 75), text("DISSÍLABAS", 10, 95);
  } else if (nivel == 3 && fase==1) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 75), text("TRISSÍLABAS", 10, 95);
  } else if (nivel == 4 && fase==1) {
    fill(0);
    noStroke();
    textSize(20);

    return text("PALAVRA", 25, 75), text("POLISSÍLABAS", 05, 95);
  } else if (nivel == 1 && fase==2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 35, 75), text("OXÍTONAS", 20, 95);
  } else if (nivel == 2 && fase==2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 75), text("PAROXÍTONAS", 20, 95);
  } else if (nivel == 3 && fase==2) {
    fill(0);
    noStroke();
    textSize(20);
    return text("PALAVRA", 25, 75), text("PROPAROXÍTONAS", 10, 95);
  }
}///carrega tela do objetivo//

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
}///testa distancia carro/buraco///

function trocaBuraco(){
for (i = 0; i < qtdBuraco; i++) {
    if (nivel == 1) {
    b1 = parseInt(random(0, 63));
  }else if (nivel == 2) {
    b1 = parseInt(random(0, 63));
  }else if (nivel == 3) {
    b1 = parseInt(random(0, 63));
  }else if (nivel == 4) {
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

}///////troca os buracos/////

function atualizaNivel() {
  if (ponto > 200 && nivel == 1) {
    tela = 5;
    nivel = 2;
    carmusic.pause();
  } else if (ponto > 400 && nivel == 2) {
    tela = 5;
    nivel = 3;
    carmusic.pause();
  } else if (ponto > 600 && nivel == 3) {
    tela = 5;
    nivel = 4;
    carmusic.pause();
  } else if (ponto > 800 && nivel == 4) {
    tela = 6;
    nivel = 5;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 1000 && nivel == 5) {
    tela = 6;
    nivel = 6;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 1200 && nivel == 6) {
    tela = 6;
    nivel = 7;
    fase = 2;
    carmusic.pause();
  } else if (ponto > 1400 && nivel == 7) {
    tela = 7;
    nivel = 0;
    fase = 1;
    carmusic.pause();
  }
}///atualiza o nivel/////


//INICIO DO JOGO

function setup() {
  createCanvas(600, 600);
  frameRate(20);
  for (i = 0; i < qtdBuraco; i++) {
    if (nivel == 1) {
    b1 = parseInt(random(1, 8));
  }else if (nivel == 2) {
    b1 = parseInt(random(9, 16));
  }else if (nivel == 3) {
    b1 = parseInt(random(18, 26));
  }else if (nivel == 4) {
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
  }////////////////TELA 1 MENU PRINCIPAL////////
  else if (tela == 2) {
    imageMode(CORNER);
    background(img1);
    textAlign(LEFT);
    image(img5, 0, 50, 150, 150);
    objetivo()
    
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
      
      testeDistancia(posBuracoX[i], posBuracoY[i])
      
      ////////atualiza o nivel quando ponto atinge metas////////////
      
      atualizaNivel()
      
      if (posBuracoY[3] > 1000) {
          posBuracoY[i] = parseInt(random(150, 180));
          posBuracoX[i] = parseInt(random(290, 300));
          trocaBuraco()
          tam=0
      }
    }

    /////MENU DA TELA 2 INICIAR/////
    
    
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

    

    //////verificação do ponto certo///////

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
  }    ///////TELA 4 CRÉDITOS////////////
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
    text("Nível: "+nivel, 275, 330);
  if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 + 100 &&
      mouseY < yMenu5 + 100 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5+100, largura5, altura5-15, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Sair", 280, 400);
  }
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
    text("Fase: "+fase, 272, 320);
    text("Nível: "+nivel, 272, 340);
  if (
      mouseX > xMenu5 &&
      mouseX < xMenu5 + largura5 &&
      mouseY > yMenu5 + 100 &&
      mouseY < yMenu5 + 100 + altura5
    ) {
      stroke(200);
      fill("#F5F5F5");
      rect(xMenu5, yMenu5+100, largura5, altura5-15, 15);
    }
    fill(20);
    noStroke();
    textSize(20);
    text("Sair", 280, 400);
  }
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

