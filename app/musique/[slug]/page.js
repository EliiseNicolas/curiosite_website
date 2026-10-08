import Link from 'next/link'
import { getBillets } from '@/lib/billets'
import { compterCommentaires } from '@/lib/commentaires'
import { formaterDate } from '@/lib/dates'

// Reconstruire la page à chaque visite, pour des compteurs toujours à jour
export const dynamic = 'force-dynamic'

export const metadata = { title: 'Musique | Curiosités' }

export default async function PagePhysique() {
  const billets = getBillets('musique')
  const nbCommentaires = await compterCommentaires('musique')

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Musique</h1>
      </div>

      {billets.length === 0 ? (
        <p className="text-gray-500">Aucun billet pour l'instant.</p>
      ) : (
        <div className="space-y-3">
          {billets.map(billet => {
            const nombre = nbCommentaires[`musique/${billet.slug}`] ?? 0

            return (
              <Link
                key={billet.slug}
                href={`/musique/${billet.slug}`}
                className="block border rounded-lg p-4 hover:bg-gray-50"
              >
                <h2 className="text-lg font-semibold">{billet.titre}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {formaterDate(billet.date)}
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