import Navbar from "./components/Navbar";
import CreateOrder from "./components/CreateOrder";
import UpdateOrder from "./components/UpdateOrder";
import TrackOrder from "./components/TrackOrder";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<CreateOrder />} />
					<Route path="/update/:id" element={<UpdateOrder />} />
					<Route path="track" element={<TrackOrder />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
