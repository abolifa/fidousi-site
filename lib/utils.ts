import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getServerImage(path: string) {
  return `${process.env.NEXT_PUBLIC_IMAGE_URL}${path}`;
}
