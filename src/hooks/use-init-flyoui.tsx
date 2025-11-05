import { useEffect } from "react";
import { useLocation } from "react-router-dom";

async function loadFlyOnUI() {
    return import('flyonui/flyonui');
}

export function useFlyOnUI() {
    const { pathname } = useLocation()

    useEffect(() => {
        const initFlyOnUI = async () => {
            await loadFlyOnUI();
        };

        initFlyOnUI();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (
                window.HSStaticMethods &&
                typeof window.HSStaticMethods.autoInit === 'function'
            ) {
                window.HSStaticMethods.autoInit();
            }
        }, 100);
    }, [pathname]);
}

export function reInitFlyonUi() {
    setTimeout(() => {
        if (
            window.HSStaticMethods &&
            typeof window.HSStaticMethods.autoInit === 'function'
        ) {
            window.HSStaticMethods.autoInit();
        }
    }, 100);
}
