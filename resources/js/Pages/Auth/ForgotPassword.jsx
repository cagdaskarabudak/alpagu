import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword({ status }) {
    const {t} = useTranslation();
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <MainLayout>
            <Head title="Forgot Password" />
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-text mb-3">
                                {t('Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.')}
                            </div>

                            {status && (
                                <div className="card-text mb-3">
                                    {t(status)}
                                </div>
                            )}

                            <form onSubmit={submit}>
                                <label htmlFor="email" className={'form-label'}>E-Posta Adresin</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="form-control"
                                    autoFocus={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                />

                                {errors.email}

                                <div className="mt-4 flex items-center justify-end">
                                    <button className="btn btn-primary" disabled={processing}>
                                        {t('Email Password Reset Link')}
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
