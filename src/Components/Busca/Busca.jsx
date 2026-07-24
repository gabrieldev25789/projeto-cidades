// Busca.jsx
import { useState } from "react"
import "./Busca.css"
import cidades from "../../../data/data"

function Busca({ setFiltrado }) {
    const [valor, setValor] = useState("")

    function buscar(textoBusca) {
        if (textoBusca.trim() === "") {
            setFiltrado(null)
            return
        }

        const resultado = cidades.filter((cidade) =>
            cidade.nome.toLowerCase().includes(textoBusca.toLowerCase())
        )

        setFiltrado(resultado)
    }

    function handleChange(e) {
        const texto = e.target.value
        setValor(texto)
        buscar(texto)
    }

return (
        <div className="busca-container">
            <svg className="busca-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
                type="text"
                className="busca-input"
                placeholder="Busque por uma cidade"
                value={valor}
                onChange={handleChange}
            />
            {valor && (
                <button
                    className="busca-limpar"
                    onClick={() => handleChange({ target: { value: "" } })}
                    aria-label="Limpar busca"
                >
                    ✕
                </button>
            )}
        </div>
    )
}

export default Busca