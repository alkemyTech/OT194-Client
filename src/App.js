import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { useBeforeunload } from 'react-beforeunload';
import { useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { NewsDetail } from './pages/NewsDetail';
import { UserProfile } from './pages/UserProfile';

function App () {
	const { remember } = useSelector((state) => state.auth);

	useBeforeunload(() => {
		if (remember) return;

		localStorage.removeItem('user');
	});

	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route path='/news/:id' element={<NewsDetail />} />
					<Route path='/news' element={<h1>Página de prueba news</h1>} />
					<Route path='/not-found' element={<NotFound />} />
					<Route path='/profile' element={<UserProfile />} />
					<Route path='*' element={<Navigate to='/not-found' />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
