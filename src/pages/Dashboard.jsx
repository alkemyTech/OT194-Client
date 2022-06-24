import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { News } from '../components/News';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTestimonials } from '../features/testimonials/testimonialsSlice';

function Dashboard () {
	const dispatch = useDispatch();
	const testimonials = useSelector(state => state.testimonials.allTestimonials);

	useEffect(() => {
		dispatch(getAllTestimonials());
	}, []);

	const staff = [{
		imageUrl: 'https://alkemytestingongbucket.s3.sa-east-1.amazonaws.com/Miembros+del+Equipo/Mar%C3%ADa+Irola.jpg',
		name: 'María Irola',
		position: 'Fundadora / Presidenta'
	},
	{
		imageUrl: 'https://alkemytestingongbucket.s3.sa-east-1.amazonaws.com/Miembros+del+Equipo/Marita+Gomez.jpeg',
		name: 'Marita Gomez',
		position: 'Fundadora / Nutricionista'
	}, {
		imageUrl: 'https://alkemytestingongbucket.s3.sa-east-1.amazonaws.com/Miembros+del+Equipo/Miriam+Rodriguez.jpg',
		name: 'Miriam Rodriguez',
		position: 'Terapista Ocupacional'
	}, {
		imageUrl: 'https://alkemytestingongbucket.s3.sa-east-1.amazonaws.com/Miembros+del+Equipo/Cecilia+Mendez.jpeg',
		name: 'Cecilia Mendez',
		position: 'Psicopedagoga'
	},
	{
		imageUrl: 'https://alkemytestingongbucket.s3.sa-east-1.amazonaws.com/Miembros+del+Equipo/Marco+Fernandez.jpg',
		name: 'Mario Fuentes',
		position: 'Profesor Educación Física'
	}];

	return (
		<div className='contenedorMayor flex flex-col overflow-hidden p-2'>

			<section className='welcome-img flex-grow flex flex-row w-full min-h-2/5 justify-center items-center'>
				<div className='flex flex-col w-full md:w-2/5  p-5 justify-center items-start'>
					<h1 className='text-5xl font-black'>Hola!  Bienvenidx</h1>
					<p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing dignissim ac et eleifend lacus, rhoncus, dignissim sagittis. Tellus ac a, elementum ut. Tellus a morbi tincidunt ultricies malesuada eget turpis. Lacus enim non enim, velit hac turpis interdum arcu. Suspendisse at vel ultrices amet orci enim lectus porttitor ut.</p>
					<Link to={'contact'} className='shadow appearance-none border rounded border-transparent bg-redOng text-white py-3 px-2 m-2 text-center no-underline w-3/12'>Contactanos</Link>
				</div>
				<div className='hidden sm:hidden md:flex md:w-2/5 md:h-96 md:justify-center'>
					<img src="images/login-hands.png" alt="manos unidas" className='w-5/6 h-full rounded-3xl'/>
				</div>
			</section>

			<section className='mt-16 staff justify-center flex flex-col w-full space-evenly min-h-1/5 '>

				<div className='inline-flex flex-row content-center justify-between px-20 py-1'>
					<span className='text-2xl font-black '>Nuestro Staff</span>
					<div className='flex justify-around items-center'>
						<Link to={'nosotros'} className='flex items-center no-underline' > Ver todos
							<img src="images/vector.png" alt="go to" className='ml-2' />
						</Link>
					</div>
				</div>
				<div className='flex content-center justify-center  flex-wrap flex-col sm:content-center sm:flex-row md:flex-shrink-1 md:space-evenly'>
					{ staff.map((person, i) => {
						return (
							<div key={`${person.name}${i}`} className='m-4 staff-card' style={{ backgroundImage: `url(${person.imageUrl})` }}>
								<span className='text-xl font-bold'> {person.name}</span>
								<span className='pb-2'> {person.position}</span>
							</div>
						);
					})
					}
				</div>

			</section>

			<section className='testimonies flex flex-col w-full min-h-1/5 pt-10'>

				<div className='inline-flex flex-row  items-center  justify-between px-16 py-1'>
					<span className='text-2xl font-black '>Testimonios</span>
					<div className='flex items-center '>
						<Link to={'testimonios'} className='flex items-center no-underline' > Ver todos
							<img src="images/vector.png" alt="go to" className='ml-2' />
						</Link>
					</div>
				</div>

				<div className='flex  flex-row justify-center flex-wrap space-evenly'>
					{	testimonials.slice(0, 5).map((testimony, i) => {
						return (
							<div key={`${testimony.name}${i}`} className=' m-4 bg-yellowOng flex flex-col text-black testimony-card'>
								<img className='w-16 h-16 rounded-full ' src={testimony.image} alt="Person" />
								<span className='text-l pb-2 font-bold'> {testimony.name}</span>
								<span className='h-full font-normal break-all'>{testimony.content}</span>
							</div>
						);
					})
					}

				</div>

			</section>

			<section className='w-full min-h-1/5 '>
				<News />
			</section>

		</div>
	);
}

export {
	Dashboard
};
