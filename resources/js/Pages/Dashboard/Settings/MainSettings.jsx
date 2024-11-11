import DashboardLayout from '@/Layouts/DashboardLayout';
import DashboardSettingsLayout from '@/Layouts/DashboardSettingsLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import {useEffect, useState, useRef} from 'react';

export default function MainSettings(){
    const settings = usePage().props.settings;
    const { t } = useTranslation();
    const [image, setImage] = useState(settings.logo_src != null ? '/storage/images/'+settings.logo_src : '');
    const logo_srcInput = useRef();
    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        site_name: settings.site_name,
        logo_src: null,
        is_destroy_photo: '0',
        site_description: settings.site_description,
        site_keywords: settings.site_keywords
    });

    useEffect(() => {
        if(data.logo_src != null){
            const reader = new FileReader;
            const file = logo_srcInput.current.files[0];
            setData('is_destroy_photo', '0');
            if(file){

                reader.onload = function(e) {
                    setImage(e.target.result);
                };
    
                reader.readAsDataURL(file);
            }
        }
    }, [data.logo_src]);

    const destroyImage = () => {
        setData('logo_src', null);
        setImage(settings.logo_src != null ? '/storage/images/'+settings.logo_src : '');
        logo_srcInput.current.value = '';
    };

    const destroyDefaultPhoto = (e) => {
        setImage('');
        setData('is_destroy_photo', '1');
        e.currentTarget.remove();
    };

    const submit = (e) => {
        e.preventDefault();
        console.log('sended data: ', data);
        post(route('site_settings.update'));
    };
    return (
        <DashboardLayout>
            <Head title = {"Site Settings - "+settings.site_name} />
            <DashboardSettingsLayout>
                <form onSubmit={submit}>
                    <h4 className="title d-flex justify-content-between w-100">Site Settings 
                        <div className="div d-block">
                            <img src={image} width={'150px'} style={{border: '0.5px solid black', borderRadius: '5px'}} />
                            <a href='#' className='link-danger' style={{fontSize: '10pt', display: data.logo_src != null ? 'block' : 'none'}} onClick={destroyImage}>Sil</a>
                            <a href='#' className='link-danger' style={{fontSize: '10pt', display: data.logo_src == null && settings.logo_src != null ? 'block' : 'none'}} onClick={destroyDefaultPhoto}>Kaldır</a>
                        </div>
                    </h4>
                    <div className="mb-3">
                    </div>
                        <div className="mb-3">
                            <label htmlFor="site_name" className="form-label">Site Name</label>
                            <input type="text" className='form-control' id='site_name' value={data.site_name} onChange={(e) => setData('site_name', e.target.value)} />
                            {errors.site_name}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="logo_src" className="form-label">Site Logo</label>
                            <input type="file" id="logo_src" className={'form-control'} onChange={(e) => setData('logo_src', e.target.files.length > 0 ? e.target.files[0] : null)} ref={logo_srcInput}/>
                            {errors.logo_src}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="site_description" className="form-label">Site Description</label>
                            <input type="text" className='form-control' id='site_description' value={data.site_description} onChange={(e) => setData('site_description', e.target.value)} />
                            {errors.site_description}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="site_keywords" className="form-label">Site Keywords</label>
                            <input type="text" id='site_keywords' className='form-control' value={data.site_keywords} onChange={(e) => setData('site_keywords', e.target.value)} />
                            {errors.site_keywords}
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-success" disabled={processing}>{t('Save')}</button>
                            <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p>
                                {t('Saved')}
                            </p>
                        </Transition>
                        </div>
                </form>
            </DashboardSettingsLayout>
        </DashboardLayout>
    );
}