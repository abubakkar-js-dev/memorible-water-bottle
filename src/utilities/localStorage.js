const getStroredCart = ()=> {
       const storedCartString = localStorage.getItem('cart');
       if(storedCartString){
        return JSON.parse(storedCartString);
       }else{
        return [];
       }
}


const saveCarttoLS = cart =>{
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart',cartStr);
}

const addToLS = (id) =>{
    const cart = getStroredCart();
    cart.push(id);

    //  save to local storage
    saveCarttoLS(cart);
}

const removeToLS = (id) => {
    const storedCart = getStroredCart();

    // remove every cart
    const remaining = storedCart.filter(cartId => cartId !== id);
    saveCarttoLS(remaining);
}

export {addToLS,getStroredCart,removeToLS};