'use server'

import User from '@/datebase/user-model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { ICreateUser, IUpdateUser } from './types'

export const createUser = async (data: ICreateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, email, fullName, picture } = data
		const isExist = await User.findOne({ clerkId })

		if (isExist) {
			const updatedUser = await User.findOneAndUpdate(
				{ email },
				{ fullName, picture, clerkId },
				{ new: true }
			)

			return updatedUser
		}

		const newUser = await User.create(data)

		return newUser
	} catch (error) {
		throw new Error(`Error creating user. Please try again.${error}`)
	}
}

export const updateUser = async (data: IUpdateUser) => {
	try {
		await connectToDatabase()
		const { clerkId, updatedData } = data
		const updateduser = await User.findOneAndUpdate({ clerkId }, updatedData, {
			new: true,
		})
		return updateduser
	} catch (error) {
		throw new Error(`Error updating user. Please try again.${error}`)
	}
}

export const addProductFavorite = async (clerkId: string, courseId: string) => {
	try {
		await connectToDatabase()

		const isFavorite = await User.findOne({
			clerkId,
			favouriteProducts: courseId,
		})
		if (isFavorite) return

		const user = await User.findOne({ clerkId })
		await User.findByIdAndUpdate(user._id, {
			$push: { favouriteProducts: courseId },
		})
		revalidatePath('/favorite')
	} catch (error) {
		throw new Error(`Error updating user. Please try again.${error}`)
	}
}
export const removeProductFavorite = async (
	clerkId: string,
	courseId: string
) => {
	try {
		await connectToDatabase()

		const user = await User.findOne({
			clerkId,
			favouriteProducts: courseId,
		})
		if (user) {
			await User.findByIdAndUpdate(user._id, {
				$pull: { favouriteProducts: courseId },
			})
		}
		revalidatePath('/favorite')
	} catch (error) {
		throw new Error(`Error updating user. Please try again.${error}`)
	}
}

export const isFavorite = async (clerkId: string, courseId: string) => {
	try {
		await connectToDatabase()
		const isFavorite = await User.findOne({
			clerkId,
			favouriteProducts: courseId,
		})
		if (isFavorite) {
			return { status: 200 }
		} else {
			return { status: 400 }
		}
	} catch (error) {
		throw new Error(`Error updating user. Please try again.${error}`)
	}
}

export const userFavoriteProducts = async (clerkId: string) => {
	try {
		await connectToDatabase()

		const user = await User.findOne({ clerkId }).populate('favouriteProducts')

		return user ? user.favouriteProducts : []
	} catch (error) {
		throw new Error(`Error updating user. Please try again.${error}`)
	}
}
