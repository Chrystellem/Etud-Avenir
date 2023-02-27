import * as React from 'react'
import SchoolArticle from '../components/database/school-article'
import { Checkbox } from '../components/form/checkbox'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'
import Filter from '../components/research/filter'

export default function Database() {
    return <div className="p-5">
        <div className="d-flex flex-wrap align-items-center justify-content-center">
            <img className="database-img" src="/images/decoration/database/icon-database.svg" />
            <div className="ml-4 w-50" >
                <h1>Base de données</h1>
                <span>Tu veux voir la liste des écoles prises en compte par notre algorithme ? Fais toi plaisir, on essaie d’en prendre en compte le plus grand nombre possible</span>
            </div>
        </div>
        <div className="mt-4 d-flex align-items-sm-start">
            {/*<Filter state />*/}
            <div className="school-container px-5">
                {/*<SchoolArticle />*/}
                {/*<SchoolArticle />*/}
                {/*<SchoolArticle />*/}
                {/*<SchoolArticle />*/}
                {/*<SchoolArticle />*/}
            </div>
        </div>
    </div>
}