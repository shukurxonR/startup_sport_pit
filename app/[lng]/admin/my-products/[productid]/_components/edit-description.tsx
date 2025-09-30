'use client'
import { updateProductById } from '@/actions/product-action'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import useToggle from '@/hooks/use-toggle'
import { descriptionSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function EditDescription(product: IProduct) {
	const { isEdit, onToggle } = useToggle()

	return (
		<Card>
			<CardContent className='p-5'>
				<div className='flex items-center justify-between'>
					<h1 className='text-[18px] font-medium'>Edit Product Description</h1>
					<Button
						variant={'ghost'}
						size={'icon'}
						onClick={onToggle}
						className='cursor-pointer'
					>
						{isEdit ? <X /> : <Edit2 />}
					</Button>
				</div>
				<Separator className='my-3' />
				{isEdit ? (
					<Forms product={product} onToggle={onToggle} />
				) : (
					<div className='flex flex-col gap-2'>
						<div className='flex gap-3'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Description:
							</span>
							<span className='font-medium'>
								{product.description.slice(0, 140) + '...'}
							</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default EditDescription
interface Props {
	product: IProduct
	onToggle: () => void
}
function Forms({ product, onToggle }: Props) {
	const pathname = usePathname()
	const form = useForm<z.infer<typeof descriptionSchema>>({
		resolver: zodResolver(descriptionSchema),
		defaultValues: {
			description: product.description,
		},
	})
	function onSublit(values: z.infer<typeof descriptionSchema>) {
		const promise = updateProductById(product._id, values, pathname).then(() =>
			onToggle()
		)
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated ✅',
			error: 'Updated error',
		})
	}
	return (
		<>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSublit)}
					className='flex flex-col gap-3'
				>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Mahsulot tavsifi <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type='submit'
						className='self-end bg-blue-600 hover:bg-blue-700'
					>
						Submit
					</Button>
				</form>
			</Form>
		</>
	)
}
