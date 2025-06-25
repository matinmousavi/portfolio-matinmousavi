const Section = ({ id = '#', bgGray = false, children }) => {
	return (
		<section id={id} className={`${bgGray ? 'bg-bgGray' : 'bg-transparent'} py-8 rounded-3xl`}>
			<div className='container mx-auto'>{children}</div>
		</section>
	)
}

export default Section
