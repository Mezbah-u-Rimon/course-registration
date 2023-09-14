import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";


const Cards = () => {
    const [allCards, setAllCards] = useState([]);

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setAllCards(data))
    })
    return (
        <div className="w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {
                    allCards.map(card => <Card
                        card={card}
                        key={card.id}
                    > </Card>)
                }
            </div>
        </div>
    );
};

export default Cards;