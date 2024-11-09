import { Link } from "@inertiajs/react";
import ApplicationLogo from "./../ApplicationLogo";
import { useTranslation } from "react-i18next";
import { Offcanvas } from 'bootstrap';

export default function Navbar({children}) {
    const {t} = useTranslation();
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" href={route('home')}>
                    <ApplicationLogo></ApplicationLogo>
                </Link>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <div className="navbar-brand">
                            <ApplicationLogo></ApplicationLogo>
                            <span className="brand-text">Alpagu Development <div className="brand-subtext">Çağdaş Karabudak</div></span>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="offcanvas-body justify-content-center">
                        <ul className="navbar-nav">
                            <li className={"nav-item"+(route().current() == 'home' ? ' active' : '')}>
                                <Link href={route('home')} className={'nav-link'+(route().current() == 'home' ? ' active' : '')} as="a">
                                    <i className="fa-solid fa-home"></i>{t('Home')}
                                </Link>
                            </li>
                            <li className={"nav-item"+(route().current() == 'portfolio' || route().current() == 'project.view' ? ' active' : '')}>
                                <Link href={route('portfolio')} className={'nav-link'+(route().current() == 'portfolio' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-code"></i>{t('Portfolio')}
                                </Link>
                            </li>
                            <li className={"nav-item"+(route().current() == 'blog' || route().current() == 'article' ? ' active' : '')}>
                                <Link href={route('blog')} className={'nav-link'+(route().current() == 'blog' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-books"></i>{t('Blog')}
                                </Link>
                            </li>
                            <li className={"nav-item"+(route().current() == '#' ? ' active' : '')}>
                                <Link href={'#'} className={'nav-link'+(route().current() == '#' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-circle-info"></i>{t('About Us')}
                                </Link>
                            </li>
                            <li className={"nav-item"+(route().current() == '#' ? ' active' : '')}>
                                <Link href={'#'} className={'nav-link'+(route().current() == '#' ? ' active' : '')} as="a">
                                <i className="fa-solid fa-message"></i>{t('Contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}