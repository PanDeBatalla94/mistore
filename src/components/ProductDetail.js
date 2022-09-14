import React from 'react';
import '../css/ProductDetail.css';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
            <div className="item-detail">
                <div className="item-detail-galery">
                    <img src="./images/Xiaomi_Image.jpeg" alt="Product Image"/>
                    <div className="images-galery">
                        <img src={require('../images/XiaomiRedmin10pro_1.webp').default} alt="image 1"/>
                        <img src={require('../images/XiaomiRedmin10pro_2.webp').default} alt="image 2"/>
                        <img src={require('../images/XiaomiRedmin10pro_3.webp').default} alt="image 3"/>
                        <img src={require('../images/XiaomiRedmin10pro_4.webp').default} alt="image 4"/>
                        <img src={require('../images/XiaomiRedmin10pro_5.webp').default} alt="image 5"/>
                    </div>
                </div>
                <div className="item-detail-options">
                    <div className="item-detail-description">
                        <h1>Xiaomi Redmi Note 10 Pro</h1>
                        <p>Bs. 1500</p>
                        <p>Disponible</p>
                    </div>

                    <div className="item-options">
                        <div className="item-options">
                            <h2 className="item-option-text">Capacidad:</h2>
                            <div className="option-container">
                                <div>
                                    <input type="radio" className="radio-option" id="size-option1"/>
                                    <label for="size-option1">64GB-6GB RAM</label>                        
                                </div>                     
                                                    
                                <div>
                                    <input type="radio" className="radio-option" id="size-option2"/>
                                    <label for="size-option2">128GB-6GB RAM</label>   
                                </div>                     
                            
                            
                                <div>
                                    <input type="radio" className="radio-option" id="size-option2"/>
                                    <label for="size-option2">64GB-8GB RAM</label>     
                                </div>                   
                            
                                <div>
                                    <input type="radio" className="radio-option" id="size-option2"/>
                                    <label for="size-option2">128GB-8GB RAM</label>      
                                </div>                  
                            </div>
                        </div>
                    </div>

                    <div className="item-options">
                        <h2 className="item-option-text">Color:</h2>
                        <div className="option-container">
                            <div>
                                <input type="radio" className="radio-option" id="size-option1"/>
                                <label for="size-option1">Nebula Purple</label>                        
                            </div>
                            
                            <div>
                                <input type="radio" className="radio-option" id="size-option1"/>
                                <label for="size-option1">Aurora Green</label>                        
                            </div>

                            <div>
                                <input type="radio" className="radio-option" id="size-option1"/>
                                <label for="size-option1">Glaciar Blue</label>                        
                            </div>

                            <div>
                                <input type="radio" className="radio-option" id="size-option1"/>
                                <label for="size-option1">Gradient Bronze</label>                        
                            </div>

                            <div>
                                <input type="radio" className="radio-option" id="size-option1"/>
                                <label for="size-option1">Onyx Gray</label>                        
                            </div>
                        </div>                
                    </div>

                    <div class="item-qty">
                        <h2 class="item-option-text">Cantidad:</h2>
                        <div class="qty-container">
                            <img src="./icons/minus-solid.svg" alt="- icon" class="qty-icons"/>
                            <p>1</p>
                            <img src="./icons/plus-solid.svg" alt="+ icon" class="qty-icons"/>
                        </div>
                    </div>

                    <div className="item-detail-buttons">
                        <button className="add-cart-btn">Agregar al Carrito</button>
                        <button className="buy-now-btn">Comprar Ahora</button>
                        <div className="item-favorite">
                            <img src="./icons/heart-icon.svg" alt="favorite icon"/>
                            <p>Agregar a Favoritos</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         );
    }
}
 
export default ProductDetail;