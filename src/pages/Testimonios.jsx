import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllTestimonials } from '../features/testimonials/testimonialsSlice';

function Testimonios () {
	const dispatch = useDispatch();
	const testimonials = useSelector(state => state.testimonials.allTestimonials);

	useEffect(() => {
		dispatch(getAllTestimonials());
	}, []);

	console.log(testimonials);
	return (
		<section className='m-8 flex flex-col px-5 mx-auto'
			style={{
				maxWidth: '1200px'
			}}
		>
			<h1 className="text-3xl">Testimonios</h1>
			<div className='flex flex-wrap justify-center gap-3 mb-10'>
				{	testimonials.map((testimonial) => {
					return (
						<div key={testimonial.name} className='bg-yellow-100 flex flex-col text-black w-48 h-60 p-3 box-border rounded-2xl border-solid border-2 border-yellow-200 text-justify'>
							<img className='object-cover w-16 h-16 rounded-full ' src={testimonial.image} alt="Person" />
							<span className='text-l font-mulish pb-2 font-bold mt-4'> {testimonial.name}</span>
							<span className='h-full text-sm break-all'>{testimonial.content}</span>
						</div>
					);
				})
				}
			</div>
			<div className="flex flex-col items-center gap-3">
				<button className='bg-redOng font-medium text-lg text-white border-none py-2 cursor-pointer rounded-lg px-10'>¡Agregar mi Testimonio!</button>
				<Link to={'/'}>
					<button className='text-black font-medium bg-white border border-solid border-black text-sm py-2 cursor-pointer rounded-lg px-10 hover:bg-neutral-700 hover:border-white hover:text-white transition-colors'>Ir al inicio</button>
				</Link>
			</div>
		</section>
	);
}

export {
	Testimonios
};
