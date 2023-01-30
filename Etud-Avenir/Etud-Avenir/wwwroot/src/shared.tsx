import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Feedback from '../js/layouts/feedback';
import Nav from '../js/layouts/nav';
import Identity from '../js/views/identity';

console.log(window['feedback']);

const container = document.getElementById('shared-app');
const root = createRoot(container);
root.render(
    <>
        <Router>
            <Nav isUserAuthentified={window['isUserAuthentified']} />
            <Feedback show={window['feedback']['show']} isSuccessfull={window['feedback']['isSuccessfull']} content={window['feedback']['content']} />
            <Identity />
        </Router>
    </>
);