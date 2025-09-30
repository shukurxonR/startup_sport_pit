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
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import useToggle from '@/hooks/use-toggle'
import { priceEndBrendSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function EditPriceEndBrend(product: IProduct) {
	const { isEdit, onToggle } = useToggle()

	return (
		<Card>
			<CardContent className='p-5'>
				<div className='flex items-center justify-between'>
					<h1 className='text-[18px] font-medium'>
						Edit Product Price end Brend
					</h1>
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
						<div className='flex items-center gap-2'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Brand:
							</span>
							<span className='font-medium'>{product.brand}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Price:
							</span>
							<span className='font-medium'>
								{product.price.toLocaleString('uz-UZ')}
							</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default EditPriceEndBrend
interface Props {
	product: IProduct
	onToggle: () => void
}
function Forms({ product, onToggle }: Props) {
	const pathname = usePathname()
	const form = useForm<z.infer<typeof priceEndBrendSchema>>({
		resolver: zodResolver(priceEndBrendSchema),
		defaultValues: {
			brand: product.brand,
			price: product.price.toString(),
		},
	})
	function onSublit(values: z.infer<typeof priceEndBrendSchema>) {
		const promise = updateProductById(
			product._id,
			{ ...values, price: +values.price },
			pathname
		).then(() => onToggle())

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
						name='brand'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Mahsulot nomi <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='price'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Mahsulot categoriyasi <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Input {...field} type='number' />
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
