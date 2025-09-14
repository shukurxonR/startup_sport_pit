// import { currentUser } from '@clerk/nextjs/server'
// import { createUploadthing, type FileRouter } from 'uploadthing/next'
// import { UploadThingError } from 'uploadthing/server'

// const f = createUploadthing()

// export const ourFileRouter = {
// 	imageUploader: f({
// 		image: {
// 			maxFileSize: '4MB',
// 			maxFileCount: 1,
// 		},
// 	})
// 		// Set permissions and file types for this FileRoute
// 		.middleware(async () => {
// 			const user = await currentUser()

// 			if (!user) throw new UploadThingError('Unauthorized')

// 			return { userId: 'test' }
// 		})
// 		// .onUploadComplete(async ({ metadata, file }) => {
// 		// 	console.log('Upload complete:', file.url) // ✅
// 		// 	return { uploadedBy: metadata.userId, fileUrl: file.ufsUrl }
// 		// }),
// 		.onUploadComplete(async ({ file }) => {
// 			console.log('Upload complete:', file.url)
// 			return { fileUrl: file.ufsUrl }
// 		}),
// } satisfies FileRouter

// export type OurFileRouter = typeof ourFileRouter
import { createUploadthing, type FileRouter } from 'uploadthing/next'

const f = createUploadthing()

export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: '4MB' } }).onUploadComplete(
		async ({ file }) => {
			console.log('✅ Upload complete:', file)

			// ✅ to‘g‘ri qiymat qaytarish
			return { uploadedBy: 'user123', fileUrl: file.ufsUrl }
		}
	),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
