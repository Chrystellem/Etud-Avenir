import * as React from 'react'
import { Navigate } from 'react-router-dom'
import SchoolArticle from '../../components/database/school-article'
import Loader from '../../components/loader'
import Filter from '../../components/research/filter'
import { autoParse } from '../../services/parser'
import FilterState from '../../types/research-filter'
import ResearchResultSchoolDTO from '../../types/research-result-school-dto'

type ResearchResultProperties = {}
type ResearchResultState = {
    filter: FilterState
    results: ResearchResultSchoolDTO[]
    fetching: boolean
}

export default class ResearchResult extends React.Component<ResearchResultProperties, ResearchResultState> {

    state: ResearchResultState = {
        filter: new FilterState(),
        fetching: true,
        results: []
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        // initialisation du filtre
        for (const filterProperty in this.state.filter) {
            if (!autoParse(this.params[filterProperty])) continue

            this.state.filter = {
                ...this.state.filter,
                [filterProperty]: autoParse(this.params[filterProperty])
            }
        }
        this.setState({ filter: this.state.filter })

        // Récupération des résultats
        const results = await getResearchResults(this.state.filter);
        this.setState({ results, fetching: false })
    }

    /**
     * Retrouve les queries dans l'url
     */
    params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop as string),
    });

    handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.type === "checkbox") {
            this.setState({
                filter: {
                    ...this.state.filter,
                    [e.currentTarget.name]: !this.state.filter[e.currentTarget.name]
                }
            })
            return
        }

        this.setState({
            filter: {
                ...this.state.filter,
                [e.currentTarget.name]: autoParse(e.currentTarget.value)
            }
        })
    }

    /**
     * Gère l'affichage des résultats
     * */
    showResults = () => {
        if (!this.state.results) return <p>Aucun résultat trouvé</p>

        return this.state.results.map(
            (r) => <SchoolArticle
                key={r.name}
                school={r}
                isResult={true}
            />
        )
    }

    /**
     * L'utilisateur relance la recherche depuis les filtres à gauche 
     */
    reLaunchResearch = async (e: React.FormEvent) => {
        e.preventDefault()

        // Vérifier que les paramètres obligatoires sont présents
        if (!this.state.filter.domain || !this.state.filter.localization) return

        this.setState({ fetching: true })

        // Récupération des résultats
        const newUrl = `${FilterState.getUrl(this.state.filter)}&reports=${this.params["reports"]}`
        window.history.pushState({ id: newUrl }, newUrl, `/recherche/resultats${newUrl}`);

        const results = await getResearchResults(this.state.filter);
        this.setState({ results, fetching: false })
    }

    render = () => {
        return (
            <div className="d-flex p-5 result-app">
                <div>
                    <h1>Résultats</h1>
                    <Filter state={this.state.filter} handleChange={this.handleFilterChange} handleSubmit={this.reLaunchResearch} />
                </div>
                <div className="school-container px-5">
                    {
                        this.state.fetching ?
                            <Loader /> :
                            this.showResults()
                    }
                </div>
            </div>
        )
    }
}


/**
 * Récupère les résultats de la recherche 
 */
const getResearchResults = async (filter: FilterState): Promise<ResearchResultSchoolDTO[]> => {
    const result = await fetch(`/api/research/results${FilterState.getUrl(filter)}`) 
    if (!result.ok) return []

    return result.json()
}


