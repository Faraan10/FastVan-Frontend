import Navbar from "./components/Navbar";
import CreateOrder from "./components/CreateOrder";
import UpdateOrder from "./components/UpdateOrder";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<hr />
				<Routes>
					<Route path="/" element={<CreateOrder />} />
					<Route path="/update/:id" element={<UpdateOrder />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
