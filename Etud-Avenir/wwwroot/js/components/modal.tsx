import React = require("react");
import { Navigate } from "react-router-dom";
import CloseModalButton from "./closeModalButton";
type ModalState = {
    isModalClosed: boolean
}

type ModalChildComponent = {
    children: React.ReactNode,
    minWidth: number
}

export default class Modal extends React.Component<ModalChildComponent, ModalState> {

    state = {
        isModalClosed: false
    }

    toggleModal = () => {
        this.setState({ isModalClosed: !this.state.isModalClosed })
    }

    render = () => {
        const { children } = this.props;

        if (this.state.isModalClosed) return <Navigate to="/" />

        return <div className='modal d-block'>
            <div className="modal-body modal-body-border" style={{minWidth:this.props.minWidth + 'px'}}>
                <CloseModalButton onClick={this.toggleModal} />
                {children}
            </div>
        </div>
    }
}