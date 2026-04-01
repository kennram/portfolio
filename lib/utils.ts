import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractCompanyNameFromUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    let domain = parsedUrl.hostname;

    // Remove common prefixes like 'www.'
    domain = domain.replace(/^www\./, "");

    // Remove common TLDs if they are at the end and not part of the brand name
    // This is a simplified approach; a more robust solution might use a public suffix list
    domain = domain.split(".")[0];

    // Capitalize the first letter
    return domain.charAt(0).toUpperCase() + domain.slice(1);
  } catch (error) {
    console.error("Error parsing URL:", error);
    return ""; // Return empty string or original URL part on error
  }
}
