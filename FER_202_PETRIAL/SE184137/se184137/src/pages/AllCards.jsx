import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router";

function AllCards() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      setData(response.data.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you accept to Delete ")) {
        await axios.delete(import.meta.env.VITE_BASE_URL + "/" + id);
        setData((data) => data.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container mt-5">
      <Button onClick={() => navigate("/SE184137/Add")}>Create New Card</Button>
      <Table className="mt-4" striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Card Image</th>
            <th>Card Name</th>
            <th>Branch</th>
            <th>Price</th>
            <th>Actions</th>
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
              <td>
                <Button onClick={() => navigate(`/SE184137/Update/${item.id}`)}>
                  Edit
                </Button>
                <Button
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AllCards;
