import * as React from 'react';
import { createRoot } from 'react-dom/client';
import LikeButton from '../js/components/LikeButton';

function Welcome(props) {
    return <h1>Bonjour, {props.name}</h1>;
}

const element = 
    <div>
        <span>Like ci-dessous</span>
        <LikeButton title="LIKEZZZ MOIIII" />
        <Welcome name="Jean" />
    </div>;

const container = document.getElementById('test');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(element);