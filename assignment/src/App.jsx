import { useState } from "react"
import Cards from "./components/Cards/Cards"
import Carts from "./components/Carts/Carts"


function App() {
  const [cards, setCards] = useState([]);
  const handleBtnCard = (card) => {

    setCards([...cards, card]);
  }


  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-12 mb-8"> Course Registration </h1>
      <div className="max-w-7xl mx-auto flex">
        <Cards handleBtnCard={handleBtnCard}></Cards>
        <Carts cards={cards}></Carts>
      </div>

    </>
  )
}

export default App
