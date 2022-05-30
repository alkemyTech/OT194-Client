import React from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
import PropTypes from 'prop-types';

export const RegisterForm = ({
	values,
	errors,
	handleChange,
<<<<<<< HEAD
	handleBlur,
=======
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
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
<<<<<<< HEAD
			placeholder="First Name"
			name="firstName"
			onBlur={handleBlur}
=======
			placeholder="Nombre"
			name="firstName"
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
			value={values.firstName}
			errors={errors.firstName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
<<<<<<< HEAD
			placeholder="Last Name"
			name="lastName"
			onBlur={handleBlur}
=======
			placeholder="Apellido"
			name="lastName"
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
			value={values.lastName}
			errors={errors.lastName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="E-mail"
			name="email"
<<<<<<< HEAD
			onBlur={handleBlur}
=======
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
			value={values.email}
			errors={errors.email}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="password"
<<<<<<< HEAD
			placeholder="Password"
			name="password"
			onBlur={handleBlur}
=======
			placeholder="Contraseña"
			name="password"
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
			value={values.password}
			errors={errors.password}
			isRequired={true}
		/>
<<<<<<< HEAD
=======
		<CustomInput
			handleInputChange={handleChange}
			type="password"
			placeholder="Confirmar constraseña"
			name="password2"
			value={values.password2}
			errors={errors.password2}
			isRequired={true}
		/>
>>>>>>> 5cfcf5591ca5b2448b2d1dbd94433ac836b4ee72
		<div className="rounded w-full border-transparent py-3 px-2 m-2">
			<button
				type="submit"
				className="shadow appearance-none border rounded w-full border-transparent bg-redOng text-white py-3 px-2 m-2"
				disable={isSubmitting}
			>
        Register
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
