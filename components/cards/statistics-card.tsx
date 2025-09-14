import { LucideIcon } from 'lucide-react'
import { IconType } from 'react-icons/lib'

interface Props {
	label: string
	value: string
	Icon: LucideIcon | IconType
}

function StatisticsCard({ label, value, Icon }: Props) {
	return (
		<div className='flex items-center justify-between p-4 rounded-md bg-background'>
			<div className='flex flex-col gap-2'>
				<div className='text-muted-foreground'>{label}</div>
				<div className='text-2xl font-bold'>{value}</div>
			</div>
			<Icon className='!size-12 text-primary' />
		</div>
	)
}

export default StatisticsCard
