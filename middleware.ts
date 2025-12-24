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
	'/:lng/api/webhook',
])

export default clerkMiddleware(async (auth, req) => {
	if (isPublicRoute(req)) {
		return intlMiddleware(req)
	}
	return intlMiddleware(req)
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
// import createMiddleware from 'next-intl/middleware'

// const intlMiddleware = createMiddleware({
// 	locales: ['uz', 'ru'],
// 	defaultLocale: 'uz',
// })

// // Public routelarni matcher
// const isPublicRoute = createRouteMatcher([
// 	'/:lng',
// 	'/:lng/api/uploadthing',
// 	'/:lng/api/webhook',
// ])

// export default clerkMiddleware(async (auth, req) => {
// 	if (isPublicRoute(req)) {
// 		return intlMiddleware(req)
// 	}
// 	const { userId, redirectToSignIn } = await auth()

// 	if (!userId) {
// 		return redirectToSignIn({ returnBackUrl: req.url })
// 	}

// 	return intlMiddleware(req)
// })

// export const config = {
// 	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// }
