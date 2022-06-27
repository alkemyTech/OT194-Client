import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../../../custom.css';
import {

	newsActions
} from '../../../../features/news/newsSlice';

import { useNavigate, useParams } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { getAllSlides, slidesActions, modifySlide, createSlide } from '../../../../features/slides/slidesSlice';

const supportedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];

export const SlidesForm = () => {
	const slides = useSelector((state) => state.slides.slides);

	const [images, setImages] = useState([]);
	const [imgError, setImgError] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id: newsId } = useParams();

	useEffect(() => {
		newsId === undefined || dispatch(getAllSlides(newsId));
	}, [newsId]);

	useEffect(() => {
		return () => {
			dispatch(slidesActions.resetSlides());
		};
	}, []);

	// const [imagePreview, setimagePreview] = useState({ 0: {}, 1: {}, 2: {} });

	useEffect(() => {
		setImages(slides.map((e) => e.imageUrl));
	}, [slides]);

	const handleImageChange = (e, i) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				const imageUrl = fileReader.result;
				const newImages = images;
				newImages[i] = imageUrl;
				setImages(newImages);
			}
		};
		fileReader.readAsDataURL(e.target.files[0]);
	};

	const handleSubmit = (data) => {
		const altTexts = [
			data.text0,
			data.text1,
			data.text2
		];

		images.forEach(image => {
			setImgError(false);
			if (!image) {
				return setImgError(true);
			}

			if (typeof (image) === 'object' && (image.size > 50936250 || !supportedMimeTypes.includes(image.type))) {
				return setImgError(true);
			}
		});
		if (slides) {
			slides.forEach((slide, i) => {
				if (slide.imageUrl !== images[i]) {
					localStorage.setItem('file', images[i]);
				}
				dispatch(modifySlide({ slide: { ...slide, text: altTexts[i] }, newsId }));
				localStorage.removeItem('file');
			});
			navigate('/backoffice/slides');
		} else {
			slides.forEach((slide, i) => {
				if (slide.imageUrl !== images[i]) {
					localStorage.setItem('file', images[i]);
				}
				dispatch(createSlide({ slide: { text: altTexts[i], ...slide }, newsId }));
				localStorage.removeItem('file');
			});
			navigate('/backoffice/slides');
		}

		dispatch(newsActions.resetOpenedNews());
	};
	return (
		<>
			{slides.length > 0 &&
		<div
			className='mx-auto'
			style={{
				maxWidth: '1000px',
				width: '80%'
			}}
		>
			<Formik
				enableReinitialize
				// initialValues={slides}
				initialValues={{
					text0: slides[0].text,
					text1: slides[1].text,
					text2: slides[2].text
				}}
				onSubmit={handleSubmit}
			>
				{({ errors, values, handleBlur, handleChange }) => (
					<Form className="flex flex-col  md:m-5">
						{ slides.map((slide, i) =>
							<>
								<div className="flex flex-col gap-1 mb-3">
									<label>{`Imagen slide ${i}`}</label>
									{/* {imagePreview.i?.length
										? (
											<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '400px' }}>
												<img src={imagePreview[i]} alt={'Imagen cargada'} height={'100%'} />
											</div>
										)
										: image[i] && (<div className="my-2 w-full rounded-lg overflow-hidden flex justify-center bg-neutral-300" style={{ height: '90vw', maxHeight: '400px' }}>
											<img src={slide.imageUrl} alt={`Imagen de la noticia ${slide.text}`} height={'100%'} />
										</div>)
									} */}
									<input
										accept="image/*"
										id="upload-button"
										type="file"
										name='imageUrl'
										onChange={e => { handleImageChange(e, i); }}
										placeholder='Logo'
										className='hidden'
									/>
									<label htmlFor='upload-button'>
										<h3 className="text-center  cursor-pointer hover:text-blue-600" htmlFor>Upload your photo</h3>
									</label>
									{imgError ? <div className="text-red-800 font-bold my-1 text-left">Archivo no soportado</div> : null}
								</div>
								<div className="flex flex-col gap-1 mb-3">
									<label className='text-left'>Texto alternativo</label>
									<input
										className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
										onChange={handleChange}
										onBlur={handleBlur}
										placeholder='Texto alternativo'
										name={`text${i}`}
										type='text'
										value={i === 0 ? values.text0 : i === 1 ? values.text1 : values.text2}
										data-testid="test-id-form-control"
									/>
								</div>
								<div className="flex-col gap-1 mb-3 hidden">
									<label className='text-left'>Orden</label>
									<input
										className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
										name={`order${i}`}
										type='number'
										onChange={handleChange}
										value={i}
										data-testid="test-id-form-control"
									/>
								</div>
							</>
						)}
						<button
							type='submit'
							className='mt-3 text-white bg-redOng hover:bg-redOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-50'
						>
							{(slides) ? 'Modificar' : 'Crear'}
						</button>
					</Form>
				)}
			</Formik>
		</div>}
		</>
	);
};
