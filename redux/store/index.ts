import { configureStore } from '@reduxjs/toolkit'
import imagesState from '../reducers/imagesState'
export const store = configureStore({
	reducer: {
		images: imagesState,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
