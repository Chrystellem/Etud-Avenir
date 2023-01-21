import React = require("react");

type CloseModalButtonProperties = {
    onClick: React.MouseEventHandler<HTMLDivElement>
}

export default class CloseModalButton extends React.Component<CloseModalButtonProperties> {

    render() {
        return <div className="modal-close" onClick={ this.props.onClick }>
                    <i className="fa-solid fa-xmark"></i>
                </div>
    }

}