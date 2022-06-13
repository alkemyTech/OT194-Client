import React from 'react';
import NavLinks from './NavLinks';
import SocialMediaLinks from './socialMediaLinks';

export const Footer = () => {
	return (
		<footer
			className="flex flex-col gap-6 pb-8 bg-gray-100 text-center"
		>
			<div className="flex items-center gap-3">
				<div className="w-full mx-auto rounded-md h-0.5 bg-redOng flex" />
				<img
					src="/logo-fundacion.png"
					height={95}
					alt="logo de la fundacion"
				/>
				<div className="w-full mx-auto rounded-md h-0.5 bg-blueOng flex" />
			</div>
			<NavLinks />
			<SocialMediaLinks />
		</footer>
	);
};
