import React from 'react';
import PropTypes from 'prop-types';

const FISHING_MODE = ['Flote', 'Fondo', 'Artificial'];
const BAITS = [
    'Almeja', //0
    'Amarillo',
    'Anchoita',
    'Anguila',
    'Caballa',
    'Cascarudo', //5
    'Calamar',
    'Camarón',
    'Cangrejo',
    'Corazón',
    'Filet', //10
    'Fruta',
    'Isoca',
    'Lombriz',
    'Lombriz de Mar',
    'Magrú', //15
    'Maíz',
    'Masa',
    'Mejillón',
    'Mojarra',
    'Morena', //20
    'Pejerrey',
    'Rana',
    'Sabalito',
    'Salamin',
    'Tripa' //25
];

class Modal extends React.Component {
    fishingModes = (modes) => {
        modes = modes.map(function(elem) {
            return FISHING_MODE[elem];
        });

        return modes.join(', ');
    }

    fishingSize = (size) => {
        if(size === 'x') {
            return 'Veda Permanente';
        }

        return size ? size + 'cm' : '';
    }

    fishingBaits = (baits) => {
        baits = baits.map(function(elem) {
            return BAITS[elem];
        });

        return baits.join(', ');
    }

    render() {
        // Render nothing if the "show" prop is false
        if(!this.props.show) {
            return null;
        }

        // The gray background
        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            padding: 20
        };

        // The modal "window"
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            margin: '0 auto'
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="card" style={modalStyle}>
                    <img className="card-img-top" src="..." alt={this.props.fishInfo.name} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.fishInfo.name}</h4>
                        <p className="card-text">

                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Modalidad de Pesca: {this.fishingModes(this.props.fishInfo.mode)}</li>
                        { this.props.fishInfo.size ? (<li className="list-group-item">Medida Reglamentaria: {this.fishingSize(this.props.fishInfo.size)}</li>) : '' }
                        <li className="list-group-item">Carnada: {this.fishingBaits(this.props.fishInfo.bait)}</li>
                    </ul>
                    <div className="card-body">
                        <button type="button" className="btn btn-secondary" onClick={this.props.onClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool
};

export default Modal;