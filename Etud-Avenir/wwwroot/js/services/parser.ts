
/**
 * Change le type de l'entrée selon sa vrai représentation
 * Renvoi une chaine de caractere si pas capable de la changer en booléen ou nombre
 * 
 * @param e
 */
export const autoParse = (e: string) => {
    if (!e) return

    e = e.trim()

    if (e === "true") return true
    if (e === "false") return false

    const eParsedToFloat = parseFloat(e)
    if (!isNaN(eParsedToFloat)) return eParsedToFloat

    return e
}