import React = require("react");
import CloseModalButton from "./closeModalButton";
type ModalState = {
    isModalClosed: boolean
}

type ModalChildComponent = {
    children: React.ReactNode,
    toggleBtnId: string,
    toggleEvent: 'hover' | 'click',
    minWidth: number
}

export default class Modal extends React.Component<ModalChildComponent, ModalState> {

    state = {
        isModalClosed: true
    }

    componentDidMount = () => {
        const toggleBtn = document.querySelector(`#${this.props.toggleBtnId}`);
        toggleBtn.addEventListener(this.props.toggleEvent, this.toggleModal);
    }

    toggleModal = () => {
        this.setState({ isModalClosed: !this.state.isModalClosed })
    }

    render = () => {
        const { children } = this.props;

        return <div className={`modal ${this.state.isModalClosed ? 'd-none' : 'd-block'}`}>
            <div className="modal-body modal-body-border" style={{minWidth:this.props.minWidth + 'px'}}>
                <CloseModalButton onClick={this.toggleModal} />
                {children }
            </div>
        </div>
    }
}