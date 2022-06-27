import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getActivities } from '../../features/activities/activitiesSlice';
import { ActivityCard } from './ActivityCard';

export const ActivitiesShow = ({ isLimited, className }) => {
	const dispatch = useDispatch();
	const allActivities = useSelector(state => state.activities.activities);

	useEffect(() => {
		dispatch(getActivities());
	}, []);

	return (
		<div className={`${className} flex flex-wrap gap-4`}>
			{
				allActivities.length >= 1
					? allActivities.slice(0, (isLimited ? 2 : allActivities.length)).map(data => (
						<ActivityCard key={data.id} data={data} />
					))
					: <p>No hay actividades disponibles</p>
			}
		</div>
	);
};

ActivitiesShow.propTypes = {
	isLimited: PropTypes.bool,
	className: PropTypes.string
};
