// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import type { AuthContextProps, LoginFormProps, RegisterFormProps } from '@/interfaces';
import type { AuthResultType } from '@/types';
import { loginAccount, registerAccount } from '@/services/auth';
import { Outlet, type NavigateFunction } from 'react-router-dom';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    // const navigate = useNavigate()
    // const { pathname } = useLocation()
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [authLoading, setAuthLoading] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState<string>('');

    // useEffect(() => setErrorMsg(''), [pathname])

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
            setAuthLoading(false)
        });
        return unsubscribe; // Cleanup subscription on unmount
    }, []);

    const handleLogin = async (loginField: LoginFormProps, navigate: NavigateFunction) => {
        setLoading(true)
        await loginAccount(loginField)
            .then((result: AuthResultType) => {
                if (result.success) navigate('/dashboard');
                if (result.message) setErrorMsg(result.message);
            })
            .finally(() => setLoading(false))

    }
    const handleLogout = (navigate: NavigateFunction) => {
        setErrorMsg('')
        setLoading(true)
        signOut(auth)
            .then(() => {
                navigate("/");
                console.log("Signed out successfully")
            })
            .catch((error) => setErrorMsg(error.message))
            .finally(() => setLoading(false))
    }

    const handleRegister = async (data: RegisterFormProps, navigate: NavigateFunction) => {
        setErrorMsg('')
        setLoading(true)
        await registerAccount(data)
            .then((result: AuthResultType) => {
                if (result.success) navigate('/login');
                if (result.message) setErrorMsg(result.message);
            })
            .finally(() => setLoading(false))
    };

    const context = { currentUser, loading, errorMsg, handleRegister, handleLogin, handleLogout };

    return (
        <AuthContext.Provider value={context}>
            {!authLoading ? children : <Outlet />}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};

