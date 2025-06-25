const Section = ({ id = '#', className = 'bg-transparent', children }) => {
	return (
		<section id={id} className={className}>
			<div className='container mx-auto'>{children}</div>
		</section>
	)
}

export default Section
