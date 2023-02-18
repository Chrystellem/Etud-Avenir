import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'
import SchoolInformation from '../../components/school/school-informations'

type PartialModalProperties = {
    showPartial: boolean,
    setShowPartial: React.Dispatch<React.SetStateAction<boolean>>
}

type ProfilePageTemplateProps = {
    title: string,
    description: string,
    children: React.ReactNode,
    color: string,

    partial?: PartialModalProperties
}

export function ProfilePageTemplate({ title, description, children, color, partial }: ProfilePageTemplateProps) {
    const style = { color }

    const getPartial = () => {
        if (!partial || !partial.showPartial) return

        return <SchoolInformation onClickHandler={() => partial.setShowPartial(false)} />
    }

    return <div className="template-profile-page">
        <div className="mx-5 px-5">
            <div className="template-profile-page__header d-flex justify-content-center align-items-baseline flex-wrap" style={style}>
                <h1 className="text-center mt-4">Profil</h1>
                <Link style={style} className="ml-3" to="/profil">{'>'} {title}</Link>
            </div>
        </div>
        <p className="text-center">{description}</p>

        <div className="template-profile-page__main">
            <div className="template-profile-page__container">
                { children }
            </div>
            { getPartial() }
        </div>
    </div>
}