import * as React from 'react'

type NumberTitleProperties = {
    number: number,
    title: string,
    isSelected: boolean
}

export default function NumberTitle({ number, title, isSelected }: NumberTitleProperties) {

    return <div className={`mx-3 d-flex justify-content-center align-items-center number-title ${isSelected ? 'number-title-selected' : ''}`}>
        <span className="circle">{number}</span>
        <span className="ml-3">{title}</span>
    </div>
}