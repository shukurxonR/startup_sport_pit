'use client'
import { updateProductById } from '@/actions/product-action'
import { IProduct } from '@/app.types'
import { chooseCategory } from '@/components/constants'
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
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import useToggle from '@/hooks/use-toggle'
import { nameEndCategorySchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Edit2, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import z from 'zod'

function EditProductName(product: IProduct) {
	const { isEdit, onToggle } = useToggle()

	return (
		<Card>
			<CardContent className='p-5'>
				<div className='flex items-center justify-between'>
					<h1 className='text-[18px] font-medium'>
						Edit Product name and category
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
								Name:
							</span>
							<span className='font-medium'>{product.name}</span>
						</div>
						<div className='flex items-center gap-2'>
							<span className='font-bold font-space-grotesk text-muted-foreground'>
								Category:
							</span>
							<span className='font-medium'>{product.category}</span>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}

export default EditProductName
interface Props {
	product: IProduct
	onToggle: () => void
}
function Forms({ product, onToggle }: Props) {
	const pathname = usePathname()
	const form = useForm<z.infer<typeof nameEndCategorySchema>>({
		resolver: zodResolver(nameEndCategorySchema),
		defaultValues: {
			name: product.name,
			category: product.category,
		},
	})
	function onSublit(values: z.infer<typeof nameEndCategorySchema>) {
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
						name='name'
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
						name='category'
						render={({ field }) => (
							<FormItem>
								<FormLabel>
									Mahsulot categoriyasi <span className='text-red-500'>*</span>
								</FormLabel>
								<FormControl>
									<Select
										defaultValue={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger className='w-full'>
											<SelectValue placeholder='Theme' />
										</SelectTrigger>
										<SelectContent>
											{chooseCategory.map(slect => (
												<SelectItem value={slect.value} key={slect.value}>
													{slect.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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
