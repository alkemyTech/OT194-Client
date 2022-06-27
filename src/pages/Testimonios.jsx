import React from 'react';
import { Link } from 'react-router-dom';
import { TestimonialsShow } from '../components/Testimonials/TestimonialsShow';
import { useSelector } from 'react-redux';

function Testimonios () {
	const { user } = useSelector((state) => state.auth);

	return (
		<section className='m-8 flex flex-col px-5 mx-auto'
			style={{
				maxWidth: '1200px'
			}}
		>
			<h1 className="text-3xl">Testimonios</h1>
			<div className='flex flex-wrap justify-center gap-3 mb-10'>
				<TestimonialsShow className="justify-center" />
			</div>
			<div className="flex flex-col items-center gap-3">
				{user &&
					<Link to={'/testimonios/add'}>
						<button className='bg-redOng font-medium text-lg text-white border-none py-2 cursor-pointer rounded-lg px-10'>¡Agregar mi Testimonio!</button>
					</Link>
				}
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
