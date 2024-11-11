import { useTranslation } from "react-i18next"
import { Link } from "@inertiajs/react";

export default function DashboardSettingsLayout({children}){
    const {t} = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="settings-nav mb-3">
                        <Link as="a" className={"settings-nav-link"+(route().current() == 'dashboard.settings.view' ? ' active' : '')} href={route('dashboard.settings.view')}>{t('Site Settings')}</Link>
                        <Link as="a" className={"settings-nav-link"+(route().current() == 'dashboard.social.view' ? ' active' : '')} href={route('dashboard.social.view')}>{t('Social Settings')}</Link>
                        <Link as="a" className={"settings-nav-link"+(route().current() == 'dashboard.preferences.view' ? ' active' : '')} href={route('dashboard.preferences.view')}>{t('Preferences')}</Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="card">
                        <div className="card-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}