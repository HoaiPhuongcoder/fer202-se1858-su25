import { useEffect, useState } from "react";
import { Link } from "react-router";
type Student = {
  id: number;
  name: string;
  age: number;
};
const callApi = (): Student[] => {
  return [
    { id: 1, name: "phuong", age: 20 },
    { id: 2, name: "an", age: 20 },
    { id: 2, name: "dang", age: 20 },
  ];
};

function Home() {
  const [name, setName] = useState<Student[]>([]);
  useEffect(() => {
    setName(callApi);
  }, []);

  return (
    <div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <h1>
        {name.map((n) => {
          return <li>{n.name}</li>;
        })}
      </h1>
    </div>
  );
}

export default Home;
