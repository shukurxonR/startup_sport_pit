interface Props {
	title: string
	description: string
}

function Header({ description, title }: Props) {
	return (
		<div className='mt-6 flex flex-col gap-1'>
			<h1 className='font-space-grotesk text-2xl   max-md:text-xl font-bold tracking-wider'>
				{title}
			</h1>
			<p className='text-[10px] font-medium text-muted-foreground'>
				{description}
			</p>
		</div>
	)
}

export default Header
