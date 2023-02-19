import * as React from 'react'
import SchoolArticle from '../../components/database/school-article'
import Filter from '../../components/research/filter'

export default function ResearchResult() {
    return (
        <div className="d-flex p-5">
            <div>
                <h1>Résultats</h1>
                <Filter />
            </div>
            <div className="school-container px-5">
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
            </div>
        </div>
    )
}