import { updateProductById } from '@/actions/product-action'
import { IProduct } from '@/app.types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import { cn, formatPrice } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	product: IProduct
	onDelete: () => void
}
function TableProducts({ product, onDelete }: Props) {
	const pathname = usePathname()

	function onUpdate() {
		let promise
		if (product.published === true) {
			promise = updateProductById(product._id, { published: false }, pathname)
		} else {
			promise = updateProductById(product._id, { published: true }, pathname)
		}
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated ✅',
			error: 'Updated Error',
		})
	}
	return (
		<TableRow key={product._id}>
			<TableCell className='flex items-center gap-3'>
				<Image
					src={product.images?.[0]}
					alt={product.name}
					width={40}
					height={40}
					className='rounded-md border'
				/>
				<span>{product.name}</span>
			</TableCell>
			<TableCell>{product.category}</TableCell>
			<TableCell>
				{formatPrice(product.price - (product.price * product.percent) / 100)}{' '}
			</TableCell>
			<TableCell>
				<Badge
					className={cn(
						'cursor-pointer',
						product.published === true
							? 'bg-green-500 hover:bg-red-500'
							: 'bg-red-500 hover:bg-green-500'
					)}
					onClick={onUpdate}
				>
					{product.published === true ? 'Active' : 'Draft'}
				</Badge>
			</TableCell>
			<TableCell className='text-right'>
				<Link href={`${pathname}/${product._id}`}>
					<Button variant='outline' size='sm' className='mr-2'>
						Edit
					</Button>
				</Link>
				<Button variant='destructive' size='sm' onClick={onDelete}>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default TableProducts
