import { useEffect } from "react";
import { http } from "../apis/http";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFormik } from "formik";
import { useParams } from "react-router";

function Update() {
  const { id } = useParams();

  const getStudents = async () => {
    try {
      const response = await http.get(`studentManagement/${id}`);
      formik.setValues(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      image: "",
    },
    onSubmit: async (value) => {
      const response = await http.put(`studentManagement/${id}`, {
        name: value.name,
        image: value.image,
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

export default Update;
