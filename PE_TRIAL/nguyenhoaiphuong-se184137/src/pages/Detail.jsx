import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { http } from "../apis/http";
import MyCard from "../components/MyCard";

function Detail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const getStudent = async () => {
    try {
      const response = await http.get(`studentManagement/${id}`);
      setItem(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);
  if (item === null) {
    return <h1>Loadings</h1>;
  }
  return (
    <div className="container">
      <MyCard item={item} />
    </div>
  );
}

export default Detail;
