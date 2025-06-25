import Navbar from './components/Navbar'
import Section from './components/Section'
import AboutMe from './pages/AboutMe'
import Introduction from './pages/Introduction'

const App = () => {
	return (
		<div className='pt-14'>
			<div className='flex flex-col gap-20'>
				<Navbar />
				<Section>
					<Introduction />
				</Section>
				<Section id='about' bgGray>
					<AboutMe />
				</Section>
			</div>
		</div>
	)
}

export default App
