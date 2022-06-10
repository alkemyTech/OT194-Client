import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate
} from 'react-router-dom';
import './App.css';
import { useBeforeunload } from 'react-beforeunload';
import { useSelector, useDispatch } from 'react-redux';
import { getOrganizationData, resetOrganizationReq } from './features/organization/organizationSlice';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { BackOfficeOrganization } from './pages/BackOfficeOrganization';
import { NewsDetail } from './pages/NewsDetail';
import { UserProfile } from './pages/UserProfile';
import { News } from './components/News';
import { ContactsList } from './components/ContactsList/ContactsList';
import Spinner from './components/Spinner';
import { BackOfficeTestimonials } from './pages/BackOfficeTestimonials';

function App () {
	const { remember } = useSelector((state) => state.auth);
	const { isError, isSuccess, isLoading } = useSelector((state) => state.organization);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOrganizationData());
	}, []);

	useEffect(() => {
		dispatch(resetOrganizationReq());
	}, [isError, isSuccess, dispatch]);

	useBeforeunload(() => {
		if (remember) return;

		localStorage.removeItem('user');
	});

	return (
		<Router>
			<div className='App'>
				{isLoading && <Spinner />}
				<Header />
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/backoffice/edit-organization'
						element={<BackOfficeOrganization />}
					/>
					<Route
						path='/backoffice/testimonials'
						element={<BackOfficeTestimonials />}
					/>
					<Route path='/register' element={<Register />} />
					<Route path='/nosotros' element={<h1>NOSOTROS</h1>} />
					<Route path='/testimonios' element={<h1>TESTIMONIOS</h1>} />
					<Route path='/contacto' element={<h1>CONTACTO</h1>} />
					<Route path='/contribuye' element={<h1>CONTRIBUYE</h1>} />
					<Route path='/news/:id' element={<NewsDetail />} />
					<Route path='/news' element={<News/>} />
					<Route path='/not-found' element={<NotFound />} />
					<Route path='/profile' element={<UserProfile />} />
					<Route path='*' element={<Navigate to='/not-found' />} />
				</Routes>
				<ContactsList />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
