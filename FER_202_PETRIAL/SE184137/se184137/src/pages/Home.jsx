import axios from "axios";
import { useEffect, useState } from "react";
import MyCard from "../components/MyCard";

function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_BASE_URL);
      const dataAvailable = response.data.filter((item) => item.available);
      setData(dataAvailable);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <MyCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
