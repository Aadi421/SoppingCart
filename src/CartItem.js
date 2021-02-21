import React from 'react';


class CartItem extends React.Component{
    render(){
        return(
            <div className="cart-item">

                    <div className="left-block">
                        <img src="" alt=""/ >  
                    </div>
                    <div className="right-block">
                        <div>Title</div>
                        <div>Rs</div>
                        <div>Qty</div>
                        <div className="cart-item-actions">
                          {/* Buttons */}
                        </div>
                        
                        
                    </div>
               
            </div>
        )
    }
}



export default CartItem;