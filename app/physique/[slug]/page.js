import Link from 'next/link'
import { notFound } from 'next/navigation'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBillet } from '@/lib/billets'
import { formaterDate } from '@/lib/dates'

// Le titre de l'onglet du navigateur, adapté à chaque billet
export async function generateMetadata({ params }) {
  const { slug } = await params
  const billet = getBillet('physique', slug)
  return { title: billet ? `${billet.titre} | Curiosités` : 'Billet introuvable' }
}

export default async function PageBillet({ params }) {
  // 1. Lire le slug dans l'adresse
  const { slug } = await params

  // 2. Trouver le billet correspondant
  const billet = getBillet('physique', slug)

  // 3. S'il n'existe pas, afficher la page 404
  if (!billet) notFound()

  // 4. Afficher le billet
  return (
    <article>
      <Link href="/physique" className="text-sm text-gray-500 hover:underline">
        ← Retour aux billets IA
      </Link>

      <header className="mt-4 mb-8">
        <h1 className="text-4xl font-bold">{billet.titre}</h1>
        <p className="text-gray-400 mt-2">{formaterDate(billet.date)}</p>
      </header>

      <div className="prose max-w-none">
        <Markdown remarkPlugins={[remarkGfm]}>{billet.contenu}</Markdown>
      </div>
    </article>
  )
}