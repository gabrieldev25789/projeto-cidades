import { useParams, Link } from 'react-router-dom'
import cidades from "../../../data/data"
import "./CidadeDetalhes.css"

function CidadeDetalhes() {
  const { id } = useParams()
  const cidade = cidades.find((c) => c.id === id)

  if (!cidade) {
    return <p>Cidade não encontrada</p>
  }

  return (
    <div className="detalhes-pagina">
      <section
        className="detalhes-hero"
        style={{ backgroundImage: `url(${cidade.imagem})` }}
      >
        <Link to="/" className="detalhes-voltar">← Voltar</Link>

        <div className="detalhes-hero-conteudo">
          <h1>{cidade.nome}</h1>
          <p className="detalhes-pais">{cidade.pais}</p>
        </div>
      </section>

      <div className="detalhes-corpo">
        <div className="detalhes-secao">
          <span className="secao-titulo">Pontos turísticos</span>
          <ul>
            {cidade.pontosTuristicos.map((ponto) => (
              <li key={ponto}>{ponto}</li>
            ))}
          </ul>
        </div>

        <div className="detalhes-secao">
          <span className="secao-titulo">Comidas típicas</span>
          <ul>
            {cidade.comidasTipicas.map((comida) => (
              <li key={comida}>{comida}</li>
            ))}
          </ul>
        </div>

        <div className="detalhes-secao curiosidades">
          <span className="secao-titulo">Curiosidades</span>
          <ul>
            {cidade.curiosidades.map((curiosidade) => (
              <li key={curiosidade}>{curiosidade}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CidadeDetalhes