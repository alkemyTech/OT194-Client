import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import {
	getActivity,
	activitiesActions,
	modifyActivity,
	createActivity
} from '../../../../features/activities/activitiesSlice';
import { Field, Form, Formik } from 'formik';
import { activitiesFormSchema } from './schemaActivitiesForm';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const ActivitiesForm = () => {
	const activity = useSelector(state => state.activities.activity);
	const [imagePreview, setimagePreview] = useState(undefined);
	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const { id: activityId } = useParams();

	useEffect(() => {
		activityId === undefined || dispatch(getActivity(activityId));
	}, [activityId]);

	useEffect(() => {
		return () => {
			dispatch(activitiesActions.resetActivity());
		};
	}, []);

	useEffect(() => {
		setImage(activity.image);
	}, [activity]);

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

		if (!image) return setImgError(true);

		if (typeof (image) === 'object' && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
			return setImgError(true);
		}

		if (location.pathname !== '/backoffice/activities/create') {
			dispatch(modifyActivity(data));
			navigate('/backoffice/activities');
		} else {
			dispatch(createActivity(data));
			navigate('/backoffice/activities');
		}

		dispatch(activitiesActions.resetActivity());
	};

	return (
		<div
			className='mx-auto my-5'
			style={{
				maxWidth: '1000px',
				width: '80%'
			}}
		>
			<Formik
				enableReinitialize
				validationSchema={activitiesFormSchema}
				initialValues={activity}
				onSubmit={handleSubmit}
			>
				{({ errors, setFieldValue, values, handleBlur, handleChange }) => (
					<Form className="flex flex-col">
						<div className="flex flex-col gap-1 mb-3">
							<label>Imagen</label>
							{imagePreview
								? (
									<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '400px' }}>
										<img src={imagePreview} alt={'Imagen cargada'} height={'100%'} />
									</div>
								)
								: image && (<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '90vw', maxHeight: '400px' }}>
									<img src={activity.image} alt={`Imagen de la noticia ${activity.name}`} height={'100%'} />
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
							<label>Nombre</label>
							<Field
								className="form-login p-3"
								type="text"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && !values?.name ? <div className="text-red-800 font-bold my-1">{errors.name}</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label>Contenido</label>
							<CKEditor
								editor={ClassicEditor}
								config={{
									toolbar: {
										items: [
											'heading',
											'|',
											'|',
											'bold',
											'italic',
											'|',
											'link',
											'|',
											'bulletedList',
											'numberedList',
											'|',
											'|',
											'insertTable',
											'|',
											'outdent',
											'indent',
											'blockQuote',
											'|',
											'undo',
											'redo'
										],
										shouldNotGroupWhenFull: true
									}
								}}
								data={values.content}
								onChange={(event, editor) => {
									const data = editor.getData();
									setFieldValue('content', data);
								}}
							/>
							{errors.content ? <div className="text-red-800 font-bold my-1">{errors.content}</div> : null}
						</div>
						<button
							type='submit'
							className='mt-3 text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50'
						>
							{(location.pathname !== '/backoffice/activities/create') ? 'Modificar' : 'Crear'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

ActivitiesForm.propTypes = {
	activity: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		content: PropTypes.string
	})
};
