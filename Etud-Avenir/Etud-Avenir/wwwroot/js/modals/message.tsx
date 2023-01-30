import React = require("react");

type EmailConfirmationModalProperties = {
    content: string
}

type EmailConfirmationModalState = {

}

export class MessageModal extends React.Component<EmailConfirmationModalProperties, EmailConfirmationModalState> {
    render = () => {
        return <span>{this.props.content}</span>
    }
}