import React from 'react';
import { Form } from 'formik';
import PropTypes from 'prop-types';

export const ContactForm = ({
	values,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting
}) => (
	<Form
		onSubmit={handleSubmit}
		data-testid="test-id-formik-container"
		className="flex flex-col gap-2"
	>
		<input
			className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder='Nombre y Apellido'
			name='name'
			type='text'
			value={values.name}
			data-testid="test-id-form-control"
		/>
		{errors.name && (
			<h5 className="text-redOng m-0 ml-1 text-left" data-testid="test-id-error-text">
				{errors.name}
			</h5>
		)}
		<input
			className="w-full shadow appearance-none border rounded py-3 box-border px-4 text-gray-700"
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder='E-mail'
			name='email'
			type='text'
			value={values.email}
			data-testid="test-id-form-control"
		/>
		{errors.email && (
			<h5 className="text-redOng m-0 ml-1 text-left" data-testid="test-id-error-text">
				{errors.email}
			</h5>
		)}
		<textarea
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder='Escribe tu consulta'
			name='message'
			type='text'
			value={values.message}
			className="
        w-full
        m-0
			  p-3
        box-border
			  resize-y
			  form-control
			  bg-white bg-clip-padding
			  block
			  text-base
			  font-normal
			  text-gray-700
			  border border-solid border-gray-300
			  rounded
			  transition
			  ease-in-out
			"
			rows="3"
		/>
		{errors.message && (
			<h5 className="text-redOng m-0 ml-1 text-left" data-testid="test-id-error-text">
				{errors.message}
			</h5>
		)}
		<button
			type='submit'
			className='mt-3 text-white bg-blueOng hover:bg-blueOng focus:ring rounded border-0 py-3 px-6 cursor-pointer hover:opacity-80'
			disabled={isSubmitting}
		>
			Enviar Consulta
		</button>
	</Form>
);

ContactForm.propTypes = {
	values: PropTypes.object,
	errors: PropTypes.object,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleBlur: PropTypes.func,
	isSubmitting: PropTypes.bool
};
