import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SweetAlert from 'sweetalert2-react';
import { hideAlert, showAlert } from '../actions/alertsActions';

function AlertsProvider (props: { children: React.ReactNode }) {
	const dispatch = useDispatch();
	const alert = useSelector(store => store.alerts);

	const confirm = () => {
		console.log('Oculta la Alerta');
		dispatch(hideAlert());
	};

	const openAlert = () => {
		console.log('Muestra la Alerta');
		dispatch(showAlert(true, 'Probando la Alerta', 'Acá la información de la alerta'));
	};

	return (
		<>
			{/* Esto es temporal, para mostrar que funciona la alerta */}
			<button onClick={openAlert}>Abre la Alerta</button>
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

export default AlertsProvider;
