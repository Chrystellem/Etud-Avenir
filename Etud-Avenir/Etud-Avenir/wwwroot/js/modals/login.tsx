import React = require("react");
import { Link, useParams } from "react-router-dom";
import { Checkbox } from "../components/form/checkbox";
import FormError from "../components/form/error";
import FormButton from "../components/formButton";
import Input from "../components/input";
import { ErrorAPI } from "../types/ErrorAPI";

type LoginModalState = {
    email: string;
    password: string;
    rememberMe: boolean;
    errorMessage: string;
}

export default class LoginModal extends React.Component<{}, LoginModalState> {

    state: LoginModalState = {
        email: '',
        password: '',
        rememberMe: false,
        errorMessage: ''
    }

    handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value })
    }
    handleChangeRememberMe = () => {
        this.setState({ rememberMe: !this.state.rememberMe })
    }
    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/Identity/LoginAPI', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.email,
                Password: this.state.password,
                RememberMe: this.state.rememberMe
            })
        })

        if (response.ok) return window.location.href = '/';

        const payload = await response.json() as ErrorAPI;
        this.setState({ errorMessage: payload.error })
    }

    render = () => {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <legend>Se connecter</legend>
                <FormError error={this.state.errorMessage} />

                <Input name="Email" label="Email" inputType="email" placeholder="email@efrei.fr" value={this.state.email} onChange={this.handleChangeEmail} />
                <Input name="Password" label="Mot de passe" inputType="password" placeholder="************" value={this.state.password} onChange={this.handleChangePassword} />
                <Checkbox name="RememberMe" label="Se souvenir de moi ?" value="true" checked={this.state.rememberMe} onChange={this.handleChangeRememberMe} />

                <FormButton name="Valider" isImg={false} />
            </form>
            <hr />
            <span className="d-block">Mot de passe oublié ?<Link to="/mot-de-passe-oublie" className="ml-2 italic underline-hover">Réinitialise-le</Link></span>
            <span className="d-block mt-2">Tu n'as pas de compte ? <Link to="/inscription" className="ml-2 italic underline-hover">Inscris-toi</Link></span>
        </div>
    }
}