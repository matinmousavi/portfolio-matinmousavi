import Navbar from './assets/components/Navbar'
import Introduction from './assets/pages/Introduction'

const App = () => {
	return (
		<div className='py-14'>
			<div className='container flex flex-col gap-20'>
				<Navbar />
				<Introduction />
			</div>
		</div>
	)
}

export default App
