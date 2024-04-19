import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createContentURI(title: string) {
  return title.trim().toLowerCase().replaceAll(' ', '-');
}
