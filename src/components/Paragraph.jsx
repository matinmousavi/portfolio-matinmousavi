const Paragraph = ({children, className	}) => {
	return (
		<p className={`${className} px-5 leading-8 relative after:absolute after:content-[""] after:w-2 after:rounded-tr-2xl after:rounded-br-2xl after:h-full after:bg-border-default after:top-0 after:right-0 text-lg text-textColor w-10/12 line-shadow-custom`}>
			{children}
		</p>
	)
}

export default Paragraph
