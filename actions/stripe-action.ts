'use server'

import stripeBac from '@/lib/stripe'
import { generateNumericId } from '@/lib/utils'
import { getCustomerId } from './customer-action'

export async function payment(
	clerkId: string,
	price: number,
	paymentMethodId: string
) {
	try {
		const customer = await getCustomerId(clerkId)
		const paymentIntent = await stripeBac.paymentIntents.create({
			amount: Math.round(price * 100), // pul miqdori
			currency: 'usd',
			payment_method: paymentMethodId,
			customer, // customerni to`lovga ulash id orqali
			metadata: { orderId: generateNumericId() }, // tolovga orderId yaratish
			setup_future_usage: 'off_session', // customerga cartalarni saqlash uchun
			automatic_payment_methods: { enabled: true }, // Stripe avtomatik usul tanlaydi
		})
		return paymentIntent.client_secret
	} catch (error) {
		console.error('STRIPE PAYMENT ERROR:', error)
		throw new Error(`${error} || "Couldn't process payment"`)
	}
}
export async function retrievePayment(pi: string) {
	try {
		return await stripeBac.paymentIntents.retrieve(pi, {
			expand: ['payment_method'],
		})
	} catch (error) {
		console.error('STRIPE retrievePayment ERROR:', error)
		throw new Error(`${error} || "Couldn't process retrievePayment"`)
	}
}
