import React from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
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
		className="w-full max-w-lg"
	>
		<h2 className="flex justify-center">¡Contactate con nosotros!</h2>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="Nombre y Apellido"
			name="name"
			onBlur={handleBlur}
			value={values.name}
			errors={errors.name}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="E-mail"
			name="email"
			onBlur={handleBlur}
			value={values.email}
			errors={errors.email}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="textarea"
			placeholder="Escribe tu consulta"
			name="message"
			onBlur={handleBlur}
			value={values.message}
			errors={errors.message}
			isRequired={true}
		/>
		<div className="rounded w-full border-transparent py-3 px-2 m-2">
			<button
				type="submit"
				className="shadow border rounded w-full border-transparent bg-blueOng text-white py-3 px-2 m-2"
				disable={isSubmitting}
			>
        Enviar Consulta
			</button>
		</div>
		<div className="flex justify-center">
			<button
				type="submit"
				className="shadow border rounded w-50 border-black bg-white text-black py-3 px-2 m-2"
			>
        Ir al inicio
			</button>
		</div>
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
