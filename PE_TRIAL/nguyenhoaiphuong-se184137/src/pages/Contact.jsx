import { useFormik } from "formik";
import { http } from "../apis/http";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      dateofbirth: "",
      gender: false,
      class: "",
      image: "",
      feedback: "",
    },
    onSubmit: async (value) => {
      const response = await http.post(`studentManagement`, {
        // Định Nghĩa trong http.js
        name: value.name,
        dateofbirth: value.dateofbirth,
        gender: value.gender,
        class: value.class,
        image: value.image,
        feedback: value.feedback,
      });
      alert("Update Success " + response.data);
    },
  });
  return (
    <div className="container">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Image</Form.Label>
          <Form.Control
            name="image"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
          <Form.Text>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
