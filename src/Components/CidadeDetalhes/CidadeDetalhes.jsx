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

      <section className="detalhes-faixa detalhes-faixa-clara">
        <div className="detalhes-faixa-conteudo">
          <h2>Pontos turísticos</h2>
          <ul className="detalhes-grid">
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
      </section>

      <section className="detalhes-faixa">
        <div className="detalhes-faixa-conteudo">
          <h2>{localSelecionado ? `Localização: ${localSelecionado}` : 'Localização'}</h2>
          <iframe
            title={`Mapa de ${localParaMapa}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(`${localParaMapa}, ${cidade.nome}`)}&output=embed`}
            width="100%"
            height="420"
            style={{ border: 0, borderRadius: '0.75rem' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="detalhes-faixa detalhes-faixa-clara">
        <div className="detalhes-faixa-conteudo">
          <h2>Comidas típicas</h2>
        <ul className="comidas-grid">
            {cidade.comidasTipicas.map((comida) => (
                <li key={comida.nome}>
                <img src={comida.imagem} alt={comida.nome} />
                <h3>{comida.nome}</h3>
                <p>{comida.receita}</p>
                </li>
            ))}
        </ul>
        </div>
      </section>

      <section className="detalhes-faixa">
        <div className="detalhes-faixa-conteudo">
          <h2>Curiosidades</h2>
          <ul className="detalhes-lista-curiosidades">
            {cidade.curiosidades.map((curiosidade) => (
              <li key={curiosidade}>{curiosidade}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}


export default CidadeDetalhes