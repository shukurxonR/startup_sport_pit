import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export const connectToDatabase = async () => {
	mongoose.set('strictQuery', true)

	if (!process.env.MONGODB_URL) {
		throw new Error('MISSING MONGODB_URL') // ❗ Muhim
	}

	if (isConnected) return

	try {
		const options: ConnectOptions = {
			dbName: process.env.MONGODB_DB!,
			autoCreate: true,
		}

		await mongoose.connect(process.env.MONGODB_URL!, options)
		isConnected = true
		console.log('✅ MongoDB Connected')
	} catch (error) {
		console.error(`❌ MongoDB connection failed: ${error}`)
		throw error // ❗ Muhim: aks holda xatolik ko‘rinmaydi
	}
}
