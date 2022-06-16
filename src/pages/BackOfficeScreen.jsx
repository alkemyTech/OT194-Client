import React from 'react';
import { useSelector } from 'react-redux';
import { OptionCard } from '../components/Backoffice/OptionCard';
import { FaNewspaper, FaList, FaTable, FaComments, FaSitemap, FaSlideshare, FaUsers, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const BackOfficeScreen = () => {
	const { user } = useSelector((state) => state.auth);

	if (user && user.roleId !== 2) {
		return (
			<div className='flex justify-center items-center'>
				<div className='flex gap-14 flex-wrap justify-center items-center my-14' style={ { width: '80%', height: '80%' } }>
					<OptionCard title={'Usuario'} icon={<FaUsers size={70} />} />
				</div>
			</div>
		);
	}

	return (
		<div className='flex justify-center items-center'>
			<div className='flex gap-14 flex-wrap justify-center items-center my-14' style={ { width: '80%', height: '80%' } }>
				<Link to ={'/backoffice/news'}> <OptionCard title={'Novedades'} icon={<FaNewspaper size={70} />} /> </Link>
				<OptionCard title={'Actividades'} icon={<FaList size={70} />} />
				<OptionCard title={'Categorias'} icon={<FaTable size={70} />} />
				<OptionCard title={'Testimonios'} icon={<FaComments size={70} />} />
				<OptionCard title={'Organizacion'} icon={<FaSitemap size={70} />} />
				<OptionCard title={'Slides'} icon={<FaSlideshare size={70} />} />
				<OptionCard title={'Usuarios'} icon={<FaUsers size={70} />} />
				<OptionCard title={'Miembros'} icon={<FaUserFriends size={70} />} />
			</div>
		</div>
	);
};
