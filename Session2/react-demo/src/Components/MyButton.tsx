import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function MyButton() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Button onClick={toggleTheme} variant="primary">
        Toggle Theme
      </Button>
    </>
  );
}

export default MyButton;
