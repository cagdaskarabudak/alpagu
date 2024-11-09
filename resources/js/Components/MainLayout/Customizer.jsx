import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Customizer(){
    const customizer_status = usePage().props.auth.customizer;
    if(customizer_status){
    const [customizer, setCustomizer] = useState(false);
    const [themeMode, setThemeMode] = useState(null);
    const [themeModeDoms, setThemeModeDoms] = useState([]);

    const [defaultLang, setDefaultLang] = useState(null);
    const [lang, setLang] = useState(defaultLang);
    const [localizationDoms, setLocalizationDoms] = useState([]);
    const [localizations, setLocalizations] = useState([]);

    useEffect(() => {
        if(themeMode != null){
            if(document.querySelector('html').getAttribute('data-bs-theme') != themeMode){
                 document.querySelector('html').setAttribute('data-bs-theme', themeMode);
                 console.log('değiştirildi!');
            }
        }
    }, [themeMode]);

    useEffect(() => {
        const fetchLocalization = async () => {
            const response = await axios.get('/get-all-localizations');
            setLocalizations(response.data);
        };

        const fetchDefaultThemeMode = async () => {
            const response = await axios.get('/get-default-theme-mode');
            setThemeMode(response.data);
            setThemeModeDoms(
                <>
                    <input 
                    type="radio" 
                    className="btn-check" 
                    name="theme_selection" 
                    id="dark_mode" 
                    value={'dark'} 
                    autoComplete={"off"} 
                    defaultChecked={response.data == 'dark'} 
                    onChange={toggleTheme} 
                    />
                    <label 
                    className="btn btn-outline-primary btn-sm me-2" 
                    htmlFor="dark_mode"
                    >
                        <i className="fa-solid fa-moon"></i> Dark Mode</label>
    
                        <input 
                    type="radio" 
                    className="btn-check" 
                    name="theme_selection" 
                    id="light_mode" 
                    value={'light'} 
                    autoComplete={"off"} 
                    defaultChecked={response.data == 'light'} 
                    onChange={toggleTheme} 
                    />
                    <label 
                    className="btn btn-outline-primary btn-sm me-2" 
                    htmlFor="light_mode"
                    >
                        <i className="fa-solid fa-sun"></i> Light Mode</label>
                </>
            );
        }

        fetchDefaultThemeMode();
        fetchLocalization();
    }, []);

    useEffect(() => {
        const fetchDefaultLocalization = async () => {
            let defaultLocalization = await axios.get('/get-default-localization');
        
            setDefaultLang(defaultLocalization ? defaultLocalization.data.code : 'en');
        }
        fetchDefaultLocalization();
        const localizationElements = localizations.map((localization, index) => (
            <div key={index}>
                <input 
                    type="radio" 
                    className="btn-check" 
                    name="lang_selection" 
                    id={localization.local_name+'LangButton'} 
                    value={localization.code} 
                    onChange={toggleLang} 
                    autoComplete={"off"} 
                    defaultChecked={defaultLang == localization.code}
                />
                <label className="btn btn-outline-primary btn-sm" htmlFor={localization.local_name+'LangButton'}>
                    <span className={"fi fi-" + localization.flag}></span> {localization.name}
                </label>
            </div>
        ));
        setLocalizationDoms(localizationElements);
    }, [localizations]);

    useEffect(() => {
        if(defaultLang != null){
            setLang(defaultLang);    
        }
        
    }, [defaultLang]);

    const toggleCustomizer = () => {
        setCustomizer(!customizer);
    };

    const { i18n } = useTranslation();

    useEffect(() => {
        if(i18n.language != lang){
            i18n.changeLanguage(lang);
            console.log('lang changed: ', lang);
        }
    }, [lang])

    const toggleLang = (event) => {
        setLang(event.target.value);

        const setUserLocalization = async () => {
            let setNewUserLocalization = await axios.post('/set-user-localization', {
                localization_code: event.target.value,
            });
            if(setNewUserLocalization.data.status == true){
                setDefaultLang(event.target.value);   
            }
        }

        setUserLocalization();
    }

    const toggleTheme = async (event) => {
        setThemeMode(event.target.value);

        const setDefaultThemeMode = await axios.post('/set-default-theme-mode', {
            theme_mode: event.target.value
        });

        if(setDefaultThemeMode.data.status == false){
            console.log(setDefaultThemeMode.data.message);
        }
    }
        return (
            <div className={'customizer'+(customizer ? ' show' : '')}>
                <button className='customizer-toggler' onClick={toggleCustomizer}><i className="customizer-icon fa-duotone fa-solid fa-gear"></i></button>
                <div className={"customizer-body"}>
                    <div className="theme-selection">
                        <h6><i className="fa-solid fa-paint-roller"></i> Theme Selection</h6>
                        <div className="mb-3 d-flex justify-content-center">
                            {themeModeDoms}
                        </div>
                    </div>
                    <hr />
                    <div className="lang-selection">
                        <h6><i className="fa-solid fa-language"></i> Language Selection</h6>
                        <div className="mb-3 d-flex justify-content-center">
                            <div className="mb-3 d-flex justify-content-center gap-1 flex-wrap">
                                {localizationDoms}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return null;
    }

}