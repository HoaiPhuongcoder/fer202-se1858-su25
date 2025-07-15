import { useEffect, useState } from "react";
import { http } from "../apis/http";
import { useParams } from "react-router";

function CardDetail() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const getCard = async () => {
    try {
      const response = await http.get(`SE184137/${id}`);
      setCard(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="container">
      <img width={500} src={card.cardImage} alt={card.cardName} />
      <h2>Name: {card.cardName}</h2>
      <p>Branch{card.branch}</p>
      <p>Price: {card.price}</p>
    </div>
  );
}

export default CardDetail;
