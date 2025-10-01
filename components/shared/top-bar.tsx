'use client'

import useTranslate from '@/hooks/use-lng'
import { Dot } from 'lucide-react'
import Link from 'next/link'

interface Props {
	label: string
	extra?: string
}

function TopBar({ label, extra }: Props) {
	const t = useTranslate()
	return (
		<div>
			<div className='mt-4 h-12 bg-gradient-to-r from-slate-200 to-background max-md:px-3'>
				<div className='container flex mx-auto max-w-6xl w-full items-center '>
					<div className='flex items-center'>
						<Link
							href={'/'}
							className='opacity-80 transition-opacity hover:opacity-95'
						>
							{t('Home')}
						</Link>
						<Dot className='size-12 text-muted-foreground' />
						<p>{t(label)}</p>
						{extra && (
							<>
								<Dot className='size-12 text-muted-foreground' />
								<p className='line-clamp-1'>{t(extra)}</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default TopBar
