
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };
    const {t} = useTranslation();
    return (
        <MainLayout>
            <Head title={t('Sign Up')} />
<div className="row justify-content-center">
    <div className="col-lg-6">
        <div className="card bg-dark">
            <div className="card-header">
                <div className="card-title">
                    {t('Sign Up')}
                </div>
            </div>
            <div className="card-body">
                <form onSubmit={submit}>
                    <div className='mb-3'>
                        <label htmlFor="name" className='form-label'>{t('Name')}</label>

                        <input
                            type='text'
                            id="name"
                            name="name"
                            value={data.name}
                            className="form-control"
                            autoComplete="name"
                            autoFocus={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        {errors.name}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>{t('Email')}</label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="form-control"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        {errors.email}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className='form-label'>{t('Password')}</label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="form-control"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        {errors.password}
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password_confirmation" className='form-label'>{t('Confirm Password')}</label>

                        <input
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="form-control"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        {errors.password_confirmation}
                    </div>

                    <div className="mb-3 d-flex justify-content-between">
                        <Link href={route('login')} className="link-secondary">
                            {t('Already registered?')}
                        </Link>

                        <button className="btn btn-primary" disabled={processing}>
                            {t('Sign Up')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

        </MainLayout>
    );
}
