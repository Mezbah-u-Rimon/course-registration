
import PropTypes from 'prop-types'


const Card = ({ card, handleBtnCard }) => {
    const { img, name, credit, price, details } = card;
    return (
        <div className='bg-white rounded-lg p-4 w-[270px] space-y-3'>
            <img src={img} alt="" />
            <h1 className='text-xl font-bold'>{name}</h1>
            <p> {details}</p>
            <div className='flex justify-between'>
                <p> Price : {price} </p>
                <p> Credit : {credit}hr </p>
            </div>
            <button onClick={() => handleBtnCard(card)} className='w-full py-2 bg-blue-500 font-semibold text-white rounded-lg hover:bg-blue-400'> Select
            </button>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleBtnCard: PropTypes.func.isRequired,
}
export default Card;