import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import { About } from './page/About'
import { Contact } from './page/Contact'
import { Home } from './page/Home'

function App() {

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/contact">Contato</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
