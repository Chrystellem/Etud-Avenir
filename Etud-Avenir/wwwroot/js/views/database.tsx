import * as React from 'react'
import SchoolArticle from '../components/database/school-article'
import { Checkbox } from '../components/form/checkbox'
import Select from '../components/form/select'
import FormButton from '../components/formButton'
import Input from '../components/input'

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
            <div className="filter p-4">
                <form>
                    <Select label="Domaine" name="Domain" required={false} onChange={() => undefined}>
                        <option>Sélectionne un domaine</option>
                    </Select>
                    <Input label="Nom" placeholder="Ex: EFREI Paris" name="Name" value="" onChange={() => undefined} required={false} inputType="text" />
                    <Input label="Localisation" placeholder="Ville/Département/Région" name="Localization" value="" onChange={() => undefined} required={false} inputType="text" />
                    <Select label="Accessibilité" name="Accessibility" required={false} onChange={() => undefined}>
                        <option>Sélectionne un mode d’accessibilité</option>
                    </Select>

                    <Checkbox name="IsPublic" label="Ecole publique" value="" onChange={() => undefined} checked={false} />
                    <Checkbox name="IsPrivate" label="Ecole privée" value="" onChange={() => undefined} checked={false} />
                    <Checkbox name="IsOfficial" label="Reconnu par l'état" value="" onChange={() => undefined} checked={false} />
                    <Checkbox name="IsApprenticeshipProgram" label="Alternance" value="" onChange={() => undefined} checked={false} />

                    <FormButton isImg={false} name="Rechercher" />
                </form>
            </div>
            <div className="school-container px-5">
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
                <SchoolArticle />
            </div>
        </div>
    </div>
}