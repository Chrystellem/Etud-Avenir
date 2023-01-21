import React = require("react");
import CloseModalButton from "./closeModalButton";
import FormButton from './formButton';
import Input from './input';

type ModalState = {
    isModalClosed: boolean
}

export default class Modal extends React.Component {

    state: ModalState = {
        isModalClosed: true
    }

    toggleModal = () => {
        this.setState({ isModalClosed: !this.state.isModalClosed })
    }

    modalRenderer = (childComponent: JSX.Element) => {
        return <div className={`modal ${this.state.isModalClosed ? 'd-none' : 'd-block' }`}>
            <div className="modal-body modal-body-border">
                <CloseModalButton onClick={this.toggleModal} />
                {childComponent}
            </div>
        </div>
    }

}