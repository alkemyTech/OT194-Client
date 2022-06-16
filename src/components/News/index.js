import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getAllNews } from '../../features/news/newsSlice';

const Card = ({ data }) => (
	<div className="w-max shadow-lg flex bg-blueOng rounded-3xl mx-5 border-solid border  border-blue-700" style={{ backgroundColor: '#7E9AFD' }}>
		<div className="flex-no-shrink w-1/2">
			<img
				alt={data.name}
				className="block mx-auto rounded-3xl p-2 h-32 w-32"
				src={data.image}
			/>
		</div>
		<div className="max-w-lg flex flex-wrap-reverse justify-between">
			<div>
				<h3 className="font-medium p-2">{data.name}</h3>
				<Link to={`/news/${data.id}`}>
					<button className="w-32 m-2 font-englebert bg-blue-700  text-white font-mulish appearance-none py-2 px-4 border rounded-xl border-transparent  roundedbg-blue-700 ease-in-out duration-200  hover:bg-white hover:border-blue-700 hover:text-black" style={{ boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)' }}>
						Ver Novedad
					</button>
				</Link>
			</div>
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
		<div className="p-4">
			<div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{allNews.length && allNews.slice(0, (pathname === '/' ? 3 : allNews.length - 1)).map(data => (
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
