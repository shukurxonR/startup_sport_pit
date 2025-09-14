'use client'

import useTranslate from '@/hooks/use-lng'
import { Dot } from 'lucide-react'
import Link from 'next/link'

interface Props {
	label: string
	extra?: string
	description?: string
}

function TopBar({ label, extra, description }: Props) {
	const t = useTranslate()
	return (
		<div>
			<div className='mt-4 h-12 bg-gradient-to-r from-slate-200 to-background'>
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
								<p>{t(extra)}</p>
							</>
						)}
					</div>
				</div>
			</div>

			{description && (
				<div className='container mx-auto my-12 max-w-6xl px-4'>
					<h1 className='font-space-grotesk text-3xl md:text-4xl font-bold'>
						{t(label)}
					</h1>
					<p className='mt-2 max-w-md text-muted-foreground'>
						{t(description)}
					</p>
				</div>
			)}
		</div>
	)
}

export default TopBar
