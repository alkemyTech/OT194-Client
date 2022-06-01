import React from 'react';
import PropTypes from 'prop-types';

export const CustomInput = ({
	type,
	name,
	value,
	placeholder,
	handleInputChange,
	errors
}) => {
	return (
		<div data-testid="test-id-form-group-container">
			<input
				className="shadow appearance-none border rounded w-full py-3 px-4 m-2 text-gray-700 leading-tight"
				type={type}
				placeholder={placeholder}
				onChange={handleInputChange}
				name={name}
				value={value}
				data-testid="test-id-form-control"
			/>
			{errors && (
				<h5 className="text-redOng" data-testid="test-id-error-text">
					{errors}
				</h5>
			)}
		</div>
	);
};

CustomInput.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	handleInputChange: PropTypes.func,
	errors: PropTypes.string,
	onBlur: PropTypes.func
};
