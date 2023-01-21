import * as React from 'react';
import { createRoot } from 'react-dom/client';
import LoginModal from '../js/modals/login';

const container = document.getElementById('login');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<LoginModal />);