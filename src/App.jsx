import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import CidadeDetalhes from './Components/CidadeDetalhes/CidadeDetalhes'
import ScrollToTop from './Components/Scroll/Scroll'
import { useState } from 'react'

function App() {
  
  const [filtrado, setFiltrado] = useState(null)

  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home filtrado={filtrado} setFiltrado={setFiltrado}/>} />
        <Route path="/cidade/:id" element={<CidadeDetalhes />} />
      </Routes>
    </>
  )
}

export default App
