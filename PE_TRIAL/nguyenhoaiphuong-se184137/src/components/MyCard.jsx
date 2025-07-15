import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router";

function MyCard({ item }) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.dateofbirth}</Card.Text>
        <Card.Text>{item.gender}</Card.Text>
        <Card.Text>{item.class}</Card.Text>
        <Button
          onClick={() => {
            navigate(`/students/${item.id}`);
          }}
          variant="primary"
        >
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
