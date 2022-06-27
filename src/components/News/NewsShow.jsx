import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';
import { NewsCard } from './NewsCard';

export const NewsShow = ({ isLimited, className }) => {
	const dispatch = useDispatch();
	const allNews = useSelector(state => state.news.allNews);

	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	return (
		<div className={`${className} flex flex-wrap gap-4`}>
			{
				allNews.length >= 1
					? allNews.slice(0, (isLimited ? 2 : allNews.length)).map(data => (
						<NewsCard key={data.id} data={data} />
					))
					: <p>No hay novedades disponibles</p>
			}
		</div>
	);
};

NewsShow.propTypes = {
	isLimited: PropTypes.bool,
	className: PropTypes.string
};
