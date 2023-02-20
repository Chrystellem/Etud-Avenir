import * as React from 'react'

type ReportClickableProps = {
    title: string,
    otherInfo: string,
}

export function ReportClickable({ title, otherInfo }: ReportClickableProps) {

    const clickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.currentTarget.classList.toggle('clicked');
    }

    return <>
        <div className="my-3 d-flex cursor-pointer report-clickable" onClick={clickHandler}>
            <article className="p-3 d-flex align-items-center cursor-pointer article-icon" style={{minWidth: '230px'}}>
                <i className='mr-4 fa-solid fa-file fa-3x color-green'></i>
                <div className="info">
                    <h5>{title}</h5>
                    <span>{otherInfo}</span>
                </div>
            </article>
        </div>
    </>
}