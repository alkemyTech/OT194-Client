import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, resetAuthReq } from '../../features/auth/authSlice';
import { showAlert } from '../../actions/alertsActions';
import { Formik } from 'formik';
import { LoginForm } from '../share/Forms/LoginForm';
import { loginFormSchema } from '../share/Forms/LoginForm/schemaLoginForm';

export const LoginFormik = () => {
	const startValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};
	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) dispatch(showAlert(true, 'Error', message));

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
					setSubmitting(false);
				}}
				component={LoginForm}
				validateOnChange={false}
				validateOnBlur={false}
			/>
		</>
	);
};
