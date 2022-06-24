import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css';
import { useBeforeunload } from 'react-beforeunload';
import { useSelector, useDispatch } from 'react-redux';
import { getOrganizationData, resetOrganizationReq } from './features/organization/organizationSlice';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Testimonios } from './pages/Testimonios';
import { NotFound } from './pages/NotFound';
import { BackOfficeOrganization } from './pages/BackOfficeOrganization';
import { NewsDetail } from './pages/NewsDetail';
import { UserProfile } from './pages/UserProfile';
import { News } from './pages/News';
import { ContactsList } from './components/ContactsList/ContactsList';
import Spinner from './components/Spinner';
import { BackOfficeTestimonials } from './pages/BackOfficeTestimonials';
import { ActivityDetail } from './pages/ActivityDetail';
import { BackOfficeScreen } from './pages/BackOfficeScreen';
import ProtectRoute from './pages/routesProtection/ProtectRoute';
import AdminCheck from './pages/routesProtection/AdminCheck';
import { Staff } from './pages/Staff';
import { ContactUs } from './pages/ContactUs';
import { NewsList } from './components/NewsList/NewsList';
import { NewsForm } from './components/share/Forms/NewsForm';
import { TestimonialsForm } from './components/share/Forms/TestimonialsForm';

function App () {
	const { remember } = useSelector((state) => state.auth);
	const { isError, isSuccess, isLoading } = useSelector((state) => state.organization);
	const dispatch = useDispatch();
	const location = useLocation();

	const transitions = useTransition(location, {
		from: { opacity: 0, duration: 100 },
		enter: { opacity: 1, duration: 200 },
		leave: { opacity: 0 },
		exitBeforeEnter: true
	});

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
		<div className='App'>
			{isLoading && <Spinner />}
			<Header />
			<div className='h-16' />
			{transitions((props, item) => {
				return <animated.div style={props}>
					<Routes location={item}>
						<Route path='/' element={<Dashboard />} />
						<Route path='/not-found' element={<NotFound />} />
						<Route path='*' element={<Navigate to='/not-found' />} />
						<Route path='/nosotros' element={<Staff />} />
						<Route path='/news' element={<News/>} />
						<Route path='/news/:id' element={<NewsDetail />} />
						<Route path='/actividades/:id' element={<ActivityDetail />} />
						<Route path='/testimonios' element={<Testimonios />} />
						<Route path='/testimonios/add' element={<TestimonialsForm />} />
						<Route path='/contacto' element={<ContactUs />} />
						<Route path='/contribuye' element={<h1>CONTRIBUYE</h1>} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						<Route element={<ProtectRoute />} >
							<Route path='/backoffice' element={<BackOfficeScreen/>} />
							<Route path='/profile' element={<UserProfile />} />
							<Route element={<AdminCheck />} >
								<Route
									path='/backoffice/organization'
									element={<BackOfficeOrganization />}
								/>
								<Route
									path='/backoffice/testimonials'
									element={<BackOfficeTestimonials />}
								/>
								<Route
									path='/backoffice/news'
									element={<NewsList />}
								/>
								<Route
									path='/backoffice/news/create'
									element={<NewsForm />}
								/>
								<Route
									path='/backoffice/news/:id'
									element={<NewsForm />}
								/>
							</Route>
						</Route>
					</Routes>
				</animated.div>;
			})}
			<ContactsList />
			<Footer />
		</div>
	);
}

export default App;
