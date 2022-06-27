import React from 'react';
const parse = require('html-react-parser');

export const ActivityDetail = () => {
	// Todavia no existe el endpoint para obtener una actividad en particular

	const details = {
		name: 'Aute nulla quis pariatur tempor Lorem id ex magna',
		content: 'Lorem magna non ea dolore amet consectetur id sint. Fugiat dolore laboris exercitation ad enim labore. Sint commodo ullamco consequat deserunt ullamco esse est in commodo culpa. Dolore nostrud consequat occaecat pariatur in mollit est occaecat consectetur veniam qui elit. Ad occaecat velit cillum deserunt fugiat voluptate non deserunt dolore consequat aliquip pariatur. Qui mollit exercitation excepteur cillum deserunt dolore. Irure qui et nisi ad deserunt anim esse ullamco cupidatat mollit aute. In incididunt velit occaecat mollit ex cillum id in excepteur ex ipsum mollit veniam. Velit nisi velit cupidatat esse consectetur cupidatat excepteur velit.',
		image: 'https://i.imgur.com/ndmV3YI.jpeg'
	};

	return (
		<div className="flex flex-col mx-auto mb-20" style={{ width: '95vw', maxWidth: '1000px' }} >
			<h1 className="mx-auto font-medium text-neutral-800 font-sans">Detalles de la actividad</h1>
			<div className="my-2 w-full rounded-lg overflow-hidden flex items-center bg-neutral-300" style={{ height: 'fit-content', maxHeight: '500px' }}>
				{
					details?.image
						? <img className="flex" src={details?.image} alt={`Imagen sobre ${details?.name}`} width={'100%'}/>
						: <div className="flex bg-neutral-800 font-sans text-white w-full items-center justify-center" style={{ height: '500px' }}>
							<p>Imagen no encontrada</p>
						</div>
				}
			</div>
			<div className="flex flex-col px-3 md:px-5">
				<h2 className="font-sans">{details ? details?.name : 'Se ha producido un error inesperado'}</h2>
				<p className="m-0 p-0 font-medium text-lg no-margin-p">{details ? parse(details?.content) : 'La novedad solicitad no fue encontrada.'}</p>
				<a className="mx-auto sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
