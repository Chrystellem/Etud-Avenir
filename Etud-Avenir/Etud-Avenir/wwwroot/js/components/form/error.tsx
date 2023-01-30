import React = require("react");

type FormErrorProperties = {
    error?: string,
    errors?: string[]
}
type FormErrorState = {}

export default class FormError extends React.Component<FormErrorProperties, FormErrorState> {
    render = () => {
        if (this.props.error) {
            return <div className={`color-danger font-weight-bolder ${this.props.error ? 'd-block' : 'd-none'}`}>{this.props.error}</div>
        } 

        if (this.props.errors) {
            const errors = this.props.errors.map((error, index) => <li className="color-danger" key={index}>{error}</li>);

            return <ul className="list-style-none font-weight-bolder d-block pl-0">
                {errors}
            </ul>
        }

        return;
    }
}