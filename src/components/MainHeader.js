import React from 'react';
import '../css/MainHeader.css';
class MainHeader extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <img src={require('../icons/logomi.png').default} alt="logo company" className="logo-image" />        
                <div className="search-container">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" className="search" placeholder="Buscar Producto......" />
                            <button type="submit" className="search-btn">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                    <div className="icon-container">
                        <img src={require('../icons/cart-store.svg').default} alt="cart" />
                        <h2 className="text-icon">Mi Carrito</h2>
                    </div>
                    <div className="icon-container">
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
         );
    }
}
 
export default MainHeader;