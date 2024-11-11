import DashboardLayout from '@/Layouts/DashboardLayout';
import DashboardSettingsLayout from '@/Layouts/DashboardSettingsLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import {useEffect, useState, useRef} from 'react';

export default function MainSettings(){
    const settings = usePage().props.settings;
    const { t } = useTranslation();
    const [photo, setPhoto] = useState(settings.photo != null ? '/storage/images/'+settings.photo : '');
    const photoInput = useRef();
    const {
        data,
        setData,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        photo: null,
        is_destroy_photo: '0',
        name: settings.name,
        phone: settings.phone,
        email: settings.email,
        content: settings.content,

        url: settings.url,

        facebook: settings.facebook,
        linkedin: settings.linkedin,
        instagram: settings.instagram,
        x_twitter: settings.x_twitter,
        discord: settings.discord,
        youtube: settings.youtube,

    });

    const destroyPhoto = () => {
        setPhoto(settings.photo != null ? '/storage/images/'+settings.photo : '');
        setData('photo', null);
        photoInput.current.value = '';
    }

    const destroyDefaultPhoto = (e) => {
        setPhoto('');
        setData('is_destroy_photo', '1');
        e.currentTarget.remove();
    };

    useEffect(() => {
        if(data.photo != null){
            const reader = new FileReader;
            const file = photoInput.current.files[0];
            setData('is_destroy_photo', '0');

            if(file){
                reader.onload = function(e){
                    setPhoto(e.target.result);
                };

                reader.readAsDataURL(file);
            }
        }
    }, [data.photo]);

    const submit = (e) => {
        e.preventDefault();
        console.log('sended data: ', data);
        post(route('social.update'));
    };
    return (
        <DashboardLayout>
            <Head title = {"Site Settings - "+settings.site_name} />
            <DashboardSettingsLayout>
                <form onSubmit={submit}>
                    <h4 className="title d-flex justify-content-between w-100">Social Settings 
                        <div className="div d-block">
                            <img src={photo} width={'150px'} style={{border: '0.5px solid black', borderRadius: '5px'}} />
                            <a href='#' className='link-danger' style={{fontSize: '10pt', display: data.photo != null ? 'block' : 'none'}} onClick={destroyPhoto}>Vazgeç</a>
                            <a href='#' className='link-danger' style={{fontSize: '10pt', display: data.photo == null && settings.photo != null ? 'block' : 'none'}} onClick={destroyDefaultPhoto}>Kaldır</a>
                        </div>
                    </h4>
                        <div className="mb-3">
                            <label htmlFor="photo" className="form-label">Photo</label>
                            <input type="file" className='form-control' id='photo' onChange={(e) => setData('photo', e.target.files.length > 0 ? e.target.files[0] : null)} ref={photoInput} />
                            {errors.name}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className='form-control' id='name' value={data.name} onChange={(e) => setData('name', e.target.value)} />
                            {errors.name}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className='form-control' id='email' value={data.email} onChange={(e) => setData('email', e.target.value)} />
                            {errors.email}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <input type="text" className='form-control' id='phone' value={data.phone} onChange={(e) => setData('phone', e.target.value)} />
                            {errors.phone}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea className='form-control' id='content' value={data.content == null ? '' : data.content} onChange={(e) => setData('content', e.target.value)} />
                            {errors.phone}
                        </div>
                        <div className="mb-3">
                            <h5 className="title">Social Urls</h5>
                            <div className="mb-3">
                                <label htmlFor="url" className="form-label">Website URL</label>
                                <input type="text" className='form-control' id='url' value={data.url} onChange={(e) => setData('url', e.target.value)} />
                                {errors.url}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="facebook" className="form-label">Facebook URL</label>
                                <input type="text" className='form-control' id='facebook' value={data.facebook} onChange={(e) => setData('facebook', e.target.value)} />
                                {errors.facebook}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="instagram" className="form-label">Instagram URL</label>
                                <input type="text" className='form-control' id='instagram' value={data.instagram} onChange={(e) => setData('instagram', e.target.value)} />
                                {errors.instagram}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="linkedin" className="form-label">LinkedIn URL</label>
                                <input type="text" className='form-control' id='linkedin' value={data.linkedin} onChange={(e) => setData('linkedin', e.target.value)} />
                                {errors.linkedin}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="x_twitter" className="form-label">X (Twitter) URL</label>
                                <input type="text" className='form-control' id='x_twitter' value={data.x_twitter} onChange={(e) => setData('x_twitter', e.target.value)} />
                                {errors.x_twitter}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="discord" className="form-label">Discord URL</label>
                                <input type="text" className='form-control' id='discord' value={data.discord} onChange={(e) => setData('discord', e.target.value)} />
                                {errors.discord}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="youtube" className="form-label">Youtube URL</label>
                                <input type="text" className='form-control' id='youtube' value={data.youtube} onChange={(e) => setData('youtube', e.target.value)} />
                                {errors.youtube}
                            </div>
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