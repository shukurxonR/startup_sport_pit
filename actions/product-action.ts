'use server'

import Product from '@/datebase/product-model'
import User from '@/datebase/user-model'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateCourse } from './types'

export async function createProduct(clerkId: string, product: ICreateCourse) {
	try {
		await connectToDatabase()
		console.log('👉 clerkId:', clerkId)
		console.log('👉 product body:', product)

		const user = await User.findOne({ clerkId })
		if (!user) {
			throw new Error(`User not found with clerkId: ${clerkId}`)
		}

		await Product.create({ ...product, instructor: user._id })
	} catch (error) {
		console.error('❌ createProduct error:', error)
		throw new Error(`Mahsulot yaratishda Nimadur hato, ${error}`)
	}
}

export async function getTopProducts() {
	try {
		await connectToDatabase()
		const topProducts = await Product.find({
			published: true,
			top: true,
		})
			.limit(9)
			.sort({ createdAt: -1 })

		return topProducts
	} catch (error) {
		throw new Error(`Mahsulot olishda Nimadur hato, ${error}`)
	}
}

export async function getDiscountProducts() {
	try {
		await connectToDatabase()
		const discountProducts = await Product.find({
			published: true,
			discount: true,
		}).sort({ createdAt: -1 })

		return discountProducts
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}
export async function getAllProducts() {
	try {
		await connectToDatabase()
		const discountProducts = await Product.find({
			published: true,
		}).sort({ createdAt: -1 })

		return discountProducts
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}

export async function allProductsByAdmin(clerkId: string) {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })

		const adminProducts = await Product.find({ instructor: user._id }).sort({
			createdAt: -1,
		})
		return adminProducts
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}
export async function getProductById(_id: string) {
	try {
		await connectToDatabase()
		const product = await Product.findById(_id)
		return product
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}

export async function getProductByCategory(category: string) {
	try {
		await connectToDatabase()
		const product = await Product.find({ category })
			.sort({ createdAt: -1 })
			.limit(8)
		return product
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}
