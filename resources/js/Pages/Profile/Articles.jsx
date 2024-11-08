import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { useTranslation } from 'react-i18next';
import ProfileLayout from '@/Layouts/ProfileLayout';

export default function Articles() {
    const { t } = useTranslation();
    return (
        <MainLayout>
            <Head title={t('My Articles')} />
            <ProfileLayout>
                {'this is my Articles'}
            </ProfileLayout>
        </MainLayout>
    );
}
