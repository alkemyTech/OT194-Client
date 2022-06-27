import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetAuthReq, editUserData } from '../../features/auth/authSlice';
import { Formik } from 'formik';
import { EditUserFormAsUser } from '../share/Forms/EditUserAsUser';
import { editUserFormAsUserSchema } from '../share/Forms/EditUserAsUser/schemaEditUserAsUserForm';
import { showAlert } from '../../features/alert/alertSlice';

export const EditUserFormik = () => {
	const [startValues, setStartValues] = useState({
		firstName: '',
		lastName: '',
		file: ''
	});
	const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) dispatch(showAlert({ show: true, title: 'Error', text: message }));

		if (isSuccess) {
			dispatch(showAlert({
				show: true,
				title: 'Usuario modificado',
				text: 'Información actualizada con éxito'
			}));
		}

		dispatch(resetAuthReq());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	useEffect(() => {
		setStartValues({ firstName: user.firstName, lastName: user.lastName });
	}, [user]);

	return (
		<>
			<Formik
				data-testid="login-test-id-formik"
				enableReinitialize
				initialValues={startValues}
				validationSchema={editUserFormAsUserSchema}
				onSubmit={(values, { setSubmitting }) => {
					dispatch(editUserData({ ...values, id: user.id }));
					setSubmitting(false);
				}}
				component={EditUserFormAsUser}
				validateOnChange={false}
				validateOnBlur={false}
			/>
		</>
	);
};
