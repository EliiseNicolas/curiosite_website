// Transforme une date en texte lisible, par exemple "20 septembre 2026"
export function formaterDate(date) {
  return new Date(date).toLocaleDateString('fr-FR', { dateStyle: 'long' })
}