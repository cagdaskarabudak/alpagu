import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '@/Layouts/ProfileLayout';

export default function Inbox() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Head title={t('Inbox')} />
            <ProfileLayout>
                {'this is my inbox'}
            </ProfileLayout>
        </MainLayout>
    );
}
