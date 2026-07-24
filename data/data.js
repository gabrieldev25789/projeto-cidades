import  NY from "../src/assets/imgs/NY.avif"
import PARIS from "../src/assets/imgs/PARIS.jpg"
import LONDRES from "../src/assets/imgs/LONDRES.avif"
import SP from "../src/assets/imgs/SP.jpg"
import BERLIM from "../src/assets/imgs/BERLIM.jpg"

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
      "Pizza NY style",
      "Bagel com cream cheese",
      "Cheesecake",
      "Hot dog de rua"
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
      "Fish and chips",
      "Sunday roast",
      "Afternoon tea com scones",
      "Shepherd's pie"
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
      "Croissant",
      "Escargot",
      "Crème brûlée",
      "Baguete com queijos franceses"
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
      "Pastel de feira",
      "Sanduíche de mortadela do Mercadão",
      "Feijoada",
      "Pizza paulistana"
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
      "Currywurst",
      "Pretzel",
      "Döner kebab (criado por imigrantes turcos em Berlim)",
      "Schnitzel"
    ],
    curiosidades: [
      "O Döner kebab, apesar de parecer turco tradicional, foi inventado em Berlim nos anos 70",
      "Berlim tem mais pontes que Veneza",
      "A cidade tem mais de 180 km de trilhas de ciclismo integradas"
    ]
  }
]

export default cidades 