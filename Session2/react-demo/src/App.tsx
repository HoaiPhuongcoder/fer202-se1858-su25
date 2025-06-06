// import axios from "axios";
// import { useEffect, useState } from "react";

import { useReducer } from "react";
import { Button } from "./Components/ui/button";

// import { createContext, useContext, type ReactNode } from "react";

// type Student = {
//   createdAt: number;
//   name: string;
//   avatar: string;
//   email: string;
//   password: string;
//   id: string;
// };

// const apiClient = axios.create({
//   baseURL: "https://68391e1f6561b8d882af1857.mockapi.io/api",
// });

// function App() {
//   const [students, setStudents] = useState<Student[]>([]);

//   const fetchStudent = async () => {
//     try {
//       const response = await apiClient.get<Student[]>("/students");
//       setStudents(response.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchStudent();
//   }, []);
//   return (
//     <div>
//       <ul className="grid grid-cols-3 gap-8">
//         {students.map((student) => (
//           <div key={student.id} className="p-3 rounded-xl border ">
//             <div className="w-full h-60 object-cover rounded-t-xl overflow-hidden">
//               <img
//                 src={student.avatar}
//                 className="w-full object-cover h-60"
//                 alt={student.name}
//               />
//             </div>
//             <div className="mt-1.5">
//               <p className="font-bold text-3xl">{student.name}</p>
//               <p>{student.email}</p>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// 1. Định nghĩa Context
// // ShopeeContext sẽ chứa trực tiếp một string hoặc null
// const ShopeeContext = createContext<string | null>(null);

// // 2. Định nghĩa Props cho Provider
// interface ShopeeProviderProps {
//   children: ReactNode;
// }

// // 3. ShopeeProvider cung cấp giá trị string trực tiếp
// const ShopeeProvider = ({ children }: ShopeeProviderProps) => {
//   const lightStick = "J97 LT";
//   return (
//     <ShopeeContext.Provider value={lightStick}>
//       {children}
//     </ShopeeContext.Provider>
//   );
// };

// // 4. Component DomDom sử dụng Context
// const DomDom = () => {
//   // Nhận trực tiếp giá trị string từ context
//   const lightStick = useContext(ShopeeContext);

//   // Xử lý trường hợp context là null (nếu DomDom không nằm trong Provider)
//   if (lightStick === null) {
//     // Bạn có thể ném lỗi, trả về null, hoặc hiển thị một fallback UI
//     return <div>Error: lightStick context is not available.</div>;
//   }

//   return <div>{lightStick}</div>;
// };

// // 5. App component bọc DomDom trong ShopeeProvider
// function App() {
//   return (
//     <div>
//       <ShopeeProvider>
//         <DomDom />
//       </ShopeeProvider>
//     </div>
//   );
// }

// export default App;

interface LoginType {
  isLogin: boolean;
  name: string;
  role: string;
}
interface ActionType {
  type: string;
  payload?: string;
}

const initialValue: LoginType = {
  isLogin: false,
  name: "J97",
  role: "guest",
};

const reducer = (state: LoginType, action: ActionType) => {
  switch (action.type) {
    case "Login":
      return { isLogin: true, name: "Thiên An", role: "guest" } as LoginType;

    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>{state.name}</p>
      <div className="flex">
        <Button onClick={() => dispatch({ type: "Login" })}>Login</Button>
        <Button>LogOut</Button>
      </div>
    </div>
  );
}

export default App;
