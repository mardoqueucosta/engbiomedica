import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Clock, ArrowRight } from 'lucide-react'

export default function Artigos() {
  const [artigos, setArtigos] = useState([])

  useEffect(() => {
    fetch('/api/artigos').then(r => r.json()).then(setArtigos)
  }, [])

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-900">Artigos</h1>
          <div className="flex items-center gap-2 text-accent-600">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">{artigos.length} publicações</span>
          </div>
        </div>
        <p className="text-gray-500 mb-4 max-w-2xl">
          Conteúdos sobre engenharia biomédica, instrumentação, inteligência artificial e muito mais.
        </p>
        <div className="w-16 h-1 bg-accent-500 rounded-full mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {artigos.map((artigo) => (
            <Link to={`/${artigo.slug}`} key={artigo.id} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition h-full border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-accent-300 opacity-50 group-hover:opacity-80 transition" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2 py-1 rounded-full">{artigo.categoria}</span>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-3 h-3" />
                      <span className="text-xs">{artigo.data}</span>
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition">{artigo.titulo}</h2>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{artigo.resumo}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Por {artigo.autor}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-primary-600 font-medium group-hover:gap-2 transition-all">
                      Ler mais <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
