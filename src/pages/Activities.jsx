import React from 'react';
import { ActivitiesShow } from '../components/Activities/ActivitiesShow';

export const Activities = () => {
	return (
		<div className="flex flex-col justify-center mx-auto my-16"
			style={{ maxWidth: '1500px', width: '90vw' }}
		>
			<h1>Actividades</h1>
			<ActivitiesShow className="justify-center" />
		</div>
	);
};
