import axios from "axios";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import * as Yup from "yup";

function MyForm() {
  //1. Khai báo, Sử dụng Hooks useFormik()

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      isCheck: false,
    },
    onSubmit: async (values) => {
      alert(JSON.stringify(values));
      await axios.post(
        "https://68391e1f6561b8d882af1857.mockapi.io/api/students",
        values
      );
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Ngu nhập lại"),
    }),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-danger">{formik.errors.email}</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default MyForm;
