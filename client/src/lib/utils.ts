import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Injects Cloudinary delivery transformations (auto format, auto quality,
 * width limit) so the browser downloads an appropriately sized image
 * instead of the full-resolution original. Non-Cloudinary URLs pass through.
 */
export function cloudinaryImage(url: string, width = 900): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
}
