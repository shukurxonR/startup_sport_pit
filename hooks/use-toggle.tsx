'use client'
import { useState } from 'react'

function useToggle() {
	const [isEdit, setIsEdit] = useState(false)
	const onToggle = () => setIsEdit(prev => !prev)

	return { isEdit, onToggle }
}

export default useToggle
