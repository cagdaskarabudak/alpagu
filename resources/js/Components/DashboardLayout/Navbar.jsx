import { Link } from "@inertiajs/react";
import ApplicationLogo from "../ApplicationLogo";
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
                                    <i className="fa-solid fa-eye"></i>{t('View Site')}
                                </Link>
                            </li>
                            <li className={"nav-item dropdown"+(route().current() == 'blog' || route().current() == 'article' ? ' active' : '')}>
                                <a href={'#'} className={'nav-link dropdown-toggle'+(route().current() == 'blog' ? ' active' : '')} data-bs-toggle="dropdown">
                                    <i className="fa-solid fa-code"></i>{t('Portfolio')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link href={route('dashboard.projects.view')} className="dropdown-item">List Projects</Link></li>
                                    <li><Link className="dropdown-item" href={route('dashboard.projects.create.view')}>Create Project</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item">Pending Comments</Link></li>
                                </ul>
                            </li>
                            <li className={"nav-item dropdown"+(route().current() == 'portfolio' || route().current() == 'project.view' ? ' active' : '')}>
                                <a href={'#'} className={'nav-link dropdown-toggle'+(route().current() == 'portfolio' ? ' active' : '')} data-bs-toggle="dropdown">
                                <i className="fa-solid fa-books"></i>{t('Blog')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link href={route('dashboard.articles.view')} className="dropdown-item">List Articles</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href={route('dashboard.articles.create.view')}>Create Article</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item">List Categories</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">Create Category</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item">Pending Articles</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">Pending Comments</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={"nav-item dropdown"+(route().current() == 'portfolio' || route().current() == 'project.view' ? ' active' : '')}>
                                <a href={'#'} className={'nav-link dropdown-toggle'+(route().current() == 'portfolio' ? ' active' : '')} data-bs-toggle="dropdown">
                                <i className="fa-solid fa-books"></i>{t('Users')}
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link href={route('dashboard.articles.view')} className="dropdown-item">List Users</Link>
                                    </li>
                                    <li>
                                        <Link href={route('dashboard.articles.view')} className="dropdown-item">Create User</Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li>
                                        <Link className="dropdown-item">List Roles</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">Create Role</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={"nav-item"+(route().current() == 'dashboard.settings.view' ? ' active' : '')}>
                                <Link href={route('dashboard.settings.view')} className={'nav-link'+(route().current() == 'dashboard.settings.view' ? ' active' : '')} as="a">
                                    <i className="fa-solid fa-cog"></i>{t('Settings')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}