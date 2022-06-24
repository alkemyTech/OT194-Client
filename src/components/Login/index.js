import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, resetAuthReq, setRemember } from '../../features/auth/authSlice';
import { Formik } from 'formik';
import { LoginForm } from '../share/Forms/LoginForm';
import { loginFormSchema } from '../share/Forms/LoginForm/schemaLoginForm';
import { showAlert } from '../../features/alert/alertSlice';

export const LoginFormik = () => {
	const startValues = {
		email: '',
		password: '',
		rememberMe: false
	};
	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) dispatch(showAlert({ show: true, title: 'Error', text: message, action: () => {} }));

		if (isSuccess || user) {
			navigate('/');
		};

		dispatch(resetAuthReq());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	return (
		<>
			<Formik
				data-testid="login-test-id-formik"
				enableReinitialize
				initialValues={startValues}
				validationSchema={loginFormSchema}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(login(values));
					if (values.rememberMe) dispatch(setRemember());
					setSubmitting(false);
				}}
				component={LoginForm}
				validateOnChange={false}
				validateOnBlur={false}
			/>
		</>
	);
};
