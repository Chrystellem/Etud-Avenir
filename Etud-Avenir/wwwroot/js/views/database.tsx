import * as React from 'react'
import SchoolArticle from '../components/database/school-article'
import Loader from '../components/loader'
import Filter from '../components/research/filter'
import { autoParse } from '../services/parser'
import FilterState from '../types/research-filter'
import ResearchResultSchoolDTO from '../types/research-result-school-dto'

type DatabaseState = {
    filter: FilterState
    results: ResearchResultSchoolDTO[]
    fetching: boolean
}

export default class Database extends React.Component<{}, DatabaseState> {
    state: DatabaseState = {
        filter: new FilterState(),
        fetching: true,
        results: []
    }

    constructor(props) {
        super(props)
    }

    /**
     * Retrouve les queries dans l'url
     */
    params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop as string),
    });

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
                isResult={false}
            />
        )
    }

    /**
     * L'utilisateur relance la recherche depuis les filtres à gauche 
     */
    reLaunchResearch = async (e: React.FormEvent) => {
        e.preventDefault()

        this.setState({ fetching: true })

        // Récupération des résultats
        const newUrl = FilterState.getUrl(this.state.filter)
        window.history.pushState({ id: newUrl }, newUrl, `/ecoles${newUrl}`);

        const results = await getResearchResults(this.state.filter);
        this.setState({ results, fetching: false })
    }

    render = () => {
        return <div className="p-5">
            <div className="d-flex flex-wrap align-items-center justify-content-center">
                <img className="database-img" src="/images/decoration/database/icon-database.svg" />
                <div className="ml-4 w-50" >
                    <h1>Base de données</h1>
                    <span>Tu veux voir la liste des écoles prises en compte par notre algorithme ? Fais toi plaisir, on essaie d’en prendre en compte le plus grand nombre possible</span>
                </div>
            </div>
            <div className="mt-4 d-flex align-items-sm-start">
                <Filter state={this.state.filter} handleChange={this.handleFilterChange} handleSubmit={this.reLaunchResearch} />
                <div className="school-container px-5" style={{ minHeight: '500px' }} >
                    {
                        this.state.fetching ?
                            <Loader /> :
                            this.showResults()
                    }
                </div>
            </div>
        </div>
    }
}

/**
 * Récupère les résultats de la recherche 
 */
const getResearchResults = async (filter: FilterState): Promise<ResearchResultSchoolDTO[]> => {
    const result = await fetch(`/api/schools${FilterState.getUrl(filter)}`)
    if (!result.ok || result.redirected) return []

    return result.json()
}