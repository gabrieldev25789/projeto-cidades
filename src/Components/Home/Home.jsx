import { useState, useEffect } from 'react'
import "./Home.css"
import cidades from "../../../data/data.js"
import RelogioCidade from '../Relogio/Relogio.jsx'
import { Link } from 'react-router-dom';

function getHoraCidade(timezone) {
  return new Intl.DateTimeFormat('pt-BR', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date())
}

function Home() {
  const [hora, setHora] = useState(new Date())
  console.log(hora)

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000)
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="cidades-container">
      {cidades.map((cidade) => (
        <Link to={`/cidade/${cidade.id}`} className="cidade-card" key={cidade.id}>
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
                        <li>{cidade.pontosTuristicos[0]}</li>
                        <li>{cidade.pontosTuristicos[1]}</li>
                        <li>{cidade.pontosTuristicos[2]}</li>
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
      ))}
    </div>
  )
}

export default Home