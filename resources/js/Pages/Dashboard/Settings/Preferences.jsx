import DashboardLayout from '@/Layouts/DashboardLayout';
import DashboardSettingsLayout from '@/Layouts/DashboardSettingsLayout';
import { Head, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';

export default function Preferences(){
    const { t } = useTranslation();
    const settings = usePage().props.settings;

    const {
        data,
        setData,
        patch,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        blog: settings.blog,
        portfolio: settings.portfolio,
        contact: settings.contact,
        project_comments: settings.project_comments,
        view_project_comments: settings.view_project_comments,
        article_comments: settings.article_comments,
        view_article_comments: settings.view_article_comments,
        registerable: settings.registerable,
        search: settings.search,
        customizer: settings.customizer,
        chat: settings.chat,
    });

    const formSubmit = (e) => {
        e.preventDefault();
        console.log('sended data: ', data);
        patch(route('preferences.update'));
    };

    return (
        <DashboardLayout>
            <Head title = {"Preferences - "+settings.site_name} />
            <DashboardSettingsLayout>
                <form onSubmit={formSubmit}>
                    <h4 className="title">Preferences</h4>
                    <div className="mb-5">
                        <h5 className='title'>Pages</h5>
                        <div className="form-check mb-3">
                            <label htmlFor='blog' className="form-check-label">
                                Blog
                                <div className='text-secondary'>Blog Open/Close </div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="blog" checked={data.blog == 1} onChange={(e) => setData('blog', e.target.checked ? '1' : '0')} />
                            {errors.blog}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='portfolio' className="form-check-label">
                                Portfolio
                                <div className='text-secondary'>Portfolio Open/Close </div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="portfolio" checked={data.portfolio == 1} onChange={(e) => setData('portfolio', e.target.checked ? '1' : '0')} />
                            {errors.portfolio}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='contact' className="form-check-label">
                                Contact
                                <div className='text-secondary'>Contact Open/Close </div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="contact" checked={data.contact == 1} onChange={(e) => setData('contact', e.target.checked ? '1' : '0')} />
                            {errors.contact}
                        </div>
                    </div>
                    <div className="mb-5">
                    <h5 className="title">Comments</h5>
                        <div className="form-check mb-3">
                            <label htmlFor='project_comments' className="form-check-label">
                                Project Comments
                                <div className='text-secondary'>Projects can be commented on.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="project_comments" checked={data.project_comments == 1} onChange={(e) => setData('project_comments', e.target.checked ? '1' : '0')} />
                            {errors.project_comments}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='view_project_comments' className="form-check-label">
                                View Project Comments
                                <div className="text-secondary">Comments on projects can be viewed.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="view_project_comments" checked={data.view_project_comments == 1} onChange={(e) => setData('view_project_comments', e.target.checked ? '1' : '0')} />
                            {errors.view_project_comments}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='article_comments' className="form-check-label">
                                Article Comments
                                <div className="text-secondary">Articles can be commented on.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="article_comments" checked={data.article_comments == 1} onChange={(e) => setData('article_comments', e.target.checked ? '1' : '0')} />
                            {errors.article_comments}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='view_article_comments' className="form-check-label">
                                View Article Comments
                                <div className="text-secondary">Comments on articles can be viewed.</div>
                                </label>
                            <input type="checkbox" className='form-check-input' id="view_article_comments" checked={data.view_article_comments == 1} onChange={(e) => setData('view_article_comments', e.target.checked ? '1' : '0')} />
                            {errors.view_article_comments}
                        </div>
                    </div>
                    <div className="mb-5">
                        <h5 className="title">Other</h5>
                        <div className="form-check mb-3">
                            <label htmlFor='registerable' className="form-check-label">
                                Registration
                                <div className="text-secondary">Registration is possible.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="registerable"  checked={data.registerable == 1} onChange={(e) => setData('registerable', e.target.checked ? '1' : '0')} />
                            {errors.registration}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='search' className="form-check-label">
                                Searchable
                            </label>
                            <input type="checkbox" className='form-check-input' id="search" checked={data.search == 1} onChange={(e) => setData('search', e.target.checked ? '1' : '0')} />
                            {errors.search}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='customizer' className="form-check-label">
                                Customizer
                                <div className="text-secondary">Customizer can be useable.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="customizer" checked={data.customizer == 1} onChange={(e) => setData('customizer', e.target.checked ? '1' : '0')} />
                            {errors.customizer}
                        </div>
                        <div className="form-check mb-3">
                            <label htmlFor='chat' className="form-check-label">
                                Live Chat
                                <div className="text-secondary">Live Chat can be useable.</div>
                            </label>
                            <input type="checkbox" className='form-check-input' id="chat" checked={data.chat == 1} onChange={(e) => setData('chat', e.target.checked ? '1' : '0')} />
                            {errors.chat}
                        </div>
                    </div>
                    <div className="my-1">
                        <button type='submit' className="btn btn-success" disabled={processing}>Save</button>
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