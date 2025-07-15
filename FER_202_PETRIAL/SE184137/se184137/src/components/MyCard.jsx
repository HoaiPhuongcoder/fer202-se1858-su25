import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router";

function MyCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="col-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          onClick={() => {
            navigate(`/card/${item.id}`);
          }}
          style={{ width: "100%", height: 150, objectFit: "cover" }}
          variant="top"
          src={item.cardImage}
        />
        <Card.Body>
          <Card.Title>{item.cardName}</Card.Title>
          <Card.Text>Branch: {item.branch}</Card.Text>
          <Card.Text>Price: {item.price}</Card.Text>
          <Link to={`/card/${item.id}`}>
            <Button variant="primary">View Detail</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MyCard;
