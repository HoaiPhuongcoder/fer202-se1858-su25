import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

function DetailCard() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const getData = useCallback(async () => {
    try {
      const response = await axios.get(
        import.meta.env.VITE_BASE_URL + `/${id}`
      );
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);
  const usdFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body text-center">
              <h2 className="card-title">{item.cardName}</h2>
              <img
                width={200}
                src={item.cardImage}
                alt={item.cardName}
                className="img-fluid mb-3"
              />
              <p className="card-text">
                <strong>Branch:</strong> {item.branch}
              </p>
              <p className="card-text">
                <strong>Available:</strong> {item.available}
              </p>
              <p className="card-text">
                <strong>Price:</strong>{" "}
                {usdFormatter.format(Number(item.price))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
