import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Profile } from '../js/views/profile';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Profile />);