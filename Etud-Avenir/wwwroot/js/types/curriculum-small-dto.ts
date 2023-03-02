/**
 * Représente le DTO renvoyé par le serveur 
 */
export default class CurriculumSmallDTO {
    curriculumId: number
    createdDate: Date 
    name: string
    schoolName: string

    constructor(props?: CurriculumSmallDTO) {
        if (!props) return

        this.curriculumId = props.curriculumId
        this.createdDate = props.createdDate
        this.schoolName = props.schoolName
        this.name = props.name
    }
}