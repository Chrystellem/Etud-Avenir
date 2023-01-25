import React = require("react");
import FormButton from "../components/formButton";
import Input from "../components/input";

type LoginModalState = {
    email: string;
    password: string;
}

export default class LoginModal extends React.Component<{}, LoginModalState> {

    state: LoginModalState = {
        email: '',
        password: ''
    }

    handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ email: event.target.value })
    }
    handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ password: event.target.value })
    }

    render = () => {
        return <form action="">
            <legend>Se connecter</legend>

            <Input label="Email" inputType="email" placeholder="email@efrei.fr" value={this.state.email} onChange={this.handleChangeEmail} />
            <Input label="Mot de passe" inputType="password" placeholder="************" value={this.state.password} onChange={this.handleChangePassword} />

            <FormButton name="Valider" isImg={false} />
        </form>
    }
}