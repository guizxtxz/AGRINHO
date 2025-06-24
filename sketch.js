let perguntas = [
  {
    texto: "Qual a importância da rotação de culturas na agricultura?",
    opcoes: [
      "Aumenta a produtividade e melhora o solo",
      "Diminui o custo de irrigação",
      "Elimina todas as pragas",
      "Acelera a colheita"
    ],
    resposta: 0
  },
  {
    texto: "Qual tecnologia permite monitorar plantações em tempo real?",
    opcoes: [
      "Drones agrícolas",
      "Tratores antigos",
      "Pontos de ônibus inteligentes",
      "Aplicativos de transporte"
    ],
    resposta: 0
  },
  {
    texto: "O que é agricultura de precisão?",
    opcoes: [
      "Plantio aleatório para diversidade",
      "Uso eficiente de recursos com tecnologia",
      "Plantio manual com ajuda de animais",
      "Colheita feita apenas no inverno"
    ],
    resposta: 1
  },
  {
    texto: "Qual é o impacto da urbanização acelerada no campo?",
    opcoes: [
      "Aumento das áreas verdes rurais",
      "Redução das áreas agrícolas",
      "Melhora na qualidade do ar rural",
      "Expansão das pequenas propriedades"
    ],
    resposta: 1
  },
  {
    texto: "Como a agroindústria contribui para a economia urbana?",
    opcoes: [
      "Importando produtos do exterior",
      "Processando produtos agrícolas para consumo urbano",
      "Criando mais áreas de cultivo no campo",
      "Diminuindo a população da cidade"
    ],
    resposta: 1
  },
  {
    texto: "O que caracteriza a cadeia produtiva da agricultura familiar?",
    opcoes: [
      "Produção em larga escala e exportação",
      "Pequena produção, consumo local e sustentabilidade",
      "Uso exclusivo de máquinas agrícolas",
      "Dependência total do comércio urbano"
    ],
    resposta: 1
  },
  {
    texto: "Qual o papel das cooperativas rurais na conexão campo-cidade?",
    opcoes: [
      "Agrupam produtores para melhorar negociação e logística",
      "Controlam o preço dos produtos urbanos",
      "Garantem transporte gratuito para os agricultores",
      "Administram áreas urbanas verdes"
    ],
    resposta: 0
  },
  {
    texto: "Qual é a vantagem da agroecologia frente à agricultura convencional?",
    opcoes: [
      "Redução do uso de agrotóxicos e preservação ambiental",
      "Maior uso de fertilizantes químicos",
      "Aumento da monocultura intensiva",
      "Expansão das cidades no campo"
    ],
    resposta: 0
  },
  {
    texto: "Como a logística urbana impacta a distribuição de produtos agrícolas?",
    opcoes: [
      "Aumenta o tempo e custo de entrega",
      "Facilita a entrega rápida e eficiente ao consumidor final",
      "Diminui o consumo urbano",
      "Reduz a qualidade dos produtos"
    ],
    resposta: 1
  },
  {
    texto: "Qual recurso natural é vital para a irrigação agrícola sustentável?",
    opcoes: [
      "Água subterrânea controlada",
      "Água salgada do mar",
      "Petróleo para máquinas",
      "Areia do deserto"
    ],
    resposta: 0
  }
];

let perguntaAtual = 0;
let pontuacao = 0;
let respondido = false;
let resultado = "";

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
  rectMode(CENTER);
}

function draw() {
  background('#d0e8d0'); // tom suave de verde

  if (perguntaAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarPergunta() {
  fill(0);
  textSize(20);
  // Mostrar a pergunta em caixa com quebra de linha
  text(perguntas[perguntaAtual].texto, width / 2, 50, width - 40, 100);

  for (let i = 0; i < perguntas[perguntaAtual].opcoes.length; i++) {
    let y = 130 + i * 55;
    // Fundo da opção: verde se correta (após respondido), vermelho se errada, branco se não respondeu
    if (respondido) {
      if (i === perguntas[perguntaAtual].resposta) {
        fill('#388e3c'); // verde
      } else if (i === escolhaUsuario) {
        fill('#e57373'); // vermelho
      } else {
        fill('#fff');
      }
    } else {
      fill('#fff');
    }

    stroke(0);
    strokeWeight(1);
    rect(width / 2, y, 600, 45, 10);

    fill(0);
    noStroke();
    textSize(18);
    text(`${i + 1}. ${perguntas[perguntaAtual].opcoes[i]}`, width / 2, y);
  }

  if (respondido) {
    fill(0);
    textSize(18);
    text(resultado, width / 2, height - 50);
    text("Pressione ESPAÇO para continuar", width / 2, height - 20);
  } else {
    fill(0);
    textSize(16);
    text("Escolha uma opção: 1, 2, 3 ou 4 no teclado", width / 2, height - 20);
  }
}

let escolhaUsuario = -1;

function keyPressed() {
  if (!respondido) {
    if (key >= '1' && key <= '4') {
      escolhaUsuario = int(key) - 1;
      if (escolhaUsuario === perguntas[perguntaAtual].resposta) {
        pontuacao++;
        resultado = "✅ Resposta correta! Parabéns!";
      } else {
        resultado = "❌ Resposta errada! Tente a próxima.";
      }
      respondido = true;
    }
  } else {
    if (key === ' ') {
      respondido = false;
      escolhaUsuario = -1;
      perguntaAtual++;
    }
  }
}

function mostrarResultado() {
  background('#a8d5a2');
  fill(0);
  textSize(28);
  text("Fim do Quizz Agrinho Difícil!", width / 2, height / 2 - 40);
  textSize(24);
  text(`Você acertou ${pontuacao} de ${perguntas.length} perguntas.`, width / 2, height / 2);
  textSize(18);
  text("Recarregue a página para jogar novamente.", width / 2, height / 2 + 40);
}
