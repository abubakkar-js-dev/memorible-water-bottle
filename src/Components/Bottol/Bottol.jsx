import './Bottol.css'
import PropTypes from 'prop-types';
const Bottol = ({bottol,handleAddToCart}) => {
    const {name,img,price} = bottol;
    // console.log(bottol);
    return (
        <div className='bottole'>
            <h2>Brand: {name}</h2>
            <img src={img} alt="" />
            <h3>Price:  ${price}</h3>
            <button onClick={() => handleAddToCart(bottol)}>Purchese</button>
        </div>
    );
};

Bottol.PropTypes = {
    Bottol: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
}


export default Bottol;