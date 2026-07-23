import { useState, useEffect } from 'react'
import "./Home.css"
import cidades from "../../../data/data.js"

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
          <h3>{cidade.nome}</h3>
          <ul>
            <li>País: {cidade.pais}</li>
            <li>Ponto turístico 1: {cidade.pontosTuristicos[0]}</li>
            <li>Ponto turístico 2: {cidade.pontosTuristicos[1]}</li>
            <li>Ponto turístico 3: {cidade.pontosTuristicos[2]}</li>
          </ul>
          <span className="cidade-hora">Hora: {getHoraCidade(cidade.timezone)}</span>
        </div>
      ))}
    </div>
  )
}

export default Home