interface Props {
	title: string
	description: string
}

function Header({ description, title }: Props) {
	return (
		<div className='pt-10 flex flex-col gap-1 px-2'>
			<h1 className='font-space-grotesk text-2xl font-bold tracking-wider'>
				{title}
			</h1>
			<p className='text-sm font-medium text-muted-foreground'>{description}</p>
		</div>
	)
}

export default Header
