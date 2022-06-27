import React from 'react';
import { Link } from 'react-router-dom';
import { ActivitiesShow } from '../components/Activities/ActivitiesShow';
import { NewsShow } from '../components/News/NewsShow';
import { StaffShow } from '../components/Staff/StaffShow';
import { TestimonialsShow } from '../components/Testimonials/TestimonialsShow';

function Dashboard () {
	return (
		<div className='flex flex-col overflow-hidden mx-auto my-9'
			style={{ width: '90vw', maxWidth: '1200px' }}
		>
			<div className="flex flex-col-reverse lg:flex-row items-start justify-between mb-20 lg:mb-14 gap-4 lg:gap-10">
				<div
					className="overflow-hidden flex flex-col text-left items-start my-auto lg:w-2/4"
					style={{	minHeight: '400px' }}
				>
					<h1 className="m-0 mt-4 mx-auto md:mx-0 text-5xl text-neutral-800">Hola! Bienvenido</h1>
					<p className="m-0 mt-2 text-center md:text-left text-neutral-700 text-xl mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim.
					</p>
					<button className='mt-auto mx-auto  md:mx-0 text-white bg-redOng hover:bg-redOng text-lg font-bold rounded-2xl border-0 py-3 px-14 cursor-pointer hover:opacity-90'>
						<Link className='font-englebert text-white visited:text-white no-underline ' to={'contacto'}> Contactanos </Link>
					</button>
				</div>
				<div className='mx-auto lg:mx-0 flex flex-col justify-end text-white my-auto w-full sm:w-3/4 md:w-2/4 lg:w-2/4'>
					<img
						src="images/login-hands.png"
						alt="manos unidas"
						className="rounded-2xl"
						style={{ height: '100%', maxHeight: '500px' }}
					/>
				</div>
			</div>
			<div className="flex flex-col gap-16">
				<div className='flex flex-col gap-4'>
					<div className='w-full flex items-center justify-between'>
						<span className='text-2xl font-black'>Nuestro Staff</span>
						<Link to={'nosotros'} className='no-underline text-black visited:text-black hover:text-neutral-500'>Ver todos</Link>
					</div>
					<StaffShow isLimited className="justify-center md:justify-start" />
				</div>
				<div className='flex flex-col gap-4'>
					<div className='w-full flex items-center justify-between'>
						<span className='text-2xl font-black'>Testimonios</span>
						<Link to={'testimonios'} className='no-underline text-black visited:text-black hover:text-neutral-500'>Ver todos</Link>
					</div>
					<TestimonialsShow isLimited className="justify-center md:justify-start" />
				</div>
				<div className='flex flex-col gap-4'>
					<div className='w-full flex items-center justify-between'>
						<span className='text-2xl font-black'>Novedades</span>
						<Link to={'news'} className='no-underline text-black visited:text-black hover:text-neutral-500'>Ver todos</Link>
					</div>
					<NewsShow isLimited className="justify-center md:justify-start" />
				</div>
				<div className='flex flex-col gap-4'>
					<div className='w-full flex items-center justify-between'>
						<span className='text-2xl font-black'>Actividades</span>
						<Link to={'actividades'} className='no-underline text-black visited:text-black hover:text-neutral-500'>Ver todos</Link>
					</div>
					<ActivitiesShow isLimited className="justify-center md:justify-start" />
				</div>
			</div>
		</div>
	);
}

export {
	Dashboard
};
