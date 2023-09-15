import { useState } from "react"
import Cards from "./components/Cards/Cards"
import Carts from "./components/Carts/Carts"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cards, setCards] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleBtnCard = (card) => {
    const isExist = cards.find(item => item.id === card.id);
    let cost = card.price;
    let totalCreditHour = card.credit;

    if (isExist) {
      toast.success('This course already booked ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    else {
      cards.forEach(item => {
        cost += item.price;
        totalCreditHour += item.credit;
      })

      if (totalCreditHour > 20) {
        toast.success('your time is finished ', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      else {
        setCards([...cards, card]);
        setTotalCost(cost);
        setTotalCredit(totalCreditHour)
      }

    }

  }


  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-12 mb-8"> Course Registration </h1>
      <ToastContainer></ToastContainer>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">

        <Cards handleBtnCard={handleBtnCard}></Cards>

        <Carts cards={cards} totalCredit={totalCredit} totalCost={totalCost}></Carts>
      </div>

    </>
  )
}

export default App
