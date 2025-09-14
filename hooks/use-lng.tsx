import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'

function useLng() {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)

	return t
}

export default useLng
