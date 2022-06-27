import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { editUserFormSchema } from './schemaEditUserForm';
import '../../../../custom.css';

import { getUserAsAdmin, editUserAsAdminData, resetUserData } from '../../../../features/auth/authSlice';

import { useNavigate, useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const EditUserForm = () => {
	const user = useSelector(state => state.auth.userData);

	const [imagePreview, setimagePreview] = useState(undefined);
	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id: userId } = useParams();

	useEffect(() => {
		userId === undefined ||	dispatch(getUserAsAdmin(userId));
	}, [userId]);

	useEffect(() => {
		return () => {
			dispatch(resetUserData());
		};
	}, []);

	useEffect(() => {
		setImage(user.image);
	}, [user]);

	const handleImageChange = (e) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				localStorage.setItem('file', fileReader.result);
				setimagePreview(fileReader.result);
				setImage(fileReader.result);
			}
		};
		fileReader.readAsDataURL(e.target.files[0]);
	};

	const handleSubmit = (data) => {
		setImgError(false);

		if (!image) {
			return setImgError(true);
		}

		if (typeof (image) === 'object' && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
			return setImgError(true);
		}

		if (userId && user.firstName.length > 0 && user.lastName.length > 0) {
			dispatch(editUserAsAdminData(data));
		}

		dispatch(resetUserData());
		navigate('/backoffice/usuarios');
	};

	return (
		<div
			className='mx-auto'
			style={{
				maxWidth: '1000px',
				width: '80%'
			}}
		>
			<Formik
				enableReinitialize
				validationSchema={editUserFormSchema}
				initialValues={user}
				onSubmit={handleSubmit}
			>
				{({ errors, values, handleBlur, handleChange }) => (
					<Form className="flex flex-col  md:m-5">
						<div className="flex flex-col gap-1 mb-3">
							<label>Imagen</label>
							{imagePreview
								? (
									<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '400px' }}>
										<img src={imagePreview} alt={'Imagen cargada'} height={'100%'} />
									</div>
								)
								: image && (<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '90vw', maxHeight: '400px' }}>
									<img src={user.image} alt={`Imagen de la noticia ${user.name}`} height={'100%'} />
								</div>)
							}
							<input
								accept="image/*"
								id="upload-button"
								type="file"
								name='image'
								onChange={e => { handleImageChange(e); }}
								placeholder='Logo'
								className='hidden'
							/>
							<label htmlFor='upload-button'>
								<h3 className="text-center  cursor-pointer hover:text-blue-600" htmlFor>Seleccionar Imagen</h3>
							</label>
							{imgError ? <div className="text-red-800 font-bold my-1 text-left">Archivo no soportado</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label className='text-left'>Nombre</label>
							<input
								className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder='Nombre'
								name='firstName'
								type='text'
								value={values.firstName}
								data-testid="test-id-form-control"
							/>
							{errors.firstName && !values?.firstName ? <div className="text-red-800 font-bold my-1">{errors.firstName}</div> : null}

						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label className='text-left'>Apellido</label>
							<input
								className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder='Apellido'
								name='lastName'
								type='text'
								value={values.lastName}
								data-testid="test-id-form-control"
							/>
							{errors.lastName && !values?.lastName ? <div className="text-red-800 font-bold my-1">{errors.lastName}</div> : null}

						</div>
						<div className=" flex-col hidden gap-1 mb-3">
							<label className='text-left'>Email</label>
							<input
								className="w-full shadow appearance-none hidden border rounded py-3 box-border px-4 text-gray-700"
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder='Email'
								name='email'
								type='email'
								value={values.email}
								data-testid="test-id-form-control"
							/>
							{errors.email && !values?.email ? <div className="text-red-800 font-bold my-1">{errors.email}</div> : null}

						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label>RoleId</label>
							<select
								className="form-login p-3"
								as="select"
								name='roleId'
								value={values.roleId}
								onChange={handleChange}
							>
								<option value=""></option>
								<option value="1" >User</option>
								<option value="2">Admin</option>
							</select>
							{errors.roleId ? <div className="text-red-800 font-bold my-1">{errors.roleId}</div> : null}
						</div>

						<button
							type='submit'
							className='mt-3 text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50'
						>
							Modificar
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

EditUserForm.propTypes = {
	news: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		image: PropTypes.string,
		content: PropTypes.string,
		category: PropTypes.string
	})
};
