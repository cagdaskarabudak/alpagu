import { usePage, Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";


export default function SecondNavbar({children}) {
    const { t } = useTranslation();
    const auth = usePage().props.auth;
    const settings = usePage().props.settings;
    return (
        <div className="second-navbar">
            {
                settings.search == 1 &&
                <div className="navbar-search">
                    <label htmlFor="mainSearch"><i className={"bx bx-search-alt-2"}></i></label>
                    <input type="search" id='mainSearch' className='navbar-search-input' placeholder={t('Search')+'...'} aria-label="Search" />
                </div>

            }
            <ul className="navbar-nav">
            {
                    auth.user == null ? (
                        <>
                        {
                            settings.registerable == 1 &&
                            <li className={"nav-item" + (route().current() === 'register' ? ' active' : '')}>
                                <Link href={route('register')} className={'nav-link' + (route().current() === 'register' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-user-plus"></i> {t('Sign Up')}
                                </Link>
                            </li>
                        }
                            <li className={"nav-item" + (route().current() === 'login' ? ' active' : '')}>
                                <Link href={route('login')} className={'nav-link' + (route().current() === 'login' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-right-to-bracket"></i> {t('Sign In')}
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                        {
                            auth.user.role.id == 1 && (

                                <li className={"nav-item" + (route().current() === 'dashboard' ? ' active' : '')}>
                                <Link href={route('dashboard')} className={'nav-link' + (route().current() === 'dashboard' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-chart-tree-map"></i> {t('Dashboard')}
                                </Link>
                                </li>
                            )
                        }
                        {
                            auth.user.role.id == 3 && (

                                <li className={"nav-item" + (route().current() === '' ? ' active' : '')}>
                                <Link href={'#'} className={'nav-link' + (route().current() === '' ? ' active' : '')} as="a">
                                    <i className="fa-solid fa-plus"></i> {t('Create Article')}
                                </Link>
                                </li>
                            )
                        }
                            <li className="nav-item dropdown">
                                <button type='button' className="nav-link" data-bs-toggle="dropdown"><i className="fa-solid fa-user"></i> {t('Account')}</button>
                                <div className="dropdown-menu">
                                    <h6 className="text-center text-primary">
                                        <div className="user-name">{auth.user.name}</div>
                                        <div className={"user-role"} style={{color: (auth.user.role.color !== null ? auth.user.role.color : "white"), fontSize: '10pt'}}>{t(auth.user.role.name)}</div>
                                    </h6>
                                    <div className="dropdown-item">
                                        <Link href={route('profile.edit')} className={'nav-link' + (route().current() === 'profile.edit' ? ' active' : '')} as="button">
                                            {t('My Profile')}
                                        </Link>
                                    </div>
                                    <div className="dropdown-item">
                                        <Link href={route('logout')} method='post' className={'nav-link link-danger'} as="button">
                                            {t('Logout')}
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </>
                    )
            }
                {children}
            </ul>
        </div>
    );
}