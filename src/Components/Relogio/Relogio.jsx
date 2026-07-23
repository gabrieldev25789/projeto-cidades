import "./Relogio.css"

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

export default RelogioCidade