import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CATEGORIES } from '@/lib/categories'

// Renvoie la liste des billets d'une catégorie, du plus récent au plus ancien
export function getBillets(categorie) {
  // Le chemin du dossier, par exemple : /home/elise/.../curiosites/content/ia
  const dossier = path.join(process.cwd(), 'content', categorie)

  // Si le dossier n'existe pas, on renvoie une liste vide
  if (!fs.existsSync(dossier)) return []

  // La liste des fichiers .md du dossier
  const fichiers = fs.readdirSync(dossier).filter(fichier => fichier.endsWith('.md'))

  // On transforme chaque fichier en objet "billet"
  const billets = fichiers.map(fichier => {
    const texte = fs.readFileSync(path.join(dossier, fichier), 'utf8')
    const { data, content } = matter(texte)

    return {
      slug: fichier.replace('.md', ''),
      categorie: categorie,
      titre: data.title,
      date: new Date(data.date).toISOString(),
      contenu: content,
    }
  })

  // Tri du plus récent au plus ancien
  return billets.sort((a, b) => b.date.localeCompare(a.date))
}

// Renvoie un seul billet à partir de sa catégorie et de son slug, ou null s'il n'existe pas
export function getBillet(categorie, slug) {
  const billets = getBillets(categorie)
  return billets.find(billet => billet.slug === slug) ?? null
}

// Renvoie les billets de toutes les catégories, du plus récent au plus ancien
export function getTousLesBillets() {
  const codes = Object.keys(CATEGORIES)
  const billets = codes.flatMap(categorie => getBillets(categorie))
  return billets.sort((a, b) => b.date.localeCompare(a.date))
}