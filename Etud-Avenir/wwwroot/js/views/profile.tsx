import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Modal from '../components/modal';
import { ResetEmailModal } from '../modals/resetEmail';
import { ProfileMainPage } from './profile/ProfileMainPage';
import { ReportPage } from './profile/report';
import SavedSchoolPage from './profile/schools';

type ProfileProps = {}
type ProfileState = {}

export function Profile(props: ProfileProps, state: ProfileState) {
    return <Router>
        <Routes>
            <Route path="/profil" element={< ProfileMainPage />} />
            <Route path="/profil/email" element={
                <>
                    <ProfileMainPage />
                    <Modal minWidth={350}>
                        <ResetEmailModal />
                    </Modal>
                </>
            } />
            <Route path="/profil/bulletins" element={<ReportPage />} />
            <Route path="/profil/ecoles" element={<SavedSchoolPage />} />
        </Routes>
    </Router>
}