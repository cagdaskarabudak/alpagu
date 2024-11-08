import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function UpdatePasswordForm({ className = '' }) {
    const { t } = useTranslation();
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    {t('Update Password')}
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    {t('Ensure your account is using a long, random password to stay secure.')}
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div className='mb-3'>
                    <label
                        htmlFor="current_password"
                        className='form-label'
                    >{t('Current Password')}</label>

                    <input
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) =>
                            setData('current_password', e.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="current-password"
                    />

                    {errors.current_password}
                </div>

                <div className='mb-3'>
                    <label htmlFor="password" className="form-label">{t('New Password')}</label>

                    <input
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                    />

                    {errors.password}
                </div>

                <div className='mb-3'>
                    <label
                        htmlFor="password_confirmation"
                        className="form-label"
                    >{t('Confirm Password')}</label>

                    <input
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                        type="password"
                        className="form-control"
                        autoComplete="new-password"
                    />

                    {errors.password_confirmation}
                </div>

                <div className="mb-3">
                    <button className='btn btn-primary' disabled={processing}>{t('Save')}</button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">
                            {t('Saved')}
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
