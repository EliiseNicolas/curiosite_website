import Link from 'next/link'
import { getBillets } from '@/lib/billets'
import { compterCommentaires } from '@/lib/commentaires'

// Reconstruire la page à chaque visite, pour des compteurs toujours à jour
export const dynamic = 'force-dynamic'

export const metadata = { title: 'IA | Curiosités' }

export default async function PageIA() {
  const billets = getBillets('ia')
  const nbCommentaires = await compterCommentaires('ia')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Intelligence artificielle</h1>
      </div>

      {billets.length === 0 ? (
        <p className="text-gray-500">Aucun billet pour l'instant.</p>
      ) : (
        <div className="space-y-3">
          {billets.map(billet => {
            const nombre = nbCommentaires[`ia/${billet.slug}`] ?? 0

            return (
              <Link
                key={billet.slug}
                href={`/ia/${billet.slug}`}
                className="block border rounded-lg p-4 hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold">{billet.titre}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {new Date(billet.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
                  {' · '}
                  {nombre} {nombre > 1 ? 'commentaires' : 'commentaire'}
                </p>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}