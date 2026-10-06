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

export function cloudinaryVideo(url: string, width = 1920): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_limit/`);
}

/** Still from a Cloudinary video (2s in — avoids blank opening frames). */
export function cloudinaryVideoPoster(url: string, width = 1280): string {
  if (!url.includes("res.cloudinary.com") || !url.includes("/upload/")) {
    return url;
  }
  return url
    .replace("/upload/", `/upload/so_2,w_${width},c_fill,f_jpg,q_auto/`)
    .replace(/\.(mp4|webm|mov)(\?.*)?$/i, ".jpg$2");
}
