'use client'
import { updateProductById } from '@/actions/product-action'
import { IProduct } from '@/app.types'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { addImage, clearImages } from '@/redux/reducers/imagesState'
import { RootState } from '@/redux/store'
import isEqual from 'lodash/isEqual'
import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import EditUploader from './edit-uploader'

function EditProductImage(product: IProduct) {
	const dispatch = useDispatch()
	const pathname = usePathname()

	const mounted = useRef(false)
	const images = useSelector((state: RootState) => state.images.images)
	const isEqualImages = isEqual(product.images, images)

	function onImage() {
		product.images.forEach(image => {
			if (image) dispatch(addImage(image))
		})
	}

	function editImage() {
		const promise = updateProductById(product._id, { images }, pathname)

		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully image updated ✅✅',
			error: 'Image updated error',
		})
	}

	function imageDbRemove(url: string) {
		const filteredImages = product.images.filter(image => image !== url)
		const promise = updateProductById(
			product._id,
			{ images: filteredImages },
			pathname
		)
		console.log(promise)
	}

	useEffect(() => {
		if (!mounted.current) {
			dispatch(clearImages())
			onImage()
			mounted.current = true
		}
	}, [product._id])

	return (
		<Card>
			<CardContent className='flex flex-col'>
				<EditUploader imageDbRemove={imageDbRemove} />
				{!isEqualImages && images.length > 0 && (
					<Button
						className='self-end mt-2 bg-blue-600 hover:bg-blue-700'
						onClick={editImage}
					>
						Submit
					</Button>
				)}
			</CardContent>
		</Card>
	)
}

export default EditProductImage
