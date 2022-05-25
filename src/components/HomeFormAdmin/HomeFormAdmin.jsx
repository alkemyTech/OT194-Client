import React, { useState } from 'react';

export const HomeFormAdmin = () => {
	const [form, setForm] = useState({
		home_description: '',
		images: []
	});

	const [errors, setErrors] = useState({ home_description: '' });
	const [image, setImage] = useState({
		imageUrl: '',
		text: '',
		campo: ''
	});
	const [imageNumber, setImageNumber] = useState(1);

	const onChangeText = (e) => {
		setErrors({ home_description: '' });
		setForm({ ...form, [e.target.name]: e.target.value });
	};
	const onchangeImage = (e) => {
		setImage({ ...image, [e.target.name]: e.target.value });
	};
	const addImage = (e) => {
		e.preventDefault();
		setForm({ ...form, images: [...form.images, image] });
		setImageNumber(imageNumber + 1);
		setImage({
			imageUrl: '',
			text: '',
			campo: ''
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (form.home_description.length < 20) {
			setErrors({
				...errors,
				home_description: 'Please enter 20 characters or more'
			});
			return;
		} else {
			console.log('DISPATCH?????');
		};
	};
	return (
		<div className='container mx-auto md:flex-row md:justify-between max-w-xl'>
			<form onSubmit={onSubmit} className='w-full items-center flex flex-col md:flex-row'>
				<div className='w-5/6 flex flex-col  md:flew-row  md:justify-between'>
					<div className='w-full flex flex-col items-center justify-start'>
						<h3 className='text-3xl'>Welcome Text</h3>
						<textarea
							placeholder='Home text description...'
							name='home_description'
							id='home_description'
							// cols='50'
							rows='10'
							value={form.home_description}
							onChange={onChangeText}
							className='rounded focus:outline-blueOng w-5/6 mx-auto'
						></textarea>
					</div>
					{errors.home_description && <h1 className='text-redOng'>{errors.home_description}</h1>}
					<div className='w-full flex flex-col items-center justify-center' >
						<div className='w-full mx-auto flex flex-col items-center justify-center'>
							<h4 className='text-3xl'>Image {imageNumber}/3:</h4>
							<div className='w-64 flex justify-between'>
								<label>Image Url: </label>
								<input
									className='rounded focus:outline-blueOng'
									type="text"
									value={image.imageUrl}
									name='imageUrl'
									onChange={onchangeImage}
								/>
							</div>
							<div className='w-64 flex justify-between'>
								<label>Title: </label>
								<input
									className='rounded focus:outline-blueOng'
									type="text"
									value={image.text}
									name='text'
									onChange={onchangeImage}
								/>
							</div>
							<textarea
								placeholder='Image description...'
								name='campo'
								cols='30'
								rows='10'
								value={image.campo}
								onChange={onchangeImage}
								className='rounded focus:outline-blueOng w-5/6'
							></textarea>
						</div>
					</div>
				</div>
				<div className='flex flex-col items-center md:items-center md:justify-around'>
					<div>
						<img style={{ width: '300px', height: '300px' }} src= {image.imageUrl.length && image.imageUrl.trim().length ? `${image.imageUrl}` : 'https://img2.freepng.es/20180411/sew/kisspng-digital-cameras-photography-clip-art-camera-icon-5acd9702723904.1503709615234229784679.jpg'}/>
					</div>
					{
						imageNumber >= 3 ? <button className='border-0 p-5 rounded-full bg-redOng text-white font-semibold cursor-pointer mx-auto' type='submit'>Submit</button> : <button className='border-0 p-5 rounded-full bg-redOng text-white font-semibold cursor-pointer' onClick={ addImage }>Add Image</button>
					}
				</div>
			</form>
		</div>
	);
};
