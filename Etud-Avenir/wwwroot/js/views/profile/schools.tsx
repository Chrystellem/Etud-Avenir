import * as React from 'react'
import SavedSchoolArticle from '../../components/profile/saved-school-article'
import Colors from '../../constants/colors'
import { ProfilePageTemplate } from './page-template'

const description = "Clique sur l’une des écoles/formation enregistrées pour obtenir plus d’informations dessus"

export default function SavedSchoolPage() {
    const [showPartial, setShowPartial] = React.useState(false);

    return <ProfilePageTemplate title="Ecoles favorites" description={description} color={Colors.PINK} partial={{ showPartial, setShowPartial }}>
        <SavedSchoolArticle name="Efrei Paris" formation="Ingénieur" savedDate={new Date()} logoPath="https://www.cfa-afia.com/app/uploads/2022/01/logo-efrei-print-efrei-web.png" setShowPartial={setShowPartial} />
        <SavedSchoolArticle name="Efrei Paris" formation="Ingénieur" savedDate={new Date()} logoPath="https://www.cfa-afia.com/app/uploads/2022/01/logo-efrei-print-efrei-web.png" setShowPartial={setShowPartial} />
    </ProfilePageTemplate>
}