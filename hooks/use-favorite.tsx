'use client'
import {
	addProductFavorite,
	removeProductFavorite,
} from '@/actions/user-action'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'

export function useFavorite(userId?: string) {
	const [favorites, setFavorites] = useState<string[]>([])

	useEffect(() => {
		const stored = localStorage.getItem('favorites')
		if (stored) setFavorites(JSON.parse(stored))
	}, [])

	function saveToLocal(items: string[]) {
		setFavorites(items)
		localStorage.setItem('favorites', JSON.stringify(items))
	}

	async function toggleFavorite(productId: string) {
		const stored = localStorage.getItem('favorites')
		let current: string[] = stored ? JSON.parse(stored) : []

		if (current.includes(productId)) {
			current = current.filter(id => id !== productId)
			if (userId) {
				const promise = removeProductFavorite(userId, productId) // backend
				toast.promise(promise, {
					loading: 'Loading...',
					success: 'Deleted favorites ✅',
					error: 'Deleted error',
				})
			}
		} else {
			current = [...current, productId]
			if (userId) {
				const promise = addProductFavorite(userId, productId) // backend
				toast.promise(promise, {
					loading: 'Loading...',
					success: 'Added favorites ✅',
					error: 'Added error',
				})
			}
		}
		saveToLocal(current)
	}
	const isFavorite = (productId: string) => favorites.includes(productId)

	return { toggleFavorite, isFavorite, favorites }
}

export default useFavorite
