import React = require("react");

type InputProperties = {
    label: string,
    inputType: "text" | "number" | "date" | "password" | "email",
    placeholder: string,
    value: string,
    required?: boolean,
    onChange: React.ChangeEventHandler,
}

export default class Input extends React.Component<InputProperties> {
    render() {
        return <div className="react-form-group">
            <label>{this.props.label}</label>
            <input placeholder={this.props.placeholder} type={this.props.inputType} value={this.props.value} onChange={this.props.onChange} required={this.props.required ?? false} />
        </div>
    }
}