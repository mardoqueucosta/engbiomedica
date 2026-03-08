/**
 * Remove diacritics (accents) from a string for accent-insensitive search.
 * "Regulamentação" → "Regulamentacao"
 * "pós-graduação"  → "pos-graduacao"
 */
export function removeDiacritics(str: string): string {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
