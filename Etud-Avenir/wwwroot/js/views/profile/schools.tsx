import * as React from 'react'
import SavedSchoolArticle from '../../components/profile/saved-school-article'
import Colors from '../../constants/colors'
import { getFavoritesCurriculums } from '../../services/curriculum-service'
import CurriculumSmallDTO from '../../types/curriculum-small-dto'
import { ProfilePageTemplate } from './page-template'

const description = "Clique sur l’une des écoles/formation enregistrées pour obtenir plus d’informations dessus"

type SavedSchoolsState = {
    showPartial: boolean
    curriculums: CurriculumSmallDTO[],
    curriculumClickedId: number
}

export default class SavedSchoolPage extends React.Component<{}, SavedSchoolsState> {

    state: SavedSchoolsState = {
        showPartial: false,
        curriculums: [],
        curriculumClickedId: 0
    }

    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        this.setState({
            curriculums: await getFavoritesCurriculums()
        })
    }

    showSavedCurriculums = () => {
        return this.state.curriculums.map(
            (c) => <SavedSchoolArticle
                key={c.curriculumId}
                curriculumId={c.curriculumId}
                name={c.schoolName}
                formation={c.name}
                savedDate={c.createdDate}
                setShowPartial={() => this.setState({ showPartial: !this.state.showPartial, curriculumClickedId: c.curriculumId })} />
        )
    }

    render = () => {
        return <ProfilePageTemplate title="Ecoles favorites" description={description} color={Colors.PINK} partial={{ elementId: this.state.curriculumClickedId, showPartial: this.state.showPartial, setShowPartial: () => this.setState({ showPartial: !this.state.showPartial }) }}>
            { this.showSavedCurriculums() }
        </ProfilePageTemplate>
    }
}