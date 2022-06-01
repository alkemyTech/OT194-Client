import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useFetch } from '../hooks/useFetch';

export const NewsDetail = () => {
	// No se utilizo el Slider porque renderiza las imagenes estiradas y sin posibilidad de corregirlo ademas de que tiene un bug que desaparece la imagen
	// Deberian sacarse los argumentos "text" y "campo" del Slider ya que este componente solo debe encargarse de imagenes

	// A modo de placeholder coloque datos falsos ya que todavía el endpoint y su datos no existen
	// Las lineas de codigo comentadas deben descomentarse cuando ya exista endpoint y funcione el Slider correctamente

	// const { id } = useParams();
	// const details = useFetch(`/news/${id}`, 'get', {});

	const details = {
		titulo: 'Cupidatat eiusmod sunt nostrud',
		descripcion: 'Eu ut reprehenderit amet ea Lorem deserunt velit exercitation do consectetur consectetur. Exercitation nulla sunt ut eu qui. Ad officia irure eu dolor enim. Excepteur dolore sint labore sit anim nisi qui quis exercitation esse veniam sunt incididunt. Exercitation id consequat qui elit. Consequat cupidatat consectetur excepteur qui sunt in id ipsum. Veniam occaecat anim irure tempor eu excepteur voluptate Magna duis consectetur aliquip ad fugiat qui sint esse occaecat labore incididunt irure ex. Velit id voluptate reprehenderit fugiat velit exercitation reprehenderit fugiat. Nisi non sint qui esse aute labore aute. Anim sunt est dolore sint minim cillum id tempor Exercitation sint qui aute in enim eiusmod Ullamco proident est deserunt proident cupidatat ea voluptate magna irure ad. Quis nisi aliquip occaecat commodo aute. Sit reprehenderit consectetur cupidatat cupidatat mollit quis ipsum minim mollit. Sit ullamco nulla culpa ad sunt eiusmod mollit proident anim pariatur minim veniam. Mollit tempor nostrud est aliqua culpa irure duis. Officia non veniam incididunt ea exercitation commodo non consequat ipsum eiusmod id ex enim.',
		images: [
			'https://i.imgur.com/bCBt6ga.jpeg',
			'https://i.imgur.com/eRM6hHb.jpeg'
		]
	};

	return (
		<div className="flex flex-col mx-auto" style={{ maxWidth: '1200px' }} >
			<h1 className="mx-auto font-sans">Detalles de la novedad</h1>
			<div className="my-2 w-full overflow-hidden flex items-center bg-neutral-300" style={{ height: 'fit-content', maxHeight: '500px' }}>
				{
					details.images.length > 0
						? <img className="flex" src={details.images[1]} alt={`Imagen sobre ${details.titulo}`} width={'100%'}/>
						: <div className="flex bg-neutral-800 font-sans text-white w-full items-center justify-center" style={{ height: '500px' }}>
							<p>Imagen no encontrada</p>
						</div>
				}

			</div>
			<div className="flex flex-col px-5 md:px-8">
				<h2 className="font-sans">{details.titulo}</h2>
				<p className="m-0 p-0">{details.descripcion}</p>
				<a className="mx-auto sm:mx-0 mb-4 mt-8" href={'/'}>
					<button className="hover:scale-105 transition-transform appearance-none border border-transparent text-base w-44 text rounded-lg cursor-pointer bg-redOng text-white py-3">
            Volver al inicio
					</button>
				</a>
			</div>
		</div>
	);
};
