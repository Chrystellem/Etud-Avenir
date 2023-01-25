import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Modal from '../js/components/modal';
import LoginModal from '../js/modals/login';

const container = document.getElementById('login');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Modal toggleBtnId='nav-item-login' toggleEvent='click' >
        <LoginModal />
    </Modal>);