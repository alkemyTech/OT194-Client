import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';
import { NewsCard } from './NewsCard';

export const NewsShow = ({ isLimited, isCentered, className }) => {
	const dispatch = useDispatch();
	const allNews = useSelector(state => state.news.allNews);

	useEffect(() => {
		dispatch(getAllNews());
	}, []);

	return (
		<div className={`${className} flex flex-wrap gap-4`}>
			{allNews.length && allNews.slice(0, (isLimited ? 2 : allNews.length)).map(data => (
				<NewsCard key={data.id} data={data} />
			))}
		</div>
	);
};

NewsShow.propTypes = {
	isLimited: PropTypes.bool,
	isCentered: PropTypes.bool,
	className: PropTypes.string
};
