import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { testimonialsFormSchema } from '../../Forms/TestimonialsForm/schemaTestimonialsForm';
import '../../../../custom.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
	modifyTestimony,
	createTestimony,
	testimonialsActions
	, getTestimony,
	getAllTestimonials
} from '../../../../features/testimonials/testimonialsSlice';

import { Field, Form, Formik } from 'formik';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const TestimonialsForm = () => {
	/* TODO:
    Falta subir la imagen correctamente
  */

	const testimony = useSelector(state => state.testimonials.openedTestimony);
	const [imagePreview, setimagePreview] = useState(undefined);
	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

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

	const handleSubmit = async (data) => {
		setImgError(false);

		if (!image) return setImgError(true);

		if (typeof (image) === 'object' && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
			return setImgError(true);
		}
		setLoading(true);

		if (testimonyId && testimony.name.length > 0) {
			await dispatch(modifyTestimony(data));
			await dispatch(getAllTestimonials());
			location.pathname === '/testimonios/add' ? navigate('/testimonios') : navigate('/backoffice/testimonials');
		} else {
			await dispatch(createTestimony(data));
			await dispatch(getAllTestimonials());
			location.pathname === '/testimonios/add' ? navigate('/testimonios') : navigate('/backoffice/testimonials');
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
							{imagePreview
								? (
									<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '400px' }}>
										<img src={imagePreview} alt={'Imagen cargada'} height={'100%'} />
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
								onChange={e => { handleImageChange(e); }}
								placeholder='Logo'
								className='hidden'
							/>
							<label htmlFor='upload-button'>
								<h3 className="text-center  cursor-pointer hover:text-blue-600" htmlFor>Cargar una imagen</h3>
							</label>
							{imgError ? <div className="text-red-800 font-bold my-1 text-left">Archivo no soportado</div> : null}
						</div>

						<div className="flex flex-col gap-1 mb-3">
							<label className="text-left">Nombre</label>
							<Field
								className="form-login p-3"
								type="text"
								name="name"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.name}
							/>
							{errors.name && !values?.name ? <div className="text-left text-red-800 font-bold my-1">{errors.name}</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label className="text-left">Contenido</label>
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
							<span className="text-left">{values.content && `${values.content.length - 7} Caracteres`}</span>
							{errors.content ? <div className="text-left text-red-800 font-bold my-1">{errors.content}</div> : null}
						</div>
						<button
							type='submit'
							disabled={loading}
							className={`${loading ? 'opacity-50 cursor-not-allowed' : undefined} mt-3 flex justify-center items-center text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50`}
						>
							{(testimonyId > 0 && testimony?.name?.length > 0) ? 'Modificar' : 'Crear'}
							{loading && (
								<svg role="status" className="w-5 h-5 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
									<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
								</svg>
							)}
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
