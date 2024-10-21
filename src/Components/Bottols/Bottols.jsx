import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Bottol from "../Bottol/Bottol";
import './Bottols.css'
import { addToLS, getStroredCart, removeToLS } from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottols = () => {
    const [bottols,setBottols] = useState([]);
    const [carts,setCarts] = useState([]);
    // console.log(carts);
    useEffect(()=>{
        fetch('bottols.json')
        .then(response => response.json())
        .then(data => setBottols(data));
    },[]);
    useEffect(()=>{
        console.log(bottols.length);
        if(bottols.length > 0){
            const storedCartId = getStroredCart();
            
            const storedBottols = [];
            for(let id of storedCartId){
                const storedBottol = bottols.find(bottol => bottol.id === id);
                storedBottols.push(storedBottol);
            }

            setCarts(storedBottols);

        
        }
    },[bottols])

    const handleAddToCart = (bottol) => {
        
        const newCarts = [...carts,bottol];
        setCarts(newCarts);
        addToLS(bottol.id);
        
    }

    const handleRemoveCart = (id) =>{
        // visual cart remove
            const remainingCarts = carts.filter(cart => cart.id !== id);
            setCarts(remainingCarts);
        // remove from LS
        removeToLS(id);
    }

    return (
        <div>
            <h2>Bottols Here: {bottols.length}</h2>
            <Cart 
            cart={carts}
            handleRemoveCart = {handleRemoveCart}
            ></Cart>

            <div className="bottole-container">
            {bottols.map(bottol => <Bottol 
            key={bottol.id} 
            bottol={bottol}
            handleAddToCart={handleAddToCart}
            ></Bottol>)}
            </div>
        </div>
    );
};

Bottol.PropTypes = {

}

export default Bottols;