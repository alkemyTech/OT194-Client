import React from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
import PropTypes from 'prop-types';

export const RegisterForm = ({
	values,
	errors,
	handleChange,
	handleSubmit,
	isSubmitting
}) => (
	<Form
		onSubmit={handleSubmit}
		data-testid='test-id-formik-container'
		className='w-full flex flex-col gap-3 items-start'
	>
		<CustomInput
			handleInputChange={handleChange}
			type='text'
			placeholder='Nombre'
			name='firstName'
			value={values.firstName}
			errors={errors.firstName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type='text'
			placeholder='Apellido'
			name='lastName'
			value={values.lastName}
			errors={errors.lastName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type='text'
			placeholder='E-mail'
			name='email'
			value={values.email}
			errors={errors.email}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type='password'
			placeholder='Contraseña'
			name='password'
			value={values.password}
			errors={errors.password}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type='password'
			placeholder='Confirmar constraseña'
			name='password2'
			value={values.password2}
			errors={errors.password2}
			isRequired={true}
		/>
		<button
			type='submit'
			className='shadow-md border-box border h-12 rounded-lg w-full border-transparent bg-redOng text-base text-white py-3 px-2 my-2'
			disable={isSubmitting ? 'true' : 'false'}
		>Registrarse
		</button>
	</Form>
);

RegisterForm.propTypes = {
	values: PropTypes.object,
	errors: PropTypes.object,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleBlur: PropTypes.func,
	isSubmitting: PropTypes.bool
};
