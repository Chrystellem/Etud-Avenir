export default class FilterState {
    domain: string = ""
    localization: string = ""
    isInitialFormation: boolean = false
    isApprenticeship: boolean = false
    isPublic: boolean = false
    isPrivate: boolean = false
    isStateApproved: boolean = false
    admissionType: number = 0


    /**
     * Permet de récupérer l'url à fetch en fonction des propriétés précisées (true ou non null) 
     */
    static getUrl = (filter: FilterState) => {
        let url = "";
        const addToUrl = (param: string) => {
            if (!url) {
                url += `?${param}`
                return
            }

            url += `&${param}`
        } 

        if (filter.domain) addToUrl(`domain=${filter.domain}`)
        if (filter.localization) addToUrl(`localization=${filter.localization}`)
        if (filter.isInitialFormation) addToUrl(`isInitialFormation=${filter.isInitialFormation}`)
        if (filter.isApprenticeship) addToUrl(`isApprenticeship=${filter.isApprenticeship}`)
        if (filter.isPublic) addToUrl(`isPublic=${filter.isPublic}`)
        if (filter.isPrivate) addToUrl(`isPrivate=${filter.isPrivate}`)
        if (filter.isStateApproved) addToUrl(`isStateApproved=${filter.isStateApproved}`)
        if (filter.admissionType) addToUrl(`admissionType=${filter.admissionType}`)

        return url
    }
}