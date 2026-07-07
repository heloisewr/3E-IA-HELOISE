const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    {
        enunciado: "Em 1979, o rock progressivo começava a dividir espaço com o punk. No entanto, uma das bandas clássicas desse movimento lançou um álbum conceitual épico e sombrio sobre alienação e isolamento, que se tornou um dos mais vendidos de todos os tempos. Qual é este álbum?",
        alternativas: [
            {
                texto: "The Wall",
                afirmacao: "O disco foi lançado pela lendária banda Pink Floyd.O projeto foi liderado pelo baixista Roger Waters.A obra virou um aclamado filme dirigido por Alan Parker. "
            },
            {
                texto: "The Dark Side of the Moon",
                afirmacao: "O disco marcou a transição da banda para um som mais comercial.Ficou por mais de 700 semanas na parada Billboard 200.Traz o famoso design do prisma na capa feito pela agência Hipgnosis."
            }
        ]
    },
    {
        enunciado: "Oriundos de Birmingham, na Inglaterra, um grupo de jovens operários decidiu desacelerar o ritmo do rock e focar em acordes mais pesados e letras com temáticas góticas e sombrias. Este quarteto é amplamente considerado o pioneiro do heavy metal. Que banda é essa?",
        alternativas: [
            {
                texto: "Black Sabbath",
                afirmacao: "Teve como vocalista principal o icônico Ozzy Osbourne.O som pesado foi originado a partir do acidente de trabalho do guitarrista Tony Iommi.A música "Paranoid" tornou-se um dos maiores hinos do rock de todos os tempos."
            },
            {
                texto: "Led Zeppelin",
                afirmacao: "Misturou o peso das guitarras com fortes influências do folk e misticismo.O guitarrista Jimmy Page era o grande líder musical da banda.A canção "Stairway to Heaven" é a obra-prima mais conhecida do grupo."
            }
        ]
    },
    {
        enunciado: " Na transição para os anos 80, o álbum "Thriller" dominou o mundo, mas o cenário do rock ainda era reinante com uma grande turnê e música que até hoje quebra paradigmas nas rádios. Uma das maiores músicas do rock clássico, que marcou o início do sucesso comercial estrondoso da MTV, foi:",
        alternativas: [
            {
                texto: "Sweet Child O' Mine",
                afirmacao: "A faixa pertence ao álbum de estreia da banda Guns N' Roses.O famoso riff de abertura foi criado pelo guitarrista Slash.Tornou-se a canção dos anos 80 mais transmitida no YouTube."
            },
            {
                texto: "Livin' on a Prayer",
                afirmacao: "A música foi lançada pela banda Bon Jovi em 1986.Destaca-se pelo uso inovador do instrumento talk box.Alcançou a primeira posição nas paradas musicais de diversos países."
            }
        ]
    },
     


let atual = 0; //variavel do inicio da lista de perguntas
let perguntaAtual; //variavel correspondente a pergunta atual selecionada
let historiaFinal = ""; //variavel que guarda os textos das afirmações para formar a frase final da IA

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
//função que verifica se a ordem da pergunta atual é maior ou igual a das outras perguntas da lista. Se j[a foi todas, exibe o texto final]
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
} // codigo que mostra o texto de pergunta atual extraido do item enunciado.

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    } //Para a constante alternativa das alternativas é criado um botão novo com alternativa diferente a cada vez que seleciona uma resposta pelo clique
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
} //uma função seleciona as resposta e que vai juntando as afirmaçÕes delas em uma variavel historiaFinal selecionadas de acordo com as opçÕes selecionadas

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
} //função que mostra o Resultado final iniciando com nov um breve texto na caixa de perguntas e que o resultado do final é inserido com o texto guardado na varivel historiaFInal com um espaçamento vazio criado na caixa de alternativas.

mostraPergunta(); //função geral que mostra a pergunta