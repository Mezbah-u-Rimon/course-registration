import Cards from "./components/Cards/Cards"
import Carts from "./components/Carts/Carts"


function App() {


  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-12 mb-8"> Course Registration </h1>
      <div className="max-w-6xl mx-auto flex">
        <Cards></Cards>
        <Carts></Carts>
      </div>

    </>
  )
}

export default App
