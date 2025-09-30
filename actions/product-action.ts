'use server'

import { IProduct } from '@/app.types'
import Product from '@/datebase/product-model'
import User from '@/datebase/user-model'
import { connectToDatabase } from '@/lib/mongoose'
import { FilterQuery } from 'mongoose'
import { revalidatePath } from 'next/cache'
import {
	getAdminProductsParams,
	getAllProductsParams,
	ICreateProduct,
} from './types'

export async function createProduct(clerkId: string, product: ICreateProduct) {
	try {
		await connectToDatabase()
		console.log('👉 clerkId:', clerkId)
		console.log('👉 product body:', product)

		const user = await User.findOne({ clerkId })
		if (!user) {
			throw new Error(`User not found with clerkId: ${clerkId}`)
		}

		const newProduct = await Product.create({
			...product,
			instructor: user._id,
		})
		return JSON.parse(JSON.stringify(newProduct))
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
			discount: false,
		})
			.sort({ createdAt: -1 })
			.limit(16)

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

export async function getAllProducts(params: getAllProductsParams) {
	try {
		await connectToDatabase()
		const { page = 1, pageSize = 8, filter, searchQuery } = params

		const skipAmount = (page - 1) * pageSize

		const query: FilterQuery<typeof Product> = { published: true }

		// 🔍 Qidiruv bo‘lsa title bo‘yicha filter qo‘shamiz
		if (searchQuery) {
			query.$or = [
				{ name: { $regex: searchQuery, $options: 'i' } },
				{ category: { $regex: searchQuery, $options: 'i' } },
			]
		}

		// filter bo‘yicha qo‘shimcha query
		switch (filter) {
			case 'discount':
				query.discount = true
				break
			case 'protaine':
				query.category = 'protaine'
				break
			case 'gainer':
				query.category = 'gainer'
				break
			case 'creatine':
				query.category = 'creatine'
				break
			case 'bcaa':
				query.category = 'bcaa'
				break
			case 'omega-3':
				query.category = 'omega-3'
				break
			case 'vitamin':
				query.category = 'vitamin'
				break
			case 'for-babys':
				query.category = 'for-babys'
				break
			case 'for-womens':
				query.category = 'for-womens'
				break
			default:
				break
		}

		// mahsulotlarni olish
		const products = await Product.find(query)
			.skip(skipAmount)
			.sort({ createdAt: -1 })
			.limit(pageSize)

		// jami mahsulotlar soni
		const totalProducts = await Product.find(query).countDocuments()

		const isNext = totalProducts > skipAmount + products.length

		return { products, isNext }
	} catch (error) {
		throw new Error(`Mahsulot olishda xatolik: ${error}`)
	}
}

export async function allProductsByAdmin(params: getAdminProductsParams) {
	try {
		await connectToDatabase()
		const { clerkId, page = 1, pageSize = 9, filter } = params
		const skipAmount = (page - 1) * pageSize

		let sortCategory = {}

		switch (filter) {
			case 'discount':
				sortCategory = {
					discount: true,
				}
				break
			case 'protaine':
				sortCategory = { category: 'protaine' }
				break
			case 'gainer':
				sortCategory = { category: 'gainer' }
				break
			case 'creatine':
				sortCategory = { category: 'creatine' }
				break
			case 'bcaa':
				sortCategory = { category: 'bcaa' }
				break
			case 'omega-3':
				sortCategory = { category: 'omega-3' }
				break
			case 'vitamin':
				sortCategory = { category: 'vitamin' }
				break
			case 'for-babys':
				sortCategory = { category: 'for-babys' }
				break
			case 'for-womens':
				sortCategory = { category: 'for-womens' }
				break
			default:
				break
		}

		const user = await User.findOne({ clerkId })

		const adminProducts = await Product.find({
			...sortCategory,
			instructor: user._id,
		})
			.sort({
				createdAt: -1,
			})
			.skip(skipAmount)
			.limit(pageSize)

		const totalAdminProduct = await Product.find({
			...sortCategory,
			instructor: user._id,
		}).countDocuments()

		const isNext = totalAdminProduct > page + adminProducts.length

		return { adminProducts, isNext }
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
		const product = await Product.find({ category }).sort({ createdAt: -1 })

		return product
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}

export async function deleteProductById(_id: string, path: string) {
	try {
		await connectToDatabase()
		await Product.findByIdAndDelete(_id)
		revalidatePath(path)
		return
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}

export async function updateProductById(
	_id: string,
	updateData: Partial<IProduct>,
	path: string
) {
	try {
		await connectToDatabase()
		await Product.findByIdAndUpdate(_id, updateData)
		revalidatePath(path)
	} catch (error) {
		throw new Error(`Discount Mahsulot olishda Nimadur hato, ${error}`)
	}
}
export async function getAllProductsAdmin(clerkId: string) {
	try {
		await connectToDatabase()
		const user = await User.findOne({ clerkId })

		if (!user) {
			throw new Error(`User topilmadi clerkId: ${clerkId}`)
		}

		const totalCourses = await Product.find({
			instructor: user._id,
		}).countDocuments()

		return totalCourses
	} catch (error) {
		throw new Error(`Total Mahsulot olishda Nimadur hato, ${error}`)
	}
}
