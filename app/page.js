import Link from 'next/link'
import { getTousLesBillets } from '@/lib/billets'
import { CATEGORIES } from '@/lib/categories'
import { formaterDate } from '@/lib/dates'

export default function Accueil() {
  // Les 5 billets les plus récents, toutes catégories confondues
  const billets = getTousLesBillets().slice(0, 5)

  return (
    <div className="space-y-10">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold">Bienvenue !</h1>
        <p className="text-lg text-gray-600">
          J'écris ici sur l'intelligence artificielle et la physique.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Billets récents</h2>

        {billets.length === 0 ? (
          <p className="text-gray-500">Aucun billet pour l'instant.</p>
        ) : (
          <div className="space-y-3">
            {billets.map(billet => (
              <Link
                key={`${billet.categorie}/${billet.slug}`}
                href={`/${billet.categorie}/${billet.slug}`}
                className="block border rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="bg-gray-100 text-gray-700 rounded px-2">
                    {CATEGORIES[billet.categorie]}
                  </span>
                  <span>{formaterDate(billet.date)}</span>
                </div>
                <h3 className="text-lg font-semibold mt-1">{billet.titre}</h3>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}