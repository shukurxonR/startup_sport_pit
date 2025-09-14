import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['uz', 'ru'],
	defaultLocale: 'en',
})

const isProtectedRoute = createRouteMatcher([
	'/:lng/instructor/create-course(.*)',
	'/:lng/instructor/my-course(.*)',
	'/:lng/instructor/dashboard(.*)',
])

export default clerkMiddleware(async (auth, req) => {
	// Agar bu yo‘l himoyalangan bo‘lsa, autentifikatsiyani talab qiling
	if (isProtectedRoute(req)) {
		await auth.protect()
	}
	// Boshqa holatlarda next-intl middleware’ini ishlatamiz
	return intlMiddleware(req)
})

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
