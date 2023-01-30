import React = require("react");

type FeedbackProperties = {
    show: boolean,
    isSuccessfull: boolean,
    content: string
}

export default class Feedback extends React.Component<FeedbackProperties, {}> {
    render = () => {
        if (!this.props.show) return;

        return <div className={`d-flex justify-content-center p-3 color-white ${this.props.isSuccessfull ? "bg-green" : "bg-danger"}`}>
            {this.props.content}
        </div>
    }


}