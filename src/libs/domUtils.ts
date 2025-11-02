/**
 * Utility functions for native JavaScript DOM selection using TypeScript.
 */

/**
 * Get a single element by its ID.
 * @param id - The ID of the element (without the # prefix).
 * @returns The element or null if not found.
 */
export const getById = <T extends HTMLElement>(id: string): T | null => {
    // We cast the result to type T (which defaults to HTMLElement if not specified)
    return document.getElementById(id) as T | null;
};

/**
 * Get a list of elements by their class name.
 * @param className - The class name of the elements (without the . prefix).
 * @param context - The parent element to search within.
 * @returns A live HTMLCollection of elements.
 */
export const getByClass = <T extends HTMLElement>(className: string, context: HTMLElement | Document = document): HTMLCollectionOf<T> => {
    // getElementsByClassName returns HTMLCollectionOf<Element>, we cast it for better type safety
    return context.getElementsByClassName(className) as HTMLCollectionOf<T>;
};

/**
 * Get a single element matching a CSS selector (e.g., class, attribute, id).
 * @param selector - The CSS selector string.
 * @param context - The parent element to search within.
 * @returns The first matching element or null.
 */
export const getBySelector = <T extends HTMLElement>(selector: string, context: HTMLElement | Document = document): T | null => {
    return context.querySelector(selector);
};

/**
 * Get a list of all elements matching a CSS selector.
 * @param selector - The CSS selector string.
 * @param context - The parent element to search within.
 * @returns A static NodeList of elements.
 */
export const getAllBySelector = <T extends HTMLElement>(selector: string, context: HTMLElement | Document = document): NodeListOf<T> => {
    return context.querySelectorAll(selector);
};

/**
 * Get a list of elements by a specific attribute name and optional value.
 * @param attributeName - The name of the attribute (e.g., 'data-testid').
 * @param attributeValue - The optional value of the attribute.
 * @param context - The parent element to search within.
 * @returns A static NodeList of elements.
 */
export const getByAttribute = <T extends HTMLElement>(
    attributeName: string,
    attributeValue?: string,
    context: HTMLElement | Document = document
): NodeListOf<T> => {
    let selector = `[${attributeName}]`;
    if (attributeValue !== undefined) {
        selector = `[${attributeName}="${attributeValue}"]`;
    }
    return context.querySelectorAll(selector);
};

/**
 * Utility function to scroll to a specific element by ID smoothly.
 * @param id - The ID of the element to scroll to.
 */
export const scrollIntoView = (id: string): void => {
    const element = getById(id);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    } else {
        console.warn(`Element with ID "${id}" not found for scrolling.`);
    }
};