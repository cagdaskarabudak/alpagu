import LiveChat from '@/Components/MainLayout/LiveChat';
import Customizer from '@/Components/MainLayout/Customizer';
import Navbar from '@/Components/MainLayout/Navbar';
import SecondNavbar from '@/Components/MainLayout/SecondNavbar';
import Content from '@/Components/MainLayout/Content';
import Footer from '@/Components/MainLayout/Footer';
import { useTranslation } from 'react-i18next';

export default function MainLayout({ children }) {
    const { t } = useTranslation();
    return (
        <div className="main-layout">
            <Navbar />
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










