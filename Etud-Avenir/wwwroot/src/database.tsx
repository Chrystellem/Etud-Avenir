import * as React from 'react'
import { createRoot } from 'react-dom/client';
import Database from '../js/views/database';

const app = document.querySelector("#app")
const root = createRoot(app);

root.render(<Database />);