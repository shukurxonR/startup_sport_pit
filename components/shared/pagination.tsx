'use client'

import { formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '../ui/button'

interface Props {
	pageNumber: number
	isNext: boolean
}

function Pagination({ isNext, pageNumber }: Props) {
	const searchParams = useSearchParams()
	const router = useRouter()

	if (!isNext && pageNumber === 1) return null

	function onPagination(direction: 'prev' | 'next') {
		const nextPageNumber =
			direction === 'prev' ? pageNumber - 1 : pageNumber + 1

		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: 'page',
			value: nextPageNumber.toString(),
		})
		router.push(newUrl)
	}

	return (
		<div className='w-full flex items-center justify-center gap-4 my-4'>
			<Button onClick={() => onPagination('prev')} disabled={pageNumber === 1}>
				Prev
			</Button>
			<h1 className='text-xl'>{pageNumber}</h1>
			<Button onClick={() => onPagination('next')} disabled={!isNext}>
				Next
			</Button>
		</div>
	)
}

export default Pagination
