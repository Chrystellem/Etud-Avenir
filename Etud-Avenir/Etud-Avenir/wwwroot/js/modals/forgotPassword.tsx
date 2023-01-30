import React = require("react");
import FormButton from "../components/formButton";
import Input from "../components/input";
import { MessageModal } from "./message";

type ForgotPasswordModalProperties = {}
type ForgotPasswordModalState = {
    email: string,
    isSubmitted: boolean,
    error: string
}

export default class ForgotPasswordModal extends React.Component<ForgotPasswordModalProperties, ForgotPasswordModalState> {
    state: ForgotPasswordModalState = {
        email: '',
        isSubmitted: false,
        error: ''
    }

    handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({email: event.target.value})
    }

    handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await fetch('/Identity/ForgotPasswordAPI', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.email
            })
        })

        if (response.ok) {
            this.setState({ isSubmitted: true })
            return;
        }

        const { error } = await response.json();
        this.setState({error: error})
    }

    render = () => {
        if (this.state.isSubmitted) {
            return <MessageModal content="Un email pour réinitialiser ton mot de passe a été envoyé !" />
        }

        return <form onSubmit={this.handleSubmit}>
            <legend>Reinitialise ton mot de passe</legend>
            <span>Nous allons t'envoyer un mail pour réinitialiser ton email</span>
            <div className={`color-danger font-weight-bolder pt-2 ${this.state.error ? 'd-block' : 'd-none'}`}>{this.state.error}</div>

            <Input inputType="email" label="Email" name="Email" placeholder="utilisateur@efrei.net" value={this.state.email} required={true} onChange={this.handleEmailChange} />
            <FormButton isImg={false} name="Valider" />
        </form>
    }
}