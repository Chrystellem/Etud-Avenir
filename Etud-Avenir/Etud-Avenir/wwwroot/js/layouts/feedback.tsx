import React = require("react");
import FeedbackContext from "../context/feedbackContext";

export default function Feedback() {
    let feedback = React.useContext(FeedbackContext);

    if (!feedback.state.show) return

    return <div className={`d-flex justify-content-center p-3 color-white ${feedback.state.isSuccessFull ? "bg-green" : "bg-danger"}`}>
        {feedback.state.content}
        </div>
}