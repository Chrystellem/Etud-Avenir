export default interface SubjectDTO {
    id: number,
    name: string
}

export class SubjectGradeDTO {
    subject: string
    grade: number

    constructor(subject: string, grade: number) {
        this.subject = subject;
        this.grade = grade;
    }
}