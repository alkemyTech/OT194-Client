import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthReq, getUserData, editUserData } from '../../features/auth/authSlice';
import { Formik } from 'formik';
import { EditUserForm } from '../share/Forms/EditUserForm';
import { editUserFormSchema } from '../share/Forms/EditUserForm/schemaEditUserForm';
import { showAlert } from '../../features/alert/alertSlice';

export const EditUserFormik = () => {
	const [startValues, setStartValues] = useState({
		firstName: '',
		lastName: '',
		roleId: ''
	});

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

	useEffect(() => {
		const data = dispatch(getUserData());
		setStartValues(data);
	}, [user]);

	return (
		<>
			<Formik
				data-testid="login-test-id-formik"
				enableReinitialize
				initialValues={startValues}
				validationSchema={editUserFormSchema}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(editUserData(values));
					setSubmitting(false);
				}}
				component={EditUserForm}
				validateOnChange={false}
				validateOnBlur={false}
			/>
		</>
	);
};
