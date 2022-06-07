import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, resetAuthReq } from '../../features/auth/authSlice';
import { Formik } from 'formik';
import { RegisterForm } from '../share/Forms/RegisterForm';
import { registerFormSchema } from '../share/Forms/RegisterForm/schemaRegisterForm';
import { showAlert } from '../../features/alert/alertSlice';

export const RegisterFormik = () => {
	const startValues = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		password2: ''
	};
	const { user, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) dispatch(showAlert({ show: true, title: 'Error', text: message }));

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
	);
};
