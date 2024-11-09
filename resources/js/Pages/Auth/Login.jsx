import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    const {t} = useTranslation();
    return (
        <MainLayout>
            <Head title={t('Sign In')} />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="card-title">{t('Sign In')}</div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div>
                                    <label htmlFor="email" className='form-label'>{t('Email')}</label>

                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="form-control"
                                        autoComplete="username"
                                        autoFocus={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                    />

                                    {errors.email}
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="password" className='form-label'>{t('Password')}</label>

                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="form-control"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />

                                    {errors.password}
                                </div>

                                <div className="mt-4 block">
                                    <label className="flex items-center">
                                        <input
                                            type='checkbox'
                                            name="remember"
                                            checked={data.remember}
                                            className='form-check-input'
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            {t('Remember me')}
                                        </span>
                                    </label>
                                </div>

                                <div className="mt-4 d-flex justify-content-between">
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="link-secondary"
                                        >
                                            {t('Forgot your password?')}
                                        </Link>
                                    )}

                                    <button className="btn btn-primary" disabled={processing}>
                                        {t('Sign In')}
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
