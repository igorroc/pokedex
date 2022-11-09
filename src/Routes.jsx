import { Route, Routes, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"

export default function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}