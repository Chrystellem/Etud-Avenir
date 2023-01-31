import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import FeedbackContext, {IFeedbackContext } from '../js/context/feedbackContext';
import Feedback from '../js/layouts/feedback';
import Nav from '../js/layouts/nav';
import Identity from '../js/views/identity';

const container = document.getElementById('shared-app');
const root = createRoot(container);
root.render(<AppShared />);

function AppShared() {
    const [feedback, setFeedback] = React.useState({ content: '', isSuccessFull: false, show: false });
    const setFeedbackContent = React.useCallback((value: IFeedbackContext) => {
        setFeedback({ ...value, show: true })

        // Enlever l'affichage au bout de 5s 
        setTimeout(() => setFeedback({ ...value, show: false }), 5000);
    }, [])
    const feedbackContextValue = React.useMemo(() => {
        return {
            state: feedback,
            setFeedbackContent
        }
    }, [feedback, setFeedbackContent])

    return <Router>
        <Nav isUserAuthentified={window['isUserAuthentified']} />
        <FeedbackContext.Provider value={feedbackContextValue}>
            <Feedback />
            <Identity />
        </FeedbackContext.Provider>
    </Router>
}