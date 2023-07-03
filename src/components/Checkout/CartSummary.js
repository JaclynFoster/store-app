import React from 'react'
import { Divider } from 'antd'
import './CartSummary.css'
import goat from '../../images/goat.jpg'

const CartSummary = () => {
    return(
        <aside className="cart-summary-container">
            <h3 className="summary-title">Cart Summary:</h3>
            <Divider />
            <div className="cart-item-display">

            <div className="item-container"> 
            <img src={goat} className="summary-img"/>
            <span className="item-name-span">Name of Item</span>
            <span className="qty-span"> x 2</span>
            <span className="item-total-span">$75.00</span>
            </div>
            <div className="item-container">

            <img src={goat} className="summary-img"/>
            <span className="item-name-span">Name of Item</span>
            <span className="qty-span"> x 2</span>
            <span className="item-total-span">$75.00</span>
            </div>
            </div>
            <Divider />
            <div className="sub-container">
            <label>Subtotal</label>
            <span >$75.00</span>
            </div>
            <div className="tot-container">

            <label>Total</label>
            <span>$75.00</span>
            </div>

        </aside>
    )
}

export default CartSummary