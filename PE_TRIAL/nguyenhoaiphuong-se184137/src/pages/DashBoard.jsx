import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { http } from "../apis/http";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

function DashBoard() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const getStudents = async () => {
    try {
      const response = await http.get("studentManagement");
      setData(
        response.data.sort((a, b) => {
          return b.id - a.id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Are you want to delete")) {
        const response = await http.delete(`studentManagement/${id}`);
        alert("delete Success" + response.data);
        setData(data.filter((item) => item.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ margin: 100 }}>
      <Button
        onClick={() => {
          navigate("/create");
        }}
        style={{ marginBottom: 20, float: "right" }}
      >
        Tạo mới Cầu Thủ
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Class</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.class}</td>
              <td>
                <img width={100} src={item.image} alt={item.name} />
              </td>
              <td>
                <Button
                  onClick={() => {
                    navigate(`/update/${item.id}`);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
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

export default DashBoard;
