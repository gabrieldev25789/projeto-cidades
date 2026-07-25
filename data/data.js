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
      { nome: "Estátua da Liberdade", imagem: NY },
      { nome: "Central Park", imagem: NY },
      { nome: "Times Square", imagem: NY },
      { nome: "Empire State Building", imagem: NY },
      { nome: "Brooklyn Bridge", imagem: NY }
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
    lugaresRecomendados: [
      {
        nome: "Katz's Delicatessen",
        categoria: "Restaurante",
        imagem: NY,
        descricao: "Delicatessen clássica desde 1888, famosa pelo sanduíche de pastrami."
      },
      {
        nome: "Please Don't Tell (PDT)",
        categoria: "Bar",
        imagem: NY,
        descricao: "Speakeasy escondido atrás de uma cabine telefônica no East Village."
      },
      {
        nome: "Strand Book Store",
        categoria: "Loja",
        imagem: NY,
        descricao: "Livraria histórica com mais de 30 km de estantes, perto do Union Square."
      },
      {
        nome: "Smorgasburg",
        categoria: "Mercado",
        imagem: NY,
        descricao: "Feira gastronômica de rua aos fins de semana no Williamsburg."
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
      { nome: "Big Ben", imagem: LONDRES },
      { nome: "London Eye", imagem: LONDRES },
      { nome: "Palácio de Buckingham", imagem: LONDRES },
      { nome: "Tower Bridge", imagem: LONDRES },
      { nome: "British Museum", imagem: LONDRES }
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
    lugaresRecomendados: [
      {
        nome: "Borough Market",
        categoria: "Mercado",
        imagem: LONDRES,
        descricao: "Um dos mercados de comida mais antigos e movimentados de Londres, perto da London Bridge."
      },
      {
        nome: "The Ten Bells",
        categoria: "Bar",
        imagem: LONDRES,
        descricao: "Pub histórico do século XVIII no East End, conhecido por sua ligação com o Whitechapel vitoriano."
      },
      {
        nome: "Dishoom",
        categoria: "Restaurante",
        imagem: LONDRES,
        descricao: "Rede inspirada nos antigos cafés persas de Bombaim, famosa pelo café da manhã indiano."
      },
      {
        nome: "Portobello Road Market",
        categoria: "Loja",
        imagem: LONDRES,
        descricao: "Rua de antiguidades, vintage e artesanato em Notting Hill, mais movimentada aos sábados."
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
      { nome: "Torre Eiffel", imagem: PARIS },
      { nome: "Museu do Louvre", imagem: PARIS },
      { nome: "Notre-Dame", imagem: PARIS },
      { nome: "Arco do Triunfo", imagem: PARIS },
      { nome: "Montmartre", imagem: PARIS }
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
    lugaresRecomendados: [
      {
        nome: "Le Comptoir du Relais",
        categoria: "Restaurante",
        imagem: PARIS,
        descricao: "Bistrô parisiense clássico em Saint-Germain-des-Prés, sempre concorrido."
      },
      {
        nome: "Little Red Door",
        categoria: "Bar",
        imagem: PARIS,
        descricao: "Coquetelaria premiada com drinks autorais, escondida no Marais."
      },
      {
        nome: "Marché des Enfants Rouges",
        categoria: "Mercado",
        imagem: PARIS,
        descricao: "O mercado coberto mais antigo de Paris, com bancas de comida do mundo todo."
      },
      {
        nome: "Shakespeare and Company",
        categoria: "Loja",
        imagem: PARIS,
        descricao: "Livraria icônica em frente à Notre-Dame, ponto de encontro de escritores há décadas."
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
      { nome: "Avenida Paulista", imagem: SP },
      { nome: "Parque Ibirapuera", imagem: SP },
      { nome: "MASP", imagem: SP },
      { nome: "Mercado Municipal", imagem: SP },
      { nome: "Beco do Batman", imagem: SP }
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
    lugaresRecomendados: [
      {
        nome: "Mocotó",
        categoria: "Restaurante",
        imagem: SP,
        descricao: "Referência em comida nordestina na Vila Medeiros, criado por Rodrigo Oliveira."
      },
      {
        nome: "Bar Filial",
        categoria: "Bar",
        imagem: SP,
        descricao: "Botequim tradicional em Pinheiros, ponto de encontro desde os anos 1980."
      },
      {
        nome: "Feira da Praça Benedito Calixto",
        categoria: "Mercado",
        imagem: SP,
        descricao: "Feira de antiguidades e artesanato aos sábados, com música ao vivo em Pinheiros."
      },
      {
        nome: "Livraria Cultura (Conjunto Nacional)",
        categoria: "Loja",
        imagem: SP,
        descricao: "Uma das maiores livrarias da cidade, na Avenida Paulista."
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
      { nome: "Portão de Brandemburgo", imagem: BERLIM },
      { nome: "Muro de Berlim (East Side Gallery)", imagem: BERLIM },
      { nome: "Ilha dos Museus", imagem: BERLIM },
      { nome: "Alexanderplatz", imagem: BERLIM },
      { nome: "Reichstag", imagem: BERLIM }
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
    lugaresRecomendados: [
      {
        nome: "Prater Garten",
        categoria: "Bar",
        imagem: BERLIM,
        descricao: "O beer garden mais antigo de Berlim, em Prenzlauer Berg."
      },
      {
        nome: "Markthalle Neun",
        categoria: "Mercado",
        imagem: BERLIM,
        descricao: "Mercado coberto em Kreuzberg, famoso pelas noites de street food às quintas."
      },
      {
        nome: "Curry 36",
        categoria: "Restaurante",
        imagem: BERLIM,
        descricao: "Um dos lugares mais tradicionais para comer currywurst na cidade."
      },
      {
        nome: "Mauerpark Flohmarkt",
        categoria: "Loja",
        imagem: BERLIM,
        descricao: "Feira de pulgas de domingo perto do antigo Muro de Berlim, com karaokê ao ar livre."
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
      { nome: "CN Tower", imagem: TORONTO },
      { nome: "Distillery District", imagem: TORONTO },
      { nome: "Royal Ontario Museum", imagem: TORONTO },
      { nome: "Kensington Market", imagem: TORONTO },
      { nome: "Toronto Islands", imagem: TORONTO }
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
    lugaresRecomendados: [
      {
        nome: "St. Lawrence Market",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Considerado um dos melhores mercados de comida do mundo, no centro histórico."
      },
      {
        nome: "The Rex Hotel Jazz & Blues Bar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Casa de jazz ao vivo tradicional na Queen Street West."
      },
      {
        nome: "Kensington Market (lojas)",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Bairro boêmio cheio de brechós, lojas vintage e murais coloridos."
      },
      {
        nome: "Pai Northern Thai Kitchen",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Um dos restaurantes tailandeses mais elogiados do Distillery District."
      }
    ],
    curiosidades: [
      "Toronto é uma das cidades mais multiculturais do mundo, com mais de 160 idiomas falados",
      "A CN Tower foi a estrutura autoportante mais alta do mundo por mais de 30 anos",
      "A cidade tem uma rede subterrânea de túneis (PATH) com mais de 30 km conectando prédios no centro"
    ]
  }
]


export default cidades;