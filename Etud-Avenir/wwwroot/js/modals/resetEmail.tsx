import * as React from 'react'
import FormError from '../components/form/error'
import FormButton from '../components/formButton'
import Input from '../components/input'
import { ErrorAPI } from '../types/ErrorAPI'

type ResetEmailModalState = {
    error: string,
    email: string
}

export function ResetEmailModal({ }, { }) {

    const [formValues, setFormValues] = React.useState<ResetEmailModalState>({
        error: '',
        email: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name.toLowerCase()]: event.target.value
        })
    }

    return <form>
        <legend>Réinitialiser l'email</legend>
        <FormError error={formValues.error} />
        <Input label="Email" name="Email" inputType="email" placeholder="utilisateur@efrei.net" value={formValues.email} onChange={handleChange} />
        <FormButton name="Valider" isImg={false} />
    </form>
}