import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import PropTypes from 'prop-types';
import { resetAlert } from '../features/alert/alertSlice';

const AlertsProvider = (props) => {
	const dispatch = useDispatch();
	const alert = useSelector(store => store.alerts);

	const confirm = () => dispatch(resetAlert());

	return (
		<>
			{props.children}
			<SweetAlert
				show = {alert.show}
				text = {alert.text}
				title = {alert.title}
				onConfirm= {confirm}
			/>
		</>
	);
}

AlertsProvider.propTypes = {
	children: PropTypes.element
};

export default AlertsProvider;
