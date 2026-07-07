const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
//acima criação das constantes JS dos elementos HTML
const perguntas = [
    
    {
        enunciado: "O que melhor define o papel do Sol no nosso sistema?",
        alternativas: [
            {
                texto: "Sua fusão nuclear, que gera luz e vida",
                afirmacao: "Entendendo o Sol como motor de vida, "
            },
            {
                texto: "Sua gravidade, que estabiliza os planetas.",
                afirmacao: "Vendo o Sol como a grande âncora gravitacional,"
            }
        ]
    },

    {
        enunciado: "O que melhor define o papel do Sol no nosso sistema?",
        alternativas: [
            {
                texto: "Sua fusão nuclear, que gera luz e vida",
                afirmacao: "Entendendo o Sol como motor de vida, "
            },
            {
                texto: "Sua gravidade, que estabiliza os planetas.",
                afirmacao: "Vendo o Sol como a grande âncora gravitacional,"
            }
        ]
    },

    {
        enunciado: "O que melhor define o papel do Sol no nosso sistema?",
        alternativas: [
            {
                texto: "Sua fusão nuclear, que gera luz e vida",
                afirmacao: "Entendendo o Sol como motor de vida, "
            },
            {
                texto: "Sua gravidade, que estabiliza os planetas.",
                afirmacao: "Vendo o Sol como a grande âncora gravitacional,"
             }//fechamento do objeto do texto e afirmação da lista de alternativas
        ]//fechamento da lista de alternativas
    },//fechamento do objeto com enunciado e lista de alternativas da lista de perguntas
  
     


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