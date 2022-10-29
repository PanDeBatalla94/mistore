import React from 'react';
import '../css/MainHeader.css';
import logo from '../icons/logomi.png';
import cartstore from '../icons/cart-store.svg';

class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    state = { hidden: true, cartItems:[] }

    toggleHidden() {
        this.setState(() => ({ hidden: !this.state.hidden }));
    }

    render() { 
        return ( 
            <div className='bodyMain'>
                <div className='headerMain'>
                    
                    <img src={logo} alt="logo" className="logo-image" />        
                    <div className="search-container">
                        <div className="containerMain">
                            <div className="search-box">
                                <input type="text" className="search" placeholder="Buscar Producto......" />
                                <button type="submit" className="search-btn">
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                        <div className="icon-containerMain">
                            <img src={cartstore} alt="cart" />
                            <h2 className="text-icon">Mi Carrito</h2>
                        </div>
                        <div className="icon-containerMain">
                            <img src={require('../icons/heart-icon.svg').default}  alt="wishlist" />
                            <h2 className="text-icon">Lista de Deseos</h2>
                        </div>      
                    </div>           
                    <div className="account-container">
                        <div className="email-account-container">
                            <img src={require('../icons/person-icon.svg').default} alt="user-icon" />
                            <h2>Mi cuenta</h2>
                            <img src={require('../icons/triangle-down-icon-no.svg').default}  alt="down arrow" />
                        </div>
                    </div>
                </div>




            </div>   
         );
    }
}
 
export default MainHeader;