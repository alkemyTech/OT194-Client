import React, { Component } from "react";
import { connect } from "react-redux";
import SweetAlert from "sweetalert2-react";
import { hideAlert, showAlert } from "../actions/alertsActions";

class AlertsProvider extends Component {
    constructor(props) {
        super (props);

        this.state = {
            show: false
        };
    }

    confirm = () => {
        console.log('Oculta la Alerta');
        this.props.hideAlert();
    }

    openAlert = () => {
        console.log('Muestra la Alerta');
        this.props.showAlert(true, 'Probando la Alerta', 'Acá la información de la alerta')
    }

    render() {
        const {children, alert} = this.props;

        return (
            <>
                {/* Esto es temporal, para mostrar que funciona la alerta */}
                <button onClick={this.openAlert}>Abre la Alerta</button>
                {children}
                <SweetAlert
                    show = {alert.show}
                    text = {alert.text}
                    title = {alert.title}
                    onConfirm= {this.confirm}
                />
                
            </>
        )
    }
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