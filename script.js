const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são algumas decisões-chave que podem influenciar o futuro do planeta?",
        alternativas: [
            {
                texto: "Decisões como adoção de fontes de energia renovável, políticas de conservação ambiental, gestão de resíduos, preservação da biodiversidade e controle da poluição são cruciais para moldar o futuro do nosso planeta.",
                afirmacao: "Decisões como adoção de fontes de energia renovável, políticas de conservação ambiental, gestão de resíduos, preservação da biodiversidade e controle da poluição são cruciais para moldar o futuro do nosso planeta."
            },
            {
                texto: "Decisões políticas em níveis locais, nacionais e globais têm um grande impacto no meio ambiente. Políticas relacionadas à regulamentação de emissões de gases de efeito estufa, proteção de habitats naturais, gestão de recursos naturais e incentivos para energias renováveis podem moldar o futuro do planeta.",
                afirmacao: "Políticas relacionadas à regulamentação de emissões de gases de efeito estufa, proteção de habitats naturais, gestão de recursos naturais e incentivos para energias renováveis podem moldar o futuro do planeta."
            }
        ]
    },
    {
        enunciado: "Como indivíduos podem contribuir para decidir o futuro do planeta?",
        alternativas: [
            {
                texto: "Podemos conservar recursos naturais reduzindo o desperdício de água, energia e alimentos. Práticas como tomar banhos mais curtos, desligar dispositivos eletrônicos quando não estão em uso, reciclar e compostar podem ajudar a preservar os recursos naturais preciosos do planeta.",
                afirmacao: "Práticas como tomar banhos mais curtos, desligar dispositivos eletrônicos quando não estão em uso, reciclar e compostar podem ajudar a preservar os recursos naturais preciosos do planeta."
            },
            {
                texto: "Indivíduos podem contribuir por meio de práticas diárias sustentáveis, como redução do consumo de plástico, conservação de água e apoio a empresas e políticas voltadas para a proteção do meio ambiente.",
                afirmacao: "Indivíduos podem contribuir por meio de práticas diárias sustentáveis, como redução do consumo de plástico, conservação de água e apoio a empresas e políticas voltadas para a proteção do meio ambiente."
            }
        ]
    },
    {
        enunciado: "Como lidar com desafios globais, como mudanças climáticas e perda de biodiversidade, ao decidir o futuro do planeta?",
        alternativas: [
            {
                texto: "Promover a conscientização pública sobre as questões ambientais e incentivar mudanças de comportamento é fundamental. Isso pode envolver programas de educação ambiental nas escolas, campanhas de sensibilização pública e incentivos para estilos de vida sustentáveis.",
                afirmacao: "Promover a conscientização pública sobre as questões ambientais e incentivar mudanças de comportamento é crucial para garantir um futuro sustentável para as próximas gerações."
            },
            {
                texto: "Abordar desafios globais requer cooperação internacional, implementação de políticas ambientais abrangentes e investimento em tecnologias e práticas sustentáveis para mitigar os impactos das mudanças climáticas e proteger a biodiversidade.",
                afirmacao: "A abordagem colaborativa entre nações, aliada à implementação de políticas ambientais robustas e ao investimento em soluções sustentáveis, é essencial para enfrentar os desafios globais, como as mudanças climáticas e a perda de biodiversidade, garantindo assim um futuro mais seguro e próspero para o nosso planeta."
            }
        ]
    },
    {
        enunciado: "Como pequenas mudanças no estilo de vida podem ter um impacto significativo no futuro do planeta?",
        alternativas: [
            {
                texto: "Reciclar, usar transporte público ou bicicleta em vez de carro e reduzir o consumo de energia em casa, podem acumular-se para fazer uma grande diferença no uso de recursos naturais e na redução das emissões de carbono.",
                afirmacao: "Pequenas ações individuais, como reciclar, optar pelo transporte público ou bicicleta e reduzir o consumo de energia em casa, têm um impacto significativo quando combinadas, contribuindo para a conservação dos recursos naturais e para a redução das emissões de carbono, promovendo assim um estilo de vida mais sustentável e ecologicamente responsável"
            },
            {
                texto: "Redução do desperdício de alimentos aproximadamente um terço de toda a comida produzida no mundo é desperdiçada. Ao reduzir o desperdício de alimentos em casa, através de práticas como planejamento de refeições, armazenamento adequado e aproveitamento integral dos alimentos, é possível diminuir a pressão sobre os recursos naturais utilizados na produção de alimentos, como terra, água e energia",
                afirmacao: "Ao adotar práticas simples, como o planejamento de refeições, o armazenamento adequado e o aproveitamento integral dos alimentos, podemos não apenas reduzir significativamente o desperdício de alimentos em nossas casas, mas também contribuir para a preservação dos recursos naturais vitais, como terra, água e energia, que são utilizados na produção alimentar, promovendo assim uma abordagem mais sustentável e responsável em relação à alimentação."
            }
        ]
    },
    {
        enunciado: "Como podemos incentivar outras pessoas a se engajarem em práticas sustentáveis?",
        alternativas: [
            {
                texto: "Ao compartilhar dicas simples e práticas sobre como incorporar sustentabilidade ao dia a dia, como reduzir o uso de plástico descartável, economizar energia ou adotar uma dieta mais baseada em vegetais, podemos inspirar os outros a fazerem o mesmo.",
                afirmacao: "Pequenas mudanças de hábitos podem desencadear grandes transformações: compartilhar dicas simples de sustentabilidade é inspirar ações coletivas para um futuro mais verde."
            },
            {
                texto: "Compartilhar informações, recursos e experiências pessoais pode ser uma maneira eficaz de inspirar outras pessoas a adotarem práticas sustentáveis. Além disso, modelar comportamentos sustentáveis e apoiar iniciativas comunitárias e políticas ambientais também pode influenciar positivamente os outros.",
                afirmacao: "Inspirar a mudança começa com compartilhar conhecimento, agir de forma sustentável e apoiar iniciativas ambientais - juntos, podemos fazer a diferença."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
