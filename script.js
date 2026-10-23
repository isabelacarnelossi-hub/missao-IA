const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Após uma semana muito corrida e exaustiva na escola ou trabalho, você percebe que está física e mentalmente cansado. Qual o seu primeiro pensamento ao chegar no final de semana?",
        alternativas: [
            {
                texto: "Preciso tirar um tempo só para mim, descansar a mente e desconectar do mundo.",
                afirmacao: "Você entende a importância de desacelerar quando o corpo pede trégua."
            },
            {
                texto: "Vou continuar produzindo e realizando tarefas para não perder tempo.",
                afirmacao: "Você busca estar sempre em movimento, mas precisa tomar cuidado com o esgotamento."
            }
        ]
    },
    {
        enunciado: "Você nota que tem passado muitas horas usando redes sociais antes de dormir, o que tem prejudicado a qualidade do seu sono. Que atitude você decide tomar?",
        alternativas: [
            {
                texto: "Definir um limite diário de uso das telas e criar uma rotina relaxante de sono.",
                afirmacao: "Sabe estabelecer limites saudáveis entre o mundo digital e seu bem-estar."
            },
            {
                texto: "Continuar usando as redes até pegar no sono, mesmo acordando cansado no dia seguinte.",
                afirmacao: "Ainda encontra dificuldades para priorizar uma higiene do sono adequada."
            }
        ]
    },
    {
        enunciado: "Em uma conversa entre amigos sobre saúde e qualidade de vida, surge o tema sobre a prática regular de atividades físicas e alimentação consciente. Qual o seu posicionamento?",
        alternativas: [
            {
                texto: "Defendo que cuidar do corpo com exercícios e boa alimentação é fundamental para a saúde mental.",
                afirmacao: "Reconhece que a saúde física e a saúde mental caminham juntas."
            },
            {
                texto: "Acredito que cuidados com o corpo demandam muito esforço e não são prioridade no momento.",
                afirmacao: "Prioriza outras áreas da vida no momento, deixando a rotina física em segundo plano."
            }
        ]
    },
    {
        enunciado: "Diante de um momento de estresse intenso ou ansiedade com os compromissos futuros, como você reage?",
        alternativas: [
            {
                texto: "Pratico rotinas de respiração, meditação ou busco conversar com alguém de confiança sobre o que sinto.",
                afirmacao: "Desenvolveu estratégias eficientes para acolher e gerenciar suas emoções."
            },
            {
                texto: "Tento ignorar o sentimento e guardo tudo para mim, esperando que o estresse passe sozinho.",
                afirmacao: "Tende a reprimir sentimentos difíceis em vez de processá-los."
            }
        ]
    },
    {
        enunciado: "Um colega te convida para assumir uma responsabilidade extra, mas sua agenda já está lotada e você está no limite de sua energia. O que você faz?",
        alternativas: [
            {
                texto: "Digo 'não' de forma respeitosa, priorizando minha saúde mental e meus limites pessoais.",
                afirmacao: "Aprendeu a prática fundamental de dizer 'não' para proteger sua paz."
            },
            {
                texto: "Aceito o pedido mesmo sabendo que ficarei sobrecarregado, para não chatear a outra pessoa.",
                afirmacao: "Muitas vezes coloca a expectativa dos outros acima da sua própria saúde mental."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Sua Jornada até 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();
