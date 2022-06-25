import React from 'react';
import PropTypes from 'prop-types';

export const CustomInput = ({
	type,
	name,
	value,
	placeholder,
	handleInputChange,
	errors,
	accept,
	className
}) => {
	return (
		<div data-testid="test-id-form-group-container" className='w-full flex flex-col items-start justify-center'>
			{errors && (
				<h4 className="text-redOng my-0" data-testid="test-id-error-text">
					{errors}
				</h4>
			)}
			<input
				className={`shadow appearance-none border box-border text-base rounded-lg w-full h-12 py-3 px-4 my-2 text-gray-700 ${className}`}
				type={type}
				placeholder={placeholder}
				onChange={handleInputChange}
				name={name}
				value={value}
				data-testid="test-id-form-control"
				accept={accept}
			/>
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
	onBlur: PropTypes.func,
	accept: PropTypes.string,
	className: PropTypes.string
};
