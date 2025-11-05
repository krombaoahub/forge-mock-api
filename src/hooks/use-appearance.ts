import { useCallback, useEffect, useState } from 'react';

// export type Appearance = 'light' | 'dark' | 'system';
export type Appearance =
    'light' |
    'dark' |
    'black' |
    'claude' |
    'corporate' |
    'ghibli' |
    'gourmet' |
    'luxury' |
    'mintlify' |
    'pastel' |
    'perplexity' |
    'shadcn' |
    'slack' |
    'soft' |
    'spotify' |
    'valorant' |
    'vscode';

export function initializeTheme() {
    const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
    document.documentElement.setAttribute('data-theme', savedAppearance || 'light')
}

export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('dark');

    const updateAppearance = useCallback((mode: Appearance) => {
        setAppearance(mode);

        localStorage.setItem('appearance', mode);

        document.documentElement.setAttribute('data-theme', mode)
    }, []);

    useEffect(() => {
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        updateAppearance(savedAppearance || 'dark');
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}
