import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";

function UnavailableCards() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);

      const dataUnavailable = response.data.filter((item) => !item.available);
      setData(dataUnavailable.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Card Image</th>
            <th>Card Name</th>
            <th>Branch</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td
                onClick={() => {
                  navigate(`/card/${item.id}`);
                }}
              >
                <img width={100} src={item.cardImage} alt={item.cardName} />
              </td>
              <td>{item.cardName}</td>
              <td>{item.branch}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UnavailableCards;
