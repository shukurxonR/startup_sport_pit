import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['uz', 'ru'],
	defaultLocale: 'uz',
})

// Public routelarni matcher
const isPublicRoute = createRouteMatcher([
	'/:lng',
	'/:lng/api/uploadthing',
	'/:lng/api/webhook', // ✅ barcha tillar uchun
])

export default clerkMiddleware(async (auth, req) => {
	// Public routelar → faqat intl ishlaydi
	if (isPublicRoute(req)) {
		return intlMiddleware(req)
	}

	// Private routelar → login bo‘lmasa redirect
	const { userId, redirectToSignIn } = await auth()

	if (!userId) {
		return redirectToSignIn({ returnBackUrl: req.url })
	}

	// Auth muvaffaqiyatli → intl ishlaydi

	return intlMiddleware(req)
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
