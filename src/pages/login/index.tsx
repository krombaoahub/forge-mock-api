import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginFormSchema, type LoginFormFields } from '@/zod/schema';
import AuthLayout from '@/layouts/auth-layout';
import '@/App.css'
import { FormField } from '@/components/forms';
import { Link, useNavigate } from 'react-router-dom';
import { LoginWithGoogle } from '@/components/login-with-button';
import { useAuth } from '@/context/AuthContext';


const LoginPage: React.FC = () => {
    const navigate = useNavigate()
    const { handleLogin, errorMsg, loading } = useAuth()
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormFields>({
        resolver: zodResolver(loginFormSchema),
    });

    return (
        <AuthLayout>
            <div className='w-full'>
                <div className="card max-w-md">
                    <div className="card-body">
                        <h5 className="card-title mb-2.5">Sign In</h5>
                        <p className="mb-4">Login your ApiForge account.</p>
                        <div className="card-actions gap-5">

                            <div className={`${errors.root?.message || errorMsg ? 'rounded border p-5 alert-error alert-soft w-full alert' : 'hidden'}`}>
                                {errors.root?.message && (
                                    <small className="font-medium">{errors.root.message}</small>
                                )}
                                {errorMsg && <small className='text-red-500'>{errorMsg}</small>}
                            </div>
                            <FormField handleSubmit={handleSubmit((data) => handleLogin(data, navigate))} className='w-full' inputs={[{
                                className: 'border-0 border-b-1 rounded-none rounded-t',
                                register,
                                placeholder: 'example@domain.com',
                                errors,
                                field: 'email',
                                label: 'Email'
                            }, {
                                className: 'border-0 border-b-1 rounded-none rounded-t',
                                register,
                                placeholder: '********',
                                errors,
                                type: 'password',
                                field: 'password',
                                label: 'Password',
                            }]} >

                                <div className="flex justify-center w-full">
                                    <button type="submit" className={`w-full btn btn-primary ${loading ? 'btn-disabled' : ''}`}>
                                        {loading && <span className="loading loading-spinner"></span>}
                                        Login
                                    </button>
                                </div>
                            </FormField>
                            
                            <div className="divider">OR</div>

                            <div className='mx-auto w-full gap-5 flex flex-col'>
                                <LoginWithGoogle />
                                <div>
                                    <span className='me-2'>Don't have an account?</span>
                                    <Link to={'/register'} className="link link-accent link-animated">Sign up</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};

export default LoginPage;