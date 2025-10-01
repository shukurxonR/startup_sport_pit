import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
	throw new Error('STRIPE_SECRET_KEY is missing in environment variables')
}

const stripeBac = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2025-08-27.basil',
})

export default stripeBac
