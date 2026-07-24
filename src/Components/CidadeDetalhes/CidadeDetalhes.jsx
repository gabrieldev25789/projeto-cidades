import { useParams, Link } from 'react-router-dom'
import cidades from "../../../data/data"
import "./CidadeDetalhes.css"
import { useState } from 'react'

function CidadeDetalhes() {
  const { id } = useParams()
  const cidade = cidades.find((c) => c.id === id)
  const [localSelecionado, setLocalSelecionado] = useState(null)

  if (!cidade) {
    return <p>Cidade não encontrada</p>
  }

  const localParaMapa = localSelecionado ?? cidade.nome

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
              <li
                key={ponto}
                onClick={() => setLocalSelecionado(ponto)}
                className={localSelecionado === ponto ? 'ponto-ativo' : ''}
              >
                {ponto}
              </li>
            ))}
          </ul>
        </div>

        <div className="detalhes-secao detalhes-mapa">
          <span className="secao-titulo">
            {localSelecionado ? `Localização: ${localSelecionado}` : 'Localização'}
          </span>
          <iframe
            title={`Mapa de ${localParaMapa}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${localParaMapa}, ${cidade.nome}`)}&output=embed`}
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '0.6rem' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
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