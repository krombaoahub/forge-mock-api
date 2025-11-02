import { scrollIntoView } from "@/libs/domUtils";
import { useCallback } from "react";

export function useGotoSection() {
    const gotoSection = useCallback((elementId: string) => {
        scrollIntoView(elementId)
    }, []);

    return gotoSection;
}