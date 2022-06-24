import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { testimonialsFormSchema } from '../../Forms/TestimonialsForm/schemaTestimonialsForm';
import '../../../../custom.css';

import {
	modifyTestimony,
	createTestimony,
	testimonialsActions
	// getTestimony
	, getTestimony
} from '../../../../features/testimonials/testimonialsSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const TestimonialsForm = () => {
	/* TODO:
    Falta testear la conexion con los endpoints
    Falta traer el testimonio correctamente
    Falta subir la imagen correctamente
  */

	const testimony = useSelector(state => state.testimonials.openedTestimony);
	const [imagePreview, setimagePreview] = useState({ preview: '', raw: '' });
	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id: testimonyId } = useParams();

	useEffect(() => {
		testimonyId === undefined || dispatch(getTestimony(testimonyId));
	}, [testimonyId]);

	useEffect(() => {
		return () => {
			dispatch(testimonialsActions.resetOpenedTestimony());
		};
	}, []);

	useEffect(() => {
		setImage(testimony.image);
	}, [testimony]);

	const handleImageChange = (e) => {
		setimagePreview({
			preview: URL.createObjectURL(e.target.files[0]),
			raw: e.target.files[0]
		});
		setImage(e.target.files[0]);
	};

	const handleSubmit = (data) => {
		setImgError(false);

		if (!image) return setImgError(true);

		if (typeof (image) === 'object' && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
			return setImgError(true);
		}

		if (testimonyId >= 0 && testimony.name.length > 0) {
			dispatch(modifyTestimony(data));
			navigate('/backoffice/testimonials');
		} else {
			dispatch(createTestimony(data, image));
			navigate('/backoffice/testimonials');
		}

		dispatch(testimonialsActions.resetOpenedTestimony());
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
				validationSchema={testimonialsFormSchema}
				initialValues={testimony}
				onSubmit={handleSubmit}
			>
				{({ errors, setFieldValue, values, handleBlur, handleChange }) => (
					<Form className="flex flex-col">
						<div className="flex flex-col gap-1 mb-3">
							<label>Imagen</label>
							{imagePreview.preview
								? (
									<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '400px' }}>
										<img src={imagePreview.preview} alt={'Imagen cargada'} height={'100%'} />
									</div>
								)
								: image && (<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '90vw', maxHeight: '400px' }}>
									<img src={testimony.image} alt={`Imagen de la noticia ${testimony.name}`} height={'100%'} />
								</div>)
							}
							<input
								accept="image/*"
								id="upload-button"
								type="file"
								name='image'
								onChange={e => { handleChange(e); handleImageChange(e); }}
								placeholder='Logo'
								className='hidden'
							/>
							<label htmlFor='upload-button'>
								<h3 className="text-center  cursor-pointer hover:text-blue-600" htmlFor>Upload your photo</h3>
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
							{errors.name ? <div className="text-red-800 font-bold my-1">{errors.name}</div> : null}
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
							{(testimonyId > 0 && testimony?.name?.length > 0) ? 'Modificar' : 'Crear'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

TestimonialsForm.propTypes = {
	testimony: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		image: PropTypes.string,
		content: PropTypes.string,
		category: PropTypes.string
	})
};
