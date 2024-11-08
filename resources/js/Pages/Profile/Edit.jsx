import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '@/Layouts/ProfileLayout';

export default function Edit({ mustVerifyEmail, status }) {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Head title={t('Profile')} />
            <ProfileLayout>
                <div className='card mb-3'>
                    <div className="card-body">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                        />
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="card-body">
                        <UpdatePasswordForm />
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="card-body">
                        <DeleteUserForm/>
                    </div>
                </div>
            </ProfileLayout>
        </MainLayout>
    );
}
