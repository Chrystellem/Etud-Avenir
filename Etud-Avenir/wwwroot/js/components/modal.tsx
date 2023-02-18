import React = require("react");
import { Navigate, useNavigate } from "react-router-dom";
import CloseModalButton from "./closeModalButton";

export type ParentControlModal = {
    toggler: React.Dispatch<React.SetStateAction<boolean>>,
    isVisible: boolean
}

type ModalChildComponent = {
    children: React.ReactNode,
    minWidth: number,

    parentControl?: ParentControlModal
}

export default function Modal(props: ModalChildComponent) {
    const navigate = useNavigate()

    const closeModal = () => {
        navigate(-1)
    }

    if (props.parentControl && !props.parentControl.isVisible) return;

    return <div className='modal d-block'>
        <div className="modal-body modal-body-border" style={{ minWidth: props.minWidth + 'px' }}>
            <CloseModalButton onClick={props.parentControl ? () => props.parentControl.toggler(!props.parentControl.isVisible) : closeModal} />
            {props.children}
        </div>
    </div>
}