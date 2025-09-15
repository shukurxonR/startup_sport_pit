import mongoose, { ConnectOptions } from 'mongoose'

let isConnected: boolean = false

export async function connectToDatabase() {
	mongoose.set('strictQuery', true)

	if (!process.env.MONGODB_URL) {
		throw new Error('MISSING MONGODB_URL')
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
		throw new Error(`Mongoose do not connected ${error}`)
	}
}
