import React, { Component } from "react";
import SweetAlert from "sweetalert2-react";

class AlertsProvider extends Component {
    constructor(props) {
        super (props);

        this.state = {
            show: false
        };
    }

    confirm = () => {
        console.log('confirm');
        this.setState({ show: false })
    }

    openAlert = () => {
        this.setState({ show: true })
    }

    render() {
        const {children} = this.props;
        const {show} = this.state;

        return (
            <>
                {/* Esto es temporal, para mostrar que funciona la alerta */}
                <button onClick={this.openAlert}>Abre la Alerta</button>
                {children}
                <SweetAlert
                    show = {show}
                    text = "Mostrando las Alertas que la app necesita"
                    title = "Sistema de alertas"
                    onConfirm= {this.confirm}
                />
                
            </>
        )
    }
}

export default AlertsProvider;