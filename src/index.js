import React from 'react';
import ReactDOM from 'react-dom';
import Modal from './modal';
import Ads from './ads';
import './index.css';

const DATA = [
    {
        id : 1,
        season : 'Primavera',
        fresh : [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 18, 19],
        salt : [20, 21, 22, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 40, 41, 42, 44, 45, 46, 47, 48, 50]
    },
    {
        id : 2,
        season : 'Verano',
        fresh : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19],
        salt : [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 43, 44, 45, 46, 47, 48, 49]

    },
    {
        id : 3,
        season : 'Otoño',
        fresh : [1, 3, 5, 9, 10, 13, 14, 15, 18, 19],
        salt : [21, 23, 24, 25, 28, 30, 33, 34, 38, 39, 40, 42, 44, 45, 46, 48, 50]
    },
    {
        id : 4,
        season : 'Invierno',
        fresh : [1, 15],
        salt : [25, 28, 34, 38, 42, 45, 50]
    }
];

const FISHDATA = [
    {
        name : 'Armado',
        mode : [1],
        size : 30,
        bait : [13, 24, 25, 17],
        image : 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Johann_Natterer_-_Abotoado_%28Pterodoras_granulosus%29.jpg'
    },
    {
        name : 'Bagre',
        mode : [1],
        size : 20,
        bait : [13, 19, 9, 10, 24, 19, 25, 7, 12],
        image : 'http://www.caminosypiedras.com/wp-content/uploads/2017/10/DSC_0103.jpg'
    },
    {
        name : 'Boga',
        mode : [0, 1],
        size : 30,
        bait : [13, 19, 9, 10, 24, 16, 17],
        image : 'http://www.caminosypiedras.com/wp-content/uploads/2015/05/IMG_8156.jpg'
    },
    {
        name : 'Carpa',
        mode : [1],
        size : 0,
        bait : [13, 16, 17],
        image : 'https://c.pxhere.com/photos/d2/0a/fishing_catch_holding_fish_usa_wisconsin_yellowstone_lake-968940.jpg!d'
    },
    {
        name : 'Chafalote',
        mode : [0, 1, 2],
        size : 0,
        bait : [19, 10, 23, 20, 5, 1, 3],
        image : 'http://techtackle.com.ar/wp-content/uploads/2016/07/anibal-bahler-chafalote-2.jpg'
    },
    {//5
        name : 'Dientudo',
        mode : [0, 1, 2],
        size : 0,
        bait : [13, 19, 10, 24, 7, 12],
        image : 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Obligosarcus_robustus.jpg'
    },
    {
        name : 'Dorado',
        mode : [0, 1, 2],
        size : 60,
        bait : [14, 19, 10, 23, 20, 5, 1, 3],
        image : 'http://www.pousadahambare.com.br/images/pescadourado3.jpg'
    },
    {
        name : 'Lisa',
        mode : [0],
        size : 0,
        bait : [13, 9],
        image : 'https://img1.exportersindia.com/product_images/bc-full/dir_41/1208013/grey-mullet-411762.jpg'
    },
    {
        name : 'Manduva/e/i',
        mode : [0, 1, 2],
        size : 35,
        bait : [19, 10, 23, 20],
        image : 'http://www.aapesca.com.ar/imagenes-por-anio/2014/53.jpg'
    },
    {
        name : 'Manguruyu',
        mode : [1, 2],
        size : 'x',
        bait : [19, 10, 23, 20, 5, 1, 3],
        image : 'http://3.bp.blogspot.com/_GCFQm2FXIAM/TPPmlDn1e8I/AAAAAAAAHVM/2H_fLzw18g8/w1200-h630-p-k-no-nu/juvenil-de-zungaro-jahu-manguruyu.jpg'
    },
    {//10
        name : 'Mojarra',
        mode : [0, 1],
        size : 0,
        bait : [13, 24, 17],
        image : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Cheirodon_interruptus_2.JPG/1024px-Cheirodon_interruptus_2.JPG'
    },
    {
        name : 'Moncholo',
        mode : [1],
        size : 35,
        bait : [13, 19, 10, 23, 20, 25],
        image : 'https://ugc.kn3.net/i/origin/http://www.pescasalta.com.ar/Documentos/107/bagre_blanco.jpg'
    },
    {
        name : 'Pacu',
        mode : [1],
        size : 50,
        bait : [13, 24, 16, 17, 11],
        image : 'https://c1.staticflickr.com/9/8609/16530309987_da68a03c56_b.jpg'
    },
    {
        name : 'Palometa',
        mode : [0, 1, 2],
        size : 0,
        bait : [13, 19, 9, 10, 23, 24, 20, 25, 5, 1, 7, 12, 22, 3],
        image : 'http://www.caminosypiedras.com/wp-content/uploads/2016/05/DSC_9002.jpg'
    },
    {
        name : 'Pati',
        mode : [0, 1, 2],
        size : 45,
        bait : [13, 19, 10, 20, 25, 7, 3],
        image : 'http://www.caminosypiedras.com/wp-content/uploads/2015/05/IMG_6374.jpg'
    },
    {//15
        name : 'Pejerrey',
        mode : [0, 1, 2],
        size : 25,
        bait : [13, 19, 10, 7, 12],
        image : 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Odontesthes_argentinensis_Punta_Rasa.JPG'
    },
    {
        name : 'Pira-Pita',
        mode : [0, 1],
        size : 0,
        bait : [19, 10],
        image : 'http://www.pescandoconmosca.cl/foro/gallery/image.php?mode=medium&album_id=100&image_id=390'
    },
    {
        name : 'Raya',
        mode : [1],
        size : 0,
        bait : [13, 19, 10, 23, 20, 1, 3],
        image : 'http://www.elasmodiver.com/Sharkive%20images/MotoroStingray004.jpg'
    },
    {
        name : 'Surubi',
        mode : [1, 2],
        size : 85,
        bait : [19, 23, 20, 5, 1, 3],
        image : 'https://upload.wikimedia.org/wikipedia/commons/2/2f/11_kilos_y_medio.jpg'
    },
    {
        name : 'Tararira',
        mode : [0, 1, 2],
        size : 45,
        bait : [19, 10, 23, 24, 20, 25, 5, 1, 7, 12, 22, 3],
        image : 'http://www.caminosypiedras.com/wp-content/uploads/2015/11/11251171_835639739866743_8018520589653974973_n.jpg'
    },
    //SaltWaterFishes
    {//20
        name : 'Abadejo',
        mode : [1, 2],
        size : 0,
        bait : [4, 6, 10],
        image : 'http://www.cotodepezca.com/wp-content/uploads/2013/03/abadejo-1440x564_c.jpg'
    },
    {
        name : 'Anchoa',
        mode : [0, 1, 2],
        size : 0,
        bait : [4, 7, 10, 15],
        image : 'http://4.bp.blogspot.com/-1XZaBJj8DLo/UfPK6PHKIUI/AAAAAAAAACY/m-jklOTGyBM/s1600/Anchoa_nasus,I_RR2828.jpg'
    },
    {
        name : 'Besugo',
        mode : [1],
        size : 26,
        bait : [4, 7, 6],
        image : 'http://www.nauticamarbella.es/imagenes/peces/besugo-2.jpg'
    },
    {
        name : 'Bonito',
        mode : [1, 2],
        size : 0,
        bait : [4, 10, 15],
        image : 'https://c.pxhere.com/photos/72/35/thunnus_tuna_fish_bigeye_tuna_obesus_predatory_fish_fishing_meeresbewohner-1254951.jpg!d'
    },
    {
        name : 'Burriqueta',
        mode : [1],
        size : 0,
        bait : [0, 7, 15, 18],
        image : 'https://s29.postimg.org/85l2y31fb/roncadora.jpg'
    },
    {//25
        name : 'Brotola',
        mode : [1],
        size : 0,
        bait : [0, 7, 10, 15, 18],
        image : 'https://siemprepesca.files.wordpress.com/2011/01/brotollllllllllllllllllllllllllllllllllll.jpg'
    },
    {
        name : 'Caballa',
        mode : [1, 2],
        size : 0,
        bait : [21, 10],
        image : 'https://pixnio.com/free-images/fauna-animals/fishes/atlantic-mackerel-fish-725x544.jpg'
    },
    {
        name : 'Cazón',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 4, 21, 6, 10, 15],
        image : 'http://4.bp.blogspot.com/-lwGLD6OdeT8/VGc86T_L1YI/AAAAAAAAAu8/Brfkc5tBnwk/s1600/DSC_1104.jpg'
    },
    {
        name : 'Chucho',
        mode : [1],
        size : 0,
        bait : [0, 2, 21, 7, 8, 6, 10, 14, 15],
        image : 'http://3.bp.blogspot.com/-GEj2QPyzXqs/UL-d9pRNFoI/AAAAAAAAZ8o/MmZ90U9SUi4/s1600/008.JPG'
    },
    {
        name : 'Congrio',
        mode : [1],
        size : 0,
        bait : [21, 10, 15],
        image : 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Congrio_com%C3%BAn_%28Conger_conger%29.JPG'
    },
    {//30
        name : 'Corvina Negra',
        mode : [1],
        size : 50,
        bait : [0, 8, 18],
        image : 'http://pescayturismo.com/usr/data/image/big/2011-12-29_89082428.jpg'
    },
    {
        name : 'Corvina Rubia',
        mode : [1],
        size : 35,
        bait : [0, 2, 21, 7, 6, 10, 15, 18],
        image : 'https://www.flydreamers.com/2011/10/23/corvina-rubia-fotografia-de-pesca-con-mosca-de-corvina-rubia-por-va-ca-fly-dreamers-FDID749w10000h1mc2df848cc807701cf6498f0cb4a3a648.jpg?other'
    },
    {
        name : 'Gatuzo',
        mode : [1],
        size : 60,
        bait : [2, 4, 21, 8, 6, 10, 15],
        image : 'http://3.bp.blogspot.com/_LkOphEvnc8o/S_LEx9mvHUI/AAAAAAAAJ7I/Lh0DW_ZC7iY/s1600/-gatuzo-2.jpg'
    },
    {
        name : 'Lenguado',
        mode : [1, 2],
        size : 0,
        bait : [21, 7, 10],
        image : 'https://ugc.kn3.net/i/origin/http://todosobrelapesca.blogspot.es/img/lenguado4.jpg'
    },
    {
        name : 'Melgacho',
        mode : [1],
        size : 0,
        bait : [0, 2, 21, 7, 10, 15],
        image : 'https://pescadordeportivo.files.wordpress.com/2012/05/melgacho2.jpg'
    },
    {//35
        name : 'Mero',
        mode : [1],
        size : 0,
        bait : [2, 21, 6, 10, 15],
        image : 'http://www.pesca-oman.com/images/photo/big/peche-merou-2-sud-sultanat-oman.jpg'
    },
    {
        name : 'Pescadilla',
        mode : [0, 1, 2],
        size : 30,
        bait : [0, 2, 21, 7, 10, 15],
        image : 'https://pescadordeportivo.files.wordpress.com/2015/02/img_20150201_160259583_hdr.jpg'
    },
    {
        name : 'Pez Ángel',
        mode : [1],
        size : 75,
        bait : [7, 10, 15],
        image : 'http://mw2.google.com/mw-panoramio/photos/medium/29647798.jpg'
    },
    {
        name : 'Pez Elefante',
        mode : [1],
        size : 0,
        bait : [2, 7, 6, 14, 15],
        image : 'http://2.bp.blogspot.com/-ibwdFuHKzsk/Tm4YikpgJOI/AAAAAAAACh4/CxiFige--CA/s1600/297669_10150365486742288_533447287_9790277_886581848_n%25281%2529.jpg'
    },
    {
        name : 'Pez Limón',
        mode : [1, 2],
        size : 0,
        bait : [4, 21, 10, 15],
        image : 'https://i.ebayimg.com/00/s/NDg3WDY1MA==/z/MvMAAOSwNSxUzG5u/$_20.jpg'
    },
    {//40
        name : 'Pez Palo',
        mode : [0, 1, 2],
        size : 46,
        bait : [2, 7, 10, 14, 15],
        image : 'http://www.charlietango.com.ar/sites/default/files/styles/galleryformatter_slide/public/pez-plo-entero_.jpg?itok=HFlYqk3e'
    },
    {
        name : 'Pez Sable',
        mode : [1, 2],
        size : 0,
        bait : [2, 7, 10, 15],
        image : 'https://cupuladeltrueno.files.wordpress.com/2013/01/estrano-pez-kona-hawai.jpg'
    },
    {
        name : 'Robalo',
        mode : [1, 2],
        size : 0,
        bait : [4, 21, 10, 15],
        image : 'http://www.sibmagallanes.cl/archivos/ecosistemas-acuaticos/fauna/peces/eleginops-maclovinus-cuvier-1830/portada.jpg'
    },
    {
        name : 'Salmón',
        mode : [1, 2],
        size : 37,
        bait : [4, 21, 8, 6, 10],
        image : 'http://www.pescadoresenlared.com.ar/wp-content/uploads/2014/03/S5.jpg'
    },
    {
        name : 'Sardina',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 7, 10, 15],
        image : 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Sardina_pilchardus_2011.jpg'
    },
    {//45
        name : 'Sargo',
        mode : [0, 1],
        size : 0,
        bait : [7, 10, 15],
        image : 'https://www.pescacosmar.com/blog/wp-content/uploads/2016/03/la-pesca-del-sargo-1.jpg'
    },
    {
        name : 'Tiburon',
        mode : [0, 1, 2],
        size : 80,
        bait : [2, 4, 21, 6, 10, 15],
        image : 'http://www.federpesca.com/wp-content/uploads/sites/4/2015/03/Pesca_Tiburon2.jpg'
    },
    {
        name : 'Palometa de mar',
        mode : [0, 1, 2],
        size : 0,
        bait : [2, 7, 10, 15],
        image : 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Palometa.jpg'
    },
    {
        name : 'Bagre de mar',
        mode : [1],
        size : 0,
        bait : [2, 6, 10, 15],
        image : 'https://1.bp.blogspot.com/-k0b6QG3hPj4/VEaYiEHOzrI/AAAAAAAARRw/vxPQhWlf7jI/s1600/100_6442.JPG'
    },
    {
        name : 'Lisa de mar',
        mode : [0],
        size : 0,
        bait : [14],
        image : 'https://img1.exportersindia.com/product_images/bc-full/dir_41/1208013/grey-mullet-411762.jpg'
    },
    {//50
        name : 'Pejerrey de mar',
        mode : [0, 1, 2],
        size : 25,
        bait : [0, 21, 7, 10, 15],
        image : 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Odontesthes_argentinensis_Punta_Rasa.JPG'
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
                <Ads />
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
