import * as React from "react"
import SchoolInformationsResponseDTO from "../../types/school-informations-response-dto"
import { Button } from "../button"
import Loader from "../loader"

type SchoolInformationProperties = {
    onClickHandler: React.MouseEventHandler,
    schoolId: number
}

export default class SchoolInformation extends React.Component<SchoolInformationProperties, SchoolInformationsResponseDTO> {

    state: SchoolInformationsResponseDTO = new SchoolInformationsResponseDTO();

    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const result = await getSchoolInformations(this.props.schoolId)
    }

    renderDescription = () => {
        return <><div className="template-profile-page__description-element__header">
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
            <Button name="Fermer" template="danger" onClick={this.props.onClickHandler} /></>
    }

    render = () => {
        return <div>
            <div className="template-profile-page__description-element">
                {
                    !this.state.schoolId ?
                        <Loader /> :
                        this.renderDescription()
                }
            </div>
        </div>
    }
}


const getSchoolInformations = async (schoolId: number): Promise<SchoolInformationsResponseDTO> => {
    const result = await fetch(`/api/schools/${schoolId}`)

    if (!result.ok) return

    return result.json()
}