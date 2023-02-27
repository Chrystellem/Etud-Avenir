export default class SchoolInformationsResponseDTO {
    schoolId: number
    name: string
    city: string
    zipCode: number
    programDuration: number
    domain: string
    admissionType: string
    isPublic: boolean
    isStateApproved: boolean
    isInternshipAvailable: boolean
    otherInformations: string 
    fees: FeeDTO[] 

}

class FeeDTO {
    name: string
    amount: number
}