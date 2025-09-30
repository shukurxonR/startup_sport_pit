'use server'
import Product from '@/datebase/product-model'
import Review from '@/datebase/review-model'
import User from '@/datebase/user-model'
import { connectToDatabase } from '@/lib/mongoose'
import { revalidatePath } from 'next/cache'
import { getReviewsAdminTip } from './types'

export async function createReview(
	clerkId: string,
	product: string,
	data: { data: string; rating: number },
	pathname: string
) {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		await Review.create({ user: user._id, product, ...data })
		revalidatePath(pathname)
	} catch (error) {
		throw new Error(`Review ochishda hatolik:${error}`)
	}
}
export async function getProductReviews(product: string) {
	try {
		await connectToDatabase()
		const productReviews = await Review.find({ product, isFlag: false })
			.populate({
				path: 'user',
				model: User,
				select: 'fullName picture',
			})
			.sort({ createdAt: -1 })
		return productReviews
	} catch (error) {
		throw new Error(`${error}`)
	}
}
export async function getTotalReviewsAdmin(clerkId: string) {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })
		const products = await Product.find({ instructor: user._id })

		const totalReviews = await Review.find({
			product: { $in: products },
		}).countDocuments()
		return totalReviews
	} catch (error) {
		throw new Error(`${error}`)
	}
}

export async function getReviewsAdmin(data: getReviewsAdminTip) {
	try {
		await connectToDatabase()
		const { clerkId, page = 1, pageSize = 4 } = data

		const skipMount = (page - 1) * pageSize

		const user = await User.findOne({ clerkId })
		const products = await Product.find({ instructor: user._id })

		const reviews = await Review.find({
			product: { $in: products },
		})
			.populate({ path: 'user', model: User, select: 'fullName picture' })
			.populate({ path: 'product', model: Product, select: 'name images' })
			.skip(skipMount)
			.limit(pageSize)

		const totalReviews = await Review.find({
			product: { $in: products },
		}).countDocuments()

		const isNext = totalReviews > reviews.length + skipMount

		return { reviews, totalReviews, isNext }
	} catch (error) {
		throw new Error(`${error}`)
	}
}
export async function updateReview(_id: string, isFlag: boolean, path: string) {
	try {
		await connectToDatabase()
		await Review.findByIdAndUpdate(_id, { isFlag })
		revalidatePath(path)
	} catch (error) {
		throw new Error(`${error}`)
	}
}
