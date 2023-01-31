import React = require("react");

type InputProperties = {
    label: string,
    name: string,
    inputType: "text" | "number" | "date" | "password" | "email",
    placeholder: string,
    value: string,
    required?: boolean,
    onChange: React.ChangeEventHandler,
    showPasswordRequirements?: boolean
}

type InputState = {
    showPasswordRequirements: boolean;
}

export default class Input extends React.Component<InputProperties, InputState> {

    constructor(props) {
        super(props);
        this.state = {
            showPasswordRequirements: this.props.showPasswordRequirements == null ? false : this.props.showPasswordRequirements
        };
    }

    render() {
        return <div className="react-form-group">
            <label htmlFor={this.props.name}>{this.props.label}</label>
            { this.renderPasswordRequirements() }
            <input name={ this.props.name } placeholder={this.props.placeholder} type={this.props.inputType} value={this.props.value} onChange={this.props.onChange} required={this.props.required ?? false} />
        </div>
    }

    renderPasswordRequirements = () => {
        if (!this.props.showPasswordRequirements) return;

        const requirements = [
            "Au moins 8 caractères",
            "Au moins un chiffre",
            "Au moins un caractère spécial"
        ]

        const listRequirements = requirements.map((requirement, index) => <li key={ `requirement${index}` } className="p-0">{requirement}</li>)

        return <ul className="pl-0 list-style-none">
            {listRequirements}
        </ul>
    }
}