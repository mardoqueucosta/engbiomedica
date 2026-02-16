import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, User, Tag } from 'lucide-react'

function renderConteudo(text) {
  return text.split('\n\n').map((block, i) => {
    if (block.startsWith('## ')) {
      return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">{block.replace('## ', '')}</h2>
    }
    if (block.includes('\n- ')) {
      const items = block.split('\n- ').filter(Boolean)
      const intro = items[0].startsWith('- ') ? null : items.shift()
      return (
        <div key={i}>
          {intro && <p className="text-gray-600 leading-relaxed mb-3">{intro}</p>}
          <ul className="space-y-2 mb-6">
            {items.map((item, j) => {
              const cleaned = item.startsWith('- ') ? item.slice(2) : item
              const parts = cleaned.split(/\*\*(.*?)\*\*/g)
              return (
                <li key={j} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>
                    {parts.map((part, k) =>
                      k % 2 === 1 ? <strong key={k} className="text-gray-900">{part}</strong> : part
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
    const parts = block.split(/\*\*(.*?)\*\*/g)
    return (
      <p key={i} className="text-gray-600 leading-relaxed mb-4">
        {parts.map((part, k) =>
          k % 2 === 1 ? <strong key={k} className="text-gray-900">{part}</strong> : part
        )}
      </p>
    )
  })
}

export default function Artigo() {
  const { slug } = useParams()
  const [artigo, setArtigo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch(`/api/artigos/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('Not found')
        return r.json()
      })
      .then(data => { setArtigo(data); setLoading(false) })
      .catch(() => { setError(true); setLoading(false) })
  }, [slug])

  if (loading) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center text-gray-400">Carregando...</div>
      </div>
    )
  }

  if (error || !artigo) {
    return (
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Artigo não encontrado</h1>
          <p className="text-gray-500 mb-8">O artigo que você procura não existe ou foi removido.</p>
          <Link to="/artigos" className="inline-flex items-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-800 transition">
            <ArrowLeft className="w-4 h-4" />
            Ver todos os artigos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Voltar */}
        <Link to="/artigos" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-700 transition mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar para artigos
        </Link>

        {/* Cabeçalho */}
        <div className="mb-10">
          <span className="text-xs font-medium text-accent-600 bg-accent-50 px-3 py-1.5 rounded-full">{artigo.categoria}</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-4 leading-tight">{artigo.titulo}</h1>
          <p className="text-lg text-gray-500 leading-relaxed mb-6">{artigo.resumo}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-4">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {artigo.autor}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {artigo.data}
            </div>
            {artigo.leitura && (
              <div className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {artigo.leitura} de leitura
              </div>
            )}
          </div>
        </div>

        {/* Conteúdo */}
        <div className="prose-custom">
          {renderConteudo(artigo.conteudo)}
        </div>

        {/* Rodapé do artigo */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link to="/artigos" className="inline-flex items-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-800 transition">
            <ArrowLeft className="w-4 h-4" />
            Ver mais artigos
          </Link>
        </div>
      </div>
    </article>
  )
}
