import MainLayout from '@/Layouts/MainLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <MainLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <div>
                    <label className='form-label' htmlFor="email">Email</label>

                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    {errors.email}
                </div>

                <div className="mt-4">
                    <label className='form-label' htmlFor="password">Password</label>

                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        autoFocus={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    {errors.password}
                </div>

                <div className="mt-4">
                    <label
                        htmlFor="password_confirmation"
                    >Confirm Password</label>

                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData('password_confirmation', e.target.value)
                        }
                    />

                    {errors.password_confirmation}
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <button className="btn btn-primary" disabled={processing}>
                        Reset Password
                    </button>
                </div>
            </form>
        </MainLayout>
    );
}
