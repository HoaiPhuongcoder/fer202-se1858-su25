import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type CardCustomProps = {
  handleShow: () => void;
};
function CardCustom({ handleShow }: CardCustomProps) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i.pinimg.com/736x/4d/a6/ae/4da6aef3610bba37123924a082c83f89.jpg"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button onClick={handleShow} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardCustom;
