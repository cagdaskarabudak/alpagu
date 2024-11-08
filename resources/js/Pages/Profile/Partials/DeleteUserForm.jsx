import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();
    const { t } = useTranslation();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section>
            <header>
                <h2>
                    {t('Delete Account')}
                </h2>

                <p>
                    {t('Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.')}
                </p>
            </header>

            <button className='btn btn-danger' onClick={confirmUserDeletion}>
                {t('Delete Account')}
            </button>
            <Modal show={confirmingUserDeletion} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Are you sure you want to delete your account?')}</Modal.Title>
                </Modal.Header>
                <form onSubmit={deleteUser} className="p-6">
                <Modal.Body>
                    <p className="mb-3">
                        {t('Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.')}
                    </p>

                    <div className="mb-3">
                        <label
                            htmlFor="password"
                            className="form-label"
                        >{t('Password')}</label>

                        <input
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="form-control"
                            autoFocus={true}
                            placeholder={t("Password")}
                        />

                        {errors.password}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <button className='btn btn-secondary' onClick={closeModal}>
                            {t('Cancel')}
                        </button>

                        <button className="btn btn-danger ms-3" disabled={processing}>
                            {t('Delete Account')}
                        </button>
                    </div>
                </Modal.Footer>
                </form>
            </Modal>
        </section>
    );
}
