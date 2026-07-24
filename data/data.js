import NY from "../src/assets/imgs/NY.avif"
import PARIS from "../src/assets/imgs/PARIS.jpg"
import LONDRES from "../src/assets/imgs/LONDRES.avif"
import SP from "../src/assets/imgs/SP.jpg"
import BERLIM from "../src/assets/imgs/BERLIM.jpg"
import TORONTO from "../src/assets/imgs/TORONTO.jpg"

// TODO: trocar pelos arquivos reais de cada comida
/*
import PIZZA_NY from "../src/assets/imgs/comidas/pizza-ny.jpg"
import BAGEL from "../src/assets/imgs/comidas/bagel.jpg"
import CHEESECAKE from "../src/assets/imgs/comidas/cheesecake.jpg"
import HOTDOG from "../src/assets/imgs/comidas/hotdog.jpg"

import FISH_AND_CHIPS from "../src/assets/imgs/comidas/fish-and-chips.jpg"
import SUNDAY_ROAST from "../src/assets/imgs/comidas/sunday-roast.jpg"
import AFTERNOON_TEA from "../src/assets/imgs/comidas/afternoon-tea.jpg"
import SHEPHERDS_PIE from "../src/assets/imgs/comidas/shepherds-pie.jpg"

import CROISSANT from "../src/assets/imgs/comidas/croissant.jpg"
import ESCARGOT from "../src/assets/imgs/comidas/escargot.jpg"
import CREME_BRULEE from "../src/assets/imgs/comidas/creme-brulee.jpg"
import BAGUETE from "../src/assets/imgs/comidas/baguete-queijos.jpg"

import PASTEL from "../src/assets/imgs/comidas/pastel.jpg"
import MORTADELA from "../src/assets/imgs/comidas/mortadela.jpg"
import FEIJOADA from "../src/assets/imgs/comidas/feijoada.jpg"
import PIZZA_PAULISTANA from "../src/assets/imgs/comidas/pizza-paulistana.jpg"

import CURRYWURST from "../src/assets/imgs/comidas/currywurst.jpg"
import PRETZEL from "../src/assets/imgs/comidas/pretzel.jpg"
import DONER from "../src/assets/imgs/comidas/doner.jpg"
import SCHNITZEL from "../src/assets/imgs/comidas/schnitzel.jpg"

import PEAMEAL from "../src/assets/imgs/comidas/peameal-bacon.jpg"
import POUTINE from "../src/assets/imgs/comidas/poutine.jpg"
import BUTTER_TART from "../src/assets/imgs/comidas/butter-tart.jpg"
import NANAIMO_BAR from "../src/assets/imgs/comidas/nanaimo-bar.jpg"
*/

const cidades = [
  {
    id: "nova-york",
    nome: "Nova York",
    pais: "Estados Unidos",
    timezone: "America/New_York",
    imagem: NY,
    pontosTuristicos: [
      "Estátua da Liberdade",
      "Central Park",
      "Times Square",
      "Empire State Building",
      "Brooklyn Bridge"
    ],
    comidasTipicas: [
      {
        nome: "Pizza NY style",
        imagem: TORONTO,
        receita: "Prepare uma massa fina com farinha, fermento, água e azeite, deixando descansar por algumas horas. Abra em fatias grandes, cubra com molho de tomate e muçarela, e asse em forno bem quente até a borda dourar."
      },
      {
        nome: "Bagel com cream cheese",
        imagem: TORONTO,
        receita: "Cozinhe rapidamente o bagel em água fervente com um pouco de açúcar antes de assar, o que dá a casca brilhante característica. Corte ao meio, tosте levemente e recheie com cream cheese."
      },
      {
        nome: "Cheesecake",
        imagem: TORONTO,
        receita: "Misture cream cheese, açúcar, ovos e baunilha até ficar homogêneo. Despeje sobre uma base de biscoito triturado com manteiga e asse em banho-maria até firmar, deixando esfriar antes de servir."
      },
      {
        nome: "Hot dog de rua",
        imagem: TORONTO,
        receita: "Cozinhe a salsicha na água ou grelha até dourar, sirva no pão macio e finalize com mostarda, ketchup, cebola e chucrute a gosto."
      }
    ],
    curiosidades: [
      "Tem mais de 800 línguas faladas na cidade, a maior diversidade linguística do mundo",
      "O metrô de Nova York funciona 24 horas, todos os dias",
      "O Central Park é maior que o país de Mônaco"
    ]
  },
  {
    id: "londres",
    nome: "Londres",
    pais: "Reino Unido",
    timezone: "Europe/London",
    imagem: LONDRES,
    pontosTuristicos: [
      "Big Ben",
      "London Eye",
      "Palácio de Buckingham",
      "Tower Bridge",
      "British Museum"
    ],
    comidasTipicas: [
      {
        nome: "Fish and chips",
        imagem: TORONTO,
        receita: "Mergulhe filés de peixe branco numa massa leve de farinha com cerveja gelada e frite até dourar. Sirva com batatas fritas grossas, vinagre de malte e ervilha amassada."
      },
      {
        nome: "Sunday roast",
        imagem: TORONTO,
        receita: "Asse uma carne (geralmente bovina ou frango) lentamente com legumes de raiz ao redor. Sirva com Yorkshire pudding, batatas assadas e molho gravy por cima."
      },
      {
        nome: "Afternoon tea com scones",
        imagem: TORONTO,
        receita: "Misture farinha, manteiga gelada, fermento e leite até formar uma massa macia, sem sovar demais. Corte em discos e asse até crescer e dourar. Sirva morno com geleia e clotted cream."
      },
      {
        nome: "Shepherd's pie",
        imagem: TORONTO,
        receita: "Refogue carne moída de cordeiro com cebola, cenoura e ervilha em molho encorpado. Cubra com purê de batata e leve ao forno até a superfície dourar."
      }
    ],
    curiosidades: [
      "O metrô de Londres (The Tube) é o mais antigo do mundo, inaugurado em 1863",
      "Não existe um prédio em Londres mais alto que a Big Ben no centro histórico por lei de preservação",
      "Táxis pretos (black cabs) só recebem licença após decorar 320 rotas de cor, teste chamado 'The Knowledge'"
    ]
  },
  {
    id: "paris",
    nome: "Paris",
    pais: "França",
    timezone: "Europe/Paris",
    imagem: PARIS,
    pontosTuristicos: [
      "Torre Eiffel",
      "Museu do Louvre",
      "Notre-Dame",
      "Arco do Triunfo",
      "Montmartre"
    ],
    comidasTipicas: [
      {
        nome: "Croissant",
        imagem: TORONTO,
        receita: "Faça uma massa amanteigada em camadas (folhada), dobrando e descansando várias vezes na geladeira. Modele em forma de meia-lua e asse até ficar dourado e crocante por fora, macio por dentro."
      },
      {
        nome: "Escargot",
        imagem: TORONTO,
        receita: "Cozinhe os caracóis previamente preparados e recheie as conchas com manteiga temperada com alho e salsinha. Leve ao forno até a manteiga derreter e borbulhar."
      },
      {
        nome: "Crème brûlée",
        imagem: TORONTO,
        receita: "Misture gemas, açúcar, creme de leite fresco e baunilha, e asse em banho-maria até firmar levemente. Antes de servir, polvilhe açúcar por cima e queime com maçarico até caramelizar."
      },
      {
        nome: "Baguete com queijos franceses",
        imagem: TORONTO,
        receita: "Sove uma massa simples de farinha, água, fermento e sal, deixando fermentar bem. Asse em forno bem quente com vapor para formar a casca crocante. Sirva fatiada com queijos variados."
      }
    ],
    curiosidades: [
      "A Torre Eiffel cresce cerca de 15 cm no verão por causa da dilatação do metal",
      "Paris tem mais de 1.800 padarias registradas oficialmente",
      "Existe uma réplica da Torre Eiffel bem menor escondida no telhado de um prédio na cidade"
    ]
  },
  {
    id: "sao-paulo",
    nome: "São Paulo",
    pais: "Brasil",
    timezone: "America/Sao_Paulo",
    imagem: SP,
    pontosTuristicos: [
      "Avenida Paulista",
      "Parque Ibirapuera",
      "MASP",
      "Mercado Municipal",
      "Beco do Batman"
    ],
    comidasTipicas: [
      {
        nome: "Pastel de feira",
        imagem: TORONTO,
        receita: "Abra uma massa fina, recheie com carne, queijo ou palmito, feche bem as bordas e frite em óleo quente até dourar e ficar crocante."
      },
      {
        nome: "Sanduíche de mortadela do Mercadão",
        imagem: TORONTO,
        receita: "Recheie um pão francês generosamente com fatias grossas de mortadela e queijo. Sirva puro ou com um toque de molho picante."
      },
      {
        nome: "Feijoada",
        imagem: TORONTO,
        receita: "Cozinhe feijão preto com carnes salgadas e defumadas por várias horas até ficar encorpado. Sirva com arroz branco, couve refogada, farofa e laranja."
      },
      {
        nome: "Pizza paulistana",
        imagem: TORONTO,
        receita: "Prepare uma massa mais grossa e macia que a napolitana. Cubra com bastante recheio e queijo, e asse em forno de pedra bem quente."
      }
    ],
    curiosidades: [
      "Tem a maior frota de helicópteros do mundo entre as cidades",
      "É a cidade com maior população de descendentes de japoneses fora do Japão",
      "O Beco do Batman virou point turístico só por causa dos grafites, hoje é referência de arte urbana"
    ]
  },
  {
    id: "berlim",
    nome: "Berlim",
    pais: "Alemanha",
    timezone: "Europe/Berlin",
    imagem: BERLIM,
    pontosTuristicos: [
      "Portão de Brandemburgo",
      "Muro de Berlim (East Side Gallery)",
      "Ilha dos Museus",
      "Alexanderplatz",
      "Reichstag"
    ],
    comidasTipicas: [
      {
        nome: "Currywurst",
        imagem: TORONTO,
        receita: "Frite ou grelhe a salsicha até dourar, corte em pedaços e cubra com molho de tomate temperado com curry em pó e páprica. Sirva com batata frita."
      },
      {
        nome: "Pretzel",
        imagem: TORONTO,
        receita: "Misture farinha, fermento, água morna e manteiga. Modele em formato de laço, mergulhe rapidamente em água com bicarbonato fervente, salpique sal grosso e asse até dourar."
      },
      {
        nome: "Döner kebab",
        imagem: TORONTO,
        receita: "Tempere fatias de carne e empilhe no espeto vertical, assando lentamente enquanto gira. Corte fatias finas e sirva no pão pita com salada, molho e picles."
      },
      {
        nome: "Schnitzel",
        imagem: TORONTO,
        receita: "Bata um filé de carne até ficar fino, passe por farinha, ovo e farinha de rosca, e frite em bastante óleo até dourar dos dois lados."
      }
    ],
    curiosidades: [
      "O Döner kebab, apesar de parecer turco tradicional, foi inventado em Berlim nos anos 70",
      "Berlim tem mais pontes que Veneza",
      "A cidade tem mais de 180 km de trilhas de ciclismo integradas"
    ]
  },
  {
    id: "toronto",
    nome: "Toronto",
    pais: "Canadá",
    timezone: "America/Toronto",
    imagem: TORONTO,
    pontosTuristicos: [
      "CN Tower",
      "Distillery District",
      "Royal Ontario Museum",
      "Kensington Market",
      "Toronto Islands"
    ],
    comidasTipicas: [
      {
        nome: "Peameal bacon sandwich",
        imagem: TORONTO,
        receita: "Grelhe fatias de bacon canadense (peameal) até dourar e monte num pãozinho macio, geralmente com mostarda."
      },
      {
        nome: "Poutine",
        imagem: TORONTO,
        receita: "Frite batatas até ficarem crocantes por fora e macias por dentro. Cubra com pedaços de queijo em grãos e molho gravy quente para derreter levemente o queijo."
      },
      {
        nome: "Butter tart",
        imagem: TORONTO,
        receita: "Prepare uma massa amanteigada para forrar pequenas forminhas. Recheie com uma mistura de manteiga, açúcar mascavo, ovos e xarope, e asse até o recheio ficar levemente firme, mas cremoso no centro."
      },
      {
        nome: "Nanaimo bar",
        imagem: TORONTO,
        receita: "Monte em camadas: uma base de biscoito com coco e cacau, um creme de manteiga com baunilha no meio, e uma cobertura de chocolate derretido por cima. Leve à geladeira até firmar."
      }
    ],
    curiosidades: [
      "Toronto é uma das cidades mais multiculturais do mundo, com mais de 160 idiomas falados",
      "A CN Tower foi a estrutura autoportante mais alta do mundo por mais de 30 anos",
      "A cidade tem uma rede subterrânea de túneis (PATH) com mais de 30 km conectando prédios no centro"
    ]
  }
]

export default cidades