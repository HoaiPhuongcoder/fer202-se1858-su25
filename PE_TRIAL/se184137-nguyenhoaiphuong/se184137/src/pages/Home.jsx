import { useEffect, useState } from "react";
import { http } from "../apis/http";
import MyCard from "../components/MyCard";

function Home() {
  const [cards, setCards] = useState([]);
  const getCard = async () => {
    try {
      const response = await http.get("SE184137");
      const cards = response.data.filter((card) => card.available === true);
      setCards(cards);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div style={{ margin: 80 }}>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div className="col-3">
              <MyCard
                id={card.id}
                key={card.id}
                cardImage={card.cardImage}
                cardName={card.cardName}
                branch={card.branch}
                price={card.price}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
