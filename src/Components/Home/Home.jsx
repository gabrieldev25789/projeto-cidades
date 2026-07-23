import { useState, useEffect } from 'react'
import "./Home.css"
import cidades from "../../../data/data.js"

function RelogioCidade({ timezone }) {
  const agora = new Date(
    new Date().toLocaleString('en-US', { timeZone: timezone })
  )

  const horas = agora.getHours() % 12
  const minutos = agora.getMinutes()
  const segundos = agora.getSeconds()

  const anguloHoras = (horas + minutos / 60) * 30
  const anguloMinutos = (minutos + segundos / 60) * 6
  const anguloSegundos = segundos * 6

  return (
    <div className="relogio">
      <svg viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="48" className="relogio-fundo" />
        {[...Array(12)].map((_, i) => (
          <line
            key={i}
            x1="50"
            y1="6"
            x2="50"
            y2="12"
            className="relogio-marcador"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
        <line
          x1="50" y1="50" x2="50" y2="26"
          className="ponteiro-hora"
          transform={`rotate(${anguloHoras} 50 50)`}
        />
        <line
          x1="50" y1="50" x2="50" y2="16"
          className="ponteiro-minuto"
          transform={`rotate(${anguloMinutos} 50 50)`}
        />
        <line
          x1="50" y1="50" x2="50" y2="14"
          className="ponteiro-segundo"
          transform={`rotate(${anguloSegundos} 50 50)`}
        />
        <circle cx="50" cy="50" r="2.5" className="relogio-centro" />
      </svg>
    </div>
  )
}

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
            <div className="cidade-card" key={cidade.id}>
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
            </div>
        ))}
    </div>
  )
}

export default Home