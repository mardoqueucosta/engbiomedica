import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { Activity, Menu, X } from 'lucide-react'
import Home from './pages/Home.jsx'
import Artigos from './pages/Artigos.jsx'
import Artigo from './pages/Artigo.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useState(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path ? 'text-primary-700 font-medium' : 'text-gray-600'

  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-accent-300" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-tight block">PPGEB</span>
              <span className="text-xs text-gray-500 leading-tight block">Engenharia Biomédica</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm hover:text-primary-700 transition ${isActive('/')}`}>Início</Link>
            <a href={location.pathname === '/' ? '#sobre' : '/#sobre'} className="text-sm text-gray-600 hover:text-primary-700 transition">Sobre</a>
            <a href={location.pathname === '/' ? '#pesquisa' : '/#pesquisa'} className="text-sm text-gray-600 hover:text-primary-700 transition">Pesquisa</a>
            <Link to="/artigos" className={`text-sm hover:text-primary-700 transition ${isActive('/artigos')}`}>Artigos</Link>
            <a href={location.pathname === '/' ? '#contato' : '/#contato'} className="text-sm text-gray-600 hover:text-primary-700 transition">Contato</a>
            <a href={location.pathname === '/' ? '#contato' : '/#contato'} className="text-sm bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition">
              Inscreva-se
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4 space-y-3 border-t border-gray-100">
            <Link to="/" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Início</Link>
            <Link to="/artigos" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Artigos</Link>
            <a href="/#sobre" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Sobre</a>
            <a href="/#pesquisa" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Pesquisa</a>
            <a href="/#contato" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Contato</a>
          </div>
        )}
      </nav>

      {/* ===== ROUTES ===== */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/:slug" element={<Artigo />} />
      </Routes>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary-700" />
            <span className="text-sm font-semibold text-gray-900">PPGEB</span>
            <span className="text-sm text-gray-400">• Universidade Brasil</span>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Programa de Pós-Graduação em Engenharia Biomédica. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
