import { useEffect, useState } from 'react'

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDarkMode])
	return (
		<nav className='flex justify-between items-center dark:text-textColor py-3'>
			<ul className='flex justify-center items-center gap-10'>
				<li>
					<a href='#about' className='item-active px-3 py-2 link-hover'>
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
					<div className="relative w-11 h-6 bg-brand-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-brand-accent peer-checked:after:bg-textColor  after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-primary"></div>
				</label>
			</div>
		</nav>
	)
}

export default Navbar
