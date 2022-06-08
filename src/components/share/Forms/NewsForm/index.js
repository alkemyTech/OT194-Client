import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { newsFormSchema } from '../../Forms/NewsForm/schemaNewsForm';
import '../../../../custom.css';

import {
	modifyNews,
	createNews,
	newsActions
	// getNews
} from '../../../../features/news/newsSlice';
import { useParams } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const NewsForm = () => {
	/* TODO:
    Falta testear la conexion con los endpoints
    Falta traer la novedad correctamente - se rompe todo por el endpoint
    Falta subir la imagen correctamente
    Las categorias estan harcodeadas tal y como lo pedia la story
  */

	const news = useSelector(state => state.news.openedNews);

	const [image, setImage] = useState(undefined);
	const [imgError, setImgError] = useState(false);
	const dispatch = useDispatch();

	const { id: newsId } = useParams();

	useEffect(() => {
	// 	dispatch(getNews(newsId));
	}, []);

	const handleSubmit = (data) => {
		setImgError(false);

		if (image && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
			return setImgError(true);
		}

		if (newsId >= 0 && news.title.length > 0) {
			dispatch(modifyNews(newsId, data, image));
		} else {
			dispatch(createNews(data, image));
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
				{({ errors, setFieldValue, values }) => (
					<Form className="flex flex-col">
						<div className="flex flex-col gap-1 mb-3">
							<label>Imagen</label>
							<input
								type="file"
								name='logo'
								onChange={(e) => setImage(e.target.files[0])}
								placeholder='Logo'
							/>
							{imgError ? <div className="text-red-800 font-bold my-1">Archivo no soportado</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label>Titulo</label>
							<Field
								className="form-login p-3"
								type="text"
								name="title"
							/>
							{errors.title ? <div className="text-red-800 font-bold my-1">{errors.title}</div> : null}
						</div>
						<div className="flex flex-col gap-1 mb-3">
							<label>Categoria</label>
							<Field
								className="form-login p-3"
								as="select"
								name='category'
							>
								<option value=""></option>
								<option value="Comunidad">Comunidad</option>
								<option value="Merenderos">Merenderos</option>
							</Field>
							{errors.category ? <div className="text-red-800 font-bold my-1">{errors.category}</div> : null}
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
							{(newsId > 0 && news.title.length > 0) ? 'Modificar' : 'Crear'}
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
		title: PropTypes.string,
		image: PropTypes.string,
		content: PropTypes.string,
		category: PropTypes.string
	})
};
