'use client'
import { updateProductById } from '@/actions/product-action'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import useToggle from '@/hooks/use-toggle'
import { topEndDiscountSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function EditTopEndDiscount(product: IProduct) {
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
								Top:
							</span>
							<span className='font-medium'>
								{product.top ? 'True' : 'False'}
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Discount:
							</span>
							<span className='font-medium'>
								{product.discount ? 'True' : 'False'}
							</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Percent:
							</span>
							<span className='font-medium'>
								{product.percent ? product.percent + '%' : 0}
							</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default EditTopEndDiscount
interface Props {
	product: IProduct
	onToggle: () => void
}
function Forms({ product, onToggle }: Props) {
	const [isDiscount, setIsDiscount] = useState<boolean>(product.discount)

	const pathname = usePathname()
	const form = useForm<z.infer<typeof topEndDiscountSchema>>({
		resolver: zodResolver(topEndDiscountSchema),
		defaultValues: {
			top: product.top,
			discount: product.discount,
			percent: product.percent.toString(),
		},
	})
	function onSublit(values: z.infer<typeof topEndDiscountSchema>) {
		console.log(values)
		const promise = updateProductById(
			product._id,
			{ ...values, percent: values.percent ? +values.percent : 0 },
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
						name='top'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className='flex items-center gap-1'>
										<Checkbox
											onCheckedChange={field.onChange}
											defaultChecked={field.value}
										/>
										<span className='font-space-grotesk'>
											Top Mahsulot <span className='text-red-500'>*</span>
										</span>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='discount'
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<div className='flex items-center gap-1'>
										<Checkbox
											onCheckedChange={checked => {
												field.onChange(checked) // formni yangilaydi
												setIsDiscount(!!checked) // state yangilanadi
												if (!checked) {
													form.setValue('percent', '')
												}
											}}
											defaultChecked={field.value}
										/>
										<span className='font-space-grotesk'>
											Mahsulot Chegirmasi{' '}
											<span className='text-red-500'>*</span>
										</span>
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{isDiscount && (
						<FormField
							control={form.control}
							name='percent'
							render={({ field }) => (
								<FormItem>
									<FormLabel className='font-space-grotesk font-bold'>
										Discount Percent
									</FormLabel>
									<FormControl>
										<Select value={field.value} onValueChange={field.onChange}>
											<SelectTrigger className='w-[50%]'>
												<SelectValue placeholder='Enter the percentage %' />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value='5'>5%</SelectItem>
												<SelectItem value='10'>10%</SelectItem>
												<SelectItem value='15'>15%</SelectItem>
												<SelectItem value='20'>20%</SelectItem>
												<SelectItem value='30'>30%</SelectItem>
												<SelectItem value='40'>40%</SelectItem>
												<SelectItem value='50'>50%</SelectItem>
											</SelectContent>
										</Select>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					)}

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
