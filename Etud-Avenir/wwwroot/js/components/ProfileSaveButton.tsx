import * as React from 'react'
import { useNavigate } from 'react-router-dom'

type ProfileSaveButtonProps = {
    classIcon: string
    name: string
    color: string,
    onClickRedirectTo: string
}
type ProfileSaveButtonState = {}

export function ProfileSaveButton(props: ProfileSaveButtonProps, state: ProfileSaveButtonState) {
    const navigate = useNavigate();
    const styleBtn = {
        color: props.color,
        borderRadius: props.color,
        border: '3px solid ' + props.color
    }
    const styleText = { color: props.color }

    return <div className="saveButtons my-2 cursor-pointer" style={styleBtn} onClick={() => navigate(props.onClickRedirectTo)}>
        <i className={props.classIcon}></i>
        <span className="mt-4" style={styleText}>{props.name}</span>
    </div>
}