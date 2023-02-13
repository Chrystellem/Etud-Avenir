import * as React from 'react'

type ButtonProps = {
    name: string
    template?: 'primary' | 'secondary' | 'danger'
    customStyle?: React.CSSProperties,
    onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

export function Button({ name, template, customStyle, onClick }: ButtonProps) {
    if (template) return <a className={`btn btn-${template}`} style={customStyle} onClick={onClick}>{name}</a>

    return <a style={customStyle}>{ name }</a>
}