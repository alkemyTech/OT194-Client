import React from 'react';
import { NewsShow } from '../components/News/NewsShow';

export const News = () => {
	return (
		<div className="flex flex-col justify-center mx-auto my-16"
			style={{ maxWidth: '1500px', width: '90vw' }}
		>
			<h1>Novedades</h1>
			<NewsShow className="justify-center" />
		</div>
	);
};
