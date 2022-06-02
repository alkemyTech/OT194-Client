import React from 'react';
import { Form } from 'formik';
import { CustomInput } from '../../CustomInput';
import PropTypes from 'prop-types';

export const EditUserForm = ({
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
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="First Name"
			name="firstName"
			onBlur={handleBlur}
			value={values.firstName}
			errors={errors.firstName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="text"
			placeholder="Last Name"
			name="lastName"
			onBlur={handleBlur}
			value={values.lastName}
			errors={errors.lastName}
			isRequired={true}
		/>
		<CustomInput
			handleInputChange={handleChange}
			type="number"
			placeholder="Role Id"
			name="roleId"
			onBlur={handleBlur}
			value={values.roleId}
			errors={errors.roleId}
			isRequired={true}
		/>
		<div className="rounded w-full border-transparent py-3 px-2 m-2">
			<button
				type="submit"
				className="shadow appearance-none border rounded w-full border-transparent bg-redOng text-white py-3 px-2 m-2"
				disabled={isSubmitting}
			>
        Edit
			</button>
		</div>
	</Form>
);

EditUserForm.propTypes = {
	values: PropTypes.object,
	errors: PropTypes.object,
	handleChange: PropTypes.func,
	handleSubmit: PropTypes.func,
	handleBlur: PropTypes.func,
	isSubmitting: PropTypes.bool
};
