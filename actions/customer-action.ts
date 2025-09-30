'use server'

import User from '@/datebase/user-model'
import { connectToDatabase } from '@/lib/mongoose'
import stripe from '@/lib/stripe'

export async function getCustomerId(clerkId: string) {
	await connectToDatabase()
	const user = await User.findOne({ clerkId }).select(
		'email fullName customerId'
	)

	if (user.customerId) {
		return user.customerId
	}

	const customer = await stripe.customers.create({
		email: user.email,
		name: user.fullName,
		metadata: { userId: user._id.toString() },
	})

	user.customerId = customer.id
	await user.save()

	return customer.id
}
