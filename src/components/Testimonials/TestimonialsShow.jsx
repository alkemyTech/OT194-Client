import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllTestimonials } from '../../features/testimonials/testimonialsSlice';
import { TestimonyCard } from './TestimonyCard';

export const TestimonialsShow = ({ isLimited, isCentered, className }) => {
	const dispatch = useDispatch();
	const testimonials = useSelector(state => state.testimonials.allTestimonials);

	useEffect(() => {
		dispatch(getAllTestimonials());
	}, []);

	return (
		<div className={`${className} flex flex-wrap gap-4`}>
			{
				testimonials.length >= 1
					? testimonials.slice(0, (isLimited ? 5 : testimonials.length)).map(data => (
						<TestimonyCard key={data.id} data={data} />
					))
					: <p>No hay testimonios disponibles</p>
			}
		</div>
	);
};

TestimonialsShow.propTypes = {
	isLimited: PropTypes.bool,
	isCentered: PropTypes.bool,
	className: PropTypes.string
};
