import React from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
import PropTypes from 'prop-types';

export const LoginForm = ({
	values,
	errors,
	handleChange,
	handleSubmit,
	isSubmitting
}) => (
	<Form
		onSubmit={handleSubmit}
		data-testid="login-test-id-formik-container"
		className="w-full flex flex-col gap-3 items-start"
	>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="E-mail"
			name="email"
			value={values.email}
			errors={errors.email}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="password"
			placeholder="Contraseña"
			name="password"
			value={values.password}
			errors={errors.password}
			isRequired={true}
		/>
		<div className='flex'>
			<input
				className='h-5'
				onChange={handleChange}
				type="checkbox"
				name="rememberMe"
				id="rememberMe"
				defaultChecked={values.rememberMe}
			/>
			<label htmlFor="rememberMe" className='text-lg'>
      Recordarme
			</label>
		</div>
		<button
			type="submit"
			className="shadow-md border border-box rounded-lg text-base h-12 w-full border-transparent bg-redOng text-white py-3 px-2 my-2"
			disable={isSubmitting}
		>Iniciar sesión
		</button>
	</Form>
);

LoginForm.propTypes = {
	values: PropTypes.object,
	errors: PropTypes.object,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleBlur: PropTypes.func,
	isSubmitting: PropTypes.bool
};
