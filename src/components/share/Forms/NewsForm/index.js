import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { newsFormSchema } from './schemaNewsForm';
import '../../../../custom.css';
import {
	getNews,
	modifyNews,
	createNews,
	newsActions
} from '../../../../features/news/newsSlice';

import { useNavigate, useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const NewsForm = () => {
	/* TODO:
    Falta testear la conexion con los endpoints
    Falta traer la novedad correctamente - se rompe todo por el endpoint
    Falta subir la imagen correctamente
    Las categorias estan harcodeadas tal y como lo pedia la story
  */

	const news = useSelector(state => state.news.openedNews);

	const [imagePreview, setimagePreview] = useState(undefined);
	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id: newsId } = useParams();

	useEffect(() => {
		newsId === undefined ||	dispatch(getNews(newsId));
	}, [newsId]);

	useEffect(() => {
		return () => {
			dispatch(newsActions.resetOpenedNews());
		};
	}, []);

	useEffect(() => {
		setImage(news.image);
	}, [news]);

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

		if (newsId && news.name.length > 0) {
			dispatch(modifyNews(data));
			navigate('/backoffice/news');
		} else {
			dispatch(createNews(data));
			navigate('/backoffice/news');
		}

		dispatch(newsActions.resetOpenedNews());
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
				validationSchema={newsFormSchema}
				initialValues={news}
				onSubmit={handleSubmit}
			>
				{({ errors, setFieldValue, values, handleBlur, handleChange }) => (
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
									<img src={news.image} alt={`Imagen de la noticia ${news.name}`} height={'100%'} />
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
								<h3 className="text-center  cursor-pointer hover:text-blue-600" htmlFor>Upload your photo</h3>
							</label>
							{imgError ? <div className="text-red-800 font-bold my-1 text-left">Archivo no soportado</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label className='text-left'>Titulo</label>
							<input
								className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder='Titulo'
								name='name'
								type='text'
								value={values.name}
								data-testid="test-id-form-control"
							/>
							{errors.name && !values?.name ? <div className="text-red-800 font-bold my-1">{errors.name}</div> : null}

						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label className='text-left'>Contenido</label>
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
							{errors.content ? <div className="text-red-800 font-bold my-1 text-left">{errors.content}</div> : null}
						</div>
						<button
							type='submit'
							className='mt-3 text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50'
						>
							{(newsId > 0) ? 'Modificar' : 'Crear'}
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

NewsForm.propTypes = {
	news: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		image: PropTypes.string,
		content: PropTypes.string,
		category: PropTypes.string
	})
};
