'use client'

import { services } from '@/components/constants'
import { motion } from 'framer-motion'

export default function Services() {
	return (
		<section className='max-w-6xl mx-auto my-10 max-md:px-3 '>
			<h1 className='text-2xl py-6 font-bold text-center'>Services</h1>
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className='grid gap-4 max-md:grid-cols-2 lg:grid-cols-4'
			>
				{services.map((service, idx) => (
					<motion.div
						key={idx}
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: idx * 0.2, duration: 0.5 }}
						viewport={{ once: true }}
						className='flex flex-col items-center text-center bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950 
                       rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-zinc-100 dark:border-zinc-800'
					>
						<service.icon className='w-12 h-12 text-indigo-600 mb-4' />
						<h3 className='text-lg font-semibold mb-2 max-md:text-sm'>
							{service.title}
						</h3>
						<p className='text-[12px] text-zinc-600 dark:text-zinc-400'>
							{service.description}
						</p>
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}
