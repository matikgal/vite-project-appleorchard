<<<<<<< Updated upstream
import HomePage from './pages/HomePage'
import OurOrchard from './pages/OurOrchard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path="/Home" element={<HomePage />} />
					<Route path="/OurOrchard" element={<OurOrchard />} />
				</Routes>
			</BrowserRouter>
=======
import NavBar from './components/NavBar'
import HeroImage from './components/HeroImage'
import HomePageSection1 from './components/HomePageSection1'
import OurOrchardHeroImg from './components/ourOrchardHeroImg'
import HomePageSection2 from './components/HomePageSection2'

function App() {
	return (
		<>
			<NavBar />
			<HeroImage />
			<HomePageSection1 />
			<HomePageSection2 />
			<OurOrchardHeroImg />
>>>>>>> Stashed changes
		</>
	)
}

export default App
