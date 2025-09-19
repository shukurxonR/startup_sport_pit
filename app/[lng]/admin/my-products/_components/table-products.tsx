import { IProduct } from '@/app.types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'
import Image from 'next/image'

interface Props {
	product: IProduct
	onDelete: () => void
}
function TableProducts({ product, onDelete }: Props) {
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
			<TableCell>${product.price.toFixed()}</TableCell>
			<TableCell>
				{product.published ? (
					<Badge className='bg-green-500'>Active</Badge>
				) : (
					<Badge className='bg-red-500'>Draf</Badge>
				)}
			</TableCell>
			<TableCell className='text-right'>
				<Button variant='outline' size='sm' className='mr-2'>
					Edit
				</Button>
				<Button variant='destructive' size='sm' onClick={onDelete}>
					Delete
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default TableProducts
