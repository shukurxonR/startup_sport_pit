import { IProduct } from '@/app.types'
import {
	getBasketProductsLocalStorage,
	saveToLocalStorage,
} from '@/lib/localStorage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface basketProductsTip extends IProduct {
	soni: number
}

interface Props {
	basketProducts: basketProductsTip[]
}

const initialState = <Props>{
	basketProducts: getBasketProductsLocalStorage(),
}

const basketState = createSlice({
	name: 'basketProducts',
	initialState,
	reducers: {
		addToCard: (state, action: PayloadAction<IProduct>) => {
			const isBasket = state.basketProducts.find(
				card => card._id === action.payload._id
			)
			if (!isBasket) {
				state.basketProducts = [
					...state.basketProducts,
					{ ...action.payload, soni: 1 },
				]
			}
			saveToLocalStorage(state.basketProducts)
		},
		removeCard: (state, action: PayloadAction<string>) => {
			const removedProduct = state.basketProducts.filter(
				card => card._id !== action.payload
			)
			state.basketProducts = removedProduct
			saveToLocalStorage(state.basketProducts)
		},
		increment: (state, action: PayloadAction<string>) => {
			const decremented = state.basketProducts.map(card => {
				if (card._id === action.payload) {
					return { ...card, soni: card.soni + 1 }
				} else {
					return card
				}
			})
			state.basketProducts = decremented
			saveToLocalStorage(state.basketProducts)
		},
		decrement: (state, action: PayloadAction<string>) => {
			const decremented = state.basketProducts.map(card => {
				if (card._id === action.payload) {
					return { ...card, soni: card.soni - 1 }
				} else {
					return card
				}
			})
			state.basketProducts = decremented
			saveToLocalStorage(state.basketProducts)
		},
		deleteAllBasket: state => {
			state.basketProducts = []
			saveToLocalStorage(state.basketProducts)
		},
	},
})
// --- selectorlarni reducer tashqarisida yozamiz ---
export const selectBasketSummary = (state: RootState) => {
	const basketProducts = state.basket.basketProducts

	const totalPrice = basketProducts.reduce((acc, product) => {
		return acc + product.price * product.soni
	}, 0)

	const totalDiscount = basketProducts.reduce((acc, product) => {
		if (product.discount) {
			const discountAmount = (product.percent * product.price) / 100
			return acc + discountAmount * product.soni
		}
		return acc
	}, 0)

	const totalCount = basketProducts.reduce((acc, product) => {
		return acc + product.soni
	}, 0)

	const deliveryPrice = totalCount >= 5 ? 0 : 35000

	const total = totalPrice + deliveryPrice - totalDiscount

	return {
		totalDiscount,
		totalPrice,
		totalCount,
		deliveryPrice,
		total,
	}
}

export const selectTotalPrice = (state: RootState) => {
	const total = state.basket.basketProducts.reduce((acc, product) => {
		return acc + product.price * product.soni
	}, 0)
	return total
}

export const { addToCard, removeCard, increment, decrement, deleteAllBasket } =
	basketState.actions
export default basketState.reducer
