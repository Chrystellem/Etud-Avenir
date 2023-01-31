import React = require("react");
import { Navigate } from "react-router";
import FeedbackContext from "../context/feedbackContext";
import { getParams } from "../services/UrlService";

let launched = false
export default function EmailConfirmation({ }) {
    if (launched) return;

    // Récupérer les paramètres de l'url
    const params = getParams(window.location.href) as { userId: string, code: string }
    if (!params.code || !params.userId) return;

    const { setFeedbackContent } = React.useContext(FeedbackContext);
    fetch(`/Identity/EmailConfirmation?userId=${params.userId}&code=${params.code}`).then((response) => {
        if (!response.ok) {
            setFeedbackContent({ content: "Nous n'avons pas vu vérifier l'email", isSuccessFull: false })
            return
        }

        setFeedbackContent({ content: "Email vérifié. Tu peux maintenant te connecter !", isSuccessFull: true })
        launched = true
    })

    return <Navigate to="/" />;
}