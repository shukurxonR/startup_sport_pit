import { clsx, type ClassValue } from 'clsx'
import qs from 'query-string'
import { twMerge } from 'tailwind-merge'
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatPrice(value: number) {
	const rounded = Math.round(value / 1000) * 1000
	return `${new Intl.NumberFormat('en-US', {
		maximumFractionDigits: 0,
	}).format(rounded)}`
}

interface formUrlQueryParams {
	params: string
	key: string
	value: string | null
	toProducts?: boolean
	remove?: string[]
}

export function formUrlQuery({
	params,
	key,
	value,
	toProducts,
	remove,
}: formUrlQueryParams) {
	const currentUrl = qs.parse(params)

	if (remove && remove.length > 0) {
		remove.forEach(key => {
			delete currentUrl[key]
		})
	}

	currentUrl[key] = value

	return qs.stringifyUrl(
		{
			url: toProducts
				? `/${window.location.pathname.split('/')[1]}/products`
				: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}

interface RemoveUrlQueryParams {
	params: string
	keysToRemove: string[]
}

export const removeKeysFromQuery = ({
	params,
	keysToRemove,
}: RemoveUrlQueryParams) => {
	const currentUrl = qs.parse(params)

	keysToRemove.forEach(key => {
		delete currentUrl[key]
	})

	return qs.stringifyUrl(
		{
			url: window.location.pathname,
			query: currentUrl,
		},
		{ skipNull: true }
	)
}
export const generateNumericId = (): string => {
	let id = ''
	for (let i = 0; i < 4; i++) {
		id += Math.floor(Math.random() * 10).toString()
	}
	return id
}
export const dollorKurs = 12160

export function uzsToUsd(amountUZS: number, dollorKurs: number) {
	return amountUZS / dollorKurs
}
export function usdToUzs(amountUZS: number, dollorKurs: number) {
	return dollorKurs * amountUZS
}
