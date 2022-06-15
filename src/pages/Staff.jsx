import React from 'react';

export const Staff = () => {
	const staff = [
		{
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
		},
		{
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
		}
	];

	return (
		<div
			className="flex flex-col mx-auto overflow-hidden mt-10 mb-20"
			style={{
				maxWidth: '1100px',
				width: '84vw'
			}}
		>
			<h1>¡Nuestro staff!</h1>
			<div className="flex flex-col-reverse lg:flex-row items-start justify-between mb-20 lg:mb-14 gap-4 lg:gap-10">
				<div
					className="overflow-hidden flex flex-col text-left items-start"
					style={{
						minHeight: '400px'
					}}
				>
					<h1 className="m-0 mt-4 mx-auto lg:mx-0">{staff[0].name}</h1>
					<h2 className="m-0 mt-1 mx-auto lg:mx-0 font-medium text-neutral-800">Rol que desempeña</h2>
					<p className="m-0 mt-1 text-center lg:text-left text-neutral-700 text-lg mb-5">
            Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.Texto con descripcion de la persona y rol que desempeña.
					</p>
					<button
						type='submit'
						className='mt-auto mx-auto lg:mx-0 text-white bg-redOng hover:bg-redOng text-2xl font-bold rounded-2xl border-0 py-3 px-9 cursor-pointer hover:opacity-90'
					>
						¡Quiero ser parte!
					</button>
				</div>
				<div
					className='mx-auto lg:mx-0 bg-no-repeat bg-cover bg-center object-contain text-center flex flex-col justify-end text-white rounded-2xl'
					style={{
						backgroundImage: `url(${staff[0].imageUrl})`,
						minHeight: '400px',
						height: '400px',
						width: '400px',
						minWidth: '400px'
					}}
				/>
			</div>
			<div className='flex justify-center gap-5 flex-wrap'>
				{
					staff.map((person, i) => {
						return (
							<div
								key={`${person.name}${i}`}
								className='bg-no-repeat bg-cover bg-center object-contain text-center flex flex-col justify-end text-white rounded-2xl'
								style={{
									backgroundImage: `url(${person.imageUrl})`,
									minHeight: '200px',
									minWidth: '200px'
								}}
							>
								<span className='text-xl font-bold'> {person.name}</span>
								<span className='pb-2'> {person.position}</span>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};
