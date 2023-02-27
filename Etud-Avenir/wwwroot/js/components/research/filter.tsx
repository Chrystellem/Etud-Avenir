import * as React from 'react'
import FilterState from '../../types/research-filter'
import { Checkbox } from '../form/checkbox'
import Select from '../form/select'
import FormButton from '../formButton'
import Input from '../input'


type FilterProperties = {
    state: FilterState,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleSubmit: (e: React.FormEvent) => void
}

export default function Filter({ state, handleChange, handleSubmit }: FilterProperties) {
    return (
        <div className="filter p-4">
            <form onSubmit={handleSubmit}>
                <Select label="Domaine" name="domain" required={true} onChange={handleChange} value={state.domain}>
                    <option>-- Sélectionne un domaine --</option>
                    <option>Informatique</option>
                    <option>Graphisme</option>
                    <option>Langues</option>
                    <option>Philosophie</option>
                    <option>Physique</option>
                    <option>Génie civile</option>
                    <option>Communication</option>
                    <option>Marketing</option>
                </Select>
                <Input
                    label="Localisation"
                    placeholder="Ville/Département/Région"
                    name="localization"
                    value={state.localization}
                    onChange={handleChange}
                    required={false}
                    inputType="text" />

                <Select name="admissionType" label="Type d'admission" required={true} onChange={handleChange} value={state.admissionType}>
                    <option>-- Sélectionne un type d'admission --</option>
                    <option>Sur dossier</option>
                    <option>Concours</option>
                </Select>

                <Checkbox
                    name="isPublic"
                    label="Ecole publique"
                    onChange={handleChange}
                    checked={state.isPublic} />
                <Checkbox
                    name="isPrivate" 
                    label="Ecole privée"
                    onChange={handleChange}
                    checked={state.isPrivate} />
                <Checkbox
                    name="isStateApproved" 
                    label="Reconnu par l'état"
                    onChange={handleChange}
                    checked={state.isStateApproved} />
                <Checkbox
                    name="isApprenticeship" 
                    label="Alternance"
                    onChange={handleChange}
                    checked={state.isApprenticeship} />
                <Checkbox
                    name="isInitialFormation" 
                    label="Formation initiale"
                    onChange={handleChange}
                    checked={state.isInitialFormation} />

                <FormButton isImg={false} name="Rechercher" />
            </form>
        </div>
    )
}