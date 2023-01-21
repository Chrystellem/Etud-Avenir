import React = require("react");
import FormButton from "../components/formButton";
import Input from "../components/input";
import Modal from "../components/modal";

export default class LoginModal extends Modal {

    loginModalRenderer = <form>
                            <legend>Se connecter</legend>

                            <Input label="Label test" inputType="email" placeholder="email@efrei.fr" />
                            <Input label="Label test 2" inputType="password" placeholder="************" />

                            <FormButton name="Valider" isImg={false} />
                        </form>

    componentDidMount = () => {
        const loginButton = document.querySelector('.nav-item-login');
        loginButton.addEventListener('click', this.toggleModal);
    }

    render = () => {
        return this.modalRenderer(this.loginModalRenderer);
    } 
}