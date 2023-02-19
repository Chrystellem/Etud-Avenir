import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Research from '../js/views/research/research.js';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Research />);