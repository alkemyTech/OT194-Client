import React from 'react';
import PropTypes from 'prop-types';
import { StaffCard } from './StaffCard';

export const StaffShow = ({ isLimited, isCentered, className }) => {
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
		<div className={`${className} flex flex-wrap gap-4`}>
			{
				staff.length >= 1
					? staff.slice(0, (isLimited ? 5 : staff.length)).map(data => (
						<StaffCard key={data.id} data={data} />
					))
					: <p>No hay miembros</p>
			}
		</div>
	);
};

StaffShow.propTypes = {
	isLimited: PropTypes.bool,
	isCentered: PropTypes.bool,
	className: PropTypes.string
};
