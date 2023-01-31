import React = require("react");
import { Route, Routes } from "react-router-dom";
import EmailConfirmation from "../api/emailConfirmation";
import Modal from "../components/modal";
import ForgotPasswordModal from "../modals/forgotPassword";
import LoginModal from "../modals/login";
import RegistrationModal from "../modals/registration";
import ResetPasswordModal from "../modals/resetPassword";

export default class Identity extends React.Component {

    render = () => {
        return <Routes>
            <Route path="/connexion" element={
                <Modal minWidth={350} >
                    <LoginModal />
                </Modal>
            } />
            <Route path="/inscription" element={
                <Modal minWidth={400}>
                    <RegistrationModal />
                </Modal>
            } />
            <Route path="/confirmation-email" element={
                <EmailConfirmation />
            } />
            <Route path="/mot-de-passe-oublie" element={
                <Modal minWidth={350}>
                    <ForgotPasswordModal />
                </Modal>
            }></Route>
            <Route path="/reinitialisation-mot-de-passe" element={
                <Modal minWidth={350}>
                    <ResetPasswordModal />
                </Modal>
            }></Route>
        </Routes>
    }

}