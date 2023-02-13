import * as React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/button'

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

        return <div>
            <div className="template-profile-page__description-element">
                <div className="template-profile-page__description-element__header">
                    <h5>EFREI PARIS</h5>
                    <span>Villejuif - 94800</span>
                </div>
                <div className="template-profile-page__description-element__program">
                    <h5>Programme</h5>
                    <div className="d-flex justify-content-between flex-wrap">
                        <span>Durée: X ans</span>
                        <span>Domaine: XXX</span>
                    </div>
                </div>
                <div className="template-profile-page__description-element__fees">
                    <h5>Frais</h5>
                    <ul>
                        <li>Frais de candidature: xxxxx €</li>
                        <li>Frais de candidature: xxxxx €</li>
                        <li>Frais de candidature: xxxxx €</li>
                    </ul>
                </div>
                <div className="template-profile-page__description-element__other">
                    <h5>Informations complémentaires</h5>
                    <p>blavlablabla</p>
                </div>
                <Button name="Voir le site" template="primary" />
                <Button name="Fermer" template="danger" onClick={() => partial.setShowPartial(false)} />
            </div>
        </div>
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