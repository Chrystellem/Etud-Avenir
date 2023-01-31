import React = require("react")
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import FormError from "../components/form/error"
import FormButton from "../components/formButton"
import Input from "../components/input"
import FeedbackContext from "../context/feedbackContext"
import { ErrorAPI } from "../types/ErrorAPI"

type ResetPasswordModalState = {
    password: string,
    passwordconfirmation: string,
    error: string
    code: string
    email: string
    redirectToHome: boolean
}



const ResetPasswordModalv2 = () => {

    const [formValues, setFormValues] = React.useState<ResetPasswordModalState>({
        password: '',
        passwordconfirmation: '',
        error: '',
        code: location.search.replace("?code=", ""),
        email: '',
        redirectToHome: false
    })
    const { setFeedbackContent } = React.useContext(FeedbackContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [event.target.name.toLowerCase()]: event.target.value
        })
    }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/Identity/ResetPasswordAPI', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: formValues.email,
                Password: formValues.password,
                PasswordConfirmation: formValues.passwordconfirmation,
                Code: formValues.code
            })
        })

        if (response.ok) {
            setFeedbackContent({ content: "Mot de passe réinitialisé !", isSuccessFull: true })
            setFormValues({ ...formValues, redirectToHome: true })
            return;
        }

        const errorResponse = await response.json() as ErrorAPI;
        setFormValues({
            ...formValues,
            error: errorResponse.error
        })
    }

    if (formValues.redirectToHome) {
        return <Navigate to="/" />
    }

    return <form onSubmit={handleSubmit}>
        <legend>Réinitialise ton mot de passe</legend>
        <FormError error={formValues.error} />

        <Input label="Email" name="Email" inputType="email" required={true} onChange={handleChange} placeholder="utilisateur@efrei.net" value={formValues.email} />
        <Input label="Nouveau mot de passe" name="Password" inputType="password" required={true} onChange={handleChange} placeholder="********" showPasswordRequirements={true} value={formValues.password} />
        <Input label="Confirme le mot de passe" name="PasswordConfirmation" inputType="password" required={true} onChange={handleChange} placeholder="********" value={formValues.passwordconfirmation} />
        <FormButton isImg={false} name="Valider" />
    </form>
}

export default ResetPasswordModalv2;