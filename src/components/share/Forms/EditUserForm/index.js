import React, { useState } from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
import PropTypes from 'prop-types';
import { FaUser, FaPen } from 'react-icons/fa';
export function EditUserForm ({
	values,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting
}) {
	const [imagePreview, setImagePreview] = useState('');
	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Form
			onSubmit={handleSubmit}
			data-testid="test-id-formik-container"
			className="flex flex-col items-center w-full max-w-lg"
		>
			<div className="flex items-end justify-end">
				<div className='flex items-center justify-center overflow-hidden rounded-full w-40 h-40 bg-gray-300 mb-6'>
					{imagePreview
						? <img
							src={imagePreview}
							className='w-full h-full object-cover max-height-screen rounded-r-lg'
							alt='Imagen de usuario'
						/>
						: user && user.image
							? <img src={user.image}
								className='w-full h-full object-cover max-height-screen rounded-r-lg'
								alt='Imagen de usuario'
							/>
							: <FaUser size={80} />
					}
				</div>
				<div
					className='flex absolute items-center justify-center overflow-hidden rounded-full w-10 h-10 bg-gray-300 mb-6 hover:bg-yellowOng hover:cursor-pointer'
				>
					<FaPen className='absolute hover:cursor-pointer' />
					<CustomInput
						handleInputChange={(e) => {
							const fileReader = new FileReader();
							fileReader.onload = () => {
								if (fileReader.readyState === 2) {
									localStorage.setItem('file', fileReader.result);
									setImagePreview(fileReader.result);
								}
							};
							fileReader.readAsDataURL(e.target.files[0]);
						}}
						type="file"
						accept="image/*"
						placeholder="Imagen de usuario"
						id="userImage"
						name="userImage"
						onBlur={handleBlur}
						value={values.file || ''}
						errors={errors.file}
						className="absolute opacity-0 w-full h-full hover:cursor-pointer m-0 p-0 my-0 py-0"
					/>
				</div>
			</div>
			<CustomInput
				handleInputChange={handleChange}
				type="text"
				placeholder="Nombre"
				name="firstName"
				onBlur={handleBlur}
				value={values.firstName}
				errors={errors.firstName}
				isRequired={true}
			/>
			<CustomInput
				handleInputChange={handleChange}
				type="text"
				placeholder="Apellido"
				name="lastName"
				onBlur={handleBlur}
				value={values.lastName}
				errors={errors.lastName}
				isRequired={true}
			/>
			<button
				type="submit"
				className="shadow-md border border-box rounded-lg text-base h-12 w-full border-transparent bg-redOng text-white py-3 px-2 my-2 hover:cursor-pointer"
				disable={isSubmitting ? 'true' : 'false'}
			>Editar usuario
			</button>
		</Form>
	);
}

EditUserForm.propTypes = {
	values: PropTypes.object,
	errors: PropTypes.object,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleBlur: PropTypes.func,
	isSubmitting: PropTypes.bool
};
