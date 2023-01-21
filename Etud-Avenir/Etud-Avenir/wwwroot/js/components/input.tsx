import React = require("react");

type InputProperties = {
    label: string,
    inputType: "text" | "number" | "date" | "password" | "email",
    placeholder: string
}

export default class Input extends React.Component<InputProperties> {

    render() {
        return <div className="react-form-group">
            <label>{this.props.label}</label>
            <input placeholder={ this.props.placeholder } type={this.props.inputType} />
        </div>
    }
}