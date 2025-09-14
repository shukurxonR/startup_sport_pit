import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface initialStateTip {
	images: string[]
}

const initialState = <initialStateTip>{
	images: [],
}

const imagesState = createSlice({
	name: 'images',
	initialState: initialState,
	reducers: {
		addImage: (state, action: PayloadAction<string>) => {
			state.images.push(action.payload)
		},
		removeImage: (state, action: PayloadAction<string>) => {
			state.images = state.images.filter(url => url !== action.payload)
		},
		clearImages: state => {
			state.images = []
		},
	},
})

export const { addImage, removeImage, clearImages } = imagesState.actions
export default imagesState.reducer
