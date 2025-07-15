import { useEffect, useState } from "react";
import { http } from "../apis/http";
import MyCard from "../components/MyCard";

function Home() {
  const [data, setData] = useState([]);
  const getStudents = async () => {
    try {
      const response = await http.get("studentManagement");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div className="col">
            <MyCard item={item} key={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
