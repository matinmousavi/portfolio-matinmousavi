import Paragraph from '../components/Paragraph'

const Introduction = () => {
	return (
		<div className='flex items-center justify-between'>
			<div className='flex flex-col gap-y-4 w-6/12'>
				<h1 className='text-2xl text-textColor'>توسعه دهنده سایت</h1>
				<p
					className='inline-block bg-clip-text text-5xl font-bold
      bg-gradient-to-r to-[#224A34] to-95%  from-[#50B07C]
        text-transparent text-shadow-custom'
				>
					سید متین موسوی
				</p>
				<Paragraph className='my-5'>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه. لورم ایپسوم متن ساختگی با
					تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه.
				</Paragraph>
			</div>
			<div className='w-5/12 flex items-center justify-center'>
				<img src='/images/matinmousavi.png' alt='matinmousavi photo' />
			</div>
		</div>
	)
}

export default Introduction
