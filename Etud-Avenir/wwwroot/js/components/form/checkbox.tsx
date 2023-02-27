import React = require("react")
import Input from "../input"

type CheckboxProperties = {
    name: string,
    label: string,
    checked: boolean,
    onChange: React.ChangeEventHandler,
}

type CheckboxState = {

}

export class Checkbox extends React.Component<CheckboxProperties, CheckboxState> {

    render = () => {
        return <div className="d-flex align-items-center mb-3 react-form-group__checkbox">
            <input
                type="checkbox"
                className="mr-3 cursor-pointer"
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.props.onChange} />
            <label htmlFor={this.props.name} className="mb-0">{this.props.label}</label>
        </div>
    }

}