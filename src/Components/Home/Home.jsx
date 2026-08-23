// Home.jsx
import { useState, useEffect } from 'react'
import "./Home.css"
import Header from '../Header/Header.jsx'
import cidades from "../../../data/data.js"
import RelogioCidade from '../Relogio/Relogio.jsx'
import { Link } from 'react-router-dom';
import Busca from "../Busca/Busca.jsx"


function getHoraCidade(timezone) {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
}

function Home({ filtrado, setFiltrado, filtradoContinente, setFiltradoContinente, filtradoPais, setFiltradoPais }) {
  const [hora, setHora] = useState(new Date())
  console.log(hora)

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000)
    return () => clearInterval(intervalo)
  }, [])

  function getCidadesExibidas() {
      if (!filtrado && !filtradoContinente && !filtradoPais) return cidades

      const idsNome = filtrado ? new Set(filtrado.map(c => c.id)) : null
      const idsContinente = filtradoContinente ? new Set(filtradoContinente.map(c => c.id)) : null
      const idsPais = filtradoPais ? new Set(filtradoPais.map(c => c.id)) : null

      return cidades.filter((c) => {
        const bateNome = idsNome ? idsNome.has(c.id) : false
        const bateContinente = idsContinente ? idsContinente.has(c.id) : false
        const batePais = idsPais ? idsPais.has(c.id) : false

        return bateNome || bateContinente || batePais
      })
  }

  const cidadesExibidas = getCidadesExibidas()

  return (
    <>
      <Header />
      <Busca setFiltrado={setFiltrado} setFiltradoContinente={setFiltradoContinente} setFiltradoPais={setFiltradoPais}/>

      <div className="cidades-container">
        {cidadesExibidas.length === 0 ? (
          <p>Nenhuma cidade encontrada</p>
        ) : (
          cidadesExibidas.map((cidade) => (
            <Link to={`/cidade/${cidade.id}`} className="cidade-card" key={cidade.id}>
                <h2>{cidade.continente}</h2>
                <img src={cidade.imagem} alt={cidade.nome} />
                <div className="cidade-hora">
                    <span>Horário local</span>
                    <RelogioCidade timezone={cidade.timezone} />
                </div>
                <span className="cidade-hora">{getHoraCidade(cidade.timezone)}</span>

                <div className="cidade-conteudo">
                    <h3>{cidade.nome}</h3>
                    <p className="cidade-pais">{cidade.pais}</p>

                    <div className="cidade-secao">
                        <span className="secao-titulo">Pontos turísticos</span>
                        <ul>
                            <li>{cidade.pontosTuristicos[0].nome}</li>
                            <li>{cidade.pontosTuristicos[1].nome}</li>
                            <li>{cidade.pontosTuristicos[2].nome}</li>
                        </ul>
                    </div>

                    <div className="cidade-secao">
                        <span className="secao-titulo">Curiosidades</span>
                        <ul className="curiosidades">
                            <li>{cidade.curiosidades[0]}</li>
                            <li>{cidade.curiosidades[1]}</li>
                        </ul>
                    </div>
                </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}

export default Home