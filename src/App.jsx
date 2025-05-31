import { useEffect, useState } from 'react'

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])

	return (
		<div className='py-14'>
			<div className='container flex flex-col gap-20'>
				{/* navbar */}
				<nav className='flex justify-between items-center dark:text-textColor py-3'>
					<ul className='flex justify-center items-center gap-10'>
						<li>
							<a
								href='#about'
								className='item-active px-3 py-2 link-hover'
							>
								درباره من
							</a>
						</li>
						<li>
							<a href='#skills' className='py-2 rounded-2xl link-hover'>
								مهارت ها
							</a>
						</li>
						<li>
							<a href='#projects' className='py-2 rounded-2xl link-hover'>
								پروژه ها
							</a>
						</li>
						<li>
							<a href='#contact' className='py-2 rounded-2xl link-hover'>
								تماس با من
							</a>
						</li>
					</ul>

					{/* switch */}
					<div className='flex justify-center items-center gap-3'>
						{isDarkMode ? (
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z'
								/>
							</svg>
						) : (
							<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='size-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z'
								/>
							</svg>
						)}

						<label className='inline-flex items-center cursor-pointer'>
							<input type='checkbox' className='sr-only peer' checked={isDarkMode} onChange={e => setIsDarkMode(e.target.checked)} />
							<div className="relative w-11 h-6 bg-brand-accent rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-brand-primary peer-checked:after:bg-textColor after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-primary"></div>
						</label>
					</div>
				</nav>

				{/* introduction */}
				<section id='about' className='flex items-center justify-between'>
					<div className='flex flex-col gap-y-10 w-6/12'>
						<h1 className='text-2xl text-textColor'>سید متین موسوی</h1>
						<p
							className='inline-block bg-clip-text text-5xl font-bold
      bg-gradient-to-r to-[#224A34] to-95% py-3  from-[#50B07C]
        text-transparent text-shadow-custom'
						>
							توسعه دهنده سایت
						</p>
						<p className='text-lg text-textColor w-10/12'>
							لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه.
						</p>
					</div>
					<div className='w-5/12 flex items-center justify-center'>
						<img src='/images/matinmousavi.png' alt='matinmousavi photo' />
					</div>
				</section>
			</div>
		</div>
	)
}

export default App
