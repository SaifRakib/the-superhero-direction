import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';

import './Content.css';

const Content = () => {
    // State Declare 
    const [items,setItems] = useState([]);
    const [cart,setCart] = useState([]);

    // Json data load 
    useEffect(() => {
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setItems(data))
    },[])

    // Handle items button
    const handleButton = (item) => {
        const newCart = [...cart,item]
        setCart(newCart);
    }
    return (
        <div>
          <div className="items-container">
                <div className="item-container">
                    {
                        items.map(item => <Item item={item} key={item.id} handleButton={handleButton}></Item>)
                    }
                </div>

                <div className="cart-container">
                    {/* cart item pass */}
                    <Cart cart={cart}></Cart>
                </div>
          </div>
        </div>
    );
};

export default Content;