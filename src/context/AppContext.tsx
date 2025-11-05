import { createContext, lazy, Suspense, useCallback, useContext, type ReactNode } from 'react';

interface AppContextProps {
    delayTimer: (d: any, delayTime?: number) => void
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const LayoutComponents = lazy(() => import('@/layouts/layout'))

export const AppProvider = ({ children }: { children: ReactNode }) => {

    const delayTimer = useCallback((callback: any, delayTime: number = 1000) => {
        setTimeout(() => {
            callback()
        }, delayTime);
    }, [])

    const context = { delayTimer };

    return (
        <AppContext.Provider value={context}>
            <Suspense fallback={<div className='text-center min-h-dvh w-full mx-auto bg-primary/10 text-base-content flex items-center justify-center'>
                <p>ForgeMockAPI</p>
            </div>}>
                <LayoutComponents>
                    {children}
                </LayoutComponents>
            </Suspense>
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};

