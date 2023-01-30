import React = require("react");
import { Link, Navigate } from "react-router-dom";
import FormError from "../components/form/error";
import FormButton from "../components/formButton";
import Input from "../components/input";
import { ErrorAPI } from "../types/ErrorAPI";
import { MessageModal } from "./message";

type RegistrationProperties = {

}

type RegistrationState = {
    errors: string[],
    email: string
    password: string
    passwordConfirmation: string
    redirection: string
}

export default class RegistrationModal extends React.Component<RegistrationProperties, RegistrationState> {

    state: RegistrationState = {
        errors: [],
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

        if (response.ok) return this.setState({ redirection: "/confirmation-email" });

        const payload = await response.json() as ErrorAPI;
        this.setState({ errors: payload.errors })
    }

    render = () => {
        if (this.state.redirection) {
            return <MessageModal content="Un email de confirmation vient de t'être envoyé. Clique sur le lien pour valider définitivement ton inscription" />
        }

        return <>
            <form onSubmit={this.handleSubmit}>
                <legend>Inscris toi !</legend>

                <FormError errors={this.state.errors} />

                <Input label="Email" name="Email" inputType="email" placeholder="utilisateur@efrei.net" value={this.state.email} onChange={this.handleEmailChange} />
                <Input label="Mot de passe" name="Password" inputType="password" placeholder="*******" value={this.state.password} onChange={this.handlePasswordChange} showPasswordRequirements={true} />
                <Input label="Répete le mot de passe" name="Password" inputType="password" placeholder="*******" value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange} />

                <FormButton name="Valider" isImg={false} />
                <hr />
                <span className="d-block">Déjà inscris ?<Link to="/connexion" className="ml-2 italic underline-hover">Connecte toi</Link></span>
            </form>
        </>
    }
}