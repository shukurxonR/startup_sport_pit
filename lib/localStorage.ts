import { basketProductsTip } from '@/redux/reducers/basketState'
const BASKET_KEY = 'basketProducts'

export const saveToLocalStorage = (newproducts: basketProductsTip[]) => {
	try {
		localStorage.setItem(BASKET_KEY, JSON.stringify(newproducts))
	} catch (error) {
		throw new Error(`LocalStorage Set Error  ${error}`)
	}
}
export const getBasketProductsLocalStorage = () => {
	try {
		if (typeof window === 'undefined') return [] // SSR uchun
		const products = localStorage.getItem(BASKET_KEY)
		return products ? JSON.parse(products) : []
	} catch (error) {
		console.error('Basketni localStorage dan olishda xato:', error)
		return []
	}
}
