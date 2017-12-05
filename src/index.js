import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import './index.css';

const DATA = [
    {
        id : 1,
        season : 'Primavera',
        fresh : [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19],
        salt : [20, 21, 1, 22, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 13, 15, 36, 37, 38, 40, 41, 42, 44, 45, 46]
    },
    {
        id : 2,
        season : 'Verano',
        fresh : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19],
        salt : [20, 21, 1, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 7, 34, 35, 13, 36, 37, 38, 39, 41, 43, 44, 45, 46]

    },
    {
        id : 3,
        season : 'Otoño',
        fresh : [1, 3, 5, 9, 10, 13, 14, 15, 18, 19],
        salt : [21, 1, 23, 24, 25, 28, 30, 33, 34, 15, 38, 39, 40, 42, 44, 45, 46]
    },
    {
        id : 4,
        season : 'Invierno',
        fresh : [1, 15],
        salt : [25, 28, 34, 15, 38, 42, 45]
    }
];

const FISHDATA = [
    {
        name : 'Armado',
        mode : [1],
        size : 30,
        bait : [13, 24, 25, 17]
    },
    {
        name : 'Bagre',
        mode : [1],
        size : 20,
        bait : [2, 6, 10, 15, 13, 19, 9, 24, 20, 25, 7, 12]
    },
    {
        name : 'Boga',
        mode : [0, 1],
        size : 30,
        bait : [13, 19, 9, 10, 24, 16, 17]
    },
    {
        name : 'Carpa',
        mode : [1],
        size : 0,
        bait : [13, 16, 17]
    },
    {
        name : 'Chafalote',
        mode : [0, 1, 2],
        size : 0,
        bait : [19, 10, 23, 20, 5, 1, 3]
    },
    {//5
        name : 'Dientudo',
        mode : [0, 1, 2],
        size : 0,
        bait : [13, 19, 10, 24, 7, 12]
    },
    {
        name : 'Dorado',
        mode : [0, 1, 2],
        size : 60,
        bait : [14, 19, 10, 23, 20, 5, 1, 3]
    },
    {
        name : 'Lisa',
        mode : [0],
        size : 0,
        bait : [13]
    },
    {
        name : 'Manduva/e/i',
        mode : [0, 1, 2],
        size : 35,
        bait : [19, 10, 23, 20]
    },
    {
        name : 'Manguruyu',
        mode : [1, 2],
        size : 'x',
        bait : [19, 10, 23, 20, 5, 1, 3]
    },
    {//10
        name : 'Mojarra',
        mode : [0, 1],
        size : 0,
        bait : [13, 24, 17]
    },
    {
        name : 'Moncholo',
        mode : [1],
        size : 35,
        bait : [13, 19, 10, 23, 20, 25]
    },
    {
        name : 'Pacu',
        mode : [1],
        size : 50,
        bait : [13, 24, 16, 17, 11]
    },
    {
        name : 'Palometa',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 7, 10, 15, 13, 19, 10, 23, 24, 20, 25, 5, 1, 7, 12, 22, 3]
    },
    {
        name : 'Pati',
        mode : [0, 1, 2],
        size : 45,
        bait : [13, 19, 10, 20, 25, 7, 3]
    },
    {//15
        name : 'Pejerrey',
        mode : [0, 1, 2],
        size : 25,
        bait : [0, 21, 7, 10, 15, 13, 19, 10, 7, 12]
    },
    {
        name : 'Pira-Pita',
        mode : [0, 1],
        size : 0,
        bait : [19, 10]
    },
    {
        name : 'Raya',
        mode : [1],
        size : 0,
        bait : [13, 19, 10, 23, 20, 1, 3]
    },
    {
        name : 'Surubi',
        mode : [1, 2],
        size : 85,
        bait : [19, 23, 20, 5, 1, 3]
    },
    {
        name : 'Tararira',
        mode : [0, 1, 2],
        size : 45,
        bait : [19, 10, 23, 24, 20, 25, 5, 1, 7, 12, 22, 3]
    },
    //SaltWaterFishes
    {//20
        name : 'Abadejo',
        mode : [1, 2],
        size : 0,
        bait : [4, 6, 10]
    },
    {
        name : 'Anchoa',
        mode : [0, 1, 2],
        size : 0,
        bait : [4, 7, 10, 15]
    },
    {
        name : 'Besugo',
        mode : [1],
        size : 26,
        bait : [4, 7, 6]
    },
    {
        name : 'Bonito',
        mode : [1, 2],
        size : 0,
        bait : [4, 10, 15]
    },
    {
        name : 'Burriqueta',
        mode : [1],
        size : 0,
        bait : [0, 7, 15, 18]
    },
    {//25
        name : 'Brotola',
        mode : [1],
        size : 0,
        bait : [0, 7, 10, 15, 18]
    },
    {
        name : 'Caballa',
        mode : [1, 2],
        size : 0,
        bait : [21, 10]
    },
    {
        name : 'Cazón',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 4, 21, 6, 10, 15]
    },
    {
        name : 'Chucho',
        mode : [1],
        size : 0,
        bait : [0, 2, 21, 7, 8, 6, 10, 14, 15]
    },
    {
        name : 'Congrio',
        mode : [1],
        size : 0,
        bait : [21, 10, 15]
    },
    {//30
        name : 'Corvina Negra',
        mode : [1],
        size : 50,
        bait : [0, 8, 18]
    },
    {
        name : 'Corvina Rubia',
        mode : [1],
        size : 35,
        bait : [0, 2, 21, 7, 6, 10, 15, 18]
    },
    {
        name : 'Gatuzo',
        mode : [1],
        size : 60,
        bait : [2, 4, 21, 8, 6, 10, 15]
    },
    {
        name : 'Lenguado',
        mode : [1, 2],
        size : 0,
        bait : [21, 7, 10]
    },
    {
        name : 'Melgacho',
        mode : [1],
        size : 0,
        bait : [0, 2, 21, 7, 10, 15]
    },
    {//35
        name : 'Mero',
        mode : [1],
        size : 0,
        bait : [2, 21, 6, 10, 15]
    },
    {
        name : 'Pescadilla',
        mode : [0, 1, 2],
        size : 30,
        bait : [0, 2, 21, 7, 10, 15]
    },
    {
        name : 'Pez Ángel',
        mode : [1],
        size : 75,
        bait : [7, 10, 15]
    },
    {
        name : 'Pez Elefante',
        mode : [1],
        size : 0,
        bait : [2, 7, 6, 14, 15]
    },
    {
        name : 'Pez Limón',
        mode : [1, 2],
        size : 0,
        bait : [4, 21, 10, 15]
    },
    {//40
        name : 'Pez Palo',
        mode : [0, 1, 2],
        size : 46,
        bait : [2, 7, 10, 14, 15]
    },
    {
        name : 'Pez Sable',
        mode : [1, 2],
        size : 0,
        bait : [2, 7, 10, 15]
    },
    {
        name : 'Robalo',
        mode : [1, 2],
        size : 0,
        bait : [4, 21, 10, 15]
    },
    {
        name : 'Salmón',
        mode : [1, 2],
        size : 37,
        bait : [4, 21, 8, 6, 10]
    },
    {
        name : 'Sardina',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 7, 10, 15]
    },
    {//45
        name : 'Sargo',
        mode : [0, 1],
        size : 0,
        bait : [7, 10, 15]
    },
    {
        name : 'Tiburon',
        mode : [0, 1, 2],
        size : 80,
        bait : [2, 4, 21, 6, 10, 15]
    }
];

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <span className="navbar-text">
                    Épocas de Pesca
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="http://www.caminosypiedras.com/pesca" target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Seasons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeItem: {}
        };

        this.toggleActiveItem = this.toggleActiveItem.bind(this);
    }

    toggleActiveItem(seasonId) {
        this.setState({ activeItem: { [seasonId]: true } });
    }

    render() {
        const listSeasons = DATA.map((item) =>
            <li
                key={item.season}
                className={this.state.activeItem[item.id] ? 'list-group-item active' : 'list-group-item'}
                onClick={e => this.toggleActiveItem(item.id)}>
                <span>{item.season}</span>
                <WaterSource freshList={item.fresh} saltList={item.salt} />
            </li>
        );

        return (
            <ul className="list-group">{listSeasons}</ul>
        );
    }
}

class WaterSource extends React.Component {
    constructor(props) {
        super(props);

        this.state = { activeItem: {} };
        this.toggleActiveItem = this.toggleActiveItem.bind(this);
    }

    toggleActiveItem(sourceId) {
        if(this.state.activeItem[sourceId]) {
            this.setState({ activeItem: {} });
        } else {
            this.setState({ activeItem: { [sourceId]: true } });
        }
    }

    render() {
        return (
            <ul className="water-source">
                <li className={this.state.activeItem[1] ? 'active' : ''}
                    onClick={e => this.toggleActiveItem(1)}>
                    <span>Ríos, Lagos y Lagunas</span>
                    <Fish fishList={this.props.freshList} />
                </li>
                <li className={this.state.activeItem[2] ? 'active' : ''}
                    onClick={e => this.toggleActiveItem(2)}>
                    <span>Mares</span>
                    <Fish fishList={this.props.saltList} />
                </li>
            </ul>
        );
    }
}

class Fish extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };
    }

    toggleModal = (fishId) => {
        this.setState({
            isOpen: !this.state.isOpen,
            fishInfo: FISHDATA[fishId]
        });
    }

    render() {
        const listFish = this.props.fishList.map((item) =>
            <li key={item} onClick={this.toggleModal.bind(this, item)}>
                {FISHDATA[item].name}
            </li>
        );

        return (
            <div>
                <ul>{listFish}</ul>
                <Modal show={this.state.isOpen} fishInfo={this.state.fishInfo} onClose={this.toggleModal} />
            </div>
        );
    }
}

class FishingList extends React.Component {
    render() {
        return (
            <div className="fishing">
                <Header />
                <div className="seasons">
                    <p className="text-center">¡Bienvenidos! Esta es una lista de las distintas especies que puedes pescar separadas por época del año. Haciendo click en cada uno de los peces encontrarás información adicional como: <strong>modalidad de pesca, medida reglamentaria y carnada</strong>.</p>
                    <Seasons />
                </div>
                <div className="advertising"></div>
                <div className="info">
                    <p>Copyright &copy; 2017 - <a href="http://www.caminosypiedras.com/" target="_blank" rel="noopener noreferrer">Caminos y Piedras</a></p>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <FishingList />,
    document.getElementById('root')
);
