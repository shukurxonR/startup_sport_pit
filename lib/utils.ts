import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function formatPrice(price: number, lng: string = 'uz') {
	const locales: Record<string, string> = {
		uz: 'uz-UZ',
		ru: 'ru-RU',
		en: 'en-US',
	}

	return new Intl.NumberFormat(locales[lng] || 'uz-UZ').format(price)
}
