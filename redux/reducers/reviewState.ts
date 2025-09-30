import { createSlice } from '@reduxjs/toolkit'

interface Props {
	isOpen: boolean
}

const initialState: Props = {
	isOpen: false,
}

const reviewState = createSlice({
	name: 'reviewstate',
	initialState,
	reducers: {
		openReview: state => {
			state.isOpen = true
		},
		closeReview: state => {
			// ❗️closReview emas, closeReview bo‘lsin
			state.isOpen = false
		},
	},
})

export const { openReview, closeReview } = reviewState.actions
export default reviewState.reducer
