import { IoDownloadOutline } from 'react-icons/io5'

const DownloadResumeButton = () => {
	return (
		<a
			href='/images/resume.png'
			download='matinmousavi-resume.png'
			className='flex items-center justify-between w-1/3 bg-brand-accent hover:shadow-[0_0_14px_4px_#31E684] text-white py-2 px-4 rounded-3xl  transition'
		>
			دانلود رزومه
			<div className='bg-[#134D2D] p-1.5 rounded-full'>
				<div className='text-2xl bg-[#052D13] font-bold rounded-full p-1.5'>
					<IoDownloadOutline />
				</div>
			</div>
		</a>
	)
}

export default DownloadResumeButton
