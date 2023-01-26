import React = require("react");
import { Navigate } from "react-router-dom";
import FormButton from "../components/formButton";
import Input from "../components/input";
import { ErrorAPI } from "../types/ErrorAPI";

type RegistrationProperties = {

}

type RegistrationState = {
    errorMessage: string,
    email: string
    password: string
    passwordConfirmation: string
    redirection: string
}

export class Registration extends React.Component<RegistrationProperties, RegistrationState> {

    state: RegistrationState = {
        errorMessage: '',
        email: '', 
        password: '',
        passwordConfirmation: '',
        redirection: ''
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
        event.preventDefault()
        const response = await fetch('/Identity/RegistrationAPI', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.email,
                Password: this.state.password,
                PasswordConfirmation: this.state.passwordConfirmation
            })
        })

        if (response.ok) return this.setState({ redirection: "/connexion" });

        const payload = JSON.parse(await response.json()) as ErrorAPI;
        this.setState({ errorMessage: payload.error })
    }

    render = () => {
        if (this.state.redirection) return <Navigate to={this.state.redirection} />

        return <>
            <form onSubmit={this.handleSubmit}>
                <legend>Inscris toi !</legend>
                <div className={`color-danger font-weight-bolder ${this.state.errorMessage ? 'd-block' : 'd-none'}`}>{this.state.errorMessage}</div>

                <Input label="Email" name="Email" inputType="email" placeholder="utilisateur@efrei.net" value={this.state.email} onChange={this.handleEmailChange} />
                <Input label="Mot de passe" name="Password" inputType="password" placeholder="*******" value={this.state.password} onChange={this.handlePasswordChange} />
                <Input label="Répete le mot de passe" name="Password" inputType="password" placeholder="*******" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange} />

                <FormButton name="Valider" isImg={false} />
            </form>
        </>
    }
}