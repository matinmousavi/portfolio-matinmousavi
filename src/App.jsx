import Navbar from './components/Navbar'
import Section from './components/Section'
import Introduction from './pages/Introduction'

const App = () => {
	return (
		<div className='py-14'>
			<div className='flex flex-col gap-20'>
				<Navbar />
				<Section>
					<Introduction />
				</Section>
			</div>
		</div>
	)
}

export default App
