// Busca.jsx
import { useState } from "react"
import "./Busca.css"
import cidades from "../../../data/data"

function Busca({ setFiltrado, setFiltradoContinente, setFiltradoPais }) {

    const [valor, setValor] = useState("")
    const [valorContinente, setValorContinente] = useState("")
    const [valorPais, setValorPais] = useState("")

    function buscarPorNome(texto) {
    if (texto.trim() === "") return setFiltrado(null)
    setFiltrado(cidades.filter(c => c.nome.toLowerCase().includes(texto.toLowerCase())))
    }

    function buscarPorContinente(texto) {
    if (texto.trim() === "") return setFiltradoContinente(null)
    setFiltradoContinente(cidades.filter(c => c.continente.toLowerCase().includes(texto.toLowerCase())))
    }

    function buscarPorPais(texto) {
    if (texto.trim() === "") return setFiltradoPais(null)
    setFiltradoPais(cidades.filter(c => c.pais.toLowerCase().includes(texto.toLowerCase())))
    }

    function handleChange(e) {
        const texto = e.target.value
        setValor(texto)
        buscarPorNome(texto)
    }

    function handleChangeContinente(e){
        const texto = e.target.value 
        setValorContinente(texto)
        buscarPorContinente(texto)
    }

    function handleChangePais(e){
        const texto = e.target.value 
        setValorPais(texto)
        buscarPorPais(texto)
    }

return (
        <>
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

            <div className="busca-container">
                <svg className="busca-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                    type="text"
                    className="busca-input"
                    placeholder="Busque por um continente"
                    value={valorContinente}
                    onChange={handleChangeContinente}
                />
                {valorContinente && (
                    <button
                        className="busca-limpar"
                        onClick={() => handleChangeContinente({ target: { value: "" } })}
                        aria-label="Limpar busca"
                    >
                        ✕
                    </button>
                )}
            </div>

            <div className="busca-container">
                <svg className="busca-icone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <input
                    type="text"
                    className="busca-input"
                    placeholder="Busque por um país"
                    value={valorPais}
                    onChange={handleChangePais}
                />
                {valorPais && (
                    <button
                        className="busca-limpar"
                        onClick={() => handleChangePais({ target: { value: "" } })}
                        aria-label="Limpar busca"
                    >
                        ✕
                    </button>
                )}
            </div>
        </>
    
    )
}

export default Busca