import { supabase } from '@/lib/supabase'

// Renvoie un objet { 'ia/slug': nombre, ... } pour une catégorie
export async function compterCommentaires(categorie) {
  const { data, error } = await supabase
    .from('comments')
    .select('billet_id')
    .like('billet_id', `${categorie}/%`)

  if (error) return {}

  const compte = {}
  for (const commentaire of data) {
    const id = commentaire.billet_id
    compte[id] = (compte[id] ?? 0) + 1
  }
  return compte
}