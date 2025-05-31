import axios from "axios";
import { useEffect, useState } from "react";

type Student = {
  createdAt: number;
  name: string;
  avatar: string;
  email: string;
  password: string;
  id: string;
};

const apiClient = axios.create({
  baseURL: "https://68391e1f6561b8d882af1857.mockapi.io/api",
});

function App() {
  const [students, setStudents] = useState<Student[]>([]);

  const fetchStudent = async () => {
    try {
      const response = await apiClient.get<Student[]>("/students");
      setStudents(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  return (
    <div>
      <ul className="grid grid-cols-3 gap-8">
        {students.map((student) => (
          <div key={student.id} className="p-3 rounded-xl border ">
            <div className="w-full h-60 object-cover rounded-t-xl overflow-hidden">
              <img
                src={student.avatar}
                className="w-full object-cover h-60"
                alt={student.name}
              />
            </div>
            <div className="mt-1.5">
              <p className="font-bold text-3xl">{student.name}</p>
              <p>{student.email}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
