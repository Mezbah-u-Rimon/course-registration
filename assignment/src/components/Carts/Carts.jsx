import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const Carts = ({ cards }) => {
    return (
        <div className="w-[312px] px-4">
            <div className='bg-white p-6 rounded-lg space-y-6'>
                <h1 className=" text-xl font-bold"> Credit Hour Remaining 7 hr : {cards.length}
                </h1>
                <hr />
                <h2 className='text-xl font-bold'>Course Name</h2>
                {
                    cards.map(cart => <Cart
                        cart={cart}
                        key={cart.id}
                    > </Cart>)
                }
            </div>

        </div>
    );
};

Carts.propTypes = {
    cards: PropTypes.array.isRequired,
}
export default Carts;