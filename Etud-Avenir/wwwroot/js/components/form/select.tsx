import * as React from 'react'

type SelectProperties = {
    label: string,
    name: string,
    onChange: React.ChangeEventHandler,
    required: boolean,
    children: React.ReactNode,
    value: string | number | string[]
}

export default function Select(props: SelectProperties) {
    return <div className="react-form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <select name={props.name} onChange={props.onChange} required={props.required} value={ props.value }>
            {props.children}
        </select>
    </div>
}