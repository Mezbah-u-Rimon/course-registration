import PropTypes from 'prop-types'
import Cart from '../Cart/Cart';

const Carts = ({ cards, totalCost, totalCredit, totalHourRemaining }) => {
    return (
        <div className="w-[312px] px-4">
            <div className='bg-white p-6 rounded-lg space-y-6'>
                <h1 className=" text-xl font-bold text-blue-500"> Credit Hour Remaining : {totalHourRemaining} hr
                </h1>
                <hr />
                <h2 className='text-xl font-bold'>Course Name</h2>
                {
                    cards.map((cart, idx) => <Cart
                        idx={idx}
                        cart={cart}
                        key={cart.id}
                        totalCost={totalCost}
                    > </Cart>)
                }
                <hr />
                <h2 className='font-semibold my-4'>Total Credit Hour : {totalCredit} </h2>
                <hr />
                <h2 className='font-semibold my-4'>Total Price : {totalCost} USD</h2>
            </div>

        </div>
    );
};

Carts.propTypes = {
    cards: PropTypes.array.isRequired,
    totalCredit: PropTypes.number.isRequired,
    totalCost: PropTypes.number.isRequired,
    totalHourRemaining: PropTypes.number.isRequired,

}
export default Carts;