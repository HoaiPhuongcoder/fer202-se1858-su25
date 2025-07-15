import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router";

function MyCard({ id, cardName, cardImage, branch, price }) {
  const navigate = useNavigate();
  const handleButtonDetail = () => {
    navigate(`/SE184137/${id}`);
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        height={200}
        style={{ objectFit: "cover" }}
        variant="top"
        src={cardImage}
      />
      <Card.Body>
        <Card.Title>{cardName}</Card.Title>
        <Card.Text>Branch:{branch}</Card.Text>
        <Card.Text>Price:{price}</Card.Text>
        <Button onClick={handleButtonDetail} variant="primary">
          Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
