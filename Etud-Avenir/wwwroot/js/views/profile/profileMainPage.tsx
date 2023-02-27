import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { ProfileSaveButton } from '../../components/ProfileSaveButton';
import UserDTO from '../../types/user-dto';

type ProfileMainPageProps = {}
type ProfileMainPageState = {}

export function ProfileMainPage(props: ProfileMainPageProps, state: ProfileMainPageState) {
    const navigate = useNavigate()
    let [userInfo, setUserInfo] = React.useState({ email: "", id: "" } as UserDTO);

    React.useEffect(() => {
        async function fetchUserInfo() {
            const data = await getUserInformations()
            setUserInfo(data);
            console.log(userInfo)
        }

        fetchUserInfo();
    }, []);

    const handleEmailClick = () => {
        navigate('/profil/email')
    }


    return <div className="profile-container">
        <div className="mx-5 px-5">
            <h1 className="text-center mt-4">Profil</h1>
            <span onClick={handleEmailClick} className="d-block text-center cursor-pointer">Email : <em>{userInfo.email}</em> <i className="ml-2 fa fa-edit"></i></span>

            <section className="mt-5">
                <h2 className="my-saves-title">Mes sauvegardes</h2>
                <div className="container-profile-buttons">
                    <ProfileSaveButton color="#03A696" name="Notes" classIcon="fa-solid fa-file" onClickRedirectTo="/profil/bulletins" />
                    {/*<ProfileSaveButton color="#253659" name="Recherches/Résultats" classIcon="fa-solid fa-cloud" onClickRedirectTo="/profil/sauvegardes" />*/}
                    <ProfileSaveButton color="#F2668B" name="Ecoles favorites" classIcon="fa-sharp fa-solid fa-graduation-cap" onClickRedirectTo="/profil/ecoles" />
                </div>
            </section>

            <section className="py-5">
                <h2 className="other-actions-title">Autres actions</h2>
                <ul className="list-style-none">
                    <li>{'>>'} Modifier le mot de passe</li>
                    <li>{'>>'} Supprimer le compte</li>
                </ul>
            </section>
        </div>
    </div>
}


const getUserInformations = async (): Promise<UserDTO> => {
    const result = await fetch("/Identity/Me");
    if (!result.ok) return null;

    return await result.json(); 
}