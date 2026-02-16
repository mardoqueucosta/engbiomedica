import { useState, useEffect } from 'react'
import { Activity, FlaskConical, Cpu, GraduationCap, Mail, MapPin, ChevronRight, Menu, X, ExternalLink } from 'lucide-react'

function App() {
  const [programa, setPrograma] = useState(null)
  const [linhas, setLinhas] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    fetch('/api/programa').then(r => r.json()).then(setPrograma)
    fetch('/api/linhas-pesquisa').then(r => r.json()).then(setLinhas)
  }, [])

  const icons = [
    <Activity className="w-8 h-8" />,
    <Cpu className="w-8 h-8" />,
    <FlaskConical className="w-8 h-8" />
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-accent-300" />
            </div>
            <div>
              <span className="font-bold text-gray-900 text-lg leading-tight block">PPGEB</span>
              <span className="text-xs text-gray-500 leading-tight block">Engenharia Biomédica</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-sm text-gray-600 hover:text-primary-700 transition">Sobre</a>
            <a href="#pesquisa" className="text-sm text-gray-600 hover:text-primary-700 transition">Pesquisa</a>
            <a href="#contato" className="text-sm text-gray-600 hover:text-primary-700 transition">Contato</a>
            <a href="#contato" className="text-sm bg-primary-700 text-white px-4 py-2 rounded-lg hover:bg-primary-800 transition">
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
            <a href="#sobre" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Sobre</a>
            <a href="#pesquisa" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Pesquisa</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="block text-sm text-gray-600 py-2">Contato</a>
          </div>
        )}
      </nav>

      {/* ===== HERO ===== */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-50 text-accent-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <GraduationCap className="w-4 h-4" />
              Pós-Graduação Stricto Sensu
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Engenharia<br />
              <span className="text-primary-600">Biomédica</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-2xl">
              Formando pesquisadores e profissionais na fronteira entre engenharia e ciências da saúde. 
              Tecnologia a serviço da vida.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#pesquisa" className="inline-flex items-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-800 transition">
                Conheça nossas linhas
                <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#sobre" className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
                Sobre o programa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '5+', label: 'Linhas de Pesquisa' },
            { value: '20+', label: 'Publicações/Ano' },
            { value: '15+', label: 'Docentes' },
            { value: '50+', label: 'Alunos Formados' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-700">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section id="sobre" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Programa</h2>
          <div className="w-16 h-1 bg-accent-500 rounded-full mb-8"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                O Programa de Pós-Graduação em Engenharia Biomédica (PPGEB) da Universidade Brasil 
                forma pesquisadores qualificados para atuar na interseção entre engenharia, tecnologia 
                e ciências da saúde.
              </p>
              <p>
                Com laboratórios equipados e parcerias com instituições de referência como a ESALQ/USP, 
                nossos alunos têm acesso a infraestrutura de ponta para desenvolvimento de pesquisas 
                inovadoras em instrumentação biomédica, processamento de sinais e sensores avançados.
              </p>
            </div>
            <div className="space-y-4">
              {programa?.areas?.map((area, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LINHAS DE PESQUISA ===== */}
      <section id="pesquisa" className="py-20 px-6 bg-primary-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Linhas de Pesquisa</h2>
          <div className="w-16 h-1 bg-accent-400 rounded-full mb-12"></div>
          <div className="grid md:grid-cols-3 gap-8">
            {linhas.map((linha, i) => (
              <div key={linha.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition group">
                <div className="text-accent-300 mb-4">
                  {icons[i] || <FlaskConical className="w-8 h-8" />}
                </div>
                <span className="text-xs font-medium text-accent-300 uppercase tracking-wider">{linha.area}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{linha.titulo}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{linha.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTATO ===== */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
          <div className="w-16 h-1 bg-accent-500 rounded-full mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Tem interesse em nosso programa de pós-graduação? Entre em contato para saber mais 
                sobre o processo seletivo, linhas de pesquisa e oportunidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <span className="text-sm">ppgeb@universidadebrasil.edu.br</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span className="text-sm">Universidade Brasil - Campus Fernandópolis</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <ExternalLink className="w-5 h-5 text-primary-600" />
                  <a href="https://engenhariabiomedica.com" className="text-sm text-primary-600 hover:underline">
                    engenhariabiomedica.com
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada! (demo)') }} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <textarea
                rows={4}
                placeholder="Sua mensagem"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
              ></textarea>
              <button type="submit" className="w-full bg-primary-700 text-white py-3 rounded-lg font-medium hover:bg-primary-800 transition">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

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

export default App
