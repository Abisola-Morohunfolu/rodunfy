import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';

function App() {
	// define app routes
	return (
		<Router>
			<Suspense fallback={<div>loading...</div>} />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<AllPosts />} />
			</Routes>
			<Toaster
				toastOptions={{
					style: {
						fontSize: '1.8rem',
					},
				}}
			/>
		</Router>
	);
}

export default App;
