import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export function getAssetUrl(path, defaultPath = '') {
  if (!path) {
    if (!defaultPath) return '';
    return defaultPath.startsWith('http') || defaultPath.startsWith('/') ? defaultPath : `/${defaultPath}`;
  }
  if (typeof path !== 'string') return path;
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('blob:')) return path;
  
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  return `/${cleanPath}`;
}
