import React from 'react';
import { useSelector } from 'react-redux';
import { OptionCard } from '../components/Backoffice/OptionCard';
import { FaNewspaper, FaList, FaComments, FaSitemap, FaUsers, FaUser, FaUserSlash, FaSlideshare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CardDeleteUser } from '../components/Backoffice/CardDeleteUser';

export const BackOfficeScreen = () => {
	const { user } = useSelector((state) => state.auth);

	return (
		<div className='flex justify-center items-center'>
			<div className='flex gap-14 flex-wrap justify-center items-center my-14' style={ { width: '80%', height: '80%' } }>
				<Link to ={'/backoffice/usuario'}><OptionCard title={'Editar usuario'} icon={<FaUser size={70} />} /></Link>
				<CardDeleteUser title={'Eliminar cuenta'} icon={<FaUserSlash size={70} />} />
				{user?.roleId === 2 &&
				<>
					<Link to ={'/backoffice/news'}><OptionCard title={'Novedades'} icon={<FaNewspaper size={70} />} /></Link>
					<Link to ={'/backoffice/activities'}><OptionCard title={'Actividades'} icon={<FaList size={70} />} /></Link>
					<Link to={'/backoffice/testimonials'}><OptionCard title={'Testimonios'} icon={<FaComments size={70} />} /></Link>
					<Link to={'/backoffice/organization'}><OptionCard title={'Organizacion'} icon={<FaSitemap size={70} />} /></Link>
					<Link to={'/backoffice/usuarios'}><OptionCard title={'Usuarios'} icon={<FaUsers size={70} />} /></Link>
					<Link to={'/backoffice/slides'}><OptionCard title={'Slides'} icon={<FaSlideshare size={70} />} /></Link>
				</>
				}

			</div>
		</div>
	);
};
