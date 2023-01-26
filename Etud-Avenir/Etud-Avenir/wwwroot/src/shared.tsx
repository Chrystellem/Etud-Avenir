import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from '../js/components/modal';
import Nav from '../js/layouts/nav';
import LoginModal from '../js/modals/login';
import { Registration } from '../js/modals/registration';

const container = document.getElementById('shared-app');
const root = createRoot(container);
root.render(
    <>
        <Router>
            <Nav isUserAuthentified={ window['isUserAuthentified'] } />
            <Routes>
                <Route path="/connexion" element={
                    <Modal minWidth={350} >
                        <LoginModal />
                    </Modal>
                } />
                <Route path="/inscription" element={
                    <Modal minWidth={400}>
                        <Registration />
                    </Modal>
                } />
            </Routes>
        </Router>
    </>
);