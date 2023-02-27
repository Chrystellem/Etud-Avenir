"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoParse = void 0;
/**
 * Change le type de l'entrée selon sa vrai représentation
 * Renvoi une chaine de caractere si pas capable de la changer en booléen ou nombre
 *
 * @param e
 */
var autoParse = function (e) {
    if (!e)
        return;
    e = e.trim();
    if (e === "true")
        return true;
    if (e === "false")
        return false;
    var eParsedToFloat = parseFloat(e);
    if (!isNaN(eParsedToFloat))
        return eParsedToFloat;
    return e;
};
exports.autoParse = autoParse;
//# sourceMappingURL=parser.js.map