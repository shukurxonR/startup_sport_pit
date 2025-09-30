import Stripe from 'stripe'

const stripeBac = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
	apiVersion: '2025-08-27.basil',
})

export default stripeBac
