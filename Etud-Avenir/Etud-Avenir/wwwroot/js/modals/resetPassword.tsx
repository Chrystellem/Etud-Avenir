import React = require("react")
import { useSearchParams } from "react-router-dom"
import FormError from "../components/form/error"
import FormButton from "../components/formButton"
import Input from "../components/input"
import { FeedbackContext } from "../context/feedbackContext"
import { ErrorAPI } from "../types/ErrorAPI"

type ResetPasswordModalProperties = {}
type ResetPasswordModalState = {
    password: string,
    passwordConfirmation: string,
    error: string
    code: string
    email: string
}

export default class ResetPasswordModal extends React.Component<ResetPasswordModalProperties, ResetPasswordModalState>
{
    state: ResetPasswordModalState = {
        password: '',
        passwordConfirmation: '',
        error: '',
        code: location.search.replace("?code=", ""),
        email: ''
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value })
    }
    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value })
    }
    handlePasswordConfirmationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ passwordConfirmation: event.target.value })
    }
    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/Identity/ResetPasswordAPI', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.email,
                Password: this.state.password,
                PasswordConfirmation: this.state.passwordConfirmation,
                Code: this.state.code
            })
        })

        if (response.ok) {
            return window.location.href = '/';
        }

        const { error } = await response.json() as ErrorAPI;
        this.setState({ error })
    }

    render = () => {
        return <form onSubmit={this.handleSubmit}>
            <legend>Réinitialise ton mot de passe</legend>
            <FormError error={this.state.error} />

            <Input label="Email" name="Email" inputType="email" required={true} onChange={this.handleEmailChange} placeholder="utilisateur@efrei.net" value={this.state.email} />
            <Input label="Nouveau mot de passe" name="Password" inputType="password" required={true} onChange={this.handlePasswordChange} placeholder="********" showPasswordRequirements={true} value={this.state.password} />
            <Input label="Confirme le mot de passe" name="Password" inputType="password" required={true} onChange={this.handlePasswordConfirmationChange} placeholder="********" value={this.state.passwordConfirmation} />
            <FormButton isImg={false} name="Valider" />
        </form>
    }

}