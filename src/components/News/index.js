import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';

const Card = ({ data }) => (
	<div
		className="shadow-lg grid grid-cols-2 space-x-3 p-3 overflow-hidden bg-blueOng rounded-3xl box-border border-solid border border-blue-700"
		style={{ backgroundColor: '#7E9AFD', width: '448px', height: '233px' }}
	>
		<div className="box-content overflow-hidden">
			<img
				alt={data.name}
				className="rounded-3xl h-full w-full"
				src={data.image}
			/>
		</div>
		<div className="flex flex-col justify-between p-2.5">
			<p className="m-0 font-medium text-base text-left" >
				{data.content.slice(0, 135)}...
			</p>
			<Link to={`/news/${data.id}`}>
				<button className="cursor-pointer drop-shadow-md w-full bg-blue-700 text-white appearance-none py-2.5 border rounded-lg border-transparent ease-in-out duration-200 hover:bg-white hover:border-blue-700 hover:text-black">
						Ver Novedad
				</button>
			</Link>
		</div>
	</div>
);

export const News = () => {
	const dispatch = useDispatch();
	const allNews = useSelector(state => state.news.allNews);
	useEffect(() => {
		dispatch(getAllNews());
	}, []);
	const location = useLocation();
	const { pathname } = location;
	return (
		<>{pathname === '/'

			? (<div className='flex flex-col w-screen min-h-1/5 '>
				<div className='inline-flex flex-row items-end content-center justify-between px-20 py-1'>
					<span className='text-2xl font-black '>Novedades</span>
					<div className='flex items-center'>
						<Link to={'/news'} className='flex items-center no-underline' > Ver todos
							<img src="images/vector.png" alt="go to" className='ml-2' />
						</Link>
					</div>
				</div>
			</div>)
			: (<h1 className="flex justify-center font-bold ">Últimas novedades</h1>)
		}
		<div className="p-4 mx-auto"
			style={{ maxWidth: '1500px' }}>
			<div className="flex flex-wrap gap-4 justify-center">
				{allNews.length && allNews.slice(0, (pathname === '/' ? 2 : allNews.length - 1)).map(data => (
					<Card key={data.id} data={data} />
				))}
			</div>
		</div>
		</>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
