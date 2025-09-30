'use client'

import { Button } from '@/components/ui/button'
import { UploadDropzone } from '@/lib/uploadthing'
import { addImage, removeImage } from '@/redux/reducers/imagesState'
import { RootState } from '@/redux/store'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
	imageDbRemove?: (url: string) => void
}

export default function EditUploader({ imageDbRemove }: Props) {
	const dispatch = useDispatch()
	const images = useSelector((state: RootState) => state.images.images)
	console.log(images)

	return (
		<div className='flex flex-col gap-2 '>
			<div className='flex flex-col gap-2'>
				{images.length < 3 && (
					<div className='flex items-center justify-center'>
						<UploadDropzone
							className='w-full h-[210px] cursor-pointer'
							config={{ appendOnPaste: true, mode: 'auto' }}
							appearance={{
								container: {
									border: '1px dotted blue',
								},
								uploadIcon: {
									color: 'blue',
									fontSize: '50px', // 👈 ikonkani kattalashtirish
									width: '50px', // optional
									height: '50px', // optional
								},
							}}
							endpoint='imageUploader'
							onClientUploadComplete={res => {
								if (res && res[0] && res[0].ufsUrl) {
									dispatch(addImage(res[0].ufsUrl))
								} else {
									// toast.error('Image upload failed')
								}
							}}
							onUploadError={error => {
								console.error('Upload error:', error)
								alert('❌ Upload failed')
							}}
						/>
					</div>
				)}
				<div className='grid grid-cols-3 gap-2'>
					{images.map((url, index) => (
						<div
							key={index}
							className='relative w-full h-32 rounded-lg overflow-hidden border shadow-sm group'
						>
							<Image
								src={url}
								alt={`upload-${index}`}
								fill
								className='object-cover'
							/>
							<Button
								type='button'
								className='absolute top-1 right-1 rounded-full bg-black/60 p-1 opacity-0 group-hover:opacity-100 transition'
								onClick={() => {
									dispatch(removeImage(url))
									imageDbRemove?.(url)
								}}
							>
								<X className='w-4 h-4 text-white' />
							</Button>
						</div>
					))}
				</div>
			</div>

			<p className='text-xs text-muted-foreground'>
				You need at least 3 images. Pay attention to the quality of the pictures
				you add (important)
			</p>
		</div>
	)
}
