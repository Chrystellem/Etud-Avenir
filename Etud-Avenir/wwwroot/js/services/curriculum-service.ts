import CurriculumSmallDTO from "../types/curriculum-small-dto"

export const deleteCurriculum = async (curriculumId: number) => {
    const result = await fetch("/api/curriculums/favorites/" + curriculumId, {
        method: "DELETE"
    })

    if (!result.ok || result.redirected) return false

    return true
}

export const getFavoritesCurriculums = async (): Promise<CurriculumSmallDTO[]> => {
    const result = await fetch("/api/curriculums/favorites")
    if (!result.ok || result.redirected) return []

    const curriculums = (await result.json()) as CurriculumSmallDTO[]
    curriculums.forEach(c => c.createdDate = new Date(c.createdDate))

    return curriculums
}