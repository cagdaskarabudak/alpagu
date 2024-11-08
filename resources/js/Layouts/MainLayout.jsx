import { Link } from '@inertiajs/react';
import { Offcanvas } from 'bootstrap';
import LiveChat from '@/Components/LiveChat';
import Customizer from '@/Components/Customizer';
import Navbar from '@/Components/Navbar';
import SecondNavbar from '@/Components/SecondNavbar';
import Content from '@/Components/Content';
import Footer from '@/Components/Footer';
import { useTranslation } from 'react-i18next';

export default function MainLayout({ children }) {
    const { t } = useTranslation();
    return (
        <div className="main-layout">
            <Navbar>
                <li className={"nav-item"+(route().current() == 'home' ? ' active' : '')}>
                    <Link href={route('home')} className={'nav-link'+(route().current() == 'home' ? ' active' : '')} as="a">
                        <i className="fa-solid fa-home"></i>{t('Home')}
                    </Link>
                </li>
                <li className={"nav-item"+(route().current() == 'portfolio' ? ' active' : '')}>
                    <Link href={route('portfolio')} className={'nav-link'+(route().current() == 'portfolio' ? ' active' : '')} as="a">
                    <i className="fa-solid fa-code"></i>{t('Portfolio')}
                    </Link>
                </li>
                <li className={"nav-item"+(route().current() == '#' ? ' active' : '')}>
                    <Link href={'#'} className={'nav-link'+(route().current() == '#' ? ' active' : '')} as="a">
                    <i className="fa-solid fa-books"></i>{t('Blog')}
                    </Link>
                </li>
                <li className={"nav-item"+(route().current() == '#' ? ' active' : '')}>
                    <Link href={'#'} className={'nav-link'+(route().current() == '#' ? ' active' : '')} as="a">
                    <i className="fa-solid fa-circle-info"></i>{t('About Me')}
                    </Link>
                </li>
                <li className={"nav-item"+(route().current() == '#' ? ' active' : '')}>
                    <Link href={'#'} className={'nav-link'+(route().current() == '#' ? ' active' : '')} as="a">
                    <i className="fa-solid fa-message"></i>{t('Contact')}
                    </Link>
                </li>
            </Navbar>
            <SecondNavbar></SecondNavbar>
            <Content>
                {children}
            </Content>
            <Footer>
                Copyright &copy; {new Date().getFullYear()} {t('All Rights Reserved')} | {t('Developed by', {name: 'Çağdaş Karabudak (Alpagu Development)'})} 
            </Footer>
            <Customizer></Customizer>
            <LiveChat></LiveChat>
        </div>
    );
}










