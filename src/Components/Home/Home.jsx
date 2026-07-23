import { useState, useEffect } from 'react'
import "./Home.css"
import NY from "../../assets/imgs/NY.avif"

const cidades = [
  { nome: "Nova York", timezone: "America/New_York", imagem: NY },
  { nome: "Londres", timezone: "Europe/London", imagem: NY },
  { nome: "Paris", timezone: "Europe/Paris", imagem: NY },
  { nome: "São Paulo", timezone: "America/Sao_Paulo", imagem: NY },
  { nome: "Berlim", timezone: "Europe/Berlin", imagem: NY },
]

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
        <div className="cidade-card" key={cidade.nome}>
          <img src={cidade.imagem} alt={cidade.nome} />
          <h3>{cidade.nome}</h3>
          <span className="cidade-hora">{getHoraCidade(cidade.timezone)}</span>
        </div>
      ))}
    </div>
  )
}

export default Home