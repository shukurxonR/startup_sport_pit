import { configureStore } from '@reduxjs/toolkit'
import basketState from '../reducers/basketState'
import imagesState from '../reducers/imagesState'
import reviewstate from '../reducers/reviewState'
export const store = configureStore({
	reducer: {
		images: imagesState,
		review: reviewstate,
		basket: basketState,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
