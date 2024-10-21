import './Cart.css'
import PropTypes from 'prop-types';

const Cart = ({cart,handleRemoveCart}) => {
    return (
        <div>
            <h3>Carts: {cart.length}</h3>
            <div className="cart-container">
            {cart.map((cart,idx) => {
               return <div key={idx}>
                    <img src={cart.img}></img>
                    <button onClick={() => handleRemoveCart(cart.id)}>Remove</button>
                </div>
            })}
            </div>
        </div>
    );
};

Cart.PropTypes ={
    cart: PropTypes.array.isRequired,
    handleRemoveCart: PropTypes.func.isRequired,
}

export default Cart;