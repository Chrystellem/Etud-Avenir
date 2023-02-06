"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParams = void 0;
/**
 * Permet de récupérer les paramètres de l'url
 */
function getParams(queryString) {
    queryString = queryString.replace(/.*?\?/, "");
    if (!queryString.length)
        return {};
    var params = {};
    var splittedQueries = queryString.split('&');
    splittedQueries.forEach(function (query) {
        var _a = query.split('='), queryName = _a[0], queryValue = _a[1];
        if (!queryName)
            return;
        params[queryName] = queryValue;
    });
    return params;
}
exports.getParams = getParams;
//# sourceMappingURL=UrlService.js.map