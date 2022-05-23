import React from "react";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";
import { hideAlert, showAlert } from "../actions/alertsActions";

function AlertsProvider (props) {
    const confirm = () => {
        console.log('Oculta la Alerta');
        props.hideAlert();
    }

    const openAlert = () => {
        console.log('Muestra la Alerta');
        props.showAlert(true, 'Probando la Alerta', 'Acá la información de la alerta')
    }

    return (
        <>
            {/* Esto es temporal, para mostrar que funciona la alerta */}
            <button onClick={openAlert}>Abre la Alerta</button>
            {props.children}
            <SweetAlert
                show = {props.alert.show}
                text = {props.alert.text}
                title = {props.alert.title}
                onConfirm= {confirm}
            />
            
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        alert: state.alerts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showAlert: (show, title, text) => dispatch(showAlert(show, title, text)),
        hideAlert: () => dispatch(hideAlert())
    }
}

const AlertsProviderLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(AlertsProvider);

export default AlertsProviderLink;