import { useTranslation } from "react-i18next"
import { Link } from "@inertiajs/react";

export default function ProfileLayout({children}){
    const {t} = useTranslation();
    return (
        <>
        <div className="row">
            <div className="col-lg-3">
                <div className="profile-nav mb-3">
                    <Link as="a" className={"profile-nav-link"+(route().current() == 'profile.edit' ? ' active' : '')} href={route('profile.edit')}>{t('Edit Profile')}</Link>
                    <Link as="a" className={"profile-nav-link"+(route().current() == 'profile.inbox' ? ' active' : '')} href={route('profile.inbox')}>{t('Inbox')}</Link>
                    <Link as="a" className={"profile-nav-link"+(route().current() == 'profile.articles' ? ' active' : '')} href={route('profile.articles')}>{t('My Articles')}</Link>
                    <Link as="a" className={"profile-nav-link"+(route().current() == 'profile.comments' ? ' active' : '')} href={route('profile.comments')}>{t('My Comments')}</Link>
                    <Link as="button" className="profile-nav-link text-danger" method="post" href={route('logout')}>{t('Logout')}</Link>
                </div>
            </div>
            <div className="col-lg-9">
                {children}
            </div>
        </div>
        </>
        
    )
}