import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // Destruct the Recieve item props.
    const {cart} = props;

    let total = 0;
    for (const element of cart) {
        // Added total expense
        total  = total + element.salary;
    } 

    return (
        <div>
            {/* Cart item shown here */}
            <div className="cart-item">
                <h3>Total Hired Programmer : {cart.length}</h3>
                <p>Total Expense : <b>$ {total}</b> </p>
                <h4>Your Hired Programmer</h4>
                {
                    cart.map(item => <div key={item.id} className="cart-down">
                        <img src={item.image} alt="" />
                        <p>{item.first_name}</p>
                    </div>)
                }
                
            </div>
        </div>
    );
};

export default Cart;