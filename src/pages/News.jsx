import React from 'react';
import { NewsShow } from '../components/News/NewsShow';

export const News = () => {
	return (
		<div className="flex flex-col justify-center mx-auto"
			style={{ maxWidth: '1500px' }}
		>
			<h1>Últimas novedades</h1>
			<NewsShow className="justify-center" />
		</div>
	);
};
