import axios from "axios";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { boolean, number, object, string } from "yup";
function Add() {
  const schema = object({
    cardName: string()
      .required("Card name is required")
      .min(2, "Card name must be at least 2 characters"),
    cardImage: string()
      .required("Card image URL is required")
      .url("Must be a valid URL"),
    price: number().required("Price is required"),
    available: boolean(),
    branch: string().required("Branch is required").oneOf(
      ["INTEL", "AMD", "NVIDIA"], // Các giá trị hợp lệ cho 'branch'
      "Branch must be one of: INTEL, AMD, or NVIDIA." // Thông báo lỗi tùy chỉnh
    ),
  });

  const formik = useFormik({
    initialValues: {
      cardName: "",
      cardImage: "",
      price: "",
      available: false,
      branch: "NVIDIA",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        await axios.post(import.meta.env.VITE_BASE_URL, values);
        alert("Card added successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Error adding card:", error);
        alert("Failed to add card. Please try again.");
      }
    },
  });
  return (
    <div>
      <h1 className="text-center">Add New Item</h1>
      <div className="container m-5">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Card Name</Form.Label>
            <Form.Control
              type="text"
              name="cardName"
              value={formik.values.cardName}
              onChange={formik.handleChange}
              placeholder="Enter card name"
            />
            {formik.errors.cardName && (
              <Form.Text className="text-danger">
                {formik.errors.cardName}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Card Image</Form.Label>
            <Form.Control
              type="text"
              name="cardImage"
              value={formik.values.cardImage}
              onChange={formik.handleChange}
              placeholder="Enter card image URL"
            />
            {formik.errors.cardImage && (
              <Form.Text className="text-danger">
                {formik.errors.cardImage}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              placeholder="Enter card price"
              value={formik.values.price}
              onChange={formik.handleChange}
            />
            {formik.errors.price && (
              <Form.Text className="text-danger">
                {formik.errors.price}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              name="available"
              checked={formik.values.available}
              onChange={formik.handleChange}
              type="checkbox"
              label="Available"
            />
            {formik.errors.available && (
              <Form.Text className="text-danger">
                {formik.errors.available}
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSelect">
            <Form.Select
              className="mb-3"
              aria-label="Default select example"
              name="branch"
              value={formik.values.branch}
              onChange={formik.handleChange}
            >
              <option value="NVIDIA">NVIDIA</option>
              <option value="AMD">AMD</option>
              <option value="INTEL">INTEL</option>
            </Form.Select>
            {formik.errors.branch && (
              <Form.Text className="text-danger">
                {formik.errors.branch}
              </Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Card
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Add;
