<<<<<<< HEAD
import React from 'react';
=======
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, resetAuthReq } from '../../features/auth/authSlice';
import { showAlert } from '../../actions/alertsActions';
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
import { Formik } from 'formik';
import { RegisterForm } from '../share/Forms/RegisterForm';
import { registerFormSchema } from '../share/Forms/RegisterForm/schemaRegisterForm';

export const RegisterFormik = () => {
	const startValues = {
		firstName: '',
		lastName: '',
		email: '',
<<<<<<< HEAD
		password: ''
	};

	return (
		<Formik
			data-testid="test-id-formik"
			enableReinitialize
			initialValues={startValues}
			validationSchema={registerFormSchema}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false);
				alert(JSON.stringify(values, null, 2));
			}}
			component={RegisterForm}
		/>
=======
		password: '',
		password2: ''
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
				data-testid="test-id-formik"
				enableReinitialize
				initialValues={startValues}
				validationSchema={registerFormSchema}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(register(values));
					setSubmitting(false);
				}}
				component={RegisterForm}
				validateOnChange={false}
				validateOnBlur={false}
			/>
		</>
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
	);
};
