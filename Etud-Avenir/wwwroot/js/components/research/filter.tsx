import * as React from 'react'
import { Checkbox } from '../form/checkbox'
import Select from '../form/select'
import FormButton from '../formButton'
import Input from '../input'

export default function Filter() {
    return (
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
    )
}