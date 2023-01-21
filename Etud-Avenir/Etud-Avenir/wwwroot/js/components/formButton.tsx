import React = require("react");

type FormButtonProperties = {
    name?: string,
    isImg: boolean,
    imgPath?: string
}

export default class FormButton extends React.Component<FormButtonProperties> {

    render() {
        if (this.props.isImg) {
            return <div><button className="btn btn-success">Image</button></div>
        }

        return <div>
            <button className='btn-primary btn'>{ this.props.name }</button>
        </div>
    }

}