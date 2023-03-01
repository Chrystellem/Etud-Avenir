import * as React from "react"
import SCHOOLS from "../../constants/schools"
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
        this.setState(result)
        console.log(result)
    }

    renderDescription = () => {
        return <><div className="template-profile-page__description-element__header d-flex align-items-center">
            <img src={SCHOOLS[this.state.name].img} />
            <div className="ml-3">
                <h5>{this.state.name}</h5>
                <span>{this.state.city} - {this.state.zipCode}</span>
            </div>
        </div>
            <div className="template-profile-page__description-element__program">
                <h5>Programme</h5>
                <div className="d-flex justify-content-between flex-wrap gap-3">
                    <span>Durée: {this.state.programDuration} ans</span>
                    <span>Domaine: {this.state.domain}</span>
                    <span>Type d'admission: {this.state.admissionType}</span>
                    <span>Apprentissage: {this.state.isInternshipAvailable ? "Oui" : "Non"}</span>
                    <span>Public: {this.state.isPublic ? "Oui" : "Non"}</span>
                    <span>Reconnu par l'état: {this.state.isStateApproved ? "Oui" : "Non"}</span>
                </div>
            </div>
            <div className="template-profile-page__description-element__fees">
                <h5>Frais</h5>
                <ul className="list-style-none pl-0">
                    {this.state.fees.map((fee) => <li key={fee.name}>{fee.name}:  {fee.amount} €</li>)}
                </ul>
            </div>
            {
                this.state.otherInformations ?
                    <div className="template-profile-page__description-element__other">
                        <h5>Informations complémentaires</h5>
                        <p>{this.state.otherInformations}</p>
                    </div>
                    : ""
            }

            <a className='btn btn-primary' href={SCHOOLS[this.state.name].website} target="_blank">Voir le site</a>
            <Button name="Fermer" template="danger" onClick={this.props.onClickHandler} /></>
    }

    render = () => {
        return <div>
            <div className="template-profile-page__description-element">
                {
                    this.state.schoolId == null || this.state.schoolId == undefined ?
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