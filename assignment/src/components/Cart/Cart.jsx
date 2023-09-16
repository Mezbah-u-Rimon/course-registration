import PropTypes from 'prop-types'

const Cart = ({ cart, idx }) => {

    return (
        <div>
            <p>{idx + 1} {cart.name}</p>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object.isRequired,
    idx: PropTypes.number.isRequired,
}
export default Cart;