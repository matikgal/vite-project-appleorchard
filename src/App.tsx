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
		</>
	)
}

export default App
