import { IProduct } from '@/app.types'
import {
	getFavoriteProductsLocalStorage,
	saveFavoriteToLocalStorage,
} from '@/lib/localStorage'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Props {
	favoriteProducts: IProduct[]
}

const initialState = <Props>{
	favoriteProducts: getFavoriteProductsLocalStorage(),
}

const favoriteProducts = createSlice({
	name: 'favoriteProducts',
	initialState: initialState,
	reducers: {
		toggleFavorite: (state, action: PayloadAction<IProduct>) => {
			const isFavorite = state.favoriteProducts.find(
				card => card._id === action.payload._id
			)
			if (!isFavorite) {
				state.favoriteProducts = [...state.favoriteProducts, action.payload]
				saveFavoriteToLocalStorage(state.favoriteProducts)
			} else {
				const deletedPayload = state.favoriteProducts.filter(
					card => card._id !== action.payload._id
				)
				state.favoriteProducts = deletedPayload
				saveFavoriteToLocalStorage(state.favoriteProducts)
			}
		},
	},
})

export const { toggleFavorite } = favoriteProducts.actions

export default favoriteProducts.reducer
