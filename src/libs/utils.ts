import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isEmpty = (obj: object | undefined) => {
    if (!obj) return
    // Object.keys() returns an array of an object's own enumerable property names
    return Object.keys(obj).length === 0;
}

/**
 * Merges Tailwind class names, resolving any conflicts.
 *
 * @param inputs - An array of class names to merge.
 * @returns A string of merged and optimized class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const env = import.meta.env