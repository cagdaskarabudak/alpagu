import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}) {
    const { t } = useTranslation();
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section>
            <header>
                <h2>
                    {t('Profile Information')}
                </h2>

                <p>
                    {t("Update your account's profile information and email address.")}
                </p>
            </header>

            <form onSubmit={submit}>
                <div className='mb-3'>
                    <label htmlFor="name" className='form-label'>{t('Name')}</label>

                    <input
                        id="name"
                        type='text'
                        className="form-control"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        autoFocus={true}
                        autoComplete="name"
                    />

                    {errors.name}
                </div>

                <div className='mb-3'>
                    <label htmlFor="email" className='form-label'>{t('Email')}</label>

                    <input
                        id="email"
                        type="email"
                        className="form-control"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    {errors.email}
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div className='mb-3'>
                        <p>
                            {t('Your email address is unverified.')}
                            <Link
                                className='btn btn-outline-info'
                                href={route('verification.send')}
                                method="post"
                                as="button"
                            >
                                {t('Click here to re-send the verification email.')}
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div>
                                {t('A new verification link has been sent to your email address.')}
                            </div>
                        )}
                    </div>
                )}

                <div className='mb-3'>
                    <button className='btn btn-primary' disabled={processing}>{t('Save')}</button>

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
        </section>
    );
}
