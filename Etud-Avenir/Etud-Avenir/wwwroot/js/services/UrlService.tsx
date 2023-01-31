/**
 * Permet de récupérer les paramètres de l'url
 */
export function getParams(queryString: string): object {
    queryString = queryString.replace(/.*?\?/, "");

    if (!queryString.length) return {};

    const params = {}
    const splittedQueries = queryString.split('&')

    splittedQueries.forEach((query) => {
        const [queryName, queryValue] = query.split('=')
        if (!queryName) return;

        params[queryName] = queryValue;
    })

    return params
}