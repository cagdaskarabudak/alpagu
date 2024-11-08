import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '@/Layouts/ProfileLayout';

export default function Comments() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Head title={t('My Comments')} />
            <ProfileLayout>
                {'this is my Comments'}
            </ProfileLayout>
        </MainLayout>
    );
}
