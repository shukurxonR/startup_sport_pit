// import { IProduct } from '@/app.types'
// import {
// 	getFavoriteProductsLocalStorage,
// 	saveToLocalStorage,
// } from '@/lib/localStorage'
// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '../store'

// const initialState = <IProduct[]>{
// 	favoriteProducts: getFavoriteProductsLocalStorage(),
// }

// const basketState = createSlice({
// 	name: 'favoriteProducts',
// 	initialState,
// 	reducers: {
// 		addToCard: (state, action: PayloadAction<IProduct>) => {
// 			const isBasket = state.favoriteProducts.find(
// 				card => card._id === action.payload._id
// 			)
// 			if (!isBasket) {
// 				state.favoriteProducts = [
// 					...state.favoriteProducts,
// 					{ ...action.payload, soni: 1 },
// 				]
// 			}
// 			saveToLocalStorage(state.favoriteProducts)
// 		},
// 		removeCard: (state, action: PayloadAction<string>) => {
// 			const removedProduct = state.favoriteProducts.filter(
// 				card => card._id !== action.payload
// 			)
// 			state.favoriteProducts = removedProduct
// 			saveToLocalStorage(state.favoriteProducts)
// 		},
// 		increment: (state, action: PayloadAction<string>) => {
// 			const decremented = state.favoriteProducts.map(card => {
// 				if (card._id === action.payload) {
// 					return { ...card, soni: card.soni + 1 }
// 				} else {
// 					return card
// 				}
// 			})
// 			state.favoriteProducts = decremented
// 			saveToLocalStorage(state.favoriteProducts)
// 		},
// 		decrement: (state, action: PayloadAction<string>) => {
// 			const decremented = state.favoriteProducts.map(card => {
// 				if (card._id === action.payload) {
// 					return { ...card, soni: card.soni - 1 }
// 				} else {
// 					return card
// 				}
// 			})
// 			state.favoriteProducts = decremented
// 			saveToLocalStorage(state.favoriteProducts)
// 		},
// 		deleteAllBasket: state => {
// 			state.favoriteProducts = []
// 			saveToLocalStorage(state.favoriteProducts)
// 		},
// 	},
// })
// // --- selectorlarni reducer tashqarisida yozamiz ---
// export const selectBasketSummary = (state: RootState) => {
// 	const favoriteProducts = state.basket.favoriteProducts

// 	const totalPrice = favoriteProducts.reduce((acc, product) => {
// 		return acc + product.price * product.soni
// 	}, 0)

// 	const totalDiscount = favoriteProducts.reduce((acc, product) => {
// 		if (product.discount) {
// 			const discountAmount = (product.percent * product.price) / 100
// 			return acc + discountAmount * product.soni
// 		}
// 		return acc
// 	}, 0)

// 	const totalCount = favoriteProducts.reduce((acc, product) => {
// 		return acc + product.soni
// 	}, 0)

// 	const deliveryPrice = totalCount >= 5 ? 0 : 35000

// 	const total = totalPrice + deliveryPrice - totalDiscount

// 	return {
// 		totalDiscount,
// 		totalPrice,
// 		totalCount,
// 		deliveryPrice,
// 		total,
// 	}
// }

// export const selectTotalPrice = (state: RootState) => {
// 	const total = state.basket.favoriteProducts.reduce((acc, product) => {
// 		return acc + product.price * product.soni
// 	}, 0)
// 	return total
// }

// export const { addToCard, removeCard, increment, decrement, deleteAllBasket } =
// 	basketState.actions
// export default basketState.reducer
