import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export function formatPrice(value: number) {
	const rounded = Math.round(value / 1000) * 1000
	return new Intl.NumberFormat('uz', { style: 'decimal' }).format(rounded)
}
