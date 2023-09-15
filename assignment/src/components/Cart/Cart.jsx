
import PropTypes from 'prop-types'

const Cart = ({ cart }) => {
    console.log(cart);
    return (
        <div>
            <p>{cart.id} {cart.name}</p>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
}
export default Cart;