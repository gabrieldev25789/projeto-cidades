import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import CidadeDetalhes from './Components/CidadeDetalhes/CidadeDetalhes'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cidade/:id" element={<CidadeDetalhes />} />
      </Routes>
    </>
  )
}

export default App
