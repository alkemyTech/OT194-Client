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
		data-testid="test-id-formik-container"
		className="w-full max-w-lg"
	>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="Nombre"
			name="firstName"
			value={values.firstName}
			errors={errors.firstName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="Apellido"
			name="lastName"
			value={values.lastName}
			errors={errors.lastName}
			isRequired={true}
		/>
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
		<CustomInput
			handleInputChange={handleChange}
			type="password"
			placeholder="Confirmar constraseña"
			name="password2"
			value={values.password2}
			errors={errors.password2}
			isRequired={true}
		/>
		<div className="rounded w-full border-transparent py-3 px-2 m-2">
			<button
				type="submit"
				className="shadow appearance-none border rounded w-full border-transparent bg-redOng text-white py-3 px-2 m-2"
				disable={isSubmitting}
			>
        Registrarse
			</button>
		</div>
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
