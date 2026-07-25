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
// ⚠️ Lembre de importar as novas imagens no topo do seu arquivo, ex:
// import TORONTO from "../assets/mexico.jpg";
// import VANCOUVER from "../assets/vancouver.jpg";
// import BUENOS_AIRES from "../assets/buenos-aires.jpg";
// import LIMA from "../assets/lima.jpg";
// import BOGOTA from "../assets/bogota.jpg";
// import ROMA from "../assets/roma.jpg";
// import TOQUIO from "../assets/toquio.jpg";
// import BANGKOK from "../assets/bangkok.jpg";
// import DUBAI from "../assets/dubai.jpg";
// import SEUL from "../assets/seul.jpg";
// import CAIRO from "../assets/cairo.jpg";
// import CIDADE_DO_CABO from "../assets/cidade-do-cabo.jpg";
// import MARRAKECH from "../assets/marrakech.jpg";
// import NAIROBI from "../assets/nairobi.jpg";

// ⚠️ Todas as 14 cidades novas estão usando TORONTO como imagem placeholder,
// já que ainda não tem as imagens delas. Quando tiver, importe cada uma e
// troque a referência correspondente (Ctrl+F pelo nome da cidade em cada objeto).

const cidades = [
  // ==================== AMÉRICA DO NORTE ====================
  {
    id: "nova-york",
    nome: "Nova York",
    pais: "Estados Unidos",
    continente: "América do Norte",
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
        imagem: NY,
        receita: "Prepare uma massa fina com farinha, fermento, água e azeite, deixando descansar por algumas horas. Abra em fatias grandes, cubra com molho de tomate e muçarela, e asse em forno bem quente até a borda dourar."
      },
      {
        nome: "Bagel com cream cheese",
        imagem: NY,
        receita: "Cozinhe rapidamente o bagel em água fervente com um pouco de açúcar antes de assar, o que dá a casca brilhante característica. Corte ao meio, toste levemente e recheie com cream cheese."
      },
      {
        nome: "Cheesecake",
        imagem: NY,
        receita: "Misture cream cheese, açúcar, ovos e baunilha até ficar homogêneo. Despeje sobre uma base de biscoito triturado com manteiga e asse em banho-maria até firmar, deixando esfriar antes de servir."
      },
      {
        nome: "Hot dog de rua",
        imagem: NY,
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
    id: "toronto",
    nome: "Toronto",
    pais: "Canadá",
    continente: "América do Norte",
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
  },
  {
    id: "cidade-do-mexico",
    nome: "Cidade do México",
    pais: "México",
    continente: "América do Norte",
    timezone: "America/Mexico_City",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Zócalo", imagem: TORONTO },
      { nome: "Templo Mayor", imagem: TORONTO },
      { nome: "Palácio de Belas Artes", imagem: TORONTO },
      { nome: "Xochimilco", imagem: TORONTO },
      { nome: "Museu Frida Kahlo", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Tacos al pastor",
        imagem: TORONTO,
        receita: "Marine carne de porco em pimentas secas, achiote e abacaxi, empilhe no trompo e asse girando lentamente. Corte fatias finas e sirva em tortilhas de milho com cebola, coentro e abacaxi."
      },
      {
        nome: "Chilaquiles",
        imagem: TORONTO,
        receita: "Frite triângulos de tortilha até crocantes e misture com molho verde ou vermelho quente até amolecerem levemente. Sirva com creme, queijo fresco, cebola e um ovo por cima."
      },
      {
        nome: "Mole poblano",
        imagem: TORONTO,
        receita: "Refogue diversas pimentas secas com chocolate amargo, especiarias e nozes, e bata até virar uma pasta. Cozinhe em caldo até engrossar e sirva sobre peito de frango."
      },
      {
        nome: "Elote",
        imagem: TORONTO,
        receita: "Cozinhe a espiga de milho e passe na grelha até pegar cor. Cubra com maionese, queijo cotija ralado, chili em pó e limão."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "El Cardenal",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Referência em café da manhã e cozinha mexicana tradicional no Centro Histórico."
      },
      {
        nome: "Licorería Limantour",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Um dos bares de coquetelaria mais premiados da América Latina, na Roma Norte."
      },
      {
        nome: "Mercado de San Juan",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado gourmet conhecido por ingredientes exóticos e bancas de comida."
      },
      {
        nome: "Bazar Sábado",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Feira de artesanato e arte que acontece aos sábados em San Ángel."
      }
    ],
    curiosidades: [
      "A cidade foi construída sobre o antigo lago Texcoco, o que causa afundamento gradual do solo",
      "Tem o maior metrô da América Latina, com um dos bilhetes mais baratos do mundo",
      "Abriga a maior praça pública cercada da América Latina, o Zócalo"
    ]
  },
  {
    id: "vancouver",
    nome: "Vancouver",
    pais: "Canadá",
    continente: "América do Norte",
    timezone: "America/Vancouver",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Stanley Park", imagem: TORONTO },
      { nome: "Granville Island", imagem: TORONTO },
      { nome: "Capilano Suspension Bridge", imagem: TORONTO },
      { nome: "Gastown", imagem: TORONTO },
      { nome: "Grouse Mountain", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Japadog",
        imagem: TORONTO,
        receita: "Grelhe uma salsicha estilo americano e sirva no pão com coberturas de inspiração japonesa, como molho teriyaki, maionese japonesa, nori e cebolinha."
      },
      {
        nome: "Salmão selvagem grelhado",
        imagem: TORONTO,
        receita: "Tempere filés de salmão do Pacífico com sal, limão e ervas, e grelhe em fogo alto até a pele ficar crocante e o centro suculento."
      },
      {
        nome: "Ginger beef",
        imagem: TORONTO,
        receita: "Empane tiras de carne bovina e frite até crocante. Salteie em molho agridoce com bastante gengibre fresco e pimenta até envolver bem a carne."
      },
      {
        nome: "California roll",
        imagem: TORONTO,
        receita: "Enrole arroh temperado, kani, abacate e pepino em alga nori, com o arroz para fora. Corte em pedaços e sirva com molho shoyu e wasabi."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Granville Island Public Market",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado coberto à beira-mar com produtores locais, queijarias e comida de rua."
      },
      {
        nome: "The Keefer Bar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Coquetelaria de inspiração asiática no Chinatown histórico de Vancouver."
      },
      {
        nome: "Miku Restaurant",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Famoso por popularizar o aburi sushi (sushi maçaricado) no Canadá."
      },
      {
        nome: "Gastown (lojas)",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Bairro histórico com lojas de design local e o famoso relógio a vapor."
      }
    ],
    curiosidades: [
      "O California roll foi criado por um chef japonês na região de Vancouver nos anos 1970",
      "É considerada uma das cidades mais 'verdes' e habitáveis do mundo",
      "Fica cercada por montanhas, oceano e floresta temperada quase ao mesmo tempo"
    ]
  },

  // ==================== AMÉRICA DO SUL ====================
  {
    id: "sao-paulo",
    nome: "São Paulo",
    pais: "Brasil",
    continente: "América do Sul",
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
        imagem: SP,
        receita: "Abra uma massa fina, recheie com carne, queijo ou palmito, feche bem as bordas e frite em óleo quente até dourar e ficar crocante."
      },
      {
        nome: "Sanduíche de mortadela do Mercadão",
        imagem: SP,
        receita: "Recheie um pão francês generosamente com fatias grossas de mortadela e queijo. Sirva puro ou com um toque de molho picante."
      },
      {
        nome: "Feijoada",
        imagem: SP,
        receita: "Cozinhe feijão preto com carnes salgadas e defumadas por várias horas até ficar encorpado. Sirva com arroz branco, couve refogada, farofa e laranja."
      },
      {
        nome: "Pizza paulistana",
        imagem: SP,
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
    id: "buenos-aires",
    nome: "Buenos Aires",
    pais: "Argentina",
    continente: "América do Sul",
    timezone: "America/Argentina/Buenos_Aires",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Obelisco", imagem: TORONTO },
      { nome: "La Boca (Caminito)", imagem: TORONTO },
      { nome: "Cemitério da Recoleta", imagem: TORONTO },
      { nome: "Teatro Colón", imagem: TORONTO },
      { nome: "Plaza de Mayo", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Asado",
        imagem: TORONTO,
        receita: "Tempere cortes de carne bovina apenas com sal grosso e asse lentamente na grelha em fogo baixo e constante até o ponto desejado, virando poucas vezes."
      },
      {
        nome: "Empanadas",
        imagem: TORONTO,
        receita: "Recheie discos de massa com carne moída temperada, cebola, ovo cozido e azeitona, feche em formato de meia-lua com repulgue e asse ou frite até dourar."
      },
      {
        nome: "Milanesa",
        imagem: TORONTO,
        receita: "Bata um filé de carne até ficar fino, passe por ovo e farinha de rosca temperada, e frite até dourar dos dois lados. Sirva com limão ou napolitana com molho e queijo."
      },
      {
        nome: "Alfajores",
        imagem: TORONTO,
        receita: "Una dois discos de massa amanteigada com uma camada generosa de doce de leite e cubra as bordas com coco ralado."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Don Julio",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Parrilla lendária em Palermo, considerada uma das melhores churrascarias do mundo."
      },
      {
        nome: "Café Tortoni",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Café histórico de 1858, famoso por shows de tango e clientela literária."
      },
      {
        nome: "Feira de San Telmo",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Feira de antiguidades aos domingos pelas ruas de paralelepípedo de San Telmo."
      },
      {
        nome: "El Ateneo Grand Splendid",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Livraria instalada dentro de um antigo teatro, considerada uma das mais bonitas do mundo."
      }
    ],
    curiosidades: [
      "O tango nasceu nos bairros portuários de Buenos Aires no final do século XIX",
      "A Avenida 9 de Julio é uma das avenidas mais largas do mundo",
      "A cidade é apelidada de 'Paris da América do Sul' pela arquitetura europeia"
    ]
  },
  {
    id: "lima",
    nome: "Lima",
    pais: "Peru",
    continente: "América do Sul",
    timezone: "America/Lima",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Plaza Mayor", imagem: TORONTO },
      { nome: "Miraflores", imagem: TORONTO },
      { nome: "Barranco", imagem: TORONTO },
      { nome: "Huaca Pucllana", imagem: TORONTO },
      { nome: "Circuito Mágico del Agua", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Ceviche",
        imagem: TORONTO,
        receita: "Corte peixe branco fresco em cubos e marine em suco de limão, cebola roxa fatiada e pimenta por poucos minutos. Sirva gelado com milho e batata-doce."
      },
      {
        nome: "Lomo saltado",
        imagem: TORONTO,
        receita: "Salteie tiras de lombo bovino em fogo alto com cebola, tomate e molho de soja. Misture com batata frita e sirva com arroz."
      },
      {
        nome: "Causa limeña",
        imagem: TORONTO,
        receita: "Amasse batata cozida com limão e pimenta amarela até formar uma massa lisa. Monte em camadas com recheio de frango ou atum e maionese."
      },
      {
        nome: "Pisco sour",
        imagem: TORONTO,
        receita: "Bata pisco, suco de limão, xarope simples, clara de ovo e gelo até formar uma espuma firme. Sirva com algumas gotas de amargo de angostura por cima."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Isolina Taberna",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Comida criolla peruana tradicional em porções generosas, em Barranco."
      },
      {
        nome: "Ayahuasca Restobar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bar de coquetéis instalado numa mansão histórica em Barranco."
      },
      {
        nome: "Mercado de Surquillo",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado tradicional usado até por chefs renomados para comprar ingredientes frescos."
      },
      {
        nome: "Dédalo Arte y Artesanía",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Loja de design e artesanato peruano contemporâneo em Barranco."
      }
    ],
    curiosidades: [
      "Lima é considerada a capital gastronômica da América do Sul",
      "É apelidada de 'A Cidade Cinzenta' por causa da neblina costeira quase constante",
      "Fica em pleno deserto, mas raramente chove por causa da corrente de Humboldt"
    ]
  },
  {
    id: "bogota",
    nome: "Bogotá",
    pais: "Colômbia",
    continente: "América do Sul",
    timezone: "America/Bogota",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "La Candelaria", imagem: TORONTO },
      { nome: "Museu do Ouro", imagem: TORONTO },
      { nome: "Monserrate", imagem: TORONTO },
      { nome: "Plaza de Bolívar", imagem: TORONTO },
      { nome: "Zona Rosa", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Ajiaco",
        imagem: TORONTO,
        receita: "Cozinhe frango com três tipos de batata colombiana e guascas até engrossar o caldo. Sirva com creme de leite, alcaparras e abacate."
      },
      {
        nome: "Bandeja paisa",
        imagem: TORONTO,
        receita: "Monte um prato com feijão, arroz, carne moída, chicharrón, ovo frito, banana frita e arepa, tudo servido junto."
      },
      {
        nome: "Arepas",
        imagem: TORONTO,
        receita: "Misture farinha de milho pré-cozida com água e sal até formar uma massa macia. Modele discos e asse na chapa até dourar dos dois lados."
      },
      {
        nome: "Chocolate santafereño",
        imagem: TORONTO,
        receita: "Derreta chocolate colombiano em leite quente até ficar cremoso e sirva acompanhado de queijo fresco para mergulhar."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Andrés Carne de Res",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante-espetáculo colombiano, famoso por churrasco e festa até de madrugada."
      },
      {
        nome: "Bandido Bar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bar de coquetelaria autoral na Zona G, um dos mais premiados da cidade."
      },
      {
        nome: "Mercado de Paloquemao",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado tradicional de frutas exóticas, flores e comida colombiana."
      },
      {
        nome: "Artesanías de Colombia",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Loja com artesanato de diversas regiões do país, próxima ao centro histórico."
      }
    ],
    curiosidades: [
      "É uma das capitais mais altas do mundo, a mais de 2.600 metros de altitude",
      "Todo domingo, dezenas de quilômetros de ruas viram ciclovia para pedestres e ciclistas",
      "Abriga a maior coleção de peças de ouro pré-colombiano do mundo"
    ]
  },

  // ==================== EUROPA ====================
  {
    id: "londres",
    nome: "Londres",
    pais: "Reino Unido",
    continente: "Europa",
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
        imagem: LONDRES,
        receita: "Mergulhe filés de peixe branco numa massa leve de farinha com cerveja gelada e frite até dourar. Sirva com batatas fritas grossas, vinagre de malte e ervilha amassada."
      },
      {
        nome: "Sunday roast",
        imagem: LONDRES,
        receita: "Asse uma carne (geralmente bovina ou frango) lentamente com legumes de raiz ao redor. Sirva com Yorkshire pudding, batatas assadas e molho gravy por cima."
      },
      {
        nome: "Afternoon tea com scones",
        imagem: LONDRES,
        receita: "Misture farinha, manteiga gelada, fermento e leite até formar uma massa macia, sem sovar demais. Corte em discos e asse até crescer e dourar. Sirva morno com geleia e clotted cream."
      },
      {
        nome: "Shepherd's pie",
        imagem: LONDRES,
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
    continente: "Europa",
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
        imagem: PARIS,
        receita: "Faça uma massa amanteigada em camadas (folhada), dobrando e descansando várias vezes na geladeira. Modele em forma de meia-lua e asse até ficar dourado e crocante por fora, macio por dentro."
      },
      {
        nome: "Escargot",
        imagem: PARIS,
        receita: "Cozinhe os caracóis previamente preparados e recheie as conchas com manteiga temperada com alho e salsinha. Leve ao forno até a manteiga derreter e borbulhar."
      },
      {
        nome: "Crème brûlée",
        imagem: PARIS,
        receita: "Misture gemas, açúcar, creme de leite fresco e baunilha, e asse em banho-maria até firmar levemente. Antes de servir, polvilhe açúcar por cima e queime com maçarico até caramelizar."
      },
      {
        nome: "Baguete com queijos franceses",
        imagem: PARIS,
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
    id: "berlim",
    nome: "Berlim",
    pais: "Alemanha",
    continente: "Europa",
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
        imagem: BERLIM,
        receita: "Frite ou grelhe a salsicha até dourar, corte em pedaços e cubra com molho de tomate temperado com curry em pó e páprica. Sirva com batata frita."
      },
      {
        nome: "Pretzel",
        imagem: BERLIM,
        receita: "Misture farinha, fermento, água morna e manteiga. Modele em formato de laço, mergulhe rapidamente em água com bicarbonato fervente, salpique sal grosso e asse até dourar."
      },
      {
        nome: "Döner kebab",
        imagem: BERLIM,
        receita: "Tempere fatias de carne e empilhe no espeto vertical, assando lentamente enquanto gira. Corte fatias finas e sirva no pão pita com salada, molho e picles."
      },
      {
        nome: "Schnitzel",
        imagem: BERLIM,
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
    id: "roma",
    nome: "Roma",
    pais: "Itália",
    continente: "Europa",
    timezone: "Europe/Rome",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Coliseu", imagem: TORONTO },
      { nome: "Vaticano", imagem: TORONTO },
      { nome: "Fontana di Trevi", imagem: TORONTO },
      { nome: "Pantheon", imagem: TORONTO },
      { nome: "Fórum Romano", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Carbonara",
        imagem: TORONTO,
        receita: "Frite guanciale até liberar a gordura e ficar crocante. Misture ovos, queijo pecorino e pimenta-do-reino, e envolva a massa quente escorrida fora do fogo até criar um creme, sem deixar o ovo talhar."
      },
      {
        nome: "Pizza romana",
        imagem: TORONTO,
        receita: "Prepare uma massa fina e crocante, com pouco fermento e longo tempo de fermentação. Cubra com poucos ingredientes de qualidade e asse rapidamente em forno bem quente."
      },
      {
        nome: "Supplì",
        imagem: TORONTO,
        receita: "Misture arroz cozido em molho de tomate com queijo mussarela no centro, modele em bolinhas, empane e frite até dourar e o queijo derreter puxando fio."
      },
      {
        nome: "Maritozzo",
        imagem: TORONTO,
        receita: "Prepare uma massa doce enriquecida e macia, modele em pãezinhos e deixe crescer. Corte ao meio depois de assado e recheie generosamente com chantili."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Roscioli",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Salumeria e trattoria clássica perto do Campo de' Fiori, famosa pela carbonara."
      },
      {
        nome: "Freni e Frizioni",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bar instalado numa antiga oficina mecânica em Trastevere, famoso pelo aperitivo."
      },
      {
        nome: "Mercato di Testaccio",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado local longe do circuito turístico, ótimo para comida romana autêntica."
      },
      {
        nome: "Libreria Bibli",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Livraria e café aconchegante em Trastevere, com eventos culturais frequentes."
      }
    ],
    curiosidades: [
      "O Vaticano é um país independente dentro da cidade de Roma",
      "Roma tem mais de 2.000 fontes públicas de água potável espalhadas pela cidade",
      "É chamada de 'Cidade Eterna' e tem mais de 2.700 anos de história contínua"
    ]
  },

  // ==================== ÁSIA ====================
  {
    id: "toquio",
    nome: "Tóquio",
    pais: "Japão",
    continente: "Ásia",
    timezone: "Asia/Tokyo",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Templo Senso-ji", imagem: TORONTO },
      { nome: "Cruzamento de Shibuya", imagem: TORONTO },
      { nome: "Torre de Tóquio", imagem: TORONTO },
      { nome: "Shinjuku", imagem: TORONTO },
      { nome: "Akihabara", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Sushi",
        imagem: TORONTO,
        receita: "Tempere arroz japonês cozido com vinagre, açúcar e sal. Modele pequenas porções e cubra com fatias de peixe fresco cortado na diagonal."
      },
      {
        nome: "Ramen",
        imagem: TORONTO,
        receita: "Prepare um caldo de ossos ou miso por horas até ficar encorpado. Cozinhe o macarrão fresco e monte com fatias de chashu, ovo marinado, cebolinha e nori."
      },
      {
        nome: "Tempura",
        imagem: TORONTO,
        receita: "Misture farinha com água bem gelada até formar uma massa rala. Mergulhe camarões e legumes na massa e frite rapidamente em óleo quente até ficar levemente crocante."
      },
      {
        nome: "Takoyaki",
        imagem: TORONTO,
        receita: "Despeje massa líquida em forminhas esféricas com pedaços de polvo, cebolinha e gengibre em conserva, girando até formar bolinhas douradas por fora."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Sushi Dai",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante tradicional perto do antigo mercado de Tsukiji, com filas desde cedo."
      },
      {
        nome: "Golden Gai",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bairro de vielas estreitas com dezenas de micro bares temáticos em Shinjuku."
      },
      {
        nome: "Mercado Externo de Tsukiji",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Área de bancas e lojinhas de frutos do mar e utensílios de cozinha."
      },
      {
        nome: "Nakamise-dori",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Rua comercial histórica que leva até o Templo Senso-ji, cheia de lojinhas tradicionais."
      }
    ],
    curiosidades: [
      "A região metropolitana de Tóquio é a mais populosa do mundo",
      "A cidade tem milhares de máquinas de venda automática espalhadas por todos os cantos",
      "Os trens de Tóquio são famosos pela pontualidade quase perfeita"
    ]
  },
  {
    id: "bangkok",
    nome: "Bangkok",
    pais: "Tailândia",
    continente: "Ásia",
    timezone: "Asia/Bangkok",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Grande Palácio", imagem: TORONTO },
      { nome: "Wat Arun", imagem: TORONTO },
      { nome: "Wat Pho", imagem: TORONTO },
      { nome: "Mercado Flutuante", imagem: TORONTO },
      { nome: "Chinatown de Bangkok", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Pad thai",
        imagem: TORONTO,
        receita: "Salteie macarrão de arroz com ovo, tofu ou camarão, broto de feijão e cebolinha em fogo alto. Tempere com molho de peixe, tamarindo e açúcar de palma."
      },
      {
        nome: "Tom yum",
        imagem: TORONTO,
        receita: "Ferva caldo com capim-limão, galanga, folhas de limão kaffir e pimenta. Adicione camarão e cogumelos e finalize com limão e leite de coco a gosto."
      },
      {
        nome: "Mango sticky rice",
        imagem: TORONTO,
        receita: "Cozinhe arroz glutinoso no vapor e misture com leite de coco adoçado ainda quente. Sirva com fatias de manga madura e um fio extra de leite de coco."
      },
      {
        nome: "Som tam",
        imagem: TORONTO,
        receita: "Amasse levemente mamão verde ralado com pimenta, alho, tomate e feijão longo num pilão. Tempere com molho de peixe, limão e açúcar de palma."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Thipsamai",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Famoso por muitos como o melhor pad thai da cidade, aberto desde 1966."
      },
      {
        nome: "Sky Bar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Rooftop bar com vista panorâmica no alto do hotel Lebua, no rio Chao Phraya."
      },
      {
        nome: "Mercado de Chatuchak",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Um dos maiores mercados de fim de semana do mundo, com milhares de bancas."
      },
      {
        nome: "Jim Thompson House",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Loja e museu de seda tailandesa na antiga casa do empresário Jim Thompson."
      }
    ],
    curiosidades: [
      "O nome oficial completo de Bangkok é considerado o mais longo do mundo entre capitais",
      "Os tuk-tuks viraram símbolo do transporte urbano na cidade",
      "Bangkok tem centenas de templos budistas espalhados pela área urbana"
    ]
  },
  {
    id: "dubai",
    nome: "Dubai",
    pais: "Emirados Árabes Unidos",
    continente: "Ásia",
    timezone: "Asia/Dubai",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Burj Khalifa", imagem: TORONTO },
      { nome: "Burj Al Arab", imagem: TORONTO },
      { nome: "Dubai Mall", imagem: TORONTO },
      { nome: "Palm Jumeirah", imagem: TORONTO },
      { nome: "Souk de especiarias", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Shawarma",
        imagem: TORONTO,
        receita: "Tempere fatias de frango ou carne e empilhe no espeto vertical, assando lentamente. Corte fino e sirva enrolado em pão árabe com molho de alho e picles."
      },
      {
        nome: "Machboos",
        imagem: TORONTO,
        receita: "Refogue carne ou frango com uma mistura de especiarias árabes (baharat) e cozinhe junto com arroz basmati e passas até absorver todo o tempero."
      },
      {
        nome: "Hummus com pão árabe",
        imagem: TORONTO,
        receita: "Bata grão-de-bico cozido com tahine, alho, limão e azeite até ficar bem cremoso. Sirva com um fio extra de azeite e pão árabe quente."
      },
      {
        nome: "Luqaimat",
        imagem: TORONTO,
        receita: "Prepare uma massa fofa fermentada e frite em pequenas bolinhas até dourar por fora. Regue com xarope de tâmara ou mel antes de servir."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Al Ustad Special Kabab",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante persa simples e tradicional, funcionando há décadas em Dubai."
      },
      {
        nome: "At.mosphere",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Um dos bares mais altos do mundo, no 122º andar do Burj Khalifa."
      },
      {
        nome: "Souk de Ouro de Deira",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado tradicional com centenas de lojas de joias de ouro."
      },
      {
        nome: "Souk de especiarias",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Ruela estreita cheia de sacas de especiarias, incensos e chás à beira do Dubai Creek."
      }
    ],
    curiosidades: [
      "O Burj Khalifa é o prédio mais alto do mundo, com mais de 828 metros",
      "Palm Jumeirah é uma ilha artificial em formato de palmeira visível do espaço",
      "Dubai tem uma pista de esqui indoor dentro de um shopping, mesmo no meio do deserto"
    ]
  },
  {
    id: "seul",
    nome: "Seul",
    pais: "Coreia do Sul",
    continente: "Ásia",
    timezone: "Asia/Seoul",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Palácio Gyeongbokgung", imagem: TORONTO },
      { nome: "Myeongdong", imagem: TORONTO },
      { nome: "Torre de Namsan", imagem: TORONTO },
      { nome: "Vila Hanok de Bukchon", imagem: TORONTO },
      { nome: "Hongdae", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Kimchi",
        imagem: TORONTO,
        receita: "Salgue folhas de acelga chinesa e deixe murchar. Misture com pasta de pimenta coreana, alho, gengibre e molho de peixe, e deixe fermentar em pote fechado por alguns dias."
      },
      {
        nome: "Bibimbap",
        imagem: TORONTO,
        receita: "Monte uma tigela de arroz com legumes variados salteados separadamente, carne temperada e um ovo frito no centro. Misture tudo com pasta de pimenta antes de comer."
      },
      {
        nome: "Galbi (churrasco coreano)",
        imagem: TORONTO,
        receita: "Marine costela bovina fatiada em molho de soja, pera, alho e açúcar. Grelhe rapidamente na chapa e sirva enrolada em folhas de alface com pasta de pimenta."
      },
      {
        nome: "Tteokbokki",
        imagem: TORONTO,
        receita: "Cozinhe bolinhos de arroz cilíndricos em molho de pimenta coreana adocicado até engrossar e o bolinho ficar macio por dentro."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Mercado de Gwangjang",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Um dos mercados de comida de rua mais antigos e famosos de Seul."
      },
      {
        nome: "Bar de Noraebang",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Salas de karaokê privativas, parte essencial da vida noturna coreana."
      },
      {
        nome: "Mapo Galmegisal",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Casa tradicional de churrasco coreano, popular entre os moradores locais."
      },
      {
        nome: "Myeongdong (lojas)",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Bairro comercial cheio de lojas de cosméticos e moda, muito popular com turistas."
      }
    ],
    curiosidades: [
      "A Coreia do Sul tem uma das velocidades de internet mais rápidas do mundo",
      "A cultura pop coreana (K-pop e K-dramas) nasceu e se espalhou principalmente a partir de Seul",
      "A troca da guarda no Palácio Gyeongbokgung recria uma cerimônia real de séculos atrás"
    ]
  },

  // ==================== ÁFRICA ====================
  {
    id: "cairo",
    nome: "Cairo",
    pais: "Egito",
    continente: "África",
    timezone: "Africa/Cairo",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Pirâmides de Gizé", imagem: TORONTO },
      { nome: "Esfinge", imagem: TORONTO },
      { nome: "Museu Egípcio", imagem: TORONTO },
      { nome: "Cidadela de Saladino", imagem: TORONTO },
      { nome: "Khan el-Khalili", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Koshari",
        imagem: TORONTO,
        receita: "Misture arroz, lentilha e macarrão cozidos numa tigela. Cubra com molho de tomate apimentado e cebola frita crocante por cima."
      },
      {
        nome: "Ful medames",
        imagem: TORONTO,
        receita: "Cozinhe favas até ficarem bem macias e amasse levemente com azeite, limão, alho e cominho. Sirva quente com pão árabe."
      },
      {
        nome: "Falafel egípcio (ta'ameya)",
        imagem: TORONTO,
        receita: "Bata favas descascadas com ervas frescas, alho e especiarias até formar uma pasta. Modele bolinhas achatadas e frite até dourar por fora."
      },
      {
        nome: "Om Ali",
        imagem: TORONTO,
        receita: "Cozinhe camadas de massa folhada ou pão em leite adoçado com nozes e coco. Leve ao forno até a superfície dourar e ficar cremoso por dentro."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Abou El Sid",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante decorado em estilo tradicional egípcio, com pratos caseiros clássicos."
      },
      {
        nome: "Café com narguilé em Khan el-Khalili",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Cafés históricos onde se toma chá e fuma narguilé ao som de música local."
      },
      {
        nome: "Khan el-Khalili",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Bazar histórico com centenas de anos, famoso por especiarias, joias e artesanato."
      },
      {
        nome: "Oficinas de papiro perto de Gizé",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Lojas especializadas em papiros pintados à mão, técnica milenar egípcia."
      }
    ],
    curiosidades: [
      "As Pirâmides de Gizé são a única das Sete Maravilhas do Mundo Antigo ainda de pé",
      "O Cairo é a cidade mais populosa da África",
      "A cidade cresceu às margens do rio Nilo, essencial para sua história desde o Egito Antigo"
    ]
  },
  {
    id: "cidade-do-cabo",
    nome: "Cidade do Cabo",
    pais: "África do Sul",
    continente: "África",
    timezone: "Africa/Johannesburg",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Table Mountain", imagem: TORONTO },
      { nome: "Robben Island", imagem: TORONTO },
      { nome: "Cabo da Boa Esperança", imagem: TORONTO },
      { nome: "V&A Waterfront", imagem: TORONTO },
      { nome: "Praia de Boulders (pinguins)", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Bobotie",
        imagem: TORONTO,
        receita: "Misture carne moída temperada com curry, frutas secas e pão amanhecido em leite. Cubra com uma camada de ovo batido e asse até firmar e dourar por cima."
      },
      {
        nome: "Biltong",
        imagem: TORONTO,
        receita: "Marine tiras de carne em vinagre e especiarias e deixe secar penduradas em local ventilado por dias, até ficar curada e firme."
      },
      {
        nome: "Braai",
        imagem: TORONTO,
        receita: "Tempere diversos cortes de carne e linguiça (boerewors) e grelhe lentamente em fogo de lenha ou carvão, num ritual social típico sul-africano."
      },
      {
        nome: "Malva pudding",
        imagem: TORONTO,
        receita: "Prepare uma massa de bolo com geleia de damasco e asse até dourar. Ainda quente, regue com um creme de manteiga, creme de leite e açúcar até o bolo absorver."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Harbour House",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante de frutos do mar com vista para o porto de Kalk Bay."
      },
      {
        nome: "Waiting Room",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bar com terraço panorâmico sobre a Long Street, coração da vida noturna da cidade."
      },
      {
        nome: "Old Biscuit Mill",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Mercado de comida e design que acontece aos sábados no bairro de Woodstock."
      },
      {
        nome: "V&A Waterfront (lojas)",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Complexo à beira-mar com lojas de artesanato africano e design local."
      }
    ],
    curiosidades: [
      "É onde o Oceano Atlântico encontra o Índico, perto do Cabo da Boa Esperança",
      "A Table Mountain é uma das formações rochosas mais antigas do mundo, mais velha que o Himalaia",
      "Tem uma colônia de pinguins africanos vivendo numa praia urbana, em Boulders Beach"
    ]
  },
  {
    id: "marrakech",
    nome: "Marrakech",
    pais: "Marrocos",
    continente: "África",
    timezone: "Africa/Casablanca",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Praça Jemaa el-Fnaa", imagem: TORONTO },
      { nome: "Jardim Majorelle", imagem: TORONTO },
      { nome: "Palácio Bahia", imagem: TORONTO },
      { nome: "Souks de Marrakech", imagem: TORONTO },
      { nome: "Mesquita Koutoubia", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Tagine",
        imagem: TORONTO,
        receita: "Cozinhe carne, legumes e frutas secas lentamente numa panela de barro cônica, em fogo baixo, até os sabores se misturarem e a carne ficar bem macia."
      },
      {
        nome: "Cuscuz marroquino",
        imagem: TORONTO,
        receita: "Cozinhe sêmola de trigo no vapor sobre um caldo de legumes e carne temperado com especiarias. Sirva a sêmola fofa coberta com o cozido e o caldo."
      },
      {
        nome: "Pastilla",
        imagem: TORONTO,
        receita: "Recheie camadas de massa filo com frango ou pombo desfiado, amêndoas e especiarias doces. Asse até dourar e finalize com açúcar de confeiteiro e canela por cima."
      },
      {
        nome: "Chá de menta",
        imagem: TORONTO,
        receita: "Ferva folhas de chá verde com bastante folhas de hortelã fresca e açúcar. Sirva bem quente, despejando de uma altura para formar espuma na xícara."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Nomad",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Restaurante moderno com terraço no coração da medina, releitura da culinária marroquina."
      },
      {
        nome: "Kosybar",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Bar com terraço com vista para o Palácio Bahia, popular ao entardecer."
      },
      {
        nome: "Souks de Marrakech",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Labirinto de vielas cobertas com especiarias, tecidos, lâmpadas e artesanato."
      },
      {
        nome: "Loja de tapetes na medina",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Lojas tradicionais de tapetes berberes feitos à mão, com regateio esperado."
      }
    ],
    curiosidades: [
      "Marrakech é conhecida como a 'Cidade Vermelha' por causa da cor da terracota usada nas construções da medina",
      "A medina antiga é um labirinto de ruas estreitas, considerado Patrimônio Mundial pela UNESCO",
      "O Jardim Majorelle foi restaurado pelo estilista Yves Saint Laurent no século XX"
    ]
  },
  {
    id: "nairobi",
    nome: "Nairóbi",
    pais: "Quênia",
    continente: "África",
    timezone: "Africa/Nairobi",
    imagem: TORONTO,
    pontosTuristicos: [
      { nome: "Nairobi National Park", imagem: TORONTO },
      { nome: "Giraffe Centre", imagem: TORONTO },
      { nome: "Museu Nacional do Quênia", imagem: TORONTO },
      { nome: "David Sheldrick Wildlife Trust", imagem: TORONTO },
      { nome: "Karura Forest", imagem: TORONTO }
    ],
    comidasTipicas: [
      {
        nome: "Nyama choma",
        imagem: TORONTO,
        receita: "Tempere pedaços de carne (geralmente cabrito ou boi) apenas com sal e grelhe lentamente em fogo de carvão até ficar bem dourada por fora."
      },
      {
        nome: "Ugali",
        imagem: TORONTO,
        receita: "Misture farinha de milho com água fervente, mexendo sem parar até formar uma massa firme e homogênea. Sirva como acompanhamento de carnes e vegetais."
      },
      {
        nome: "Sukuma wiki",
        imagem: TORONTO,
        receita: "Refogue couve picada com cebola, tomate e um toque de caldo até murchar, mantendo a folha ainda com um pouco de firmeza."
      },
      {
        nome: "Chapati",
        imagem: TORONTO,
        receita: "Sove uma massa simples de farinha, água e óleo, abra em discos finos e doure na chapa, pincelando óleo até formar camadas macias."
      }
    ],
    lugaresRecomendados: [
      {
        nome: "Restaurante Nyama Choma no Karen",
        categoria: "Restaurante",
        imagem: TORONTO,
        descricao: "Casas tradicionais especializadas em churrasco queniano, populares nos fins de semana."
      },
      {
        nome: "Brew Bistro",
        categoria: "Bar",
        imagem: TORONTO,
        descricao: "Cervejaria artesanal e bar bastante frequentado no bairro de Westlands."
      },
      {
        nome: "Mercado Maasai",
        categoria: "Mercado",
        imagem: TORONTO,
        descricao: "Feira itinerante de artesanato maasai, joias e tecidos coloridos."
      },
      {
        nome: "Loja de artesanato do Kazuri Beads",
        categoria: "Loja",
        imagem: TORONTO,
        descricao: "Fábrica e loja de miçangas de cerâmica feitas por artesãs locais."
      }
    ],
    curiosidades: [
      "Nairóbi é a única capital do mundo com um parque nacional de safári dentro dos limites da cidade",
      "É apelidada de 'Cidade Verde ao Sol' pela quantidade de áreas arborizadas",
      "Virou um dos maiores polos de tecnologia da África, conhecido como 'Silicon Savannah'"
    ]
  }
];

export default cidades;