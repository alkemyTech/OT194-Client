import React from 'react';

export const Footer = () => {
	/* TODO:
    Conectar con el endpoint de datos publicos
    Cambiar el logo placeholder por el logo de la fundacion
    Colocar los links de cada seccion de la web
  */

	const publicData = {
		name: 'Somos Más!',
		sections: [
			{
				title: 'Inicio',
				link: ''
			},
			{
				title: 'Nosotros',
				link: ''
			},
			{
				title: 'Novedades',
				link: ''
			},
			{
				title: 'Testimonios',
				link: ''
			},
			{
				title: 'Contacto',
				link: ''
			},
			{
				title: 'Contribuye',
				link: ''
			}
		],
		socials: [
			{
				web: 'Instagram',
				name: 'SomosMás',
				link: ''
			},
			{
				web: 'Facebook',
				name: 'Somos_Más',
				link: ''
			}
		]
	};

	return (
		<div
			className="flex flex-col gap-6 py-10 bg-gray-100 text-center"
		>
			<div className="flex items-center gap-1">
				<div className="w-full mx-auto rounded-md h-0.5 bg-redOng flex" />
				<img src="/logo-fundacion.png" height={100} alt="logo de la fundacion" />
				<div className="w-full mx-auto rounded-md h-0.5 bg-blueOng flex" />
			</div>
			<div className="w-20 mx-auto rounded-md h-0.5 bg-black flex sm:hidden" />
			<div className="flex flex-col sm:flex-row mx-auto gap-2 sm:gap-8">
				{
					publicData.sections.map((section, i) => (
						<p className="hover:scale-105 transition-transform font-medium" key={i}>
							<a className="transition-colors no-underline visited:text-gray-500" href={section.link}>{section.title}</a>
						</p>
					))
				}
			</div>
			<div className="w-20 mx-auto rounded-md h-0.5 bg-black flex sm:hidden" />
			<div className="flex mx-auto gap-8">
				{
					publicData.socials.map((social, i) => (
						<span className="flex flex-col" key={i}>
							<p className="font-bold text-sky-500">
								{social.web}
							</p>
							<a className="transition-colors no-underline visited:text-gray-500" href={social.link}>{social.name}</a>
						</span>
					))
				}
			</div>
		</div>
	);
};
