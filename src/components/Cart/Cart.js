import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    // const total = cart.reduce((total, prd) => (total + prd.price), 100);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    total = Number(total.toFixed(2));

    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12.99;
    }


    const tax = Number((total * 0.10).toFixed(2));
    
    const grandTotal = Number((total + shipping + tax).toFixed(2));

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : ${total}</p>
            <p>Shipping Cost : ${shipping}</p>
            <p>VAT+Tax : ${tax}</p>
            <p>Grand Total : ${grandTotal}</p>
        </div>
    );
};

export default Cart;