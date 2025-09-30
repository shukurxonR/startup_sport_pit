'use client'
import { createReview } from '@/actions/review-action'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { reviewSchema } from '@/lib/validation'
import { closeReview } from '@/redux/reducers/reviewState'
import { RootState } from '@/redux/store'
import { useAuth } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ReactStars from 'react-rating-stars-component'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import z from 'zod'

function ReviewModal() {
	const { userId } = useAuth()
	const { slug } = useParams()
	const pathname = usePathname()

	const [rating, setRating] = useState(0)
	const dispatch = useDispatch()
	const isOpen = useSelector((state: RootState) => state.review.isOpen)

	const form = useForm<z.infer<typeof reviewSchema>>({
		resolver: zodResolver(reviewSchema),
		defaultValues: {
			data: '',
		},
	})
	const productSlug = Array.isArray(slug) ? slug[0] : slug
	function onSubmit(values: z.infer<typeof reviewSchema>) {
		const data = { ...values, rating }

		const promise = createReview(userId!, productSlug, data, pathname).then(
			() => dispatch(closeReview())
		)
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent ✅',
			error: 'Sent error',
		})
	}
	return (
		<Dialog open={isOpen} onOpenChange={() => dispatch(closeReview())}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Mahsulot haqida fikiringiz?</DialogTitle>
				</DialogHeader>

				{/* Bitta wrapper div */}
				<div className='flex flex-col gap-4'>
					<div className='flex items-center justify-center'>
						<ReactStars
							value={rating}
							size={40}
							onChange={val => setRating(val)}
							activeColor='#E59819'
						/>
					</div>

					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='data'
								render={({ field }) => (
									<FormItem>
										<FormControl>
											<Textarea
												{...field}
												className='h-24 resize-none border-none bg-secondary font-medium'
												placeholder='Ushbu Mahsulot haqida qanday fikrda ekanligingizni bizga ayting. U sizga yoqdimi?'
											/>
										</FormControl>
										<FormMessage className='text-red-500' />
									</FormItem>
								)}
							/>
							<div className='flex justify-end mt-2'>
								<Button
									type='submit'
									className='font-space-grotesk font-bold bg-blue-600 hover:bg-blue-700 '
								>
									Submit
								</Button>
							</div>
						</form>
					</Form>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ReviewModal
